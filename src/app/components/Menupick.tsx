import React from "react";
import Image from "next/image";

export const Menupick = () => {
  const menuItems = [
    {
      name: "Lettuce Leaf",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "12.5$",
      image: "../menu2.png", // Remove '../' part
    },
    {
      name: "Glow Cheese",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "12.5$",
      image: "../menu3.png",
    },
    {
      name: "Fresh Breakfast",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "14.5$",
      image: "../menu4.png",
    },
    {
      name: "Italian Pizza",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "14.5$",
      image: "../menu5.png",
    },
    {
      name: "Mild Butter",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "12.5$",
      image: "../menu6.png",
    },
    {
      name: "Slice Beef",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "12.5$",
      image: "../menu7.png",
    },
    {
      name: "Fresh Bread",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "12.5$",
      image: "../menu8.png",
    },
    {
      name: "Mushroom Pizza",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "12.5$",
      image: "../menu9.png",
    },
  ];

  return (
    <div className="relative h-full flex flex-col items-center bg-cover bg-center overflow-hidden bg-[#0D0D0D] py-8 mt-52">
      {/* Header Section */}
      <div className="w-full mx-auto px-4 lg:px-8 relative z-10 flex flex-col items-center text-center text-white mb-8">
        <h1 className="text-3xl font-great-vibes text-[#FF9F0D] mb-3">
          Choose & pick
        </h1>
        <h2 className="text-4xl font-helvetica font-extrabold">
          <span className="text-[#FF9F0D]">Fr</span>om Our Menu
        </h2>
      </div>

      {/* Menu Tabs */}
      <div className="flex flex-row space-x-28 text-center mb-8">
        <p className="text-sm font-bold text-[#FF9F0D] cursor-pointer">Breakfast</p>
        <p className="text-sm text-white cursor-pointer">Lunch</p>
        <p className="text-sm text-white cursor-pointer">Dinner</p>
        <p className="text-sm text-white cursor-pointer">Dessert</p>
        <p className="text-sm text-white cursor-pointer">Drink</p>
        <p className="text-sm text-white cursor-pointer">Snack</p>
        <p className="text-sm text-white cursor-pointer">Soups</p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 mb-10">
        {/* Left Image Section */}
        <div className="col-span-1 flex justify-center items-center relative object-contain">
          <Image
            src="/menu1.png" // Update image path
            alt="Main Dish"
            width={304} // Adjust width and height
            height={304}
            className="relative z-10 w-76 h-76 object-cover rotat"
          />
        </div>

        {/* Menu Items Section */}
        <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-2 rounded-lg shadow-lg transition-all hover:shadow-2xl hover:bg-[#333] cursor-pointer"
            >
              <Image
                src={`/assets/${item.image}`} // Corrected path
                alt={item.name}
                width={64} // Adjust dimensions
                height={64}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div className="flex-1 text-white">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
                <p className="text-sm text-[#FF9F0D] font-bold mt-2">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
