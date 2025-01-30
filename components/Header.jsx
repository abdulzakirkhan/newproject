"use client";

import { useState } from "react";
import { HiSearch } from "react-icons/hi";

const Header = ({ profileName, profileImage }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-[#312E81] px-2 md:px-0 fixed w-full z-50">

    <div className="flex container mx-auto justify-center md:justify-end  items-center text-white m-0b space-x-1 md:space-x-6" style={{height:"94px"}}>
      <button className="non bg-[#3BB537] p3 white px-2 py-2 md:px-4 md:py-3 rounded-md hover:bg-blue-500 transition duration-300">
        Refer and Earn
      </button>

      <div className="relative lg:w-1/4 flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="pl-10  pr-4 py-2 w-[90%] md:w-full rounded-md bg-[#FFFFFF] text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <HiSearch className="absolute right-8 md:right-3 text-gray-400" size={20} />
      </div>

      <div className="flex items-center md:space-x-3">

        <div className="relative">
          <img
            src={"/header/profile.svg"}
            alt="Profile" width={40} height={40}
            className="rounded-full customWidth cursor-pointer"
            onClick={toggleDropdown}
          />

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Profile</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Settings</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Logout</li>
              </ul>
            </div>
          )}
        </div>
        <span className="text-sm">Hello,user</span>

      </div>
    </div>
    </header>
  );
};

export default Header;
