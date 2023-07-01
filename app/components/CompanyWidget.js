import React from 'react'
import Image from 'next/image'


const CompanyWidget = () => {
  return (
    <>
    <div className=' text-red-700 text-lg font-semibold pl-4'>
        FEATURED COMPANIES
    </div>
    <div className="w-full border h-17 flex flex-row">
       
        <div className='flex-1'>
            <Image
                src='/../public/images/apriglobal.jpg'
                width={120}
                height={35}
                className='h-16'
                alt="Picture of the author"
            />
        </div>
        <div className='flex-1'>
            <Image
                src='/../public/images/Gravita.jpg'
                width={180}
                height={60}
                className='h-16'
                alt="Picture of the author"
            />
        </div>
        <div className='flex-1'>
            <Image
                src='/../public/images/GaneshHousing.jpg'
                width={120}
                height={45}
                className='h-14 mt-1'
                alt="Picture of the author"
            />
        </div>
        <div className='flex-1'>
            <Image
                src='/../public/images/FinoPayments.jpg'
                width={100}
                height={80}
                className='h-16'
                alt="Picture of the author"
            />
        </div>
        <div className='flex-1'>
            <Image
                src='/../public/images/DataPatterns.jpg'
                width={120}
                height={100}
                className='h-16'
                alt="Picture of the author"
            />
        </div>
        <div className='flex-1'>
            <Image
                src='/../public/images/Hira.jpg'
                width={110}
                height={60}
                className='h-16'
                alt="Picture of the author"
            />
        </div>


    </div>
    </>
  )
}

export default CompanyWidget
