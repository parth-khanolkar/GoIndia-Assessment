"use client"

import { FiSearch } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image'
// import GoIndiaLogo from '../../public/assets/GoIndiaLogo.jpg'

const Navbar = () => {
  return (
    <nav className="">
      <div className="w-full mx-auto px-2 sm:px-4 lg:px-4">
        <div className="relative flex items-center justify-between h-16">
        
          <div className="flex items-center pl-4 flex-shrink-0">
          <Link href="/">
              
              <Image
              width={900}
              height={500}
                className="block h-16 w-auto"
                src='/../public/assets/GoIndiaLogo.jpg'
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
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
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
      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/signup" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Sign Up
          </Link>
          <Link href="/signin" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
