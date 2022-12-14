import React from "react";
import SubHeader from "../Common/SubHeader";

function Sponsor() {
  return (
    <section className="my-24 section-container lg:my-20">
      <SubHeader title="KAYA" />
      <h1 className="mb-10 text-4xl font-bold text-gray-900">Our Sponsor</h1>
      <div className="flex items-center justify-center">
         <div className="grid grid-cols-2 gap-5 lg:grid-cols-8">
          <img src="/brand.svg" alt="" width="200" height="30" />
          <img src="/brand.svg" alt="" width="200" height="30" />
          <img src="/brand.svg" alt="" width="200" height="30" />
          <img src="/brand.svg" alt="" width="200" height="30" />
          <img src="/brand.svg" alt="" width="200" height="30" />
          <img src="/brand.svg" alt="" width="200" height="30" />
          <img src="/brand.svg" alt="" width="200" height="30" />
        </div>
      </div>
    </section>
  );
}

export default Sponsor;
