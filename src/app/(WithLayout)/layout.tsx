import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import React from "react";
interface WithLayoutProps {
  children: React.ReactNode;
}
const WithLayout: React.FC<WithLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default WithLayout;
