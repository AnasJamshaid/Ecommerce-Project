"use client";

import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import SecondHeader from "../components/SecondHeader.js";
import { usePathname } from "next/navigation";
import Link from "next/link"; // Import Link from next/link

const Menu = () => {
  const pathname = usePathname(); // Get the current path
  const pathSegments = pathname.split("/").filter((segment) => segment); // Split path into segments

  // Generate the title dynamically from the last segment of the path
  const pageTitle = pathSegments[pathSegments.length - 1]
    ? pathSegments[pathSegments.length - 1].replace(/-/g, " ").toUpperCase()
    : "HOME";

  // Generate the breadcrumb links dynamically
  const breadcrumbs = pathSegments.map((segment, index) => ({
    name: segment.replace(/-/g, " "), // Replace hyphens with spaces
    path: "/" + pathSegments.slice(0, index + 1).join("/"), // Construct the path for each breadcrumb
  }));

  return (
    <>
      <SecondHeader />
      <div
        className="relative text-white h-72 bg-cover bg-center "
        style={{ backgroundImage: "url('/page-bg.jpg')" }} // Replace with your image URL
      >
        {/* Overlay for darker background */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center h-full space-y-4">
          {/* Dynamic Page Title */}
          <h1 className="text-4xl font-bold text-center">{pageTitle}</h1>

          {/* Dynamic Breadcrumb */}
          <p className="flex items-center text-center text-sm space-x-2">
            {/* Home link */}
            <Link href="/" className="text-white hover:text-yellow-500">
              Home
            </Link>

            {/* Dynamic Breadcrumb Links */}
            {breadcrumbs.map((breadcrumb, index) => (
              <React.Fragment key={index}>
                <IoIosArrowForward className="mx-2" /> {/* Arrow icon */}
                <Link
                  href={breadcrumb.path}
                  className={`hover:underline ${
                    index === breadcrumbs.length - 1
                      ? "text-yellow-500"
                      : "text-white hover:text-yellow-500"
                  }`}
                >
                  {breadcrumb.name}
                </Link>
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </>
  );
};

export default Menu;
