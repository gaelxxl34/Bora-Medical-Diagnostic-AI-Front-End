import Footer from "@/component/footer/Footer";
import Navbar from "@/component/navbar/Navbar";
import NewsLetter from "@/component/newsletter/NewsLetter";
import React from "react";

type Props = {
  children: React.ReactNode;
};
const layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <NewsLetter />
      <Footer />
    </>
  );
};

export default layout;
