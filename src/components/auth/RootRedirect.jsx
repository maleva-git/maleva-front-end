import { Navigate } from "react-router-dom";
import { tokenHandler } from "../../utils/tokenHandler";
import Login from "../../features/auth/Login";

export default function RootRedirect() {
  const token = tokenHandler.get();
  const isValid = token && tokenHandler.isValid();
  
  if (!isValid && token) {
    tokenHandler.clear();
  }
  
  return isValid ? <Navigate to="/dashboard" replace /> : <Login />;
}
