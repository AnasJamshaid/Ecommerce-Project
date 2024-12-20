import React from 'react';
import SecondHeader from '../components/SecondHeader';
import Breadcrumb from '../components/Breadcrumb'; // Import the Breadcrumb component

const ShopPage = () => {
  const pageTitle = "Our Shop"; // Static title for the page

  // Example Product Data
  const products = [
    { id: 1, title: 'Product 1', price: '$100', image: '/product1.jpg' },
    { id: 2, title: 'Product 2', price: '$120', image: '/product2.jpg' },
    { id: 3, title: 'Product 3', price: '$90', image: '/product3.jpg' },
    { id: 4, title: 'Product 4', price: '$110', image: '/product4.jpg' },
    { id: 5, title: 'Product 5', price: '$130', image: '/product5.jpg' },
    { id: 6, title: 'Product 6', price: '$95', image: '/product6.jpg' },
    { id: 7, title: 'Product 7', price: '$105', image: '/product7.jpg' },
    { id: 8, title: 'Product 8', price: '$115', image: '/product8.jpg' },
    { id: 9, title: 'Product 9', price: '$125', image: '/product9.jpg' },
    { id: 10, title: 'Product 10', price: '$125', image: '/product10.jpg' },
    { id: 11, title: 'Product 11', price: '$125', image: '/product11.jpg' },
    { id: 12, title: 'Product 12', price: '$125', image: '/product12.jpg' },
    { id: 13, title: 'Product 13', price: '$125', image: '/product13.jpg' },
    { id: 14, title: 'Product 14', price: '$125', image: '/product14.jpg' },
    { id: 15, title: 'Product 15', price: '$125', image: '/product15.jpg' },
  ];

  return (
    <>
      <SecondHeader />
      {/* Hero Section */}
      <div
        className="relative text-white h-72 bg-cover bg-center"
        style={{ backgroundImage: "url('/page-bg.jpg')" }} // Replace with your image URL
      >
        {/* Overlay for darker background */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center h-full space-y-4">
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-center">{pageTitle}</h1>

          {/* Breadcrumb */}
          <Breadcrumb />
        </div>
      </div>

      {/* Shop Content */}
      <div className="bg-white py-8 px-4">
        {/* Centered Content with Equal Margins */}
        <div className="max-w-screen-xl mx-auto">
          {/* Sort Section */}
          <div className="flex justify-between items-center mb-6">
            {/* Sort By and Show - Aligned on Same Line */}
            <div className="flex items-center space-x-8">
              {/* Sort By Dropdown */}
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

              {/* Show Dropdown */}
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

          {/* Main Content Area */}
          <div className="grid grid-cols-4">
            {/* Product Grid */}
            <div className="col-span-3 grid grid-cols-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="p-4 text-left" // Removed border and shadow, added left text alignment
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-[300px] h-[260px] object-cover rounded-md mb-4"
                  />
                  {/* Updated font style for the product title */}
                  <h3 className="font-helvetica text-2xl font-[700] text-gray-700">
                    {product.title}
                  </h3>
                  {/* Updated font style for the product price */}
                  <p className="font-inter text-[#FF9F0D] text-lg">{product.price}</p>
                </div>
              ))}
            </div>

            {/* Right Section */}
            <div className="col-span-1 border rounded-md shadow-md p-4">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Filters/Ads Section
              </h2>
              <p className="text-gray-600">
                This space can be used for filters, advertisements, or other
                content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPage;
