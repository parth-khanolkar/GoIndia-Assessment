"use client"
import React, { useState } from 'react'
import CompanyWidget from './components/CompanyWidget'
import DiscussionForum from './components/DiscussionForum'
import MarketStories from './components/MarketStories'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import TradingViewTicker from './components/TradingViewTicker'
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";



function Home() {
  const [isOpen, setIsOpen] = useState(false);
  
  const [activeTab, setActiveTab] = useState(1);

  const buttonStyleActive = {
    border: 'none',
    borderBottom: '3px solid red',
    padding: '8px 16px',
    // Add any other styles you want
  };
  const buttonStyle = {
    border: 'none',
    // borderBottom: '3px solid green',
    padding: '8px 16px',
    // Add any other styles you want
  };

  function handleClick() {
    setIsOpen(!isOpen)
    console.log('increment like count');
  }


  return (
    <>
    <Navbar/>
    <TradingViewTicker />
    <CompanyWidget />
    <div className="w-full md:hidden">
      <div className="items-center justify-center mb-2 flex flex-row ">
        <button
          style={activeTab === 1 ? buttonStyleActive :  buttonStyle }
          className={` py-2 w-1/2 flex-1 ${
            activeTab === 1 ? 'bg-[#132842] text-white ' : 'bg-[#1d3b61] text-white'
          }`}
          onClick={() => setActiveTab(1)}
        >
          Discussion Forum
        </button>
        <button
          style={activeTab === 2 ? buttonStyleActive :  buttonStyle }
          className={`py-2 w-1/2 flex-1 ${
            activeTab === 2 ? 'bg-[#132842] text-white ' : 'bg-[#1d3b61] text-white'
          }`}
          onClick={() => setActiveTab(2)}
        >
          Market Stories
        </button>
      </div>
      {activeTab === 1 && <DiscussionForum />}
      {activeTab === 2 && <MarketStories />}
    </div>

    <div className='md:grid md:grid-cols-12 gap-2 invisible md:visible bg-gray-100'>
      <div className={`${isOpen ? 'md:col-span-2' : 'hidden'}`}>
        <Sidebar setIsOpen={setIsOpen} isOpen={isOpen}/>       
      </div>
      <div className={`${isOpen ? 'md:col-span-6' : 'md:col-span-7 mx-2'}`} >
        <div className="fixed left-0 top-1/2 transform -translate-y-1/2">
          {
            isOpen ? (
              <button className="w-8 text-2xl bg-blue-600 text-white h-12 hidden" onClick={handleClick}>
                <MdArrowBackIosNew />
              </button>
            ) : 
            (
              <button className="w-8 text-2xl bg-blue-600 text-white h-12" onClick={handleClick}>
                <MdArrowForwardIos />
              </button>
            )
          }
          
        </div>
        <DiscussionForum/>
      </div>
      <div className='md:col-span-4 mx-2'>
        <MarketStories/>
      </div>

    </div>
    </>
  )
}

export default Home;
// export default React.memo(Home);