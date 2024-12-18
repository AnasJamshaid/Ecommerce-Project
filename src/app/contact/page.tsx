import React from "react";
import SecondHeader from "../components/SecondHeader";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link"; // Import Link from next/link

const ContactPage = () => {
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
          <h1 className="text-4xl font-bold text-center">Contact</h1>

          {/* Breadcrumb */}
          <p className="flex items-center text-center text-sm space-x-2">
            {/* Home Link */}
            <Link href="/" className="text-white hover:text-yellow-500">
              Home
            </Link>
            <IoIosArrowForward className="mx-2" /> {/* Arrow icon */}
            <span className="text-yellow-500">Contact</span>
          </p>
        </div>
      </div>

      {/* Additional Contact Content */}
      <div className="text-white text-center mt-8">
        <p>Here is the Contact content!</p>
      </div>
    </>
  );
};

export default ContactPage;
