"use client";

import React from "react";
import DashboardDrawer from "@/components/Dashboard/DashboardDrawer/DashboardDrawer";
import ProtectedRoute from "@/utils/ProtectedRoute";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <ProtectedRoute>
      <DashboardDrawer>{children}</DashboardDrawer>
    </ProtectedRoute>
  );
};

export default DashboardLayout;
