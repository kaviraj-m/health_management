import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import Layout from "@/components/layout/Layout";
import { Heart, ArrowRight, Loader2 } from "lucide-react";
import { patientsApi, authApi } from "@/lib/api";
import { saveAuthData, getRedirectPath } from "@/lib/auth";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Register() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    phone: "",
    gender: "",
    agreeToTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    
    // Clear error when user starts typing again
    if (error) setError(null);
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    
    if (error) setError(null);
  };

  const validateForm = () => {
    if (!registrationSuccess) {
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords don't match");
        return false;
      }
      
      if (formData.password.length < 8) {
        setError("Password must be at least 8 characters long");
        return false;
      }
      
      if (!formData.agreeToTerms) {
        setError("You must agree to the Terms of Service and Privacy Policy");
        return false;
      }

      if (!formData.dateOfBirth) {
        setError("Date of birth is required");
        return false;
      }

      if (!formData.phone) {
        setError("Phone number is required");
        return false;
      }

      if (!formData.gender) {
        setError("Please select your gender");
        return false;
      }
    } else {
      // In login mode, just check if we have email and password
      if (!formData.email || !formData.password) {
        setError("Email and password are required");
        return false;
      }
    }
    
    return true;
  };

  const handleLoginAfterRegistration = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await authApi.login({
        email: formData.email,
        password: formData.password,
      });
      
      // Store auth data
      saveAuthData(response);
      
      toast({
        title: "Login successful",
        description: `Welcome, ${response.user.profile.firstName}!`,
      });
      
      // Redirect based on user role
      navigate(getRedirectPath());
    } catch (err) {
      const errorMessage = err instanceof Error 
        ? err.message 
        : "Login failed. Please try again.";
      
      setError(errorMessage);
      toast({
        title: "Login failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsLoading(true);
    setError(null);
    
    // If registration is successful, perform login
    if (registrationSuccess) {
      await handleLoginAfterRegistration();
      return;
    }
    
    // Otherwise perform registration
    try {
      await patientsApi.register({
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        dateOfBirth: formData.dateOfBirth,
        phone: formData.phone,
        gender: formData.gender,
      });
      
      toast({
        title: "Registration successful",
        description: "Your account has been created. Please sign in now.",
      });
      
      // Set registration success flag to switch to login mode
      setRegistrationSuccess(true);
    } catch (err) {
      const errorMessage = err instanceof Error 
        ? err.message 
        : "An error occurred during registration";
        
      setError(errorMessage);
      toast({
        title: "Registration failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex justify-center mb-6">
              <Heart className="h-12 w-12 text-health-blue" />
            </div>
            
            {registrationSuccess ? (
              <>
                <h2 className="text-2xl font-bold text-center mb-2">Sign in to continue</h2>
                <p className="text-gray-500 text-center mb-6">Your account has been created successfully</p>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-center mb-2">Create your account</h2>
                <p className="text-gray-500 text-center mb-6">Join HealthConnect and take control of your health</p>
              </>
            )}
            
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4 text-sm">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                {!registrationSuccess && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="input-focus-within"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="input-focus-within"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth">Date of Birth</Label>
                      <Input
                        id="dateOfBirth"
                        name="dateOfBirth"
                        type="date"
                        required
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        className="input-focus-within"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(123) 456-7890"
                        className="input-focus-within"
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
                  </>
                )}
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={registrationSuccess}
                    className="input-focus-within"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    minLength={8}
                    value={formData.password}
                    onChange={handleChange}
                    className="input-focus-within"
                  />
                  {!registrationSuccess && (
                    <p className="text-xs text-gray-500">Password must be at least 8 characters long</p>
                  )}
                </div>
                
                {!registrationSuccess && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        required
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="input-focus-within"
                      />
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Input
                        id="agreeToTerms"
                        name="agreeToTerms"
                        type="checkbox"
                        className="h-4 w-4 mt-1"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                      />
                      <Label htmlFor="agreeToTerms" className="text-sm font-normal">
                        I agree to the <Link to="/terms" className="text-health-blue hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-health-blue hover:underline">Privacy Policy</Link>
                      </Label>
                    </div>
                  </>
                )}
                
                <Button 
                  type="submit" 
                  className="w-full bg-health-blue hover:bg-health-blue-dark"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {registrationSuccess ? "Signing in..." : "Creating Account..."}
                    </>
                  ) : (
                    <>
                      {registrationSuccess ? "Sign in" : "Create Account"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
                
                {!registrationSuccess && (
                  <div className="text-center text-sm">
                    <span className="text-gray-600">Already have an account?</span>{" "}
                    <Link to="/login" className="text-health-blue font-medium hover:underline">
                      Sign in
                    </Link>
                  </div>
                )}
                
                {registrationSuccess && (
                  <div className="text-center text-sm">
                    <span className="text-gray-600">Having trouble?</span>{" "}
                    <Link to="/login" className="text-health-blue font-medium hover:underline">
                      Go to sign in page
                    </Link>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
