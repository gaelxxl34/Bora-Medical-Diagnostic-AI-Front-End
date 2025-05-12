import Navbar from "@/component/navbar/Navbar";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <div className="min-h-screen z-1 bg-[#0D1117] text-white flex flex-col justify-between relative">
      <Navbar />
      <div className="flex flex-col items-center gap-5 text-center px-4">
        {/* <div className="text-white-500 text-5xl">
          <i className="fa-solid fa-ban"></i>
        </div> */}
        <h3 className="text-6xl p-2 font-extrabold text-[#3B82F6]">404</h3>
        <span className="text-2xl">Page not found</span>
        <p className="text-base font-medium text-[#9CA3AF]">
          {
            "Sorry, we couldn't find the page you're looking for. It might have been moved or deleted."
          }
        </p>
        <Link href="/">
          <button
            type="submit"
            className="text-sm sm:text-md bg-[#3B82F6] hover:bg-blue-600 px-4 py-2 rounded-lg font-medium transition-colors shadow-xl !rounded-button whitespace-nowrap cursor-pointer"
          >
            {" Go to Home"}
          </button>
        </Link>
      </div>
      <div className="border-t border-[#1F2937] mt-12 p-5 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="flex items-center mr-4">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span className="text-xs text-[#9CA3AF]">
              System Status: Online
            </span>
          </div>
          <span className="text-xs text-[#9CA3AF]">Version 1.0.0</span>
        </div>
        <p className="text-[#9CA3AF] text-sm">
          © {currentYear} Bora AI Medical Diagnostics. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
