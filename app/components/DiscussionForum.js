"use client"

import React from 'react'
import { FiSearch } from 'react-icons/fi';
import Image from 'next/image';

import { AiOutlineHeart, AiFillHeart, AiOutlineEye } from "react-icons/ai";
import { BiComment, BiShareAlt } from "react-icons/bi";

const DiscussionForum = () => {
  return (
    
    <div className='w-full overflow-y-scroll' >

        <div className='p-4 text-red-700 text-xl'>
            DISCUSSION FORUM
        </div>
        <div className='pl-24'>
            <div className='pb-2 font-bold'>
                Filters
            </div>

            <div>
                <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow">
                    <div className="flex flex-row ">
                        <div className="justify-left">
                            <span className={`inline-block py-1 px-2.5 mx-1.5 rounded-full bg-red-500 text-white`}>
                                Sector 1
                            </span>
                            <span className={`inline-block py-1 px-2.5 mx-1.5 rounded-full bg-blue-700 text-white`}>
                                Sector 2
                            </span>
                            <span className={`inline-block py-1 px-2.5 mx-1.5 rounded-full bg-yellow-500 text-white`}>
                                Sector 3
                            </span>
                            <span className='pl-5'>

                            <span className="relative rounded-full bg-gray-200 p-2 ">
                                <span className="absolute top-1/2 transform -translate-y-1/2">
                                <FiSearch />
                                </span>
                                <input
                                type="text"
                                className="pl-8 bg-gray-200 focus:outline-none"
                                placeholder="Search here"
                                />
                            </span>
                            </span>

                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10 w-full rounded-lg overflow-hidden shadow-2xl">
           
                <Image 
                    className="w-full"
                    src='/../public/assets/InfibeamAvenues.jpg'
                    width={600}
                    height={200}
                    alt="Picture of the author"/>
                <div className="flex items-start px-4 py-6 bg-white">
                    <Image width={60} height={60} className="rounded-full object-cover mr-4 shadow" 
                    src='/../public/assets/avatar1.jpg'
                     alt="avatar1" />

                    <div className="">
                        <div className="flex items-center justify-between">
                            <p className="text-lg font-semibold text-gray-900 mt-3">Richard Adams 
                            <span className="inline-block text-sm ml-4 py-1 px-2.5 rounded-full bg-red-500 text-white">
                                Sector 1
                            </span>
                            </p>
                          
                            <small className="text-sm -mt-6 text-blue-600">22h ago</small>
                        </div>
                        <p className="mt-3 text-gray-700 text-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse erat ex, aliquet nec metus eget, laoreet facilisis risus. Curabitur hendrerit, metus tempus scelerisque ullamcorper, ex dui mattis dolor.
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
               
            <div className="flex w-full bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-10 max-w-md md:max-w-2xl ">
                <div className="flex items-start px-4 py-6">
                    <Image width={60} height={60} className="rounded-full object-cover mr-4 shadow" 
                    src='/../public/assets/avatar2.jpg'
                     alt="avatar2" />

                    <div className="">
                        <div className="flex items-center justify-between">
                            <p className="text-lg font-semibold text-gray-900 mt-3">Richard Adams 
                            <span className="inline-block text-sm ml-4 py-1 px-2.5 rounded-full bg-red-500 text-white">
                                Sector 1
                            </span>
                            </p>
                          
                            <small className="text-sm -mt-6 text-blue-600">22h ago</small>
                        </div>
                        <p className="mt-3 text-gray-700 text-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse erat ex, aliquet nec metus eget, laoreet facilisis risus. Curabitur hendrerit, metus tempus scelerisque ullamcorper, ex dui mattis dolor.
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

            <div className="flex w-full bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-10 max-w-md md:max-w-2xl ">
                <div className="flex items-start px-4 py-6">
                    <Image width={60} height={60} className="rounded-full object-cover mr-4 shadow" 
                    src='/../public/assets/avatar3.jpg'
                     alt="avatar3" />

                    <div className="">
                        <div className="flex items-center justify-between">
                            <p className="text-lg font-semibold text-gray-900 mt-3">Richard Adams 
                            <span className="inline-block text-sm ml-4 py-1 px-2.5 rounded-full bg-yellow-500 text-white">
                                Sector 3
                            </span>
                            </p>
                          
                            <small className="text-sm -mt-6 text-blue-600">22h ago</small>
                        </div>
                        <p className="mt-3 text-gray-700 text-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse erat ex, aliquet nec metus eget, laoreet facilisis risus. Curabitur hendrerit, metus tempus scelerisque ullamcorper, ex dui mattis dolor.
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

            <div className="flex w-full bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-10 max-w-md md:max-w-2xl ">
                <div className="flex items-start px-4 py-6">
                    <Image width={60} height={60} className="rounded-full object-cover mr-4 shadow" 
                    src='/../public/assets/avatar4.jpg'
                     alt="avatar4" />

                    <div className="">
                        <div className="flex items-center justify-between">
                            <p className="text-lg font-semibold text-gray-900 mt-3">Richard Adams 
                            <span className="inline-block text-sm ml-4 py-1 px-2.5 rounded-full bg-yellow-500 text-white">
                                Sector 3
                            </span>
                            </p>
                          
                            <small className="text-sm -mt-6 text-blue-600">22h ago</small>
                        </div>
                        <p className="mt-3 text-gray-700 text-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse erat ex, aliquet nec metus eget, laoreet facilisis risus. Curabitur hendrerit, metus tempus scelerisque ullamcorper, ex dui mattis dolor.
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
