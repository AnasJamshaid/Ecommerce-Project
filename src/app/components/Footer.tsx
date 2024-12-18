import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { PiClockClockwiseLight } from "react-icons/pi";
import Image from "next/image";

export const Footer = () => {
  const recentPosts = [
    {
      date: "20 Feb 2022",
      title: "Keep Your Business",
      imgSrc: "/post1.jpg",
    },
    {
      date: "15 Feb 2022",
      title: "Expand Your Reach",
      imgSrc: "/post2.jpg",
    },
    {
      date: "10 Feb 2022",
      title: "Boost Your Profits",
      imgSrc: "/post3.jpg",
    },
  ];

  return (
    <div className="px-8 md:px-16 py-10 mt-12 text-white">
      {/* Top Section: Email Subscribe */}
      <div className="flex flex-wrap justify-between items-center gap-6 mb-10">
        {/* Left Side: Heading and Paragraph */}
        <div className="w-full md:w-1/2 ml-16">
          <h2 className="text-3xl font-helvetica font-extrabold mb-2 leading-tight">
            <span className="text-[#FF9F0D]">St&apos;</span>ill You Need Our
            Support?
          </h2>
          <p className="text-[15px] font-inter font-light leading-relaxed">
            Don&apos;t wait, make a smart & logical quote here. It&apos;s pretty
            easy.
          </p>
        </div>

        {/* Right Side: Email Input and Subscribe Button */}
        <div className="flex items-center justify-end w-full md:w-auto mr-16">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="p-3 rounded-l-md border-none bg-[#FF9F0D] text-white outline-none w-[250px] placeholder:text-white"
          />
          <button className="p-3 bg-white text-[#FF9F0D] rounded-r-md font-bold cursor-pointer">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Orange Line */}
      <div className="w-full h-[2px] bg-[#FF9F0D] mb-8"></div>

      {/* Footer Columns */}
      <div className="flex space-x-8 justify-between gap-8">
        {/* About Us Column */}
        <div className="w-1/4">
          <h3 className="text-lg font-bold mb-4">About Us.</h3>
          <p className="text-sm font-light mb-4 leading-relaxed">
            Corporate clients and leisure travelers have been relying on
            Groundlink for dependable, safe, and professional chauffeured car
            services in major cities across the World.
          </p>
          <div className="flex items-start gap-3">
            <div className="bg-[#FF9F0D] p-2 rounded-full">
              <span className="text-white text-2xl">
                <PiClockClockwiseLight />
              </span>
            </div>
            <div>
              <h4 className="font-semibold">Opening Hours</h4>
              <p className="text-sm font-light">Mon - Sat (8.00 - 6.00)</p>
              <p className="text-sm font-light">Sunday - Closed</p>
            </div>
          </div>
        </div>

        {/* Useful Links Column */}
        <div className="w-1/4">
          <h3 className="text-lg font-bold mb-4">Useful Links</h3>
          <ul>
            {["About", "News", "Partners", "Team", "Menu", "Contacts"].map(
              (link, index) => (
                <li key={index} className="mb-2">
                  <a href="#" className="hover:text-[#FF9F0D]">
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Help Column */}
        <div className="w-1/4">
          <h3 className="text-lg font-bold mb-4">Help?</h3>
          <ul>
            {[
              "FAQ",
              "Term & conditions",
              "Reporting",
              "Documentation",
              "Support Policy",
              "Privacy",
            ].map((item, index) => (
              <li key={index} className="mb-2">
                <a href="#" className="hover:text-[#FF9F0D]">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Post Column */}
        <div className="w-1/4">
          <h3 className="text-lg font-bold mb-4">Recent Post</h3>
          {recentPosts.map((post, index) => (
            <div key={index} className="flex items-center mb-3">
              <Image
                src={post.imgSrc}
                alt="Post Thumbnail"
                className="rounded mr-3 w-14"
                width={56}
                height={56}
              />
              <div>
                <p className="text-xs text-gray-400">{post.date}</p>
                <p className="text-sm hover:text-[#FF9F0D] cursor-pointer">
                  {post.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="w-full text-center mt-8 border-t border-[#333] pt-4 relative">
        <div className="flex justify-between items-center px-4 bg-[rgba(255, 255, 255, 0.1)] backdrop-blur-lg rounded-lg">
          <p className="text-sm text-gray-400">
            Copyright © {new Date().getFullYear()} by Muhammad Anas Jamshaid.
            All Rights Reserved.
          </p>
          <div className="flex space-x-3 relative">
            <a
              href="#"
              className="bg-[#FF9F0D] p-3 rounded-lg hover:bg-[#e6890d] transition duration-300"
            >
              <FaFacebookF className="text-white text-lg" />
            </a>
            <a
              href="#"
              className="bg-[#FF9F0D] p-3 rounded-lg hover:bg-[#e6890d] transition duration-300"
            >
              <FaTwitter className="text-white text-lg" />
            </a>
            <a
              href="#"
              className="bg-[#FF9F0D] p-3 rounded-lg hover:bg-[#e6890d] transition duration-300"
            >
              <FaInstagram className="text-white text-lg" />
            </a>
            <a
              href="#"
              className="bg-[#FF9F0D] p-3 rounded-lg hover:bg-[#e6890d] transition duration-300"
            >
              <FaYoutube className="text-white text-lg" />
            </a>
            <a
              href="#"
              className="bg-[#FF9F0D] p-3 rounded-lg hover:bg-[#e6890d] transition duration-300"
            >
              <FaPinterest className="text-white text-lg" />
            </a>
          </div>
          {/* Positioned Image behind social icons */}
          <Image
            src="/leavefooter.png"
            alt="Sample"
            className="absolute -bottom-10 left-[1305px] transform -translate-x-1/2 w-[300px] h-[300px] opacity-30 z-[-1]"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};
