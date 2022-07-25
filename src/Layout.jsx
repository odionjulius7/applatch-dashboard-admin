import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import SidebarNav from "./Components/SidebarNav";
import { AuthProvider } from "./context/AuthProvider";

export const Layout = () => {
  return (
    <AuthProvider>
      <div className="main-wrapper">
        <SidebarNav />
        <div className="page-wrapper">
          <div className="page-content">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </AuthProvider>
  );
};
