import React from 'react';
import Image from 'next/image'; // Import Image component

export const Clients = () => {
  return (
    <div
      className="text-white py-10 h-80 relative mt-40"
      style={{
        background: "radial-gradient(circle, rgba(13, 13, 13, 0.9), rgba(13, 13, 13, 0.9) 10%), url('/bg-client.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: 'Helvetica, Arial, sans-serif', // Apply Helvetica font to this section
      }}
    >
      <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-20 text-center px-36"> {/* Reduce gap and padding */}
        <div className="space-y-1"> {/* Reduced space between image and text */}
          <div className="flex justify-center mb-1"> {/* Reduced margin */}
            <Image
              src="/shaf.png"
              alt="Professional Chefs"
              width={48} // Set image width
              height={48} // Set image height
            />
          </div>
          <p className="font-bold text-lg">Professional Chefs</p>
          <p className="text-2xl font-bold">420</p>
        </div>

        <div className="space-y-1">
          <div className="flex justify-center mb-1">
            <Image
              src="/burger-cup.png"
              alt="Items Of Food"
              width={48} // Set image width
              height={48} // Set image height
            />
          </div>
          <p className="font-bold text-lg">Items Of Food</p>
          <p className="text-2xl font-bold">320</p>
        </div>

        <div className="space-y-1">
          <div className="flex justify-center mb-1">
            <Image
              src="/spoon.png"
              alt="Years Of Experience"
              width={48} // Set image width
              height={48} // Set image height
            />
          </div>
          <p className="font-bold text-lg">Years Of Experience</p>
          <p className="text-2xl font-bold">30+</p>
        </div>

        <div className="space-y-1">
          <div className="flex justify-center mb-1">
            <Image
              src="/pizza-slice.png"
              alt="Happy Customers"
              width={48} // Set image width
              height={48} // Set image height
            />
          </div>
          <p className="font-bold text-lg">Happy Customers</p>
          <p className="text-2xl font-bold">220</p>
        </div>
      </div>
    </div>
  );
};
