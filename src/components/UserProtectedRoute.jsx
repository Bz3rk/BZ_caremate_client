import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const UserProtectedRoute = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  // If not logged in → redirect to login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If user is caregiver → redirect to caregiver dashboard
  if (user.is_caregiver) {
    return <Navigate to="caregiver/dashboard" replace />;
  }

  // Otherwise, allow access
  return <Outlet />;
};

export default UserProtectedRoute;
