import Footer from "@/component/footer/Footer";
import Navbar from "@/component/navbar/Navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};
const layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white flex flex-col justify-between relative">
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
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
