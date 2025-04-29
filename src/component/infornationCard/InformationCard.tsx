import React from "react";

const InformationCard = () => {
  return (
    <div className="relative py-16 bg-[#0D1117]">
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
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-[#9CA3AF] max-w-2xl mx-auto">
            We provide all the tools and support to help your medical
            diagnostics business thrive
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-[#1F2937]/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-[#3B82F6] mb-4">
              <i className="fas fa-dna text-4xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">Genetic Analysis</h3>
            <p className="text-[#9CA3AF] mb-4">
              Process genetic data to identify potential risk factors and
              hereditary conditions.
            </p>
            <a
              href="#"
              className="text-[#3B82F6] hover:underline flex items-center cursor-pointer"
            >
              Learn more <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
          <div className="bg-[#1F2937] rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-[#3B82F6] mb-4">
              <i className="fas fa-microscope text-4xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">Pathology Imaging</h3>
            <p className="text-[#9CA3AF] mb-4">
              Analyze pathology slides and medical imaging with precision beyond
              human capability.
            </p>
            <a
              href="#"
              className="text-[#3B82F6] hover:underline flex items-center cursor-pointer"
            >
              Learn more <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
          <div className="bg-[#1F2937] rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-[#3B82F6] mb-4">
              <i className="fas fa-heartbeat text-4xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">Vital Monitoring</h3>
            <p className="text-[#9CA3AF] mb-4">
              Continuous analysis of patient vitals to detect subtle changes and
              predict complications.
            </p>
            <a
              href="#"
              className="text-[#3B82F6] hover:underline flex items-center cursor-pointer"
            >
              Learn more <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
          <div className="bg-[#1F2937] rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-[#3B82F6] mb-4">
              <i className="fas fa-pills text-4xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Treatment Optimization
            </h3>
            <p className="text-[#9CA3AF] mb-4">
              Personalized treatment recommendations based on patient-specific
              data and outcomes.
            </p>
            <a
              href="#"
              className="text-[#3B82F6] hover:underline flex items-center cursor-pointer"
            >
              Learn more <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationCard;
