"use client";

import React, { useEffect, useState } from "react";
import SecondHeader from "../components/SecondHeader";
import Breadcrumb from "../components/Breadcrumb";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdOutlineShoppingBag,
} from "react-icons/md";
import { PiGitDiffBold } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { FaSearch, FaStar } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

type Product = {
  id: number;
  title: string;
  price: string; // Regular price (old price)
  salePrice: string; // Sale price (new price)
  image: string;
};


const ShopPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]); // State to store products
  const [currentPage, setCurrentPage] = useState(1); // State to store current page
  const [itemsPerPage] = useState(15); // Number of products per page
  const pageTitle = "Our Shop";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products"); // Adjust the path if needed
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Logic for pagination
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <>
      <SecondHeader />
      <div
        className="relative text-white h-72 bg-cover bg-center"
        style={{ backgroundImage: "url('/page-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative flex flex-col items-center justify-center h-full space-y-4">
          <h1 className="text-4xl font-bold text-center">{pageTitle}</h1>
          <Breadcrumb />
        </div>
      </div>

      <div className="bg-white py-8 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-8 mt-8 ml-5">
              <div className="flex items-center space-x-2">
                <label htmlFor="sortBy" className="text-gray-700 font-semibold">
                  Sort By:
                </label>
                <select
                  id="sortBy"
                  className="border border-gray-300 rounded-md p-2 text-gray-700"
                >
                  <option value="newest">Newest</option>
                  <option value="popular">Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <label htmlFor="show" className="text-gray-700 font-semibold">
                  Show:
                </label>
                <select
                  id="show"
                  className="border border-gray-300 rounded-md p-2 text-gray-700"
                >
                  <option value="default">Default</option>
                  <option value="8">8 per page</option>
                  <option value="16">16 per page</option>
                  <option value="24">24 per page</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 ">
            <div className="col-span-3 grid grid-cols-3 ">
              {currentProducts.map((product) => (
                <div key={product.id} className="p-4 text-left relative group">
                  {/* Image container with hover effect */}
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-[300px] h-[260px] object-cover rounded-md mb-4 transition duration-300 ease-in-out group-hover:opacity-80"
                    />

                    {/* Popup with icons */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                      <div className="flex space-x-4">
                        <button className="p-2 bg-white text-[#FF9F0D]  shadow-lg hover:bg-[#FF9F0D] hover:text-white transition">
                          {/* Icon 1 */}
                          <PiGitDiffBold size={24} />
                        </button>
                        <button className="p-2 bg-white text-[#FF9F0D] shadow-lg hover:bg-[#FF9F0D] hover:text-white transition">
                          {/* Icon 2 */}
                          <MdOutlineShoppingBag size={24} />
                        </button>
                        <button className="p-2 bg-white text-[#FF9F0D] shadow-lg hover:bg-[#FF9F0D] hover:text-white transition">
                          {/* Icon 3 */}
                          <CiHeart size={24} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Product Title and Price */}
                  <h3 className="font-inter text-2xl font-[700] text-gray-700 mt-4">
                    {product.title}
                  </h3>
                  <div className="flex items-center space-x-2 mt-2">
                    <p className="font-inter text-[#FF9F0D] text-lg">
                      {product.price}
                    </p>
                    <p className="font-inter text-gray-500 line-through text-lg">
                      {product.salePrice}
                    </p>
                  </div>
                </div>
              ))}
            </div>

      {/* Filters/Ads Section */}
<div className="col-span-1 p-4 border rounded-md shadow-md max-h-[1600px] bg-white flex flex-col">
  {/* Search Bar */}
  <div className="mb-6">
      <div className="flex items-center border rounded-md shadow-sm bg-[#FFF7ED]">
        <input
          type="text"
          placeholder="Search Product"
          className="w-full px-3 py-2 bg-transparent text-black focus:outline-none"
        />
        <button className="px-4 bg-[#FF9F0D] text-white rounded-r-md flex items-center justify-center">
          <FaSearch className="h-12 w-5" />
        </button>
      </div>
    </div>

  {/* Categories */}
  <div className="mb-6">
    <h3 className="text-lg font-semibold text-gray-700 mb-4">Category</h3>
    <ul className="space-y-2">
      {[
        "Sandwiches",
        "Burger",
        "Chicken Chup",
        "Drink",
        "Pizza",
        "Thé",
        "Non Veg",
        "Uncategorized",
      ].map((category) => (
        <li key={category} className="flex items-center">
          <input type="checkbox" id={category} className="mr-2" />
          <label htmlFor={category} className="text-gray-600">
            {category}
          </label>
        </li>
      ))}
    </ul>
  </div>

  {/* Advertisement */}
  <div className="mb-6 relative w-full max-w-sm mx-auto">
      <img
        src="/shop.jpg" // Replace with your image path
        alt="Ad"
        className="w-full h-[400px] object-cover rounded-md"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-start justify-center px-6 text-white">
        <h4 className="text-lg font-medium">Perfect Taste</h4>
        <h2 className="text-2xl font-bold mt-1">Classic Restaurant</h2>
        <p className="text-[#FF9F0D] font-bold text-3xl mt-2">45.00$</p>
        <button className="flex items-center  text-white font-medium mt-52 text-lg">
          Shop Now <BsArrowRight className="ml-2 text-xl" />
        </button>
      </div>
      
    </div>

{/* Filter by Price */}
<div className="mb-6 p-2">
  <h3 className="text-xl font-semibold text-gray-800 mb-4">
    Filter By Price
  </h3>
  <div className="space-y-4">
    {/* Price Range Slider */}
    <input
      type="range"
      min="0"
      max="8000"
      className="slider w-full h-2 rounded-lg appearance-none cursor-pointer"
    />

    {/* From and Filter Text */}
    <div className="flex justify-between mt-2">
      <span className="text-sm text-gray-600">From $0 to $8000</span>
      <span className="text-sm text-gray-600">Filter</span>
    </div>
  </div>
</div>







  {/* Latest Products */}
  <div className="mb-6">
      <h3 className="text-lg font-semibold  text-gray-700 mb-4">
        Latest Products
      </h3>
      <ul className="space-y-4">
        {["Pizza", "Cupcake", "Cookies", "Sandwich"].map((product, index) => (
          <li key={index} className="flex items-center space-x-4">
            {/* Product Image */}
            <img
              src="/pizza.jpg"
              alt={product}
              className="w-16 h-16 object-cover rounded-md"
            />
            {/* Product Details */}
            <div className="text-gray-700">
              <h4 className="font-semibold text-md">{product}</h4>
              {/* Star Ratings */}
              <div className="flex space-x-1 text-sm">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < 3 ? "text-[#FF9F0D]" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              {/* Product Price */}
              <p className="text-[#FF9F0D] font-medium text-sm">$10.00</p>
            </div>
          </li>
        ))}
      </ul>
    </div>

  {/* Product Tags */}
  <div>
  <h3 className="text-lg font-semibold text-gray-700 mb-4">Product Tags</h3>
  <div className="flex flex-wrap gap-3">
    {[
      "Service",
      "Our Menu",
      "Pizza",
      "Cupcake",
      "Burger",
      "Cookies",
      "Our Shop",
      "Tandoori Chicken",
    ].map((tag) => (
      <span
        key={tag}
        className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-[#FF9F0D] hover:text-white transition-all duration-300"
      >
        {tag}
      </span>
    ))}
  </div>
</div>

</div>


            {/* Pagination */}
            <div className="flex justify-center mt-14 ml-[500px]">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 mx-2 border border-[#FF9F0D] text-[#FF9F0D] rounded-md disabled:opacity-50"
              >
                <MdKeyboardDoubleArrowLeft />
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`px-4 py-2 mx-2 border border-[#FF9F0D] text-[#FF9F0D] rounded-md ${
                    currentPage === index + 1 ? "bg-[#FF9F0D] text-white" : ""
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 mx-2 border border-[#FF9F0D] text-[#FF9F0D] rounded-md disabled:opacity-50"
              >
                <MdKeyboardDoubleArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPage;
