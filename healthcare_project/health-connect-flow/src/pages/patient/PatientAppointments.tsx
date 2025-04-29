import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Sidebar from "@/components/dashboard/Sidebar";
import {
  Calendar,
  Clock,
  User,
  Search,
  Plus,
  CalendarDays,
  Loader2,
  MapPin,
} from "lucide-react";
import { format } from "date-fns";
import { STORAGE_KEYS, appointmentsApi, Appointment, CreateAppointmentDto, UpdateAppointmentDto } from "@/lib/api";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

export default function PatientAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [showNewAppointment, setShowNewAppointment] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState<CreateAppointmentDto>({
    date: "",
    preferredTime: "",
    location: "",
    type: "IN_PERSON",
    reason: "",
    doctorId: 0,
    hospitalId: 0
  });
  const { toast } = useToast();
  const navigate = useNavigate();

  // Get user token from storage
  const getToken = () => {
    const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
    if (!token) {
      toast({
        title: "Error",
        description: "Please login to continue",
        variant: "destructive",
      });
      navigate("/login");
      return null;
    }
    return token;
  };

  // Fetch appointments
  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const token = getToken();
      if (!token) return;

      const response = await appointmentsApi.getMyAppointments(token);
      setAppointments(response);
    } catch (error) {
      console.error("Failed to fetch appointments:", error);
      toast({
        title: "Error",
        description: "Failed to load appointments. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Create new appointment
  const handleRequestAppointment = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = getToken();
      if (!token) return;
      
      // Validate required fields
      if (!formData.date || !formData.doctorId || !formData.hospitalId) {
        toast({
          title: "Error",
          description: "Please fill in all required fields",
          variant: "destructive",
        });
        return;
      }

      // Format date to ISO string
      const formattedDate = new Date(formData.date).toISOString();
      
      await appointmentsApi.createMyAppointment(token, {
        ...formData,
        date: formattedDate
      });
      
      toast({
        title: "Success",
        description: "Appointment requested successfully",
      });
      
      setShowNewAppointment(false);
      setFormData({
        date: "",
        preferredTime: "",
        location: "",
        type: "IN_PERSON",
        reason: "",
        doctorId: 0,
        hospitalId: 0
      });
      
      fetchAppointments();
    } catch (error) {
      console.error("Failed to create appointment:", error);
      toast({
        title: "Error",
        description: "Failed to request appointment. Please try again later.",
        variant: "destructive",
      });
    }
  };

  // Update appointment status
  const handleUpdateAppointment = async (id: number, status: 'CANCELLED' | 'RESCHEDULED') => {
    try {
      const token = getToken();
      if (!token) return;

      await appointmentsApi.updateMyAppointment(token, id, { status });
      
      toast({
        title: "Success",
        description: `Appointment ${status.toLowerCase()} successfully`,
      });
      
      fetchAppointments();
    } catch (error) {
      console.error("Failed to update appointment:", error);
      toast({
        title: "Error",
        description: `Failed to ${status.toLowerCase()} appointment. Please try again later.`,
        variant: "destructive",
      });
    }
  };

  // Delete appointment
  const handleDeleteAppointment = async (id: number) => {
    try {
      const token = getToken();
      if (!token) return;

      await appointmentsApi.deleteMyAppointment(token, id);
      
      toast({
        title: "Success",
        description: "Appointment deleted successfully",
      });
      
      fetchAppointments();
    } catch (error) {
      console.error("Failed to delete appointment:", error);
      toast({
        title: "Error",
        description: "Failed to delete appointment. Please try again later.",
        variant: "destructive",
      });
    }
  };

  // Filter appointments based on search query
  const filteredAppointments = appointments.filter((appointment) =>
    `${appointment.doctor.firstName} ${appointment.doctor.lastName}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar userType="patient" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-gray-200 p-4">
          <h1 className="text-xl font-bold text-gray-800">My Appointments</h1>
          <p className="text-sm text-gray-500">Manage your healthcare appointments</p>
        </header>
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div className="relative mb-4 md:mb-0 md:w-1/3">
                <Search className="h-4 w-4 absolute top-3 left-3 text-gray-400" />
                <Input 
                  placeholder="Search doctors..." 
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <Button 
                className="bg-health-blue hover:bg-health-blue-dark flex items-center"
                onClick={() => setShowNewAppointment(true)}
              >
                <Plus className="h-4 w-4 mr-2" />
                Request Appointment
              </Button>
            </div>
            
            {showNewAppointment && (
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="font-medium text-lg mb-4">Request an Appointment</h3>
                  <form onSubmit={handleRequestAppointment} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="doctorId">Doctor *</Label>
                        <Select
                          value={formData.doctorId.toString()}
                          onValueChange={(value) => setFormData({ ...formData, doctorId: Number(value) })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select doctor" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">Dr. Sarah Johnson (Cardiologist)</SelectItem>
                            <SelectItem value="2">Dr. Michael Chen (Endocrinologist)</SelectItem>
                            <SelectItem value="3">Dr. Ravi Patel (General Physician)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="type">Appointment Type</Label>
                        <Select
                          value={formData.type}
                          onValueChange={(value) => setFormData({ ...formData, type: value as 'IN_PERSON' | 'VIRTUAL' })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="IN_PERSON">In-person</SelectItem>
                            <SelectItem value="VIRTUAL">Virtual</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="date">Preferred Date *</Label>
                        <div className="relative">
                          <Input 
                            id="date" 
                            type="date" 
                            className="pl-10" 
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            required
                          />
                          <CalendarDays className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="preferredTime">Preferred Time</Label>
                        <div className="relative">
                          <Input
                            id="preferredTime"
                            type="time"
                            value={formData.preferredTime}
                            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="hospitalId">Hospital *</Label>
                        <Select
                          value={formData.hospitalId.toString()}
                          onValueChange={(value) => setFormData({ ...formData, hospitalId: Number(value) })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select hospital" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">City General Hospital</SelectItem>
                            <SelectItem value="2">Community Medical Center</SelectItem>
                            <SelectItem value="3">Regional Health Clinic</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <div className="relative">
                          <Input
                            id="location"
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            placeholder="Room number or location"
                          />
                          <MapPin className="h-4 w-4 absolute right-3 top-3 text-gray-400" />
                        </div>
                      </div>
                      
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="reason">Reason for Visit</Label>
                        <Input
                          id="reason"
                          value={formData.reason}
                          onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                          placeholder="Briefly describe the reason for your visit"
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-end space-x-2">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowNewAppointment(false)}
                      >
                        Cancel
                      </Button>
                      <Button type="submit">Request Appointment</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}
            
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <Loader2 className="h-8 w-8 animate-spin text-health-blue" />
              </div>
            ) : (
              <div className="grid gap-4">
                {filteredAppointments.length === 0 ? (
                  <div className="text-center p-8">
                    <p className="text-gray-500">No appointments found</p>
                  </div>
                ) : (
                  filteredAppointments.map((appointment) => (
                    <Card key={appointment.id}>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <User className="h-4 w-4 mr-2 text-gray-400" />
                              <span className="font-medium">
                                Dr. {appointment.doctor.firstName} {appointment.doctor.lastName}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                              <span>{format(new Date(appointment.date), 'MMMM d, yyyy')}</span>
                            </div>
                            {appointment.preferredTime && (
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-2 text-gray-400" />
                                <span>{appointment.preferredTime}</span>
                              </div>
                            )}
                            {appointment.location && (
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                                <span>{appointment.location}</span>
                              </div>
                            )}
                          </div>
                          
                          <div className="mt-4 md:mt-0 flex flex-col items-end">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              appointment.status === 'CONFIRMED' ? 'bg-green-100 text-green-800' :
                              appointment.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
                              appointment.status === 'CANCELLED' ? 'bg-red-100 text-red-800' :
                              appointment.status === 'RESCHEDULED' ? 'bg-blue-100 text-blue-800' :
                              'bg-purple-100 text-purple-800'
                            }`}>
                              {appointment.status}
                            </span>
                            
                            {appointment.status !== 'CANCELLED' && (
                              <div className="flex space-x-2 mt-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleUpdateAppointment(appointment.id, 'RESCHEDULED')}
                                >
                                  Reschedule
                                </Button>
                                <Button
                                  variant="destructive"
                                  size="sm"
                                  onClick={() => handleDeleteAppointment(appointment.id)}
                                >
                                  Cancel
                                </Button>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
