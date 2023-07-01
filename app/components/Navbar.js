"use client"

import { FiSearch } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="w-full bg-white  mx-auto px-2 sm:px-4 lg:px-4 ">
        <div className="relative flex items-center justify-between h-16">
        
          <div className="flex items-center pl-4 flex-shrink-0">
          <Link href="/">
              
              <Image
              width={900}
              height={500}
                className="block h-16 w-auto"
                src='/images/GoIndiaLogo.jpg'
                alt="Logo"
              />
            
          </Link>
          </div>
          <div className="flex-1 flex justify-start px-2 lg:ml-6 lg:justify-end">
            <div className="w-full sm:max-w-md lg:max-w-lg">
              <div className="relative">
                <input
                  type="text"
                  className="block w-full pr-10 pl-3 py-2 rounded-md bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-300 sm:text-sm"
                  placeholder="Search"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <FiSearch className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center sm:hidden">
          
            <Image width={36} height={36} className="rounded-full object-cover mr-4 shadow" 
                    src='/images/avatar.jpg'
                     alt="avatar" />
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <Link href="/signin" className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Contact Us
              </Link>
              <Link href="/signup" className="text-gray-900 border border-gray-500 hover:bg-gray-700 hover:text-white px-5 py-1.5 rounded-md text-sm font-medium">
                SIGN UP 
              </Link>
              <Link href="/signin" className="text-gray-900 border border-gray-500 hover:bg-gray-700 hover:text-white px-5 py-1.5 rounded-md text-sm font-medium">
                SIGN IN
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
