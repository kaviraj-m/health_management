import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/dashboard/Sidebar";
import HealthMetricCard from "@/components/dashboard/HealthMetricCard";
import HealthChart from "@/components/dashboard/HealthChart";
import AppointmentCard from "@/components/dashboard/AppointmentCard";
import { Bell, Heart, Droplet, Activity, Thermometer, Plus, ArrowRight, MessageSquare, Calendar } from "lucide-react";
import { dashboardApi, STORAGE_KEYS, authApi, patientsApi, HealthAnalyticsQuery } from "@/lib/api";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Time range options for the dashboard
const timeRangeOptions = [
  { value: 'daily', label: 'Daily' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'monthly', label: 'Monthly' },
  { value: 'yearly', label: 'Yearly' }
];

export default function PatientDashboard() {
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userData, setUserData] = useState<any>(null);
  const [healthData, setHealthData] = useState<any>(null);
  const [appointmentData, setAppointmentData] = useState<any>(null);
  const [medicationData, setMedicationData] = useState<any>(null);
  const [timeRange, setTimeRange] = useState<HealthAnalyticsQuery['timeRange']>('weekly');
  const [metricType, setMetricType] = useState<HealthAnalyticsQuery['metricType']>('all');
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Fetch dashboard data with selected filters
  const fetchDashboardData = async (options?: { 
    refreshMetricsOnly?: boolean, 
    newTimeRange?: HealthAnalyticsQuery['timeRange'],
    newMetricType?: HealthAnalyticsQuery['metricType']
  }) => {
    const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const refreshingMetricsOnly = options?.refreshMetricsOnly === true;
      
      if (refreshingMetricsOnly) {
        setIsRefreshing(true);
      } else {
        setLoading(true);
      }
      setError(null);
      
      // Only fetch user data if we're doing a full refresh
      if (!refreshingMetricsOnly) {
        // Get user info
        const userInfo = await authApi.getCurrentUser(token);
        setUserData(userInfo.user);
        
        // Get patient profile
        const profileInfo = await patientsApi.getProfile(token);
        
        // Get appointment analytics
        const appointmentAnalytics = await dashboardApi.getMyAppointmentAnalytics(token);
        setAppointmentData(appointmentAnalytics);
        
        // Get medication adherence
        const medicationAdherence = await dashboardApi.getMyMedicationAdherence(token);
        setMedicationData(medicationAdherence);
      }
      
      // Always fetch health analytics with current or new timeRange
      const healthAnalytics = await dashboardApi.getMyHealthAnalytics(token, {
        timeRange: options?.newTimeRange || timeRange,
        metricType: options?.newMetricType || metricType
      });
      setHealthData(healthAnalytics);
      
      // Update state values if new ones were provided
      if (options?.newTimeRange) {
        setTimeRange(options.newTimeRange);
      }
      if (options?.newMetricType) {
        setMetricType(options.newMetricType);
      }
    } catch (err) {
      console.error('Error fetching dashboard data:', err);
      setError('Failed to load dashboard data. Please try again later.');
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  // Initial data fetch
  useEffect(() => {
    fetchDashboardData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.USER_DATA);
    navigate('/login');
  };

  // Time range change handler
  const handleTimeRangeChange = (newTimeRange: string) => {
    fetchDashboardData({ 
      refreshMetricsOnly: true, 
      newTimeRange: newTimeRange as HealthAnalyticsQuery['timeRange'] 
    });
  };

  // Metric type change handler
  const handleMetricTypeChange = (newMetricType: string) => {
    fetchDashboardData({ 
      refreshMetricsOnly: true, 
      newMetricType: newMetricType as HealthAnalyticsQuery['metricType'] 
    });
  };

  // Helper to find the latest value of a specific metric
  const getLatestMetricValue = (metricName: string) => {
    if (!healthData || !healthData.series) return { value: '--', trend: 'stable' };
    
    const metric = healthData.series.find((s: any) => s.metric === metricName);
    if (!metric || !metric.data || metric.data.length === 0) {
      return { value: '--', trend: 'stable' };
    }
    
    // Get the most recent data point
    const latestPoint = metric.data[metric.data.length - 1];
    return { 
      value: latestPoint.value, 
      trend: metric.trend || 'stable'
    };
  };
  
  // Helper to determine status based on metric value
  const determineStatus = (metricName: string, value: any): "normal" | "warning" | "critical" => {
    if (value === '--' || value === undefined || value === null) return 'normal';
    
    // Blood pressure thresholds (based on systolic/diastolic)
    if (metricName === 'Blood Pressure') {
      if (typeof value !== 'string') return 'normal';
      const [systolic, diastolic] = value.split('/').map(Number);
      
      if (systolic >= 140 || diastolic >= 90) return 'critical';
      if (systolic >= 130 || diastolic >= 80) return 'warning';
      return 'normal';
    }
    
    // Heart rate thresholds
    if (metricName === 'Heart Rate') {
      const rate = Number(value);
      if (rate >= 100 || rate < 50) return 'warning';
      if (rate >= 120 || rate < 40) return 'critical';
      return 'normal';
    }
    
    // Blood glucose thresholds (mg/dL)
    if (metricName === 'Blood Glucose') {
      const glucose = Number(value);
      if (glucose >= 180 || glucose < 70) return 'critical';
      if (glucose >= 140 || glucose < 80) return 'warning';
      return 'normal';
    }
    
    // Medication adherence
    if (metricName === 'Medication') {
      const adherence = Number(value.replace('%', ''));
      if (adherence < 70) return 'critical';
      if (adherence < 85) return 'warning';
      return 'normal';
    }
    
    return 'normal';
  };
  
  // Format upcoming appointments for display
  const getUpcomingAppointments = () => {
    if (!userData || !userData.profile) return [];
    
    const userFullName = `${userData.profile.firstName} ${userData.profile.lastName}`;
    
    return (appointmentData?.byStatus || [])
      .filter((item: any) => item.status === 'CONFIRMED' || item.status === 'PENDING')
      .slice(0, 2)
      .map((appt: any, index: number) => ({
        doctorName: `Dr. ${index === 0 ? 'Sarah Johnson' : 'Michael Chen'}`,
        specialty: index === 0 ? 'Cardiologist' : 'Endocrinologist',
        date: new Date().toLocaleDateString(),
        time: index === 0 ? '10:30 AM' : '2:00 PM',
        isUpcoming: true
      }));
  };

  // If still loading, show a loading indicator
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-health-blue mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  // If there was an error, show error message
  if (error) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Something went wrong</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <Button 
            onClick={() => window.location.reload()}
            className="bg-health-blue hover:bg-health-blue-dark"
          >
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  // Blood pressure data
  const bloodPressureMetric = getLatestMetricValue('Blood Pressure');
  const bloodPressureSeries = healthData?.series?.find((s: any) => s.metric === 'Blood Pressure')?.data || [];
  
  // Heart rate data
  const heartRateMetric = getLatestMetricValue('Heart Rate');
  const heartRateSeries = healthData?.series?.find((s: any) => s.metric === 'Heart Rate')?.data || [];
  
  // Blood glucose data
  const bloodGlucoseMetric = getLatestMetricValue('Blood Glucose');
  const bloodGlucoseSeries = healthData?.series?.find((s: any) => s.metric === 'Blood Glucose')?.data || [];
  
  // Format chart data
  const formatChartData = (series: any[]) => {
    return series.map((point) => ({
      x: new Date(point.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      y: typeof point.value === 'string' ? 
        parseInt(point.value.split('/')[0]) : // For blood pressure, use the systolic value
        point.value
    }));
  };

  // Get time period label
  const getTimePeriodLabel = () => {
    switch(timeRange) {
      case 'daily': return 'Last 24 hours';
      case 'weekly': return 'Last 7 days';
      case 'monthly': return 'Last 30 days';
      case 'yearly': return 'Last 12 months';
      default: return 'Last 7 days';
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar userType="patient" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top header */}
        <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-gray-800">Patient Dashboard</h1>
            <p className="text-sm text-gray-500">
              Welcome back, {userData?.profile?.firstName || 'Patient'}
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-health-red rounded-full"></span>
            </Button>
            
            <Button 
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="hidden md:inline-flex"
            >
              Sign Out
            </Button>
          </div>
        </header>
        
        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Left column: Health metrics and charts */}
            <div className="md:col-span-8 space-y-6">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-medium text-gray-800">Health Metrics</h2>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-health-blue"
                    onClick={() => navigate('/health-records')}
                  >
                    View All
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <HealthMetricCard 
                    title="Blood Pressure" 
                    value={bloodPressureMetric.value || "--"} 
                    status={determineStatus('Blood Pressure', bloodPressureMetric.value)} 
                    trend={bloodPressureMetric.trend}
                    icon={<Droplet className="h-5 w-5" />} 
                    unit="mmHg" 
                  />
                  
                  <HealthMetricCard 
                    title="Heart Rate" 
                    value={heartRateMetric.value?.toString() || "--"} 
                    status={determineStatus('Heart Rate', heartRateMetric.value)} 
                    trend={heartRateMetric.trend}
                    icon={<Heart className="h-5 w-5" />} 
                    unit="bpm" 
                  />
                  
                  <HealthMetricCard 
                    title="Blood Glucose" 
                    value={bloodGlucoseMetric.value?.toString() || "--"} 
                    status={determineStatus('Blood Glucose', bloodGlucoseMetric.value)} 
                    trend={bloodGlucoseMetric.trend}
                    icon={<Activity className="h-5 w-5" />} 
                    unit="mg/dL" 
                  />
                  
                  <HealthMetricCard 
                    title="Medication" 
                    value={medicationData?.overallAdherence ? 
                      `${Math.round(medicationData.overallAdherence)}%` : "--"} 
                    status={determineStatus('Medication', medicationData?.overallAdherence ? 
                      `${Math.round(medicationData.overallAdherence)}%` : "--")} 
                    trend="stable"
                    icon={<Thermometer className="h-5 w-5" />} 
                    unit="adherence" 
                  />
                </div>
              </div>
              
              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                  <div className="flex items-center">
                    <h2 className="text-lg font-medium text-gray-800 mr-3">Health Trends</h2>
                    <div className="text-sm text-gray-500 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {getTimePeriodLabel()}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Select
                      value={timeRange}
                      onValueChange={handleTimeRangeChange}
                    >
                      <SelectTrigger className="w-[140px] h-8">
                        <SelectValue placeholder="Time Range" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeRangeOptions.map(option => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                  <Button 
                    variant="ghost" 
                    size="sm" 
                      className="text-health-blue whitespace-nowrap"
                      onClick={() => navigate('/health-records')}
                  >
                    View All
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
                </div>
                
                {isRefreshing && (
                  <div className="text-sm text-gray-500 flex items-center mb-2">
                    <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-health-blue mr-2"></div>
                    Updating data...
                  </div>
                )}
                
                <Tabs defaultValue="charts" className="mt-2">
                  <TabsList className="mb-4">
                    <TabsTrigger value="charts">Charts</TabsTrigger>
                    <TabsTrigger value="metrics">All Metrics</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="charts">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <HealthChart 
                    title="Blood Pressure" 
                        data={formatChartData(bloodPressureSeries)} 
                    unit="mmHg" 
                    color="#2C6BED" 
                  />
                  
                  <HealthChart 
                    title="Blood Glucose" 
                        data={formatChartData(bloodGlucoseSeries)} 
                    unit="mg/dL" 
                    color="#4CAF50" 
                  />
                </div>
                  </TabsContent>
                  
                  <TabsContent value="metrics">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <HealthChart 
                        title="Blood Pressure" 
                        data={formatChartData(bloodPressureSeries)} 
                        unit="mmHg" 
                        color="#2C6BED" 
                      />
                      
                      <HealthChart 
                        title="Heart Rate" 
                        data={formatChartData(heartRateSeries)} 
                        unit="bpm" 
                        color="#FF4759" 
                      />
                      
                      <HealthChart 
                        title="Blood Glucose" 
                        data={formatChartData(bloodGlucoseSeries)} 
                        unit="mg/dL" 
                        color="#4CAF50" 
                      />
                      
                      {medicationData?.medications?.length > 0 && (
                        <div className="bg-white rounded-lg border border-gray-200 p-4">
                          <h3 className="text-md font-medium mb-3">Medication Adherence</h3>
                          <div className="space-y-3">
                            {medicationData.medications.map((med: any, index: number) => (
                              <div key={index} className="flex justify-between items-center">
                                <div>
                                  <p className="font-medium">{med.medication}</p>
                                  <p className="text-sm text-gray-500">{med.dosage}</p>
                                </div>
                                <div className="text-right">
                                  <p className={`font-medium ${med.adherenceRate >= 85 ? 'text-health-green' : 
                                    med.adherenceRate >= 70 ? 'text-health-orange' : 'text-health-red'}`}>
                                    {med.adherenceRate}%
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            
            {/* Right column: Appointments and quick actions */}
            <div className="md:col-span-4 space-y-6">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-medium text-gray-800">Appointments</h2>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-health-blue"
                    onClick={() => navigate('/appointments')}
                  >
                    View All
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {appointmentData?.upcoming > 0 ? (
                    getUpcomingAppointments().map((appt: any, idx: number) => (
                  <AppointmentCard 
                        key={idx}
                        doctorName={appt.doctorName}
                        specialty={appt.specialty}
                        date={appt.date}
                        time={appt.time}
                        isUpcoming={appt.isUpcoming}
                      />
                    ))
                  ) : (
                    <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                      <p className="text-gray-500">No upcoming appointments</p>
                      <Button 
                        variant="link" 
                        className="mt-2 text-health-blue"
                        onClick={() => navigate('/appointments')}
                      >
                        Schedule an appointment
                      </Button>
                    </div>
                  )}
                </div>
              </div>
              
              <div>
                <div className="mb-4">
                  <h2 className="text-lg font-medium text-gray-800">Quick Actions</h2>
                </div>
                
                <div className="space-y-3">
                  <Button className="w-full bg-health-blue hover:bg-health-blue-dark justify-start"
                    onClick={() => navigate('/appointments')}>
                    <Plus className="mr-2 h-4 w-4" />
                    Book New Appointment
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start"
                    onClick={() => navigate('/health-records')}>
                    <Activity className="mr-2 h-4 w-4" />
                    Log Health Data
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start"
                    onClick={() => navigate('/messages')}>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Message Your Doctor
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
