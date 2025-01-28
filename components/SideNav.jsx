"use client"


import React, { useState } from 'react';
import Image from 'next/image';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev); // Toggle the sidebar state
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev); // Toggle the dropdown menu
  };

  return (
    <div
      className={`absolute h-[83vh] md:h-auto z-50 ${!isCollapsed ? "-left-6 " : "left-0"} top-[94] md:left-0 p-0 m-0 ${isCollapsed ? 'w-46' : 'w-10 md:w-20'} border-2 transition-all duration-300 bg-[#FFFFFF]`}
    >
      <div className="flex flex-col items-center m-0 p-0 w-full xl:h-[120vh]">
        {/* Top section with profile and sidebar toggle */}
        <div
          className={`flex ${!isCollapsed ? 'px-3' : ''} py-6 items-center space-x-3 border-b-2 relative`}
        >
          <button
            className={`bg-bg w-[23] h-[23] rounded-full flex justify-center items-center absolute ${!isCollapsed ? "-right-3" : "-right-9"} top-7`}
            onClick={toggleSidebar}
          >
            <Image src={"/icons/sidebar/arrow.svg"} width={8} height={8} alt="" />
          </button>

          {/* Profile section with dropdown */}
          <div className="relative">
            <img
              src={"/header/profile.svg"}
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full cursor-pointer"
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

          {/* Display the user text only when the sidebar is expanded */}
          {isCollapsed && <span className="text-sm">Hello, User</span>}
        </div>

        {/* Sidebar Menu Items */}
        <div className="flex flex-col gap-4 items-start">
          <div className="flex flex-col content-end items-start p-4 space-y-6">
            <div className="flex items-center space-x-3">
              <Image src={"/icons/sidebar/orders.svg"} width={17} height={19} alt="Orders" />
              {isCollapsed && <span className="text-sm">Orders</span>}
            </div>
            <div className="flex items-center space-x-3">
              <Image src={"/icons/sidebar/payment.svg"} width={18} height={18} alt="Payment History" />
              {isCollapsed && <span className="text-sm">Payment History</span>}
            </div>
            <div className="flex items-center space-x-3">
              <Image src={"/icons/sidebar/wallet.svg"} width={18} height={17} alt="Wallet" />
              {isCollapsed && <span className="text-sm">Wallet</span>}
            </div>
            <div className="flex items-center space-x-3">
              <Image src={"/icons/sidebar/chatt.svg"} width={19} height={19} alt="Chat" />
              {isCollapsed && <span className="text-sm">Chat</span>}
            </div>
            <div className="flex items-center space-x-3">
              <Image src={"/icons/sidebar/rewards.svg"} width={19} height={18} alt="Rewards" />
              {isCollapsed && <span className="text-sm">Rewards</span>}
            </div>
            <div className="flex items-center space-x-3">
              <Image src={"/icons/sidebar/terms.svg"} width={19} height={18} alt="Terms & Conditions" />
              {isCollapsed && <span className="text-sm">Terms & Conditions</span>}
            </div>
            <div className="flex items-center space-x-3">
              <Image src={"/icons/sidebar/agent.svg"} width={16} height={14} alt="Switch to Agent" />
              {isCollapsed && <span className="text-sm">Switch to Agent</span>}
            </div>
            <div className="flex items-center space-x-3">
              <Image src={"/icons/sidebar/delete.svg"} width={16} height={14} alt="Delete Account" />
              {isCollapsed && <span className="text-sm">Delete Account</span>}
            </div>
          </div>

          {/* Logout Section */}
          <div className="p-4">
            <button>
              <Image src={"/icons/sidebar/Logout.svg"} width={17} height={18} alt="Logout" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
