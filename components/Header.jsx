"use client";

import { ClipboardDocumentIcon, ShareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { HiSearch } from "react-icons/hi";

const Header = ({ profileName, profileImage }) => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [copied, setCopied] = useState(false);
const pathname = usePathname();
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  const copyToClipboard = () => {
    navigator.clipboard.writeText("https://hybridresearchcenter.app.link/u0Ck3qhUNOb");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const handleInviteClick = () => {
    setShowInviteForm(!showInviteForm)
  }
  const handleClick = () => {
    setShowModal(!showModal)
  }

   // Close modal when clicking outside
  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") {
      setShowModal(false);
    }
  };



  // Close modal on route change
  useEffect(() => {
    setShowModal(false);
  }, [pathname]);
  return (
    <>
    <header className="bg-[#312E81] px-2 md:px-0 fixed w-full z-50">

    <div className="flex container mx-auto justify-center md:justify-end  items-center text-white m-0b space-x-1 md:space-x-6" style={{height:"75px"}}>
      <button onClick={handleClick} className="non bg-[#3BB537] p3 white px-2 py-2 md:px-4 md:py-3 rounded-md hover:bg-blue-500 transition duration-300">
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
        <span className="text-sm">Hello,User</span>

      </div>
    </div>
    </header>

    {showModal ? (
       <div id="modal-overlay" className="fixed inset-0 flex justify-center items-center" onClick={handleOutsideClick}>
        <div className="z-50 backdrop-blur-xl border-2 w-1/2 rounded-xl shadow-lg fixed top-48" style={{left:"30%"}}>
          <button onClick={handleClick} className="px-8 py-2">Back</button>
          <div className="mb-8 pt-12 pb-4">
              <div className="-mt-12">
                <input
                  type="text"
                  value="https://hybridresearchcenter.app.link/u0Ck3qhUNOb"
                  readOnly
                  className="pr-16 ms-6 border border-gray-300 rounded-lg py-3 px-4" style={{width:"70%"}}
                />
              </div>
              <div className="px-6 mt-3 mb-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div className="mt-4">
                    <h2 className="text-2xl font-semibold text-gray-800">Invite Friends, Earn Credits</h2>
                    <p className="text-gray-600 mt-2">Share your referral link and earn rewards for every friend who joins</p>
                    <div className="mt-4 flex items-center">
                      <span className="text-lg font-medium text-gray-700">Total Earned:</span>
                      <span className="ml-2 text-2xl font-bold text-primary">0.05 USD</span>
                    </div>
                  </div>
                  <button
                      onClick={copyToClipboard}
                      className="absolute right-2 top-11 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md flex items-center transition-colors"
                    >
                      <ClipboardDocumentIcon className="w-5 h-5 mr-2" />
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                </div>
              </div>
            </div>
        </div>
       </div>
    ) : ""}
    </>
  );
};

export default Header;