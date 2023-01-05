import React from 'react'
import { FaFacebook, FaInstagramSquare, FaTwitter } from 'react-icons/fa'
import PageSubHeader from '../Components/Common/PageSubHeader'

function Contact() {
    return (
        <>
            <PageSubHeader textContent="Contact Us" />
            <section className='section-container'>
                <div className="grid grid-cols-1 mb-20 sm:grid-cols-2 gap-y-10 lg:place-items-center lg:gap-y-0 lg:gap-x-10">
                    <div className='sm:w-[80%] w-full'>
                        <form action="">
                            <label htmlFor="name" className='w-full mb-4'>
                                <span className='block text-lg leading-normal'>Name</span>
                                <input type="text" className='contact-input-2' placeholder='Enter your full name' />
                            </label>
                            <label htmlFor="name" className='w-full mb-4'>
                                <span className='block text-lg leading-normal'>Email</span>
                                <input type="email" className='contact-input-2' placeholder='Enter your email' />
                            </label>
                            <label htmlFor="name" className='w-full'>
                                <span className='block text-lg leading-normal'>Business Name</span>
                                <input type="text" className='contact-input-2' placeholder='Enter your business name' />
                            </label>
                            <label htmlFor="message">
                                <span className='block text-lg leading-normal'>Message</span>
                                <textarea name="" id="" cols="30" rows="5" className='resize-none contact-input-2' placeholder='Briefly tell us about your project'></textarea>
                            </label>
                        </form>
                    </div>
                    <div className='w-full'>
                        <div className='mb-7'>
                            <h1 className="mb-3 text-3xl font-bold text-secondary lg:text-4xl">Get in touch</h1>
                            <p className="text-base w-80 text-secondary">Fill out the form and our team will respond within 24 hours.</p>
                        </div>


                        <div className="inline-flex flex-col space-y-0.5 items-start justify-start text-secondary mb-5">
                            <p className="text-base font-bold">Address:</p>
                            <p className="text-base">3 Gbenga Ademulegun Lane Parkview<br />Ikoyi, Lagos</p>
                        </div>

                        <div className="flex flex-col items-start justify-start space-x-0 space-y-3 mb-7 lg:space-x-24 text-secondary lg:justify-start lg:items-center lg:flex-row lg:space-y-0">
                            <div className="inline-flex flex-col items-start space-y-2 lg:justify-start">
                                <p className="text-base font-bold text-gray-50">Phone:</p>
                                <a href="#" className="text-base text-gray-50">+2347034106000</a>
                            </div>
                            <div className="flex flex-col space-y-2.5 items-start lg:justify-start">
                                <p className="text-base font-bold">Email:</p>
                                <a href="#" className="text-base">Info@kayapay.com</a>
                            </div>
                        </div>

                        <div className="inline-flex flex-col space-y-2.5 items-start justify-start mb-20 text-primary/90">
                            <p className="text-base font-bold text-gray-50">Follow Us on:</p>
                            <div className="inline-flex space-x-1.5 items-center justify-between w-full">
                                <a href="#" className="relative group" style={{ width: 47, height: 47, }}>
                                    <div className="w-12 h-12 transition-all duration-300 ease-in-out rounded-full bg-gray group-hover:bg-gray/30" />
                                    <FaTwitter className="absolute inset-0 w-6 h-6 m-auto rounded-lg group-hover:text-blue-400" />
                                </a>
                                <a href="#" className="relative group" style={{ width: 47, height: 47, }}>
                                    <div className="w-12 h-12 transition-all duration-300 ease-in-out rounded-full bg-gray group-hover:bg-gray/30" />
                                    <FaFacebook className="absolute inset-0 w-6 h-6 m-auto rounded-lg group-hover:text-blue-500" />
                                </a>
                                <a href="#" className="relative group" style={{ width: 47, height: 47, }}>
                                    <div className="w-12 h-12 transition-all duration-300 ease-in-out rounded-full bg-gray group-hover:bg-gray/30" />
                                    <FaInstagramSquare className="absolute inset-0 w-6 h-6 m-auto rounded-lg group-hover:text-red-400" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact