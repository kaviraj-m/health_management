import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsNumber, IsOptional } from 'class-validator';
import { Transform, Type } from 'class-transformer';

export enum TimeRange {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
}

export enum MetricType {
  BLOOD_PRESSURE = 'blood_pressure',
  HEART_RATE = 'heart_rate',
  BLOOD_GLUCOSE = 'blood_glucose',
  ALL = 'all',
}

export class HealthAnalyticsQueryDto {
  @ApiProperty({ enum: TimeRange, example: TimeRange.WEEKLY, required: false })
  @IsEnum(TimeRange)
  @IsOptional()
  timeRange?: TimeRange = TimeRange.WEEKLY;

  @ApiProperty({ enum: MetricType, example: MetricType.ALL, required: false })
  @IsEnum(MetricType)
  @IsOptional()
  metricType?: MetricType = MetricType.ALL;

  @ApiProperty({ example: '2023-01-01', required: false })
  @IsDateString()
  @IsOptional()
  startDate?: string;

  @ApiProperty({ example: '2023-12-31', required: false })
  @IsDateString()
  @IsOptional()
  endDate?: string;
}

export class MetricPoint {
  @ApiProperty()
  date: string;

  @ApiProperty()
  value: number | string | null;
}

export class HealthMetricSeries {
  @ApiProperty()
  metric: string;

  @ApiProperty({ type: [MetricPoint] })
  data: MetricPoint[];

  @ApiProperty({ required: false })
  average?: number;

  @ApiProperty({ required: false })
  min?: number;

  @ApiProperty({ required: false })
  max?: number;

  @ApiProperty({ required: false })
  trend?: 'increasing' | 'decreasing' | 'stable';
}

export class HealthDashboardResponse {
  @ApiProperty({ type: [HealthMetricSeries] })
  series: HealthMetricSeries[];

  @ApiProperty()
  timeRange: TimeRange;

  @ApiProperty({ required: false })
  startDate?: string;

  @ApiProperty({ required: false })
  endDate?: string;
} 