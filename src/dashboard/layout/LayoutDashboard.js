import { chip } from "@material-tailwind/react";
import React from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";

const LayoutDashboard = ({ children }) => {
  return (
    <div>
      <>
        <div>
          <Header />
          <div className="flex overflow-hidden bg-white pt-16">
            <Sidebar />
            <div
              className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
              id="sidebarBackdrop"
            ></div>
            <div className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
              {children}
              <Footer />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default LayoutDashboard;
