import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear: number = new Date().getFullYear();
  return (
    <footer className="bg-[#1F2937] py-4 px-6 border-t border-[#374151]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="flex items-center mr-4">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span className="text-xs text-[#9CA3AF]">
              System Status: Online
            </span>
          </div>
          <span className="text-xs text-[#9CA3AF]">Version 1.0.0</span>
        </div>
        <div className="flex space-x-6">
          {/* <Link
            href="/register"
            className="text-xs text-[#9CA3AF] hover:text-white cursor-pointer"
          >
            Register
          </Link> */}
          <Link
            href="/documentation"
            className="text-xs text-[#9CA3AF] hover:text-white cursor-pointer"
          >
            Documentation
          </Link>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-xs text-[#9CA3AF]">
            © {currentYear} Bora Ai Medical Diagnostics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
