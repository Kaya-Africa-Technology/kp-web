import React from "react";
import Image from 'next/image';
import SubHeader from "../Common/SubHeader";

function AboutKaya() {
  return (
    <section className="py-14 bg-lightGray lg:my-5">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between space-y-16 lg:flex-row">
          <div className="flex-1">
            <Image
              src="/img-placeholder.png"
              width={580}
              height={288}
              alt="decorative image"
            />
          </div>
          <div className="flex-1">
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
