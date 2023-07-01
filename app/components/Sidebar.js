"use client"

import { useState } from 'react';
import { FiBell, FiChevronDown } from 'react-icons/fi';
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Tulpen_One } from 'next/font/google';

const Sidebar = ({isOpen, setIsOpen}) => {
  // const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <div className='grid grid-cols-4'>
    <div
      className={`bg-blue-800 text-white h-screen fixed 
      ${
        isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in hidden  '
      } 
      fixed  left-0 transition-transform duration-300 transform lg:fixed lg:translate-x-0`}
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-white rounded-full"></div>
          <span className="mx-3 font-semibold text-lg">User Profile</span>
        </div>
        <FiBell className="text-2xl" />
      </div>
      <hr className="my-2 mx-4 border-gray-500" />
      <div className="pl-4">
        <div className="flex items-center py-2">
          <span className="mr-2">Discussion Forum</span>
          <FiChevronDown />
        </div>
        <div className="flex items-center py-2">
          <span className="mr-2">Market Stories</span>
        </div>
        <div className="flex items-center py-2">
          <span className="mr-2">Sentiment</span>
        </div>
        <div className="flex items-center py-2">
          <span className="mr-2">Market</span>
        </div>
        <div className="flex items-center py-2">
          <span className="mr-2">Sector</span>
        </div>
        <div className="flex items-center py-2">
          <span className="mr-2">Watchlist</span>
        </div>
        <div className="flex items-center py-2">
          <span className="mr-2">Events</span>
        </div>
      </div>
      <div
        className={`absolute top-0 right-0 -mr-14 mt-3 z-10 ${
          isOpen ? 'block' : 'hidden'
        } lg:hidden`}
      >
       
      </div>
    </div>
    // </div>
  );
};

export default Sidebar;
