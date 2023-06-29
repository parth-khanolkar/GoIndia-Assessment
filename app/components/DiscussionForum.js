"use client"

import React from 'react'
import { FiSearch } from 'react-icons/fi';
const DiscussionForum = () => {
  return (
    
    <div className='w-full' >

        <div className='p-4 text-red-700 text-xl'>
            DISCUSSION FORUM
        </div>
        <div className='pl-24'>
            <div className='pb-2 font-bold'>
                Filters
            </div>
            <div>
                <div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow">
                    <div class="flex flex-row ">
                        <div class="justify-left">
                            <span className={`inline-block py-1 px-2.5 mx-1.5 rounded-full bg-red-500 text-white`}>
                                Sector 1
                            </span>
                            <span className={`inline-block py-1 px-2.5 mx-1.5 rounded-full bg-blue-500 text-white`}>
                                Sector 1
                            </span>
                            <span className={`inline-block py-1 px-2.5 mx-1.5 rounded-full bg-green-500 text-white`}>
                                Sector 1
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
        </div>

    </div> 
      
    
  )
}

export default DiscussionForum
