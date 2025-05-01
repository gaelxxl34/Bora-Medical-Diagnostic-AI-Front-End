import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Documentation | Bora AI Medical Diagnostic",
  description:
    " By leveraging machine learning and data analysis, it analyzes medical videos, patient data, and historical records to provide timely, reliable diagnostic insights, helping to enhance decision-making and improve patient outcomes",
};

const Page = () => {
  return (
    <div className="relative overflow-hidden flex-1 flex flex-col md:flex-row">
      <div
        className="absolute w-screen inset-0 bg-cover bg-center z-0 blur-[200px]"
        style={{
          backgroundImage: `url("bg1.png")`,
        }}
      />
      <div className="relative flex-1 p-4 md:p-8 max-w-4xl mx-auto w-full">
        <div className="bg-[#1F2937] rounded-xl p-6 mb-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Image
              src="question.svg"
              alt=""
              width={30}
              height={30}
              className="mr-2"
            />
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#111827] p-4 rounded-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#3B82F6]/20 mb-3">
                <Image src="symptom.svg" alt="" width={20} height={20} />
              </div>
              <h3 className="font-medium mb-2">Describe Symptoms</h3>
              <p className="text-sm text-[#9CA3AF]">
                Enter detailed symptoms or patient history for AI analysis.
              </p>
            </div>
            <div className="bg-[#111827] p-4 rounded-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#3B82F6]/20  mb-3">
                <Image src="upload.svg" alt="" width={20} height={20} />
              </div>
              <h3 className="font-medium mb-2">Upload Video</h3>
              <p className="text-sm text-[#9CA3AF]">
                Provide brain scan videos for advanced pattern recognition.
              </p>
            </div>
            <div className="bg-[#111827] p-4 rounded-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#3B82F6]/20  mb-3">
                <Image src="result.svg" alt="" width={20} height={20} />
              </div>
              <h3 className="font-medium mb-2">Get Results</h3>
              <p className="text-sm text-[#9CA3AF]">
                Receive preliminary diagnosis with confidence ratings and next
                steps.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#1F2937] rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Image
              src="privacy.svg"
              alt=""
              width={25}
              height={25}
              className="mr-2"
            />
            Privacy & Security
          </h2>
          <p className="text-[#9CA3AF] mb-4">
            All data is processed with strict confidentiality. Your uploads and
            analyses are encrypted and automatically deleted after 30 days
            unless saved to your account.
          </p>
          <div className="flex items-center space-x-2 text-sm text-[#3B82F6]">
            <a href="#" className="hover:underline cursor-pointer">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:underline cursor-pointer">
              Terms of Service
            </a>
            <span>•</span>
            <a href="#" className="hover:underline cursor-pointer">
              Data Handling
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
