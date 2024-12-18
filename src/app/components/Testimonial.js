"use client";

import React, { useState } from "react";
import Image from "next/image"; // Import Image from next/image

export const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Testimonial Data
  const testimonials = [
    {
      image: "/person1.jpg", // Updated image path to public folder
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",
      name: "Alamin Hasan",
      designation: "Food Specialist",
      rating: 4,
    },
    {
      image: "/person2.jpg", // Updated image path to public folder
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",
      name: "Sara Khan",
      designation: "Designer",
      rating: 5,
    },
    {
      image: "/person3.jpg", // Updated image path to public folder
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",
      name: "John Doe",
      designation: "Developer",
      rating: 4,
    },
  ];

  // Handle dot click to switch testimonials
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col items-center py-16 px-32">
      {/* Header Section */}
      <div className="text-left mb-10 w-full">
        <h1 className="text-3xl font-great-vibes text-[#FF9F0D] mb-2 ml-8">
          Testimonials
        </h1>
        <h2 className="text-4xl font-helvetica font-extrabold text-white ml-8">
          What our clients are saying
        </h2>
      </div>

      {/* Testimonial Card */}
      <div className="bg-white text-black rounded-lg shadow-lg p-8 max-w-xl mt-9 relative">
        {/* Profile Image */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <Image
            src={testimonials[currentIndex].image}
            alt="Client"
            className="w-20 h-20 rounded-full border-4 border-white"
            width={80} // Define width
            height={80} // Define height
          />
        </div>
        {/* Testimonial Content */}
        <div className="mt-8 text-center">
          <div className="text-[#FF9F0D] text-4xl mb-4">❝</div>
          <p className="text-gray-600 mb-6">
            {testimonials[currentIndex].quote}
          </p>
          {/* Star Rating */}
          <div className="flex justify-center mb-4">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <span key={i} className="text-[#FF9F0D] text-xl">
                ★
              </span>
            ))}
            {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
              <span key={i} className="text-gray-400 text-xl">
                ★
              </span>
            ))}
          </div>
          {/* Client Info */}
          <h3 className="text-xl font-bold">
            {testimonials[currentIndex].name}
          </h3>
          <p className="text-sm text-gray-500">
            {testimonials[currentIndex].designation}
          </p>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-[#FF9F0D]" : "bg-gray-400"
            }`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>

      <div>
        {/* Positioned Image */}
        <Image
          src="/leaf3.png" // Updated image path to public folder
          alt="Sample"
          className="absolute ml-60 -mt-64 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rotate-[-40deg] opacity-10"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};
