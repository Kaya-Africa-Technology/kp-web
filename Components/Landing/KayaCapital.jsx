import React from 'react'
import SubHeader from '../Common/SubHeader'
import Image from 'next/image'
import { BsFillCheckSquareFill } from "react-icons/bs";

function KayaCapital() {
  return (
    <section className='container px-4 mx-auto my-16 lg:py-20 lg:my-36 duration-500 transition-all ease-in-out'>
      <div className="grid grid-cols-1 gap-y-10 lg:place-items-center lg:grid-cols-2 lg:gap-y-0 lg:gap-x-10">
        <div className="w-full">
          <SubHeader title="KAYA CAPITAL"/>
          <h1 className="mb-10 text-4xl font-bold text-gray-900">Get capital for your business in minutes</h1>
          
          <div className='flex items-center mb-4'>
            <BsFillCheckSquareFill className='w-8 h-8 mr-5 lg:h-5 lg:w-5'/>
            <p className="text-base">Apply and receive capital for your business at the simple touch of a button.</p>
          </div>
          <div className='flex items-center mb-4'>
            <BsFillCheckSquareFill className='w-8 h-8 mr-5 lg:h-5 lg:w-5'/>
            <p className="text-base">Apply and receive capital for your business at the simple touch of a button.</p>
          </div>
          <div className='flex items-center mb-4'>
            <BsFillCheckSquareFill className='w-8 h-8 mr-5 lg:h-5 lg:w-5'/>
            <p className="text-base">Apply and receive capital for your business at the simple touch of a button.</p>
          </div>
          <div className='flex items-center mb-4'>
            <BsFillCheckSquareFill className='w-8 h-8 mr-5 lg:h-5 lg:w-5'/>
            <p className="text-base">Apply and receive capital for your business at the simple touch of a button.</p>
          </div>
        </div>
        <div className="w-full lg:place-self-end">
          <div className="mb-0">
              <Image src='/img-placeholder.png' width={580} height={288} alt='decorative image' />
          </div>
        </div>
        
      </div>
      
    </section>
  )
}

export default KayaCapital
