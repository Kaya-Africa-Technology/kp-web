import React from "react";
import Image from 'next/image';
import SubHeader from "../Common/SubHeader";

function AboutKaya() {
  return (
    <section className="py-14 bg-lightGray lg:my-5 duration-500 transition-all ease-in-out">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-y-10 lg:place-items-center lg:grid-cols-2 lg:gap-y-0 lg:gap-x-10">
          <div className="w-full">
            <Image
              src="/img-placeholder.png"
              width={580}
              height={288}
              alt="decorative image"
            />
          </div>
          <div className="w-full">
            <SubHeader title="KAYA"/>
            <h1 className="mb-10 text-4xl font-bold text-gray-900">About Kayapay</h1>
            <p className="text-base leading-snug mb-7">Lorem ipsum dolor sit amet consectetur. Nam varius lacus lacus suspendisse vitae. Vitae nunc eget tristique malesuada nunc cum aliquam interdum. Fames ut pellentesque semper pellentesque etiam. Sed dapibus facilisis nisi suspendisse porta.</p>
            <a className="w-40 transition-all duration-300 ease-in-out btn btn-border-secondary hover:btn-secondary ">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutKaya;
