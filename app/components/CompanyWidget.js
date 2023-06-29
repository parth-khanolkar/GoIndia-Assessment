import React from 'react'
import Image from 'next/image'


const CompanyWidget = () => {
  return (
    <>

    <div className="w-full border flex flex-row">
       
        <div className='flex-1'>
            <Image
                src='/../public/assets/apriglobal.jpg'
                width={80}
                height={35}
                alt="Picture of the author"
            />
        </div>
        <div className='flex-1'>
            <Image
                src='/../public/assets/GaneshHousing.jpg'
                width={80}
                height={45}
                alt="Picture of the author"
            />
        </div>
        <div className='flex-1'>
            <Image
                src='/../public/assets/FinoPayments.jpg'
                width={80}
                height={65}
                alt="Picture of the author"
            />
        </div>
        <div className='flex-1'>
            <Image
                src='/../public/assets/DataPatterns.jpg'
                width={80}
                height={45}
                alt="Picture of the author"
            />
        </div>
        <div className='flex-1'>
            <Image
                src='/../public/assets/Hira.jpg'
                width={80}
                height={35}
                alt="Picture of the author"
            />
        </div>


    </div>
    </>
  )
}

export default CompanyWidget
