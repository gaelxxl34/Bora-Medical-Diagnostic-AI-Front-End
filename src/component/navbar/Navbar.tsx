"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const closeMenu = () => setIsMobileMenuOpen(false);
  return (
    <nav className="sticky top-0 z-50 border-b border-blue-300/50 bg-black/60 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src="/brain.svg" width={25} height={55} alt="" />
          <span className="text-xl font-bold text-white">BORA AI</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="hover:text-[#3B82F6] transition-colors cursor-pointer"
          >
            Home
          </Link>
          <Link
            href="/documentation"
            className="hover:text-[#3B82F6] transition-colors cursor-pointer"
          >
            Documentation
          </Link>
          <Link
            href="/waitlist/registration"
            className="hover:text-[#3B82F6] transition-colors cursor-pointer"
          >
            Register
          </Link>
          <Link
            href="/waitlist/registration"
            className="px-4 py-0.5 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white focus:outline-none cursor-pointer"
          >
            Get Started
          </Link>
        </div>

        {isMobileMenuOpen ? (
          <div
            className="md:hidden cursor-pointer text-white"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
          >
            <i className="fa-solid fa-xmark text-2xl"></i>{" "}
          </div>
        ) : (
          <div
            className="md:hidden cursor-pointer text-white"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
          >
            <i className="fas fa-bars text-2xl"></i>
          </div>
        )}
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[64px] left-0 right-0 bg-[#1F2937] border-b border-[#374151] z-50">
          <div className="flex flex-col p-4 space-y-4">
            <Link
              href="/"
              className="text-white hover:text-[#3B82F6] transition"
            >
              <span onClick={closeMenu} className="block p-2">
                Home
              </span>
            </Link>
            <Link
              href="/documentation"
              className="text-[#9CA3AF] hover:text-white transition"
            >
              <span onClick={closeMenu} className="block p-2">
                Documentation
              </span>
            </Link>
            <Link
              href="/waitlist/registration"
              className="text-[#9CA3AF] hover:text-white transition"
            >
              <span onClick={closeMenu} className="block p-2">
                Register
              </span>
            </Link>
            <Link href="waitlist/registration">
              <button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-4 py-2 rounded-lg w-full !rounded-button whitespace-nowrap">
                Get started
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
