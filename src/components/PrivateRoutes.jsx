import React from "react";
import { useAuth } from "../context/AuthenticationContext";
import { Outlet, Navigate } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user } = useAuth();

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
