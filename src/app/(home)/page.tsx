"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NewsLetter from "@/component/newsletter/NewsLetter";
import DiagnosticCard from "@/component/diagnosticcard/DiagnosticCard";
import InformationCard from "@/component/infornationCard/InformationCard";

const Home = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const currentYear: number = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute("id") || "";
        }
      });
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <div className="min-h-screen text-white flex flex-col justify-between relative">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-blue-300/10 bg-black/60 backdrop-blur-md shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src="brain.svg" width={25} height={55} alt="" />
            <span className="text-xl font-bold">Bora AI</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#"
              className="hover:text-[#3B82F6] transition-colors cursor-pointer"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-[#3B82F6] transition-colors cursor-pointer"
            >
              Documentation
            </a>
            <a
              href="#"
              className="hover:text-[#3B82F6] transition-colors cursor-pointer"
            >
              Register
            </a>
            <Link
              href="/register"
              className="px-4 py-0.5 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white focus:outline-none cursor-pointer"
            >
              Get Started
            </Link>
          </div>
          <div className="md:hidden cursor-pointer">
            <i className="fas fa-bars text-2xl"></i>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 bg-animated"
          style={{
            backgroundImage: `url("bg2.png")`,
          }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url("bg1.png")`,
          }}
        />
        <div
          className="absolute inset-0 z-0 blur-3xl"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238bc34a' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d1d5db' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "20px 20px",
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="container mx-auto px-[50px] py-10 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 md:pr-10 z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Welcome to Bora AI Medical Diagnostics
            </h1>
            <p className="text-xl text-[#9CA3AF] mb-8 max-w-lg">
              Revolutionizing healthcare with advanced AI algorithms. Our
              cutting-edge technology provides accurate diagnostics and
              personalized treatment recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#3B82F6] hover:bg-blue-600 px-8 py-3 rounded-lg font-medium transition-colors shadow-lg !rounded-button whitespace-nowrap cursor-pointer">
                Start for free now
              </button>
              <button className="bg-transparent border border-[#3B82F6] px-8 py-3 rounded-lg font-medium transition-colors hover:bg-[#3B82F6]/10 !rounded-button whitespace-nowrap cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/3 mt-12 md:mt-0">
            <div className="relative">
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="rounded-xl shadow-2xl"
              >
                <SwiperSlide>
                  <img
                    src="https://readdy.ai/api/search-image?query=Advanced%20medical%20AI%20interface%20showing%20brain%20scan%20analysis%20with%203D%20neural%20network%20visualization%2C%20futuristic%20holographic%20displays%20with%20medical%20data%2C%20clean%20modern%20medical%20technology%20on%20dark%20background&width=600&height=500&seq=8&orientation=landscape"
                    alt="AI Brain Analysis"
                    className="w-[400px] h-[400px] object-cover object-top"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://readdy.ai/api/search-image?query=Alzheimers%20disease%20brain%20scan%20with%20molecular%20view%20showing%20protein%20aggregates%2C%20neural%20degeneration%2C%20detailed%203D%20visualization%20of%20brain%20pathology%2C%20medical%20diagnostic%20imaging%20on%20dark%20background%20with%20blue%20highlights&width=400&height=300&seq=2&orientation=landscape"
                    alt="Alzheimer's Disease"
                    className="w-[400px] h-[400px] object-cover object-top"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://readdy.ai/api/search-image?query=Futuristic%20medical%20AI%20interface%20with%20brain%20scan%20visualization%2C%20holographic%20medical%20data%20displays%2C%20neural%20network%20patterns%2C%20blue%20glowing%20technology%20elements%20on%20dark%20background%2C%20high%20tech%20medical%20diagnostics&width=600&height=500&seq=1&orientation=landscape"
                    alt="AI Medical Diagnostics"
                    className="w-[400px] h-[400px] object-cover object-top"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://readdy.ai/api/search-image?query=Medical%20AI%20dashboard%20displaying%20patient%20diagnostics%20data%2C%20advanced%20medical%20visualization%20tools%2C%20modern%20healthcare%20technology%20interface%20with%20blue%20glowing%20elements%20on%20dark%20background&width=600&height=500&seq=9&orientation=landscape"
                    alt="AI Diagnostics Dashboard"
                    className="w-[400px] h-[400px] object-cover object-top"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://readdy.ai/api/search-image?query=Futuristic%20medical%20laboratory%20with%20AI-powered%20diagnostic%20equipment%2C%20high%20tech%20medical%20scanning%20devices%2C%20advanced%20healthcare%20technology%20visualization%20on%20dark%20background&width=600&height=500&seq=10&orientation=landscape"
                    alt="AI Medical Lab"
                    className="w-[400px] h-[400px] object-cover object-top"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {/* {children} */}

      {/* Information Cards Section */}
      <InformationCard />
      {/* Diagnostic Results Grid */}
      <DiagnosticCard />
      {/* Newsletter Subscription */}
      <NewsLetter />

      {/* Get Started Section */}
      <div className="bg-[#0D1117] py-20 relative">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=abstract%20digital%20wave%20pattern%20with%20flowing%20lines%20and%20curves%20in%20dark%20blue%20creating%20an%20artistic%20neural%20network%20effect%20perfect%20for%20AI%20interface%20background&width=1920&height=1080&seq=waves1&orientation=landscape')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            mixBlendMode: "soft-light",
            pointerEvents: "none",
          }}
        ></div>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=futuristic%20geometric%20wave%20patterns%20with%20subtle%20gradients%20and%20flowing%20lines%20creating%20a%20modern%20tech%20aesthetic%20in%20deep%20blue&width=1920&height=1080&seq=waves2&orientation=landscape')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            mixBlendMode: "overlay",
            pointerEvents: "none",
          }}
        ></div>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Medical Diagnostics?
          </h2>
          <p className="text-[#9CA3AF] max-w-2xl mx-auto mb-10">
            Join thousands of healthcare professionals already using Bora AI to
            improve patient outcomes and streamline diagnostic processes.
          </p>
          <button className="bg-[#3B82F6] hover:bg-blue-600 px-10 py-4 rounded-lg font-medium text-lg transition-colors shadow-xl !rounded-button whitespace-nowrap cursor-pointer">
            Get Started Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0D1117] border-t border-[#1F2937] py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4 gap-1">
                <Image src="brain.svg" width={25} height={55} alt="" />
                <span className="text-xl font-bold">Bora AI</span>
              </div>
              <p className="text-[#9CA3AF] mb-4">
                Advanced AI solutions for medical diagnostics and healthcare
                optimization.
              </p>
              <div className="flex space-x-4">
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
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-[#9CA3AF] hover:text-white transition-colors cursor-pointer"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#9CA3AF] hover:text-white transition-colors cursor-pointer"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#9CA3AF] hover:text-white transition-colors cursor-pointer"
                  >
                    Partners
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#9CA3AF] hover:text-white transition-colors cursor-pointer"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-[#9CA3AF] hover:text-white transition-colors cursor-pointer"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#9CA3AF] hover:text-white transition-colors cursor-pointer"
                  >
                    Research Papers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#9CA3AF] hover:text-white transition-colors cursor-pointer"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#9CA3AF] hover:text-white transition-colors cursor-pointer"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-[#9CA3AF] hover:text-white transition-colors cursor-pointer"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#9CA3AF] hover:text-white transition-colors cursor-pointer"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#9CA3AF] hover:text-white transition-colors cursor-pointer"
                  >
                    Data Processing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#9CA3AF] hover:text-white transition-colors cursor-pointer"
                  >
                    HIPAA Compliance
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#1F2937] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
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
    </div>
  );
};

export default Home;
