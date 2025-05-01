"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DiagnosticCard from "@/component/diagnosticcard/DiagnosticCard";
import InformationCard from "@/component/infornationCard/InformationCard";

const Home = () => {
  const [activeSection, setActiveSection] = useState("hero");

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
        <div className="container mx-auto px-[50px] py-10 sm:py-6 lg:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 md:pr-10 z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Welcome to
              <span className="bg-gradient-to-r from-blue-500 to-rose-500 bg-clip-text text-transparent font-bold mx-3">
                BORA AI
              </span>
              Medical Diagnostics
            </h1>
            <p className="text-xl text-[#9CA3AF] mb-8 max-w-lg">
              Revolutionizing healthcare with advanced AI algorithms. Our
              cutting-edge technology provides accurate diagnostics and
              personalized treatment recommendations.
            </p>
            <div className="flex sm:flex-row gap-4">
              <Link href="/waitlist/registration">
                <button className="text-sm sm:text-lg bg-[#3B82F6] hover:bg-blue-600 px-8 py-3 rounded-lg font-medium transition-colors shadow-lg !rounded-button whitespace-nowrap cursor-pointer">
                  Start for free now
                </button>
              </Link>
              <Link href="/waitlist/registration">
                <button className="text-sm sm:text-lg bg-transparent border border-[#3B82F6] px-8 py-3 rounded-lg font-medium transition-colors hover:bg-[#3B82F6]/10 !rounded-button whitespace-nowrap cursor-pointer">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          <div className="hidden md:w-1/3 md:block mt-12 md:mt-0">
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
                    className="w-[480px] h-[390px] object-cover object-top"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://readdy.ai/api/search-image?query=Alzheimers%20disease%20brain%20scan%20with%20molecular%20view%20showing%20protein%20aggregates%2C%20neural%20degeneration%2C%20detailed%203D%20visualization%20of%20brain%20pathology%2C%20medical%20diagnostic%20imaging%20on%20dark%20background%20with%20blue%20highlights&width=400&height=300&seq=2&orientation=landscape"
                    alt="Alzheimer's Disease"
                    className="w-[480px] h-[390px] object-cover object-top"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://readdy.ai/api/search-image?query=Futuristic%20medical%20AI%20interface%20with%20brain%20scan%20visualization%2C%20holographic%20medical%20data%20displays%2C%20neural%20network%20patterns%2C%20blue%20glowing%20technology%20elements%20on%20dark%20background%2C%20high%20tech%20medical%20diagnostics&width=600&height=500&seq=1&orientation=landscape"
                    alt="AI Medical Diagnostics"
                    className="w-[480px] h-[390px] object-cover object-top"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://readdy.ai/api/search-image?query=Medical%20AI%20dashboard%20displaying%20patient%20diagnostics%20data%2C%20advanced%20medical%20visualization%20tools%2C%20modern%20healthcare%20technology%20interface%20with%20blue%20glowing%20elements%20on%20dark%20background&width=600&height=500&seq=9&orientation=landscape"
                    alt="AI Diagnostics Dashboard"
                    className="w-[480px] h-[390px] object-cover object-top"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://readdy.ai/api/search-image?query=Futuristic%20medical%20laboratory%20with%20AI-powered%20diagnostic%20equipment%2C%20high%20tech%20medical%20scanning%20devices%2C%20advanced%20healthcare%20technology%20visualization%20on%20dark%20background&width=600&height=500&seq=10&orientation=landscape"
                    alt="AI Medical Lab"
                    className="w-[480px] h-[390px] object-cover object-top"
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
        <div className="container mx-auto px-6 sm:px-1 text-center">
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-6">
            Ready to Transform Medical Diagnostics?
          </h2>
          <p className="text-sm sm:text-base text-[#9CA3AF] max-w-2xl mx-auto mb-10">
            Join thousands of healthcare professionals already using Bora AI to
            improve patient outcomes and streamline diagnostic processes.
          </p>
          <Link href="/waitlist/registration">
            <button className="text-sm sm:text-lg bg-[#3B82F6] hover:bg-blue-600 px-10 py-4 rounded-lg font-medium transition-colors shadow-xl !rounded-button whitespace-nowrap cursor-pointer">
              Get Started Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
