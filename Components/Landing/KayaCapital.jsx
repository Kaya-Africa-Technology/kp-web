import React from 'react'
import SubHeader from '../Common/SubHeader'
import Image from 'next/image'
import { BsFillCheckSquareFill } from "react-icons/bs";

function KayaCapital() {
  return (
    <section className='container px-4 mx-auto my-56'>
      <div className="flex flex-col justify-between space-y-10 lg:item-center lg:flex-row">
        <div className="flex-1">
          <SubHeader title="KAYA CAPITAL"/>
          <h1 className="mb-10 text-4xl font-bold text-gray-900">Get capital for your business in minutes</h1>
          
          <div className='flex items-center mb-4'>
            <BsFillCheckSquareFill className='w-8 h-8 mr-5'/>
            <p className="text-base">Apply and receive capital for your business at the simple touch of a button.</p>
          </div>
          <div className='flex items-center'>
            <BsFillCheckSquareFill className='w-8 h-8 mr-5 '/>
            <p className="text-base">Apply and receive capital for your business at the simple touch of a button.</p>
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-0 lg:-mb-56">
              <Image src='/img-placeholder.png' width={580} height={288} alt='decorative image' />
          </div>
        </div>
        
      </div>
      
    </section>
  )
}

export default KayaCapital
