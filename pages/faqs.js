import Link from 'next/link'
import React, { useState } from 'react'
import { RxCaretDown, RxCaretUp } from 'react-icons/rx';
import { Data } from '../utils/faqs';

function Faqs() {
    const [clicked, setClick] = useState(false);

    const toggle = (index) => {
        if (clicked === index) {
            setClick(null)
        }
        setClick(index)
    };

    return (
        <>
            <div className='h-24 py-24 text-center bg-[#F8F8F8] mb-10'>
                <h2 className='text-2xl font-bold'>Frequently Ask Questions</h2>
            </div>
            <section className="mb-20 section-container">
                <p className="mb-10 text-base sm:-mb-16">Couldn’t find what you were looking for?<br />write us at <Link href="/"><span className='font-bold'>info@kayapay.com</span></Link></p>
                <div className='flex items-center justify-center'>
                    <div className="flex flex-col justify-center sm:w-[45%] w-full space-y-7">
                        {Data.map((item, index) => {
                            return (
                                <>
                                    <div classNam="">
                                        <div
                                            className={`flex items-center justify-between w-full px-5 lg:px-10 py-5 transition-all duration-300 ease-in-out border-b border-darkGray/40 ${clicked === index
                                                    ? "rounded-t-lg rounded-none mb-4 font-bold"
                                                    : "rounded-lg"
                                                } cursor-pointer bg-lightGray`}
                                            onClick={() => toggle(index)}
                                            key={index}
                                        >
                                            <h1 className="text-lg">{item.question}</h1>
                                            <span>
                                                {clicked ? (
                                                    <RxCaretUp className="text-2xl cursor-pointer text-gray" />
                                                ) : (
                                                    <RxCaretDown className="text-2xl cursor-pointer text-gray" />
                                                )}
                                            </span>
                                        </div>
                                        {clicked === index ? (
                                            <p classNam="text-base tracking-wider pl-5 transition-all duration-500 text-gray">
                                                {item.answer}
                                            </p>
                                        ) : null}
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faqs