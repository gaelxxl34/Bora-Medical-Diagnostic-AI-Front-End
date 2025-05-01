import diagnosticImages from "@/data/diagnosticImages";
import Link from "next/link";
import React from "react";

const DiagnosticCard = () => {
  return (
    <div className="bg-gradient-to-b from-[#1F2937] to-[#0D1117] py-20 relative">
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
      <div className="container mx-auto px-6 md:px-10 lg:px-20 relative z-10 ">
        <div className="text-left mb-12">
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4">
            Diagnostic Capabilities
          </h2>
          <p className="text-sm sm:text-base text-[#9CA3AF] max-w-2xl">
            Our AI system can detect and analyze various neurological conditions
            with high accuracy.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diagnosticImages.map((data, i) => (
            <div
              className="bg-[#0D1117] rounded-xl overflow-hidden shadow-lg hover:shadow-xl border border-blue-300/10 transition-transform duration-300 ease-in-out hover:scale-102"
              key={i}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={data.src}
                  alt={data.caption}
                  className="w-full h-full cursor-pointer object-cover object-top transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{data.caption}</h3>
                <p className="text-sm sm:text-base text-[#9CA3AF] mb-4">
                  {data.desription}
                </p>
                <Link href="/waitlist/registration">
                  <button className="text-sm sm:text-lg  bg-[#3B82F6] hover:bg-blue-600 px-8 py-3 rounded-lg font-medium transition-colors shadow-lg !rounded-button whitespace-nowrap cursor-pointer">
                    view detail
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiagnosticCard;
