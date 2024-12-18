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
          <span className="text-white">Food</span>
          <span className="text-yellow-500">luck</span>
        </div>

        {/* Navigation */}
        <nav className="space-x-6 text-sm">
          <Link
            href="/"
            className={`${
              isActive("/") ? "text-yellow-500 font-semibold" : "hover:text-yellow-500"
            }`}
          >
            Home
          </Link>
          <Link
            href="/menu"
            className={`${
              isActive("/menu") ? "text-yellow-500 font-semibold" : "hover:text-yellow-500"
            }`}
          >
            Menu
          </Link>
          <Link
            href="/blog"
            className={`${
              isActive("/blog") ? "text-yellow-500 font-semibold" : "hover:text-yellow-500"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/pages"
            className={`${
              isActive("/pages") ? "text-yellow-500 font-semibold" : "hover:text-yellow-500"
            }`}
          >
            Pages
          </Link>
          <Link
            href="/about"
            className={`${
              isActive("/about") ? "text-yellow-500 font-semibold" : "hover:text-yellow-500"
            }`}
          >
            About
          </Link>
          <Link
            href="/shop"
            className={`${
              isActive("/shop") ? "text-yellow-500 font-semibold" : "hover:text-yellow-500"
            }`}
          >
            Shop
          </Link>
          <Link
            href="/contact"
            className={`${
              isActive("/contact") ? "text-yellow-500 font-semibold" : "hover:text-yellow-500"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Icons */}
        <div className="space-x-4 flex items-center text-lg">
          <button className="hover:text-yellow-500">
            <FiSearch />
          </button>
          <button className="hover:text-yellow-500">
            <FaUser />
          </button>
          <button className="hover:text-yellow-500">
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </header>
  );
};

export default SecondHeader;
