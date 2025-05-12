// src/routes/AdminRoute.tsx
import { Navigate } from "react-router-dom";
import { getCurrentUser } from "../utils/auth";

const AdminRoute = ({ children }: { children: JSX.Element }) => {
  const users = getCurrentUser();
  if (!users) return <Navigate to="/login" />;
  const user = users.find((user: any) => user.role === "admin");
 
  return user.role === "admin" ? children : <Navigate to="/user-dashboard" />;
};

export default AdminRoute;
