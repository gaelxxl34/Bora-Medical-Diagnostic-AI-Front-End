"use client";
import WaitListForm from "@/component/waitListForm";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState<string>("");
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check if file is a video
    if (!file.type.startsWith("video/")) {
      alert("Please upload a video file");
      return;
    }

    setIsUploading(true);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 300);

    // Create preview URL
    const previewUrl = URL.createObjectURL(file);
    setVideoPreview(previewUrl);
  };

  const handleAnalyze = () => {
    if (!message && !videoPreview) {
      alert("Please enter symptoms or upload a video for analysis");
      return;
    }

    setIsAnalyzing(true);

    // Simulate analysis process
    setTimeout(() => {
      setIsAnalyzing(false);
      // Here you would typically handle the response from the AI
    }, 3000);
  };

  const handleClear = () => {
    setMessage("");
    setVideoPreview(null);
    setUploadProgress(0);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // const currentDate = new Date().toLocaleDateString("en-US", {
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // });

  useEffect(() => {
    // Si l'utilisateur n'est pas identifié, active le formulaire
    const storedUser = localStorage.getItem("userInfo");

    let timer: ReturnType<typeof setTimeout>;
    if (!storedUser) {
      timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
    }
    return () => {
      if (!storedUser) clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen  text-white flex flex-col">
      {isOpen && <WaitListForm setIsOpen={setIsOpen} isOpen={isOpen} />}

      {/* side page */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* <aside className="w-full md:w-64 bg-[#1F2937] p-4 md:min-h-[calc(100vh-64px)] hidden md:block">
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-[#9CA3AF]">System Online</span>
            </div>
            <p className="text-xs text-[#9CA3AF]">{currentDate}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3 text-[#9CA3AF] uppercase">
              Quick Actions
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 p-2 hover:bg-[#374201] rounded cursor-pointer">
                <Image src="history.svg" alt="" width={15} height={15} />
                <span className="text-sm">Recent Analyses</span>
              </li>
              <li className="flex items-center space-x-2 p-2 hover:bg-[#374151] rounded cursor-pointer">
                <Image src="save.svg" alt="" width={15} height={15} />
                <span className="text-sm">Saved Reports</span>
              </li>
              <li className="flex items-center space-x-2 p-2 hover:bg-[#374151] rounded cursor-pointer">
                <Image src="doctor.svg" alt="" width={15} height={15} />
                <span className="text-sm">Expert Consultation</span>
              </li>
              <li className="flex items-center space-x-2 p-2 hover:bg-[#374151] rounded cursor-pointer">
                <Image src="chart.svg" alt="" width={15} height={15} />
                <span className="text-sm">Medical Records</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3 text-[#9CA3AF] uppercase">
              Recent Activity
            </h3>
            <div className="space-y-3">
              <div className="p-2 bg-[#111827] rounded">
                <p className="text-xs font-medium">Brain Scan Analysis</p>
                <p className="text-xs text-[#9CA3AF]">Yesterday, 15:30</p>
              </div>
              <div className="p-2 bg-[#111827] rounded">
                <p className="text-xs font-medium">Symptom Evaluation</p>
                <p className="text-xs text-[#9CA3AF]">Apr 21, 2025</p>
              </div>
              <div className="p-2 bg-[#111827] rounded">
                <p className="text-xs font-medium">Follow-up Diagnosis</p>
                <p className="text-xs text-[#9CA3AF]">Apr 19, 2025</p>
              </div>
            </div>
          </div>
        </aside> */}

        {/* Content Area */}
        <div className="flex-1 p-4 md:p-8 max-w-4xl mx-auto w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Welcome to Bora Ai Medical Diagnostics
            </h1>
            <p className="text-[#9CA3AF] max-w-2xl mx-auto">
              Our advanced AI system analyzes symptoms and brain scan videos to
              provide preliminary diagnosis of neurological conditions. Describe
              symptoms or upload a video for analysis.
            </p>
          </div>

          <div className="bg-[#1F2937] rounded-xl p-6 mb-6 shadow-lg">
            <div className="mb-4">
              <textarea
                className="w-full bg-[#111827] text-white rounded-xl p-4 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] resize-none"
                placeholder="Describe the symptoms or upload a video for analysis..."
                value={message}
                onChange={handleMessageChange}
              ></textarea>
            </div>

            {videoPreview && (
              <div className="mb-4 relative">
                <video
                  src={videoPreview}
                  className="w-full h-64 object-cover rounded-lg"
                  controls
                ></video>
                <button
                  onClick={() => setVideoPreview(null)}
                  className="absolute top-2 right-2 bg-[#111827] p-1 rounded-full cursor-pointer"
                >
                  <Image src="cross_white.svg" alt="" width={20} height={20} />
                </button>
              </div>
            )}

            {isUploading && (
              <div className="mb-4">
                <div className="h-2 bg-[#111827] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#3B82F6] transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-[#9CA3AF] mt-1">
                  Uploading: {uploadProgress}%
                </p>
              </div>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <button
                  onClick={triggerFileUpload}
                  className="bg-[#111827] hover:bg-[#374151] text-white p-2 rounded-lg flex items-center space-x-2 cursor-pointer !rounded-button whitespace-nowrap"
                >
                  <Image src="camera.svg" alt="" width={25} height={20} />
                  <span className="hidden sm:inline">Upload Video</span>
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="video/*"
                  onChange={handleFileUpload}
                />
                <span className="text-xs text-[#9CA3AF]">Max 3 min video</span>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handleClear}
                  className="hidden sm:inline bg-[#111827] hover:bg-[#374151] text-white px-4 py-2 rounded-lg cursor-pointer !rounded-button whitespace-nowrap"
                >
                  Clear
                </button>
                <button
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className={`bg-[#3B82F6] hover:bg-[#2563EB] text-white px-4 py-2 rounded-lg flex items-center space-x-2 cursor-pointer !rounded-button whitespace-nowrap ${
                    isAnalyzing ? "opacity-75" : ""
                  }`}
                >
                  {isAnalyzing ? (
                    <>
                      <Image
                        src="spin.svg"
                        alt="loading"
                        width={20}
                        height={20}
                        className="animate-spin w-6 h-6"
                      />
                      <span>Analyzing...</span>
                    </>
                  ) : (
                    <>
                      <Image
                        src="brain_white.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                      <span>Analyze</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
