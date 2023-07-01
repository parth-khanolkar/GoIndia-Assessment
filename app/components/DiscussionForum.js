"use client"

import React from 'react'
import { FiSearch } from 'react-icons/fi';
import Image from 'next/image';

import { AiOutlineHeart, AiFillHeart, AiOutlineEye } from "react-icons/ai";
import { BiComment, BiShareAlt } from "react-icons/bi";

const DiscussionForum = () => {
  return (
    
    <div className='w-full ' >

        <div className='m-2 md:pl-20 py-4 text-red-700 text-xl'>
            DISCUSSION FORUM
        </div>
        <div className='m-4 md:pl-24'>
            <div className='pb-2 font-bold'>
                Filters
            </div>

            <div>
                <div className="w-full p-3 lg:py-4 lg:px-2 text-center bg-white border border-gray-200 rounded-lg shadow">
                    <div className="flex flex-row ">
                        <div className="grid grid-cols-12 justify-left">
                            <div className='col-span-8'>
                            <span className={`flex-1 inline-block p-1.5 text-xs lg:text-base lg:py-1 lg:px-2.5 mx-2 rounded-full bg-red-500 text-white`}>
                                Sector 1
                            </span>
                            <span className={`flex-1 inline-block p-1.5 text-xs lg:text-base lg:py-1 lg:px-2.5 mx-2 rounded-full bg-blue-700 text-white`}>
                                Sector 2
                            </span>
                            <span className={`flex-1 inline-block p-1.5 text-xs lg:text-base lg:py-1 lg:px-2.5 mx-2 rounded-full bg-yellow-500 text-white`}>
                                Sector 3
                            </span>

                            </div>
                            <div className='col-span-4'>
                                  
                            <form>   
                                {/* <label for="default-search" className="mb-0.5 lg:mb-2 text-sm font-medium text-gray-900 sr-only">Search</label> */}
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-1 lg:pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    </div>
                                    <input type="search" id="default-search" className="block w-full px-1 py-0.5 pl-6 lg:p-1.5 lg:pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-200 " placeholder="Search here" />
                                </div>
                            </form>

                            </div>
                          

                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10 w-full rounded-lg overflow-hidden shadow-2xl">
           
                <Image 
                    className="w-full"
                    src='/../public/images/InfibeamAvenues.jpg'
                    width={600}
                    height={200}
                    alt="Picture of the author"/>
                <div className="flex items-start px-4 py-6 bg-white">
                    <Image width={60} height={60} className="rounded-full object-cover mr-4 shadow" 
                    src='/../public/images/avatar1.jpg'
                     alt="avatar1" />

                    <div className="">
                        <div className="flex items-center justify-between">
                            <p className="text-md md:text-lg font-semibold text-gray-900 mt-3">Richard Adams 
                            <span className="inline-block text-sm ml-4 md:py-1 px-2.5 rounded-full bg-red-500 text-white">
                                Sector 1
                            </span>
                            </p>
                          
                            <small className="text-xs mt-3 md:text-sm md:-mt-6 text-blue-600">22h ago</small>
                        </div>
                        <p className="mt-3 text-gray-700 text-md">
                        Lorem ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <div className="mt-4 grid grid-cols-12 items-center">
                            <div className="flex col-span-3 flex-row text-xl">
                                <AiFillHeart className='flex-1 mt-1 text-red-600 text-xl'/>
                                <p className='flex-1 text-lg'>2k</p>
                            </div>
                            <div className="flex col-span-3 text-x">
                                <AiOutlineEye className='flex-1 mt-1 text-black text-xl'/>
                                <p className='flex-1 text-lg'>2k</p>
                            </div>
                            <div className="flex col-span-3 flex-row text-xl">
                                <BiComment className='flex-1 mt-1 text-black text-xl'/>
                                <p className='flex-1 text-md'>2k</p>
                            </div>
                            <div className="flex col-span-3 flex-row text-xl">
                                <BiShareAlt className='flex-1 mt-1 text-black text-xl'/>
                                <p className='flex-1 text-lg'>Share</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
               
            <div className="flex bg-white mt-10 w-full rounded-lg overflow-hidden shadow-2xl ">
                <div className="flex items-start px-4 py-6">
                    <Image width={60} height={60} className="rounded-full object-cover mr-4 shadow" 
                    src='/../public/images/avatar2.jpg'
                     alt="avatar2" />

                    <div className="">
                        <div className="flex items-center justify-between">
                            <p className="text-md md:text-lg font-semibold text-gray-900 mt-3">Richard Adams 
                            <span className="inline-block text-sm ml-4 md:py-1 px-2.5 rounded-full bg-blue-700 text-white">
                                Sector 2
                            </span>
                            </p>
                          
                            <small className=" text-xs mt-3 md:text-sm md:-mt-6 text-blue-600">22h ago</small>
                        </div>
                        <p className="mt-3 text-gray-700 text-md">
                        Lorem ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <div className="mt-4 grid grid-cols-12 items-center">
                            <div className="flex col-span-3 flex-row text-xl">
                                <AiOutlineHeart className='flex-1 mt-1 text-red-600 text-xl'/>
                                <p className='flex-1 text-lg'>2k</p>
                            </div>
                            <div className="flex col-span-3 text-x">
                                <AiOutlineEye className='flex-1 mt-1 text-black text-xl'/>
                                <p className='flex-1 text-lg'>2k</p>
                            </div>
                            <div className="flex col-span-3 flex-row text-xl">
                                <BiComment className='flex-1 mt-1 text-black text-xl'/>
                                <p className='flex-1 text-md'>2k</p>
                            </div>
                            <div className="flex col-span-3 flex-row text-xl">
                                <BiShareAlt className='flex-1 mt-1 text-black text-xl'/>
                                <p className='flex-1 text-lg'>Share</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex bg-white mt-10 w-full rounded-lg overflow-hidden shadow-2xl ">
                <div className="flex items-start px-4 py-6">
                    <Image width={60} height={60} className="rounded-full object-cover mr-4 shadow" 
                    src='/../public/images/avatar3.jpg'
                     alt="avatar2" />

                    <div className="">
                        <div className="flex items-center justify-between">
                            <p className="text-md md:text-lg font-semibold text-gray-900 mt-3">Richard Adams 
                            <span className="inline-block text-sm ml-4 md:py-1 px-2.5 rounded-full bg-yellow-500 text-white">
                                Sector 3
                            </span>
                            </p>
                          
                            <small className=" text-xs mt-3 md:text-sm md:-mt-6 text-blue-600">22h ago</small>
                        </div>
                        <p className="mt-3 text-gray-700 text-md">
                        Lorem ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <div className="mt-4 grid grid-cols-12 items-center">
                            <div className="flex col-span-3 flex-row text-xl">
                                <AiOutlineHeart className='flex-1 mt-1 text-red-600 text-xl'/>
                                <p className='flex-1 text-lg'>2k</p>
                            </div>
                            <div className="flex col-span-3 text-x">
                                <AiOutlineEye className='flex-1 mt-1 text-black text-xl'/>
                                <p className='flex-1 text-lg'>2k</p>
                            </div>
                            <div className="flex col-span-3 flex-row text-xl">
                                <BiComment className='flex-1 mt-1 text-black text-xl'/>
                                <p className='flex-1 text-md'>2k</p>
                            </div>
                            <div className="flex col-span-3 flex-row text-xl">
                                <BiShareAlt className='flex-1 mt-1 text-black text-xl'/>
                                <p className='flex-1 text-lg'>Share</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex bg-white mt-10 w-full rounded-lg overflow-hidden shadow-2xl ">
                <div className="flex items-start px-4 py-6">
                    <Image width={60} height={60} className="rounded-full object-cover mr-4 shadow" 
                    src='/../public/images/avatar4.jpg'
                     alt="avatar2" />

                    <div className="">
                        <div className="flex items-center justify-between">
                            <p className="text-md md:text-lg font-semibold text-gray-900 mt-3">Richard Adams 
                            <span className="inline-block text-sm ml-4 md:py-1 px-2.5 rounded-full bg-blue-700 text-white">
                                Sector 2
                            </span>
                            </p>
                          
                            <small className=" text-xs mt-3 md:text-sm md:-mt-6 text-blue-600">22h ago</small>
                        </div>
                        <p className="mt-3 text-gray-700 text-md">
                        Lorem ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <div className="mt-4 grid grid-cols-12 items-center">
                            <div className="flex col-span-3 flex-row text-xl">
                                <AiOutlineHeart className='flex-1 mt-1 text-red-600 text-xl'/>
                                <p className='flex-1 text-lg'>2k</p>
                            </div>
                            <div className="flex col-span-3 text-x">
                                <AiOutlineEye className='flex-1 mt-1 text-black text-xl'/>
                                <p className='flex-1 text-lg'>2k</p>
                            </div>
                            <div className="flex col-span-3 flex-row text-xl">
                                <BiComment className='flex-1 mt-1 text-black text-xl'/>
                                <p className='flex-1 text-md'>2k</p>
                            </div>
                            <div className="flex col-span-3 flex-row text-xl">
                                <BiShareAlt className='flex-1 mt-1 text-black text-xl'/>
                                <p className='flex-1 text-lg'>Share</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            
        </div>

    </div> 
      
    
  )
}

export default DiscussionForum
