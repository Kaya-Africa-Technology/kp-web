import Image from 'next/image'
import React from 'react'
import SubHeader from '../Components/Common/SubHeader'

function about() {
  return (
    <>
      <div className='h-24 py-24 text-center bg-[#F8F8F8] mb-10'>
        <h2 className='text-2xl font-bold'>About Us</h2>
      </div>
      <section className="section-container">
        <div className="grid grid-cols-1 mb-20 gap-y-10 lg:place-items-center lg:grid-cols-2 lg:gap-y-0 lg:gap-x-10">
          <div className="w-full">
            <Image
              src="/img-placeholder.png"
              width={580}
              height={288}
              alt="decorative image"
            />
          </div>
          <div className="w-full">
            <SubHeader title="KAYA" />
            <h1 className="mb-10 text-4xl font-bold text-gray-900">About Kayapay</h1>
            <p className="text-base leading-snug mb-7">Lorem ipsum dolor sit amet consectetur. Nam varius lacus lacus suspendisse vitae. Vitae nunc eget tristique malesuada nunc cum aliquam interdum. Fames ut pellentesque semper pellentesque etiam. Sed dapibus facilisis nisi suspendisse porta.</p>
          </div>
        </div>

        <div>
          <h2 className='mb-10 text-4xl font-bold text-center text-gray-900'>About Kaya-pay</h2>
        </div>
        <div className="grid grid-cols-1 mb-20 gap-y-10 lg:place-items-center lg:grid-cols-2 lg:gap-y-0 lg:gap-x-10">
          <div className="w-full">
            <p className="mb-2 text-base leading-snug">Lorem ipsum dolor sit amet consectetur. Nam varius lacus lacus suspendisse vitae. Vitae nunc eget tristique malesuada nunc cum aliquam interdum. Fames ut pellentesque semper pellentesque etiam. Sed dapibus facilisis nisi suspendisse porta.</p>
            <p className="mb-2 text-base leading-snug">Lorem ipsum dolor sit amet consectetur. Nam varius lacus lacus suspendisse vitae. Vitae nunc eget tristique malesuada nunc cum aliquam interdum. Fames ut pellentesque semper pellentesque etiam. Sed dapibus facilisis nisi suspendisse porta.</p>
            <p className="mb-2 text-base leading-snug">Lorem ipsum dolor sit amet consectetur. Nam varius lacus lacus suspendisse vitae. Vitae nunc eget tristique malesuada nunc cum aliquam interdum. Fames ut pellentesque semper pellentesque etiam. Sed dapibus facilisis nisi suspendisse porta.</p>
          </div>
          <div className="w-full">
            <Image
              src="/img-placeholder.png"
              width={580}
              height={288}
              alt="decorative image"
            />
          </div>
        </div>

      </section>
    </>
  )
}

export default about