import React from 'react';
import Image from 'next/image';

function WhyKaya() {
  return (
    <section className='my-20'>
        <div className='flex items-center justify-between flex-wrap gap-8'>
            <div className='lg:w-2/5 sm:w-full m:w-full'>
                <div className='flex flex-nowrap items-center gap-2'>
                    <hr className='w-8' /> 
                    <span className='text-sm text-gray'>WHY KAYAPAY</span>
                </div>
                <p className='max-w-[80%]'>We are building the financial services platform to power any supply chain.</p>
                <Image src='/img-placeholder.png' width={580} height={288} alt='decorative image' />
            </div>
            <div className='lg:w-fit sm:w-full m:w-full border-2'>
                columns
            </div>
        </div>
    </section>
  )
}

export default WhyKaya
