import React from 'react';
import Image from 'next/image';

function WhyKaya() {
    return (
    <section className='my-20'>
        <div className='flex items-center justify-between flex-wrap lg:flex-nowrap gap-20'>
            <div className='lg:w-2/5 sm:w-full m:w-full'>
                <div className='flex flex-nowrap items-center gap-2'>
                    <hr className='w-8' /> 
                    <span className='text-sm text-gray'>WHY KAYAPAY</span>
                </div>
                <p className='max-w-[80%] mb-7 mt-3 leading-8 font-bold text-2xl'>We are building the financial services platform to power any supply chain.</p>
                <Image src='/img-placeholder.png' width={580} height={288} alt='decorative image' />
            </div>
            <div className='lg:w-fit sm:w-full m:w-full flex justify-around flex-wrap gap-[50px] max-w-[850px]'>
                <div className='flex flex-col gap-[50px] flex-nowrap basis-72 grow'>
                    <article>
                        <span className='leading-9 text-3xl' >
                            01
                        </span>
                        <p className='mt-2 font-bold leading-8 mb-3'> Business Loans
                        </p>
                        <p className='leading-5'> Convert your receivables into instant cash and get credited in less than 24 hours.</p>
                    </article>
                    <article>
                        <span className='leading-9 text-3xl' >
                            02
                        </span>
                        <p className='mt-2 font-bold leading-8 mb-3'> Secure Payment
                        </p>
                        <p className='leading-5'> Convert your receivables into instant cash and get credited in less than 24 hours.</p>
                    </article>
                </div>
                <div className='flex flex-col gap-[50px] flex-nowrap basis-72 grow'>
                    <article>
                        <span className='leading-9 text-3xl' >
                            03
                        </span>
                        <p className='mt-2 font-bold leading-8 mb-3'> Secure Payment
                        </p>
                        <p className='leading-5'> Convert your receivables into instant cash and get credited in less than 24 hours.</p>
                    </article>
                    <article>
                        <span className='leading-9 text-3xl' >
                            04
                        </span>
                        <p className='mt-2 font-bold leading-8 mb-3'> Secure Payment
                        </p>
                        <p className='leading-5'> Convert your receivables into instant cash and get credited in less than 24 hours.</p>
                    </article>
                </div>
            </div>
        </div>
    </section>
    )
}

export default WhyKaya
