import Footer from "@/component/footer/Footer";
import Navbar from "@/component/navbar/Navbar";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white flex flex-col justify-between relative">
      <Navbar />
      <div className="text-center">
        <h3 className="text-6xl p-2">404</h3>
        <span className="text-xl">Page not found</span>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
