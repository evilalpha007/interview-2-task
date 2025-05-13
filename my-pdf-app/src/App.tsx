import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./user/component/Signup";
import Login from "./user/component/Login";
import AdminDashboard from "./admin/components/AdminDashboard";
import Payment from "./payment/Payment";
import { Toaster } from "react-hot-toast";

import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";
import FallbackRedirect from "./routes/FallbackRedirect";
import AdminRoute from "./routes/AdminRoute";


const App = () => (
  <Router>
    <Toaster position="top-right" />
    <CssBaseline />
    <Routes>
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/admin-dashboard"
        element={
          <AdminRoute>
            <AdminDashboard />
           </AdminRoute>
        }
      />
     
      <Route
        path="/payment"
        element={
          <ProtectedRoute>
            <Payment />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<FallbackRedirect />} />
    </Routes>
  </Router>
);

export default App;
