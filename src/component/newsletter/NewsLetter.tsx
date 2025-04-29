"use client";
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
      setEmail("");
    } else {
      setIsEmailValid(false);
    }
  };
  return (
    <div className="relative overflow-hidden bg-[#0D1117] py-16 ">
      <div className="container mx-auto px-6">
        <div className="bg-[#0D1117] rounded-2xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto ">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-[#9CA3AF] max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest updates on AI
              medical diagnostics technology and research breakthroughs.
            </p>
          </div>
          {isSubscribed ? (
            <div className="bg-green-900/20 border border-green-500 text-green-300 p-4 rounded-lg text-center">
              <i className="fas fa-check-circle mr-2"></i>
              Thank you for subscribing! You'll receive our updates soon.
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
                className="bg-[#3B82F6] hover:bg-blue-600 px-8 py-3 rounded-lg font-medium transition-colors shadow-lg !rounded-button whitespace-nowrap cursor-pointer"
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
