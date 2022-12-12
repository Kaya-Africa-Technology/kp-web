import React from 'react';
import Image from 'next/image';
import SubHeader from '../Common/SubHeader';

function WhyKaya() {
  return (
    <section className='container px-4 mx-auto my-24 lg:my-32'>
        <div className='flex flex-col flex-wrap justify-between space-y-10 lg:space-y-0 lg:items-center lg:flex-row'>
            <div className='flex-1'>
              <SubHeader title="WHY KAYAPAY"/>
                <p className='max-w-[100%] font-bold text-3xl lg:text-2xl mb-6'>We are building the financial services platform to power any supply chain.</p>
                <Image src='/img-placeholder.png' width={580} height={288} alt='decorative image' />
            </div>
            <div className="flex-1 w-full">
                <div className='grid grid-cols-1 lg:gap-x-20 lg:grid-cols-2 lg:gap-y-20 gap-y-12'>
                    <div>
                        <h1 className="mb-2 text-2xl text-left w-9 lg:text-3xl">01</h1>
                        <h2 className="mb-3 text-xl font-bold text-left lg:text-2xl">Business Loans</h2>
                        <p className="h-12 text-base w-80" >Convert your receivables into instant cash and get credited in less than 24 hours.</p>
                    </div>
                    <div>
                        <h1 className="mb-2 text-2xl text-left w-9 lg:text-3xl">02</h1>
                        <h2 className="mb-3 text-xl font-bold text-left lg:text-2xl">Multi-Currency Banking</h2>
                        <p className="h-12 text-base w-80" >Convert your receivables into instant cash and get credited in less than 24 hours.</p>
                    </div>
                    <div>
                        <h1 className="mb-2 text-2xl text-left w-9 lg:text-3xl">03</h1>
                        <h2 className="mb-3 text-xl font-bold text-left lg:text-2xl">Secure Payments</h2>
                        <p className="h-12 text-base w-80" >Convert your receivables into instant cash and get credited in less than 24 hours.</p>
                    </div>
                    <div>
                        <h1 className="mb-2 text-2xl text-left w-9 lg:text-3xl">04</h1>
                        <h2 className="mb-3 text-xl font-bold text-left lg:text-2xl">Transparent Service</h2>
                        <p className="h-12 text-base w-80" >Convert your receivables into instant cash and get credited in less than 24 hours.</p>
                    </div>
            </div>
            </div>
           
        </div>
    </section>
  )
}

export default WhyKaya
