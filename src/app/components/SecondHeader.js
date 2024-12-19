"use client";

import React from "react";
import { FiSearch } from "react-icons/fi"; // Search Icon
import { FaUser } from "react-icons/fa";   // User Icon
import { FaShoppingCart } from "react-icons/fa"; // Cart Icon
import { usePathname } from "next/navigation"; // Hook to get the current route
import Link from "next/link"; // Import Link from next/link

const SecondHeader = () => {
  const pathname = usePathname(); // Get the current path

  // Function to determine if a link is active
  const isActive = (path) => pathname === path;

  return (
    <header className="bg-black text-white py-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="font-helvetica text-white">Food</span>
          <span className="font-helvetica" style={{ color: "#FF9F0D" }}>tuck</span> {/* Custom color */}
        </div>

        {/* Navigation */}
        <nav className="space-x-6 text-sm font-inter">
          <Link
            href="/"
            className={`${
              isActive("/") ? "text-[#FF9F0D] font-semibold" : "hover:text-[#FF9F0D]"
            }`}
          >
            Home
          </Link>
          <Link
            href="/menu"
            className={`${
              isActive("/menu") ? "text-[#FF9F0D] font-semibold" : "hover:text-[#FF9F0D]"
            }`}
          >
            Menu
          </Link>
          <Link
            href="/blog"
            className={`${
              isActive("/blog") ? "text-[#FF9F0D] font-semibold" : "hover:text-[#FF9F0D]"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/pages"
            className={`${
              isActive("/pages") ? "text-[#FF9F0D] font-semibold" : "hover:text-[#FF9F0D]"
            }`}
          >
            Pages
          </Link>
          <Link
            href="/about"
            className={`${
              isActive("/about") ? "text-[#FF9F0D] font-semibold" : "hover:text-[#FF9F0D]"
            }`}
          >
            About
          </Link>
          <Link
            href="/shop"
            className={`${
              isActive("/shop") ? "text-[#FF9F0D] font-semibold" : "hover:text-[#FF9F0D]"
            }`}
          >
            Shop
          </Link>
          <Link
            href="/contact"
            className={`${
              isActive("/contact") ? "text-[#FF9F0D] font-semibold" : "hover:text-[#FF9F0D]"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Icons */}
        <div className="space-x-4 flex items-center text-lg font-inter">
          <button className="hover:text-[#FF9F0D]">
            <FiSearch />
          </button>
          <button className="hover:text-[#FF9F0D]">
            <FaUser />
          </button>
          <button className="hover:text-[#FF9F0D]">
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </header>
  );
};

export default SecondHeader;
