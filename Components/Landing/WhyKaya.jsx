import React from "react";
import Image from "next/image";
import SubHeader from "../Common/SubHeader";

function WhyKaya() {
   
  return (
    <section className="container px-4 mx-auto my-24 transition-all duration-500 ease-in-out lg:my-32">
      <div className="grid grid-cols-1 gap-y-10 place-items-center lg:grid-cols-2 lg:gap-10">
        <div className="w-full">
          <SubHeader title="WHY KAYAPAY" />
          <h1 className="max-w-full mb-6 text-3xl font-bold lg:max-w-[90%] lg:text-4xl">
            We are building the financial services platform to power any supply
            chain.
          </h1>
          <Image
            src="/whykaya.jpeg"
            width={580}
            height={288}
            alt="decorative image"
          />
        </div>
        <div className="w-full lg:place-self-end">
          <div className="grid grid-cols-1 gap-y-12 lg:gap-x-10 lg:grid-cols-2 lg:gap-y-20 ">
            <div className="w-full">
              <h1 className="mb-2 text-2xl text-left w-9 lg:text-2xl">01</h1>
              <h2 className="mb-3 text-xl font-bold text-left lg:text-xl">
                Business Loans
              </h2>
              <p className="text-base leading-snug break-all lg:text-base">
                Convert your receivables into instant cash and get credited in
                less than 24 hours.
              </p>
            </div>
            <div>
              <h1 className="mb-2 text-2xl text-left w-9 lg:text-2xl">02</h1>
              <h2 className="mb-3 text-xl font-bold text-left lg:text-xl">
                Multi-Currency Banking
              </h2>
              <p className="text-base leading-snug break-all lg:text-base">
                Convert your receivables into instant cash and get credited in
                less than 24 hours.
              </p>
            </div>
            <div>
              <h1 className="mb-2 text-2xl text-left w-9 lg:text-2xl">03</h1>
              <h2 className="mb-3 text-xl font-bold text-left lg:text-xl">
                Secure Payments
              </h2>
              <p className="text-base leading-snug break-all lg:text-base">
                Convert your receivables into instant cash and get credited in
                less than 24 hours.
              </p>
            </div>
            <div>
              <h1 className="mb-2 text-2xl text-left w-9 lg:text-2xl">04</h1>
              <h2 className="mb-3 text-xl font-bold text-left lg:text-xl">
                Transparent Service
              </h2>
              <p className="text-base leading-snug break-all lg:text-base">
                Convert your receivables into instant cash and get credited in
                less than 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyKaya;
