import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const auth = useAuth();

  console.log("AUTH:", auth);

  return children;
}

export default ProtectedRoute;