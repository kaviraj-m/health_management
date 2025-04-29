import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import Layout from "@/components/layout/Layout";
import { Heart, ArrowRight } from "lucide-react";
import { authApi } from "@/lib/api";
import { saveAuthData, getRedirectPath } from "@/lib/auth";

export default function Login() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Check if redirected from registration
  useEffect(() => {
    const state = location.state as { email?: string; registration?: boolean } | null;
    if (state?.email) {
      setFormData(prev => ({ ...prev, email: state.email }));
      
      if (state.registration) {
        toast({
          title: "Registration successful",
          description: "Please login with your newly created account",
        });
      }
    }
  }, [location.state, toast]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user starts typing again
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password) return;
    
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
        description: `Welcome back, ${response.user.profile.firstName}!`,
      });
      
      // Redirect based on user role
      navigate(getRedirectPath());
    } catch (err) {
      const errorMessage = err instanceof Error 
        ? err.message 
        : "Invalid email or password";
      
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

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex justify-center mb-6">
              <Heart className="h-12 w-12 text-health-blue" />
            </div>
            <h2 className="text-2xl font-bold text-center mb-6">Sign in to your account</h2>
            
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4 text-sm">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="input-focus-within"
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link to="/forgot-password" className="text-xs text-health-blue hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="input-focus-within"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-health-blue hover:bg-health-blue-dark"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign in"}
                  {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </div>
            </form>
            
            <div className="mt-6 text-center text-sm">
              <span className="text-gray-600">Don't have an account?</span>{" "}
              <Link to="/register" className="text-health-blue font-medium hover:underline">
                Create one now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
