
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Dashboard() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate("/dashboard", { replace: true });
  }, [navigate]);
  
  return null;
}
