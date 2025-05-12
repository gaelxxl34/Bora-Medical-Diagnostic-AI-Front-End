import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear: number = new Date().getFullYear();
  return (
    <footer className="relative bg-[#0D1117] border-t border-[#1F2937] pt-12">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d1d5db' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "20px 20px",
        }}
      >
        <div className="absolute inset-0 bg-black/80" />
      </div>
      <div className="relative container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4 gap-2">
              <Image src="brain.svg" width={25} height={55} alt="" />
              <span className="text-xl font-bold">Bora AI</span>
            </div>
            <p className="text-[#9CA3AF] mb-4">
              Advanced AI solutions for medical diagnostics and healthcare
              optimization.
            </p>
            {/* <div className="flex space-x-4">
              <a
                href="#"
                className="text-[#9CA3AF] hover:text-[#3B82F6] transition-colors cursor-pointer"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="#"
                className="text-[#9CA3AF] hover:text-[#3B82F6] transition-colors cursor-pointer"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a
                href="#"
                className="text-[#9CA3AF] hover:text-[#3B82F6] transition-colors cursor-pointer"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
            </div> */}
          </div>
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
       
          </div> */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/documentation"
                  className="text-[#9CA3AF] hover:text-white transition-colors cursor-pointer"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/waitlist/registration"
                  className="text-[#9CA3AF] hover:text-white transition-colors cursor-pointer"
                >
                  Get started
                </Link>
              </li>
            </ul>
          </div>
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
          </div> */}
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
    </footer>
  );
};

export default Footer;
