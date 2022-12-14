import React from "react";

export default function Banner() {
  return (
    <>
      <section className="container px-4 mx-auto mt-10">
        <div className="grid grid-cols-1 gap-4 gap-y-32 md:gap-y-0 lg:grid-cols-2">
          <div className="items-center py-32">
            <h1 className="max-w-lg mb-5 text-5xl font-bold text-white leading-[4rem]">
              Finance your trips with Kayapay.
            </h1>
            <p className="text-base leading-10 text-white w-80 h-14">
              The finance platform for your supply chain.
            </p>
            <div className="flex items-center mt-10 md:space-x-5 md:text-primary">
              <a
                href="#"
                className="mr-5 transition-all duration-500 ease-in-out btn btn-primary hover:scale-110 hover:-translate-y-1"
              >
                Get Started
              </a>
              <a
                href="#"
                className="transition-all duration-500 ease-in-out btn btn-border-primary hover:btn-primary"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute bottom-[-130px] right-0 mt-10 obghtject-right-bottom hidden lg:block">
              <img
                src="/dashboard.png"
                alt="dashboard-image"
                className="w-auto h-auto lg:h-full  bottom-[-1px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
