"use client";
import Image from "next/image";
import React, { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsEmailValid(true);
  };
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
      setEmail("");
    } else {
      setIsEmailValid(false);
    }
  };
  return (
    <div className="relative overflow-hidden py-16 bg-transparent">
      <div
        className="absolute inset-0 bg-cover bg-center z-1 filter blur-[140px]"
        style={{
          backgroundImage: `url("bg3.png")`,
        }}
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Dark Overlay */}
      <div className="container mx-auto px-6 md:px-10 relative z-20 bg-transparent">
        <div className="bg-transparent rounded-2xl md:p-12 shadow-xl max-w-4xl mx-auto ">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-sm sm:text-base text-[#9CA3AF] max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest updates on AI
              medical diagnostics technology and research breakthroughs.
            </p>
          </div>
          {isSubscribed ? (
            <div className="flex flex-col items-center bg-green-900/20 border border-green-500 text-green-300 p-4 rounded-lg">
              <Image
                src="correct_green.svg"
                width={25}
                height={25}
                alt=""
                className="text-center"
              />
              {`Thank you for subscribing! You'll receive our updates soon.`}
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col md:flex-row gap-4"
            >
              <div className="flex-grow">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className={`w-full px-4 py-3 bg-[#0D1117] border ${
                    isEmailValid ? "border-[#3B82F6]/30" : "border-red-500"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] text-white`}
                  value={email}
                  onChange={handleEmailChange}
                />
                {!isEmailValid && (
                  <p className="text-red-500 text-sm mt-1">
                    Please enter a valid email address
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="text-sm sm:text-md bg-[#3B82F6] hover:bg-blue-600 px-4 py-3 rounded-lg font-medium transition-colors shadow-xl !rounded-button whitespace-nowrap cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
