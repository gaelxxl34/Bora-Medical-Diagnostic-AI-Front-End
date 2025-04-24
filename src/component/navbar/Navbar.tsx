import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="border-b border-[#1F2937] py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center g-1">
          <Image src="brain.svg" width={25} height={55} alt="" />
          <i className="fas fa-brain text-[#3B82F6] text-2xl mr-3"></i>
          <h1 className="text-xl font-semibold">BoraAI Diagnostics</h1>
        </div>
        <nav className="hidden md:flex space-x-6 items-center">
          <Link
            href="/"
            className="text-white hover:text-[#3B82F6] transition cursor-pointer"
          >
            Home
          </Link>
          <Link
            href="/documentation"
            className="text-[#9CA3AF] hover:text-white transition cursor-pointer"
          >
            Documentation
          </Link>

          <Link
            href="/register"
            className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-4 py-1 !rounded-button whitespace-nowrap cursor-pointer"
          >
            Register
          </Link>
        </nav>
        <button className="md:hidden text-white">
          <Image
            src="menu.svg"
            alt=""
            width={25}
            height={25}
            className="cursor-pointer"
          />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
