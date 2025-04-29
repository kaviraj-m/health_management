import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { HealthAnalyticsQueryDto, HealthDashboardResponse, HealthMetricSeries, MetricPoint, MetricType, TimeRange } from './dto/dashboard.dto';

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  async findPatientByUserId(userId: number) {
    const patient = await this.prisma.patient.findUnique({
      where: { userId },
    });

    if (!patient) {
      throw new NotFoundException(`Patient profile not found for user ID ${userId}`);
    }

    return patient;
  }

  async getHealthAnalytics(patientId: number, query: HealthAnalyticsQueryDto): Promise<HealthDashboardResponse> {
    // Check if patient exists
    const patient = await this.prisma.patient.findUnique({
      where: { id: patientId },
    });

    if (!patient) {
      throw new NotFoundException(`Patient with ID ${patientId} not found`);
    }

    // Set up time range
    const { timeRange = TimeRange.WEEKLY, metricType = MetricType.ALL, startDate, endDate } = query;
    
    const dateFilter: any = {};
    
    if (startDate && endDate) {
      dateFilter.gte = new Date(startDate);
      dateFilter.lte = new Date(endDate);
    } else {
      const today = new Date();
      
      // Default date range based on timeRange
      switch (timeRange) {
        case TimeRange.DAILY:
          dateFilter.gte = new Date(today.setDate(today.getDate() - 1));
          break;
        case TimeRange.WEEKLY:
          dateFilter.gte = new Date(today.setDate(today.getDate() - 7));
          break;
        case TimeRange.MONTHLY:
          dateFilter.gte = new Date(today.setMonth(today.getMonth() - 1));
          break;
        case TimeRange.YEARLY:
          dateFilter.gte = new Date(today.setFullYear(today.getFullYear() - 1));
          break;
      }
    }

    // Fetch health records within the specified date range
    const healthRecords = await this.prisma.healthRecord.findMany({
      where: {
        patientId,
        date: dateFilter,
      },
      orderBy: {
        date: 'asc',
      },
    });

    // Return empty response if no records found
    if (healthRecords.length === 0) {
      return {
        series: [],
        timeRange,
        startDate: dateFilter.gte?.toISOString(),
        endDate: dateFilter.lte?.toISOString() || new Date().toISOString(),
      };
    }

    // Prepare data series based on metric type
    const series: HealthMetricSeries[] = [];
    
    if (metricType === MetricType.ALL || metricType === MetricType.BLOOD_PRESSURE) {
      const bloodPressureData = healthRecords
        .filter(record => record.bloodPressure)
        .map(record => ({
          date: record.date.toISOString(),
          value: record.bloodPressure,
        }));

      if (bloodPressureData.length > 0) {
        series.push(this.calculateMetricStats('Blood Pressure', bloodPressureData));
      }
    }

    if (metricType === MetricType.ALL || metricType === MetricType.HEART_RATE) {
      const heartRateData = healthRecords
        .filter(record => record.heartRate !== null)
        .map(record => ({
          date: record.date.toISOString(),
          value: record.heartRate,
        }));

      if (heartRateData.length > 0) {
        series.push(this.calculateMetricStats('Heart Rate', heartRateData));
      }
    }

    if (metricType === MetricType.ALL || metricType === MetricType.BLOOD_GLUCOSE) {
      const bloodGlucoseData = healthRecords
        .filter(record => record.bloodGlucose !== null)
        .map(record => ({
          date: record.date.toISOString(),
          value: record.bloodGlucose,
        }));

      if (bloodGlucoseData.length > 0) {
        series.push(this.calculateMetricStats('Blood Glucose', bloodGlucoseData));
      }
    }

    return {
      series,
      timeRange,
      startDate: dateFilter.gte?.toISOString(),
      endDate: dateFilter.lte?.toISOString() || new Date().toISOString(),
    };
  }

  private calculateMetricStats(metricName: string, data: MetricPoint[]): HealthMetricSeries {
    // For blood pressure, we need special handling as it's a string like "120/80"
    if (metricName === 'Blood Pressure') {
      return {
        metric: metricName,
        data,
        // No direct statistical analysis for blood pressure strings
      };
    }

    // For numeric metrics like heart rate and blood glucose
    const numericValues = data.map(point => Number(point.value));
    
    const avg = this.average(numericValues);
    const min = Math.min(...numericValues);
    const max = Math.max(...numericValues);
    
    // Determine trend by looking at first half vs second half of the data
    const halfPoint = Math.floor(numericValues.length / 2);
    const firstHalfAvg = this.average(numericValues.slice(0, halfPoint));
    const secondHalfAvg = this.average(numericValues.slice(halfPoint));
    
    let trend: 'increasing' | 'decreasing' | 'stable';
    
    const trendThreshold = 0.05; // 5% change to detect a trend
    const percentChange = Math.abs((secondHalfAvg - firstHalfAvg) / firstHalfAvg);
    
    if (percentChange < trendThreshold) {
      trend = 'stable';
    } else if (secondHalfAvg > firstHalfAvg) {
      trend = 'increasing';
    } else {
      trend = 'decreasing';
    }

    return {
      metric: metricName,
      data,
      average: avg,
      min,
      max,
      trend,
    };
  }

  private average(numbers: number[]): number {
    return numbers.reduce((a, b) => a + b, 0) / numbers.length;
  }

  async getAppointmentAnalytics(patientId: number): Promise<any> {
    // Check if patient exists
    const patient = await this.prisma.patient.findUnique({
      where: { id: patientId },
    });

    if (!patient) {
      throw new NotFoundException(`Patient with ID ${patientId} not found`);
    }

    // Get appointment statistics
    const totalAppointments = await this.prisma.appointment.count({
      where: { patientId },
    });

    const appointmentsByStatus = await this.prisma.appointment.groupBy({
      by: ['status'],
      where: { patientId },
      _count: true,
    });

    const upcomingAppointments = await this.prisma.appointment.count({
      where: {
        patientId,
        date: { gte: new Date() },
        status: { in: ['CONFIRMED', 'PENDING'] },
      },
    });

    const appointmentsByMonth = await this.getAppointmentsByMonth(patientId);

    return {
      total: totalAppointments,
      byStatus: appointmentsByStatus.map(item => ({
        status: item.status,
        count: item._count,
      })),
      upcoming: upcomingAppointments,
      byMonth: appointmentsByMonth,
    };
  }

  private async getAppointmentsByMonth(patientId: number): Promise<any[]> {
    const startOfYear = new Date();
    startOfYear.setMonth(0, 1);
    startOfYear.setHours(0, 0, 0, 0);

    const appointments = await this.prisma.appointment.findMany({
      where: {
        patientId,
        date: { gte: startOfYear },
      },
      select: {
        date: true,
      },
    });

    // Create a map of month to appointment count
    const monthMap = new Map<number, number>();
    for (let i = 0; i < 12; i++) {
      monthMap.set(i, 0);
    }

    appointments.forEach(appointment => {
      const month = appointment.date.getMonth();
      const currentCount = monthMap.get(month) || 0;
      monthMap.set(month, currentCount + 1);
    });

    // Format the data for the response
    return Array.from(monthMap).map(([month, count]) => ({
      month: this.getMonthName(month),
      count,
    }));
  }

  private getMonthName(month: number): string {
    return [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ][month];
  }

  async getMedicationAdherenceAnalytics(patientId: number): Promise<any> {
    // Check if patient exists
    const patient = await this.prisma.patient.findUnique({
      where: { id: patientId },
    });

    if (!patient) {
      throw new NotFoundException(`Patient with ID ${patientId} not found`);
    }

    // In a real application, you would have a table tracking medication consumption
    // For now, we'll generate some dummy data for illustration
    const medications = await this.prisma.medicationReminder.findMany({
      where: { patientId },
    });

    const adherenceData = medications.map(medication => {
      // Random adherence rate between 70% and 100%
      const adherenceRate = 70 + Math.floor(Math.random() * 30);
      
      return {
        medication: medication.medication,
        adherenceRate: adherenceRate,
        dosage: medication.dosage,
        timesPerDay: medication.time.length,
        startDate: medication.startDate,
        endDate: medication.endDate,
      };
    });

    const overallAdherence = adherenceData.length > 0
      ? adherenceData.reduce((sum, item) => sum + item.adherenceRate, 0) / adherenceData.length
      : 0;

    return {
      medications: adherenceData,
      overallAdherence,
    };
  }
} 