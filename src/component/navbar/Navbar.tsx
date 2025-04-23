import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <header className="border-b border-[#1F2937] py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <i className="fas fa-brain text-[#3B82F6] text-2xl mr-3"></i>
          <h1 className="text-xl font-semibold">BoraAi Diagnostics</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a
            href="#"
            className="text-white hover:text-[#3B82F6] transition cursor-pointer"
          >
            Home
          </a>
          <a
            href="#"
            className="text-[#9CA3AF] hover:text-white transition cursor-pointer"
          >
            Documentation
          </a>
          <a
            href="#"
            className="text-[#9CA3AF] hover:text-white transition cursor-pointer"
          >
            About
          </a>
          <a
            href="#"
            className="text-[#9CA3AF] hover:text-white transition cursor-pointer"
          >
            Settings
          </a>
        </nav>
        <button className="md:hidden text-white">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
