import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import SecondHeader from "../components/SecondHeader.js";
import Link from "next/link"; // Import Link from next/link

const BlogPage = () => {
  return (
    <>
      <SecondHeader />
      <div
        className="relative text-white h-72 bg-cover bg-center"
        style={{ backgroundImage: "url('/page-bg.jpg')" }} // Replace with your image URL
      >
        {/* Overlay for darker background */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center h-full space-y-4">
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-center">Blog</h1>

          {/* Breadcrumb */}
          <p className="flex items-center text-center text-sm space-x-2">
            {/* Home Link */}
            <Link href="/" className="text-white hover:text-yellow-500">
              Home
            </Link>
            <IoIosArrowForward className="mx-2" /> {/* Arrow icon */}
            <span className="text-yellow-500">Blog</span>
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="text-white py-8 px-4 text-center">
        <p>Here is the Blog content!</p>
      </div>
    </>
  );
};

export default BlogPage;
