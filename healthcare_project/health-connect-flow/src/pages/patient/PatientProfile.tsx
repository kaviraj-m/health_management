import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { patientsApi, STORAGE_KEYS, PatientResponse } from "@/lib/api";
import Sidebar from "@/components/dashboard/Sidebar";
import { Loader2, Save, Edit, User, Calendar, Phone, Heart, Mail } from "lucide-react";

export default function PatientProfile() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  
  const defaultProfile: PatientResponse = {
    id: 0,
    userId: 0,
    user: {
      id: 0,
      email: "",
      role: "",
      profile: {
        firstName: "",
        lastName: ""
      }
    },
    medicalConditions: [],
    healthRecords: [],
    appointments: [],
    medicationReminders: []
  };
  
  const [profileData, setProfileData] = useState<PatientResponse>(defaultProfile);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    emergencyContact: "",
    avatar: "",
  });

  // Load profile data when component mounts
  useEffect(() => {
    const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
    if (!token) {
      toast({
        title: "Authentication error",
        description: "You must be logged in to view your profile.",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }

    fetchProfileData(token);
  }, [navigate, toast]);

  const fetchProfileData = async (token: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const data = await patientsApi.getProfile(token);
      setProfileData({
        ...data,
        medicalConditions: data.medicalConditions || [],
        healthRecords: data.healthRecords || [],
        appointments: data.appointments || [],
        medicationReminders: data.medicationReminders || []
      });
      
      // Initialize form data with current values
      setFormData({
        firstName: data.user.profile.firstName || "",
        lastName: data.user.profile.lastName || "",
        phone: data.user.profile.phone || "",
        dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth).toISOString().split('T')[0] : "",
        gender: data.gender || "",
        emergencyContact: data.emergencyContact || "",
        avatar: data.user.profile.avatar || "",
      });
    } catch (err) {
      const errorMessage = err instanceof Error 
        ? err.message 
        : "Failed to load profile data";
      
      setError(errorMessage);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
    if (!token) {
      toast({
        title: "Authentication error",
        description: "You must be logged in to update your profile.",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }
    
    setIsSaving(true);
    setError(null);
    
    try {
      const updatedProfile = await patientsApi.updateProfile(token, formData);
      
      setProfileData({
        ...updatedProfile,
        medicalConditions: updatedProfile.medicalConditions || [],
        healthRecords: updatedProfile.healthRecords || [],
        appointments: updatedProfile.appointments || [],
        medicationReminders: updatedProfile.medicationReminders || []
      });
      
      setIsEditing(false);
      
      toast({
        title: "Profile updated",
        description: "Your profile has been successfully updated.",
      });
    } catch (err) {
      const errorMessage = err instanceof Error 
        ? err.message 
        : "Failed to update profile";
      
      setError(errorMessage);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const toggleEditMode = () => {
    if (isEditing) {
      // Reset form data to current profile values
      setFormData({
        firstName: profileData.user.profile.firstName || "",
        lastName: profileData.user.profile.lastName || "",
        phone: profileData.user.profile.phone || "",
        dateOfBirth: profileData.dateOfBirth ? new Date(profileData.dateOfBirth).toISOString().split('T')[0] : "",
        gender: profileData.gender || "",
        emergencyContact: profileData.emergencyContact || "",
        avatar: profileData.user.profile.avatar || "",
      });
    }
    setIsEditing(!isEditing);
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Not specified';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (isLoading) {
    return (
      <div className="flex h-screen bg-gray-50">
        <Sidebar userType="patient" />
        
        <div className="flex-1 overflow-auto p-6">
          <div className="flex justify-center items-center h-full">
            <div className="text-center">
              <Loader2 className="h-10 w-10 animate-spin mx-auto mb-4 text-health-blue" />
              <p className="text-lg text-gray-600">Loading your profile information...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar userType="patient" />
      
      <div className="flex-1 overflow-auto p-6">
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
            <p className="text-gray-500">View and manage your profile information</p>
          </div>
          <Button 
            variant={isEditing ? "outline" : "default"}
            onClick={toggleEditMode}
            className="flex items-center gap-2"
          >
            {isEditing ? 'Cancel' : <><Edit className="h-4 w-4" /> Edit Profile</>}
          </Button>
        </header>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6 text-sm">
            {error}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Information Card */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Your personal and contact details</CardDescription>
            </CardHeader>
            <CardContent>
              {isEditing ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName" 
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      value={profileData.user.email}
                      disabled
                      className="bg-gray-50"
                    />
                    <p className="text-xs text-gray-500">Email cannot be changed</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Input
                      id="dateOfBirth"
                      name="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <Select 
                      value={formData.gender} 
                      onValueChange={(value) => handleSelectChange("gender", value)}
                    >
                      <SelectTrigger id="gender" className="w-full">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                        <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="emergencyContact">Emergency Contact</Label>
                    <Input
                      id="emergencyContact"
                      name="emergencyContact"
                      type="tel"
                      value={formData.emergencyContact}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="avatar">Profile Picture URL</Label>
                    <Input
                      id="avatar"
                      name="avatar"
                      type="url"
                      value={formData.avatar}
                      onChange={handleChange}
                      placeholder="https://example.com/your-avatar.jpg"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-health-blue hover:bg-health-blue-dark"
                    disabled={isSaving}
                  >
                    {isSaving ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Saving Changes...
                      </>
                    ) : (
                      <>
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                      </>
                    )}
                  </Button>
                </form>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3">
                      <User className="h-5 w-5 text-health-blue" />
                      <div>
                        <p className="text-sm text-gray-500">Full Name</p>
                        <p className="font-medium">{profileData.user.profile.firstName} {profileData.user.profile.lastName}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-health-blue" />
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium">{profileData.user.email}</p>
                      </div>
                    </div>
                </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-health-blue" />
                <div>
                        <p className="text-sm text-gray-500">Date of Birth</p>
                        <p className="font-medium">{profileData.dateOfBirth ? formatDate(profileData.dateOfBirth) : 'Not specified'}</p>
                </div>
              </div>
              
                    <div className="flex items-center space-x-3">
                      <Heart className="h-5 w-5 text-health-blue" />
                      <div>
                        <p className="text-sm text-gray-500">Gender</p>
                        <p className="font-medium capitalize">{profileData.gender || 'Not specified'}</p>
                      </div>
                    </div>
                </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-health-blue" />
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium">{profileData.user.profile.phone || 'Not specified'}</p>
                </div>
              </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-health-blue" />
              <div>
                        <p className="text-sm text-gray-500">Emergency Contact</p>
                        <p className="font-medium">{profileData.emergencyContact || 'Not specified'}</p>
                      </div>
                    </div>
                  </div>
              </div>
              )}
            </CardContent>
          </Card>

          {/* Profile Picture Card */}
          <Card>
            <CardHeader>
              <CardTitle>Profile Picture</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              {profileData.user.profile.avatar ? (
                <img 
                  src={profileData.user.profile.avatar} 
                  alt={`${profileData.user.profile.firstName} ${profileData.user.profile.lastName}`}
                  className="rounded-full h-48 w-48 object-cover mb-4"
                />
              ) : (
                <div className="rounded-full h-48 w-48 bg-gray-200 flex items-center justify-center mb-4">
                  <User className="h-24 w-24 text-gray-400" />
                </div>
              )}
              <p className="text-center text-gray-600">
                {profileData.user.email}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
