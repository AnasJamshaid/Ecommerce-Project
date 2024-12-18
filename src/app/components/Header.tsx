"use client";

import React from "react";
import NavigationLinks from "./NavigationLinks";
import SearchBarAndShoppingBag from "./SearchBarAndShoppingBag";
import { usePathname } from "next/navigation"; // Correct hook for Next.js routing

const Header = () => {
  const pathname = usePathname(); // Get the current route in Next.js
  const isHomePage = pathname === "/"; // Check if the current route is the home page

  return (
    <>
      {isHomePage && (
        <header className="absolute top-2 left-0 w-full z-10">
          {/* Container */}
          <div className="max-w-screen-xl mx-auto">
            {/* Logo */}
            <div className="flex justify-center py-5 bg-transparent">
              <div
                className="font-bold"
                style={{
                  fontFamily: "Helvetica",
                  fontSize: "30px",
                  lineHeight: "32px",
                  fontWeight: 700,
                }}
              >
                <span className="text-[#FF9F0D]">Food</span>Tuck
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex justify-between items-center bg-transparent text-white">
              <NavigationLinks />

              {/* Search bar and Shopping Bag Icon */}
              <SearchBarAndShoppingBag />
            </nav>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
