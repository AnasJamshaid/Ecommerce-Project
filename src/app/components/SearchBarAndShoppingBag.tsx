// components/SearchBarAndShoppingBag.js


import { HiMiniShoppingBag } from "react-icons/hi2";
import { LuSearch } from "react-icons/lu";


const SearchBarAndShoppingBag = () => {
  return (
    <div className="flex items-center space-x-4">
      {/* Search Icon inside the Search Bar */}
      <div className="flex items-center bg-transparent border-2 border-[#FF9F0D] rounded-full px-3 py-2">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent text-white placeholder-white ml-2 focus:outline-none"
        />
        <LuSearch className="text-white" size={24} />
      </div>

      {/* Shopping Bag Icon */}
      <HiMiniShoppingBag className="text-white" size={23} />
    </div>
  );
};

export default SearchBarAndShoppingBag;
