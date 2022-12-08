import React from 'react';
import Image from 'next/image';
import { BsFillCheckSquareFill } from "react-icons/bs";

function KayaCapital() {
    return (
    <section className='my-20 mx-4'>
        <div className='flex items-center justify-between flex-wrap lg:flex-nowrap gap-20'>
            <div className='lg:w-3/5 sm:w-full m:w-full'>
                <div className='flex flex-nowrap items-center gap-2'>
                    <hr className='w-8' /> 
                    <span className='text-sm text-gray'>KAYAPAY CAPITAL</span>
                </div>
                <p className='max-w-[80%] mb-7 mt-3 leading-8 font-bold text-2xl'>Get capital for your business in minutes.</p>
                <div className='flex flex-col gap-[23px] basis-1/3 flex-nowrap grow'>
					<span className='flex inline-flex items-center'>
						<BsFillCheckSquareFill className='mr-5'/>
						Apply and receive capital for your business at the simple touch of a button.
					</span>	
					<span className='flex inline-flex items-center'>
						<BsFillCheckSquareFill className='mr-5'/>
						Request capital for trading with international manufacturers and businesses.
					</span>
                </div>
            </div>
            <div className='lg:w-1/3 sm:w-full m:w-full flex justify-around flex-wrap gap-[50px] max-w-[850px]'>
              <Image src='/img-placeholder.png' width={580} height={288} alt='decorative image' />
            </div>
        </div>
    </section>
    )
}

export default KayaCapital

