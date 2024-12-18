// components/GroupComponent.js
import { FaPinterestP, FaTwitter, FaFacebookF } from 'react-icons/fa'; 

const GroupComponent = () => {
  return (
    <div className="relative w-[25.28px] h-[492px] top-[20px] ">
      {/* Line 1 */}
      <div className="absolute w-[158px] h-0  top-[191px] bg-white border border-white rotate-90"></div>

      {/* Line 2 */}
      <div className="absolute w-[147px] h-0  top-[536px] bg-white border border-white rotate-90"></div>

      {/* Group for icons */}
      <div className="absolute left-[64px] top-[300px] w-[25.28px] h-[140px] flex flex-col justify-between items-center">
        <div className="text-white text-xl">
          <FaFacebookF /> {/* React Icon */}
        </div>
        <div className="text-[#FF9F0D] text-2xl my-[10px]">
          <FaTwitter /> {/* React Icon */}
        </div>
        <div className="text-white text-xl">
          <FaPinterestP /> {/* React Icon */}
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
