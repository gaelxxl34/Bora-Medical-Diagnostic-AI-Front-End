"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const Page = ({ setIsOpen }: Props) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    profession: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    profession: "",
  });

  const professions = [
    "Doctor",
    "Researcher",
    "Data Scientist",
    "Student",
    "Other",
  ];

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      profession: "",
    };
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
      valid = false;
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
      valid = false;
    }
    if (!formData.gender) {
      newErrors.gender = "Please select a gender";
      valid = false;
    }
    if (!formData.profession) {
      newErrors.profession = "Please select a profession";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        // Success
        setIsSuccess(true);
        // Convert FormData to an object
        const formObject = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          gender: formData.gender,
          profession: formData.profession,
          email: formData.email,
        };

        localStorage.setItem("userInfo", JSON.stringify(formObject));

        // Close modal after success message
        setTimeout(() => {
          setIsOpen(false);
          // Reset form after closing
          setTimeout(() => {
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              gender: "",
              profession: "",
            });
            setIsSuccess(false);
          }, 300);
        }, 2000);
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  return (
    <div className="fixed w-screen h-screen top-0 left-0 bg-black/80 flex items-center justify-center z-60 modal-overlay transition-opacity duration-300">
      <div
        className="bg-[#000000] shadow-xl rounded-md max-w-xl w-full mx-4 overflow-hidden transform transition-all duration-300"
        style={{ border: "0.5px solid gray" }}
      >
        {/* Modal Header */}
        <div className="bg-[#3B82F6] text-white px-6 py-4 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">Waiting list</h2>
            <p className="text-indigo-100 text-sm">
              Be the first to know when we launch
            </p>
          </div>
          <div
            className="text-white cursor-pointer text-2xl"
            onClick={handleClose}
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        {/* Modal Body */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-8 flex flex-col items-center">
              <div className="text-[#3B82F6] text-5xl mb-4">
                <Image
                  src="correct_green.svg"
                  width={60}
                  height={60}
                  alt=""
                  className="text-center"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#199f22]">
                Thank You!
              </h3>
              <p className="text-[#9CA3AF]">
                {`You've been added to our waiting list. We'll notify you when we
                launch!`}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-0">
                <label
                  htmlFor="firstName"
                  className="block text-white font-medium mb-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 bg-[#1F2937] text-white ${
                    errors.firstName
                      ? "border-red-500 focus:ring-red-200"
                      : "border-[#3B82F6]/30 focus:ring-[#3B82F6]/20 focus:border-[#3B82F6]"
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="block text-white font-medium mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 bg-[#1F2937] text-white ${
                    errors.lastName
                      ? "border-red-500 focus:ring-red-200"
                      : "border-[#3B82F6]/30 focus:ring-[#3B82F6]/20 focus:border-[#3B82F6]"
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-white font-medium mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 bg-[#1F2937] text-white ${
                    errors.email
                      ? "border-red-500 focus:ring-red-200"
                      : "border-[#3B82F6]/30 focus:ring-[#3B82F6]/20 focus:border-[#3B82F6]"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              {/* <div className="mb-4">
                <label className="block text-white font-medium mb-1">
                  Gender
                </label>
                <div className="flex space-x-4 mt-1">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={formData.gender === "male"}
                      onChange={handleChange}
                      className="form-radio h-4 w-4 text-[#3B82F6] transition duration-150 ease-in-out bg-[#1F2937]"
                    />
                    <span className="ml-2 text-white">Male</span>
                  </label>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={formData.gender === "female"}
                      onChange={handleChange}
                      className="form-radio h-4 w-4 text-[#3B82F6] transition duration-150 ease-in-out bg-[#1F2937]"
                    />
                    <span className="ml-2 text-white">Female</span>
                  </label>
                </div>
                {errors.gender && (
                  <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
                )}
              </div> */}
              <div className="mb-6">
                <label
                  htmlFor="profession"
                  className="block text-white font-medium mb-1"
                >
                  Profession
                </label>
                <div className="relative">
                  <select
                    id="profession"
                    name="profession"
                    value={formData.profession}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg appearance-none bg-[#1F2937] text-white pr-10 focus:outline-none focus:ring-2 ${
                      errors.profession
                        ? "border-red-500 focus:ring-red-200"
                        : "border-[#3B82F6]/30 focus:ring-[#3B82F6]/20 focus:border-[#3B82F6]"
                    }`}
                  >
                    <option value="">Select your profession</option>
                    {professions.map((profession) => (
                      <option key={profession} value={profession}>
                        {profession}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#9CA3AF]">
                    <i className="fa-solid fa-caret-down"></i>
                  </div>
                </div>
                {errors.profession && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.profession}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#3B82F6] hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-button transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-1">
                    <Image
                      src="spin.svg"
                      width={20}
                      height={20}
                      alt="loading"
                      className="animate-spin w-6 h-6"
                    />
                    Processing...
                  </span>
                ) : (
                  "Join waiting list"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
