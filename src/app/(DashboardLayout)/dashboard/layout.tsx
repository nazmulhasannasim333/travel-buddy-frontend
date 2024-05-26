"use client";

import React from "react";
import DashboardDrawer from "@/components/Dashboard/DashboardDrawer/DashboardDrawer";
// import { useRouter } from "next/navigation";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  // const router = useRouter();
  // if (!isLoggedIn()) {
  //   return router.push("/login");
  // }

  return <DashboardDrawer>{children}</DashboardDrawer>;
};

export default DashboardLayout;
