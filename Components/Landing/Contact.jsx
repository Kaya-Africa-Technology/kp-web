import React from 'react'
import { FaTwitter, FaFacebook,FaInstagramSquare } from "react-icons/fa";

function Contact() {
  return (
    <section className='py-16 transition-all duration-500 ease-in-out bg-darkGray'>
        <div className='container px-4 mx-auto my-2'>
            <div className="grid grid-cols-1 transition-all duration-500 ease-in-out gap-y-10 lg:place-items-center lg:grid-cols-2 lg:gap-y-0 lg:gap-x-32">
                <div className='w-full'>
                    <div className=''>
                        <input type="text" className='contact-input' placeholder='Enter your full name' />
                        <input type="text" className='contact-input' placeholder='Enter your email' />
                        <input type="text" className='contact-input' placeholder='Enter your Business name' />
                        <textarea name="" rows="5" className='contact-input' placeholder='Enter your Business name'></textarea>
                        <button type="submit" className='w-full py-3 px-2.5 mb-4 text-base font-medium rounded bg-primary'>Send Message</button>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='mb-7'>
                       <h1 className="mb-3 text-3xl font-bold text-primary/90 lg:text-4xl">Get in touch</h1>
                       <p className="text-base w-80 text-primary/90">Fill out the form and our team will respond within 24 hours.</p> 
                    </div>
                    

                    <div className="inline-flex flex-col space-y-0.5 items-start justify-start text-primary/90 mb-5">
                        <p className="text-base font-bold">Address:</p>
                        <p className="text-base">3 Gbenga Ademulegun Lane Parkview<br/>Ikoyi, Lagos</p>
                    </div>

                    <div className="flex flex-col items-start justify-start space-x-0 space-y-3 mb-7 lg:space-x-24 text-primary/90 lg:justify-start lg:items-center lg:flex-row lg:space-y-0">
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
                            <a href="#" className="relative group" style={{width: 47, height: 47,}}>
                                <div className="w-12 h-12 transition-all duration-300 ease-in-out rounded-full bg-gray group-hover:bg-gray/30"/>
                                <FaTwitter className="absolute inset-0 w-6 h-6 m-auto rounded-lg group-hover:text-blue-400" />
                            </a>
                            <a href="#" className="relative group" style={{width: 47, height: 47,}}>
                                <div className="w-12 h-12 transition-all duration-300 ease-in-out rounded-full bg-gray group-hover:bg-gray/30"/>
                                <FaFacebook className="absolute inset-0 w-6 h-6 m-auto rounded-lg group-hover:text-blue-500" />
                            </a>
                            <a href="#" className="relative group" style={{width: 47, height: 47,}}>
                                <div className="w-12 h-12 transition-all duration-300 ease-in-out rounded-full bg-gray group-hover:bg-gray/30"/>
                                <FaInstagramSquare className="absolute inset-0 w-6 h-6 m-auto rounded-lg group-hover:text-red-400" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact