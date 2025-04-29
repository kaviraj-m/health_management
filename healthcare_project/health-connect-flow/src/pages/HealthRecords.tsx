import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { format } from "date-fns";
import { Activity, ArrowLeft, Droplet, Heart, Plus } from "lucide-react";
import { STORAGE_KEYS, healthRecordsApi } from "@/lib/api";
import { useToast } from "@/components/ui/use-toast";
import HealthRecordForm from "@/components/health-records/HealthRecordForm";
import Sidebar from "@/components/dashboard/Sidebar";

export default function HealthRecords() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [healthRecords, setHealthRecords] = useState<any[]>([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 1,
  });
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  const fetchHealthRecords = async (page = 1, limit = 10) => {
    try {
      setLoading(true);
      setError(null);
      
      const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
      if (!token) {
        navigate('/login');
        return;
      }
      
      const response = await healthRecordsApi.getMyHealthRecords(token, {
        page,
        limit,
      });
      
      setHealthRecords(response.data || []);
      setPagination({
        page: response.meta.page,
        limit: response.meta.limit,
        total: response.meta.total,
        totalPages: response.meta.totalPages,
      });
    } catch (err) {
      console.error('Error fetching health records:', err);
      setError('Failed to load health records. Please try again later.');
      toast({
        title: "Error",
        description: "Failed to load health records. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchHealthRecords();
  }, [navigate]);
  
  const handleRecordSuccess = () => {
    setIsFormOpen(false);
    fetchHealthRecords();
    toast({
      title: "Success",
      description: "Health record has been saved successfully.",
    });
  };
  
  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'MMM d, yyyy');
  };
  
  const handlePrevPage = () => {
    if (pagination.page > 1) {
      fetchHealthRecords(pagination.page - 1, pagination.limit);
    }
  };
  
  const handleNextPage = () => {
    if (pagination.page < pagination.totalPages) {
      fetchHealthRecords(pagination.page + 1, pagination.limit);
    }
  };
  
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar userType="patient" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate('/dashboard')}
              className="mr-2"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
          <div>
            <h1 className="text-xl font-bold text-gray-800">Health Records</h1>
              <p className="text-sm text-gray-500">Manage your health metrics and logs</p>
            </div>
          </div>
          
          <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogTrigger asChild>
              <Button className="bg-health-blue hover:bg-health-blue-dark">
                <Plus className="mr-2 h-4 w-4" />
                Add New Record
            </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Add Health Record</DialogTitle>
              </DialogHeader>
              <HealthRecordForm 
                onSuccess={handleRecordSuccess}
                onCancel={() => setIsFormOpen(false)}
              />
            </DialogContent>
          </Dialog>
        </header>
        
        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="space-y-4">
            {loading ? (
              <div className="flex justify-center p-10">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-health-blue"></div>
              </div>
            ) : error ? (
              <div className="text-center p-10">
                <p className="text-red-500">{error}</p>
                <Button onClick={() => fetchHealthRecords()} className="mt-4">
                  Try Again
                          </Button>
              </div>
            ) : healthRecords.length === 0 ? (
              <div className="text-center p-10 bg-white rounded-lg border border-gray-200">
                <Activity className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-800 mb-2">No health records yet</h3>
                <p className="text-gray-500 mb-4">Start tracking your health metrics today to keep a record of your health journey.</p>
                <Button 
                  onClick={() => setIsFormOpen(true)}
                  className="bg-health-blue hover:bg-health-blue-dark"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add First Record
                </Button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {healthRecords.map((record) => (
                    <Card key={record.id} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <div>
                          <CardTitle className="text-lg">{formatDate(record.date)}</CardTitle>
                          <CardDescription>Record ID: {record.id}</CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-3 gap-4">
                          {record.bloodPressure && (
                            <div className="flex items-center">
                              <Droplet className="h-5 w-5 text-health-blue mr-2" />
                              <div>
                                <p className="text-sm font-medium">BP</p>
                                <p className="text-lg">{record.bloodPressure}</p>
                              </div>
                            </div>
                          )}
                          {record.heartRate && (
                            <div className="flex items-center">
                              <Heart className="h-5 w-5 text-health-red mr-2" />
                              <div>
                                <p className="text-sm font-medium">HR</p>
                                <p className="text-lg">{record.heartRate} bpm</p>
                              </div>
                            </div>
                          )}
                          {record.bloodGlucose && (
                            <div className="flex items-center">
                              <Activity className="h-5 w-5 text-health-green mr-2" />
                              <div>
                                <p className="text-sm font-medium">Glucose</p>
                                <p className="text-lg">{record.bloodGlucose} mg/dL</p>
                              </div>
                            </div>
                          )}
                        </div>
                        {record.notes && (
                          <div className="mt-3 pt-3 border-t border-gray-100">
                            <p className="text-sm text-gray-700">{record.notes}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                {/* Pagination */}
                {pagination.totalPages > 1 && (
                  <div className="flex justify-between items-center mt-6">
                    <p className="text-sm text-gray-500">
                      Showing {healthRecords.length} of {pagination.total} records
                    </p>
                <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={handlePrevPage}
                        disabled={pagination.page === 1}
                      >
                        Previous
                  </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={handleNextPage}
                        disabled={pagination.page === pagination.totalPages}
                      >
                        Next
                  </Button>
                </div>
              </div>
            )}
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
