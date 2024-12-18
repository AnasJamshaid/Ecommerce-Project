import GroupComponent from "./GroupComponent";
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div
      className="relative h-screen flex flex-col lg:flex-row bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/Bg-Image.jpg')", // Correct the path if needed
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle, rgba(13, 13, 13, 0.9), rgba(13, 13, 13, 0.9) 10%)",
        }}
      ></div>
      <GroupComponent />
      
      {/* Wrapper for the content */}
      <div className="w-full mx-auto px-16 ml-[70px] mt-[50px] lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between h-full">
        
        {/* Hero Content - Left Side */}
        <div className="flex flex-col space-y-6 justify-center items-start text-white w-full lg:w-1/2">
          <h1 className="text-4xl font-great-vibes text-[#FF9F0D] ">
            Its Quick & Amusing!
          </h1>
          <h2 className="text-7xl font-helvetica font-extrabold mb-8 text-white">
            <span className="text-[#FF9F0D]">Th</span>e Art of Speed <br /> Food
            Quality
          </h2>
          <p className="text-lg font-inter font-light mb-8 max-w-screen-sm break-words">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue
          </p>
          <Link href="/menu">
            <button className="bg-[#FF9F0D] text-white py-3 px-8 rounded-full text-lg hover:bg-[#FF8A00] transition duration-300">
              See Menu
            </button>
          </Link>
        </div>

        {/* Image - Right Side */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center lg:mt-0">
          {/* Mint Background Image with Rotation */}
          <div
            className="absolute"
            style={{
              transform: "translate(-140%, -50%) rotate(92deg) scale(5.8)",
              top: "50%",
              left: "90%",
              zIndex: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src="/mint2.png"
              alt="Mint Image"
              width={2000}
              height={2000}
              objectFit="contain"
            />
          </div>

          {/* Circle Background */}
          <div className="absolute mt-[420px] ml-[270px] border-4 border-[#ffffff] rounded-full transform -translate-x-1/2 -translate-y-1/2 lg:w-[420px] lg:h-[420px] xl:w-112 xl:h-112">
            {/* Small Images Around the Circle */}
            <div className="absolute w-full h-full">
              <div
                className="absolute"
                style={{
                  top: "13%",
                  left: "15%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Image
                  src="/food2.png"
                  alt="Small Image 1"
                  width={110}
                  height={110}
                  className="rounded-full"
                />
              </div>
              <div
                className="absolute"
                style={{
                  top: "45%",
                  left: "1%",
                  transform: "translate(-50%, -50%) rotate(20deg)",
                }}
              >
                <Image
                  src="/food3.png"
                  alt="Small Image 2"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <div
                className="absolute"
                style={{
                  top: "71%",
                  left: "5%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Image
                  src="/food4.png"
                  alt="Small Image 3"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              </div>
              <div
                className="absolute"
                style={{
                  top: "90%",
                  left: "22%",
                  transform: "translate(-50%, -50%) rotate(80deg) ",
                }}
              >
                <Image
                  src="/mint.png"
                  alt="Small Image 4"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Central Dish Image - Replaced with Image component */}
          <Image
            src="/food.png"
            alt="Dish"
            width={574}  // Specify width for the Image component
            height={350} // Specify height for the Image component
            className="z-30 mb-28"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
