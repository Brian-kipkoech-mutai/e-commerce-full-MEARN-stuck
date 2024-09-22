import Footer from "@/components/footer";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import React from "react";
import { Outlet } from "react-router-dom";

function Root(props) {
  return (
    <div className="text-gray-800 antialiased  ">
      <Header />
      <Outlet />
      <Footer />
      <Toaster /> {/* this component will show toast messages */}
    </div>
  );
}

export default Root;
