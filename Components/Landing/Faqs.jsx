import React, { useState } from "react";
import Image from "next/image";
import { RxCaretUp, RxCaretDown } from "react-icons/rx";
import { Data } from "../../utils/faqs";

function Faqs() {
  const [clicked, setClick] = useState(false);

  const toggle = (index) => {
    if (clicked === index){
        setClick(null)
    }
    setClick(index)
  };

  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <div className="mb-24">
          <h1 className="mb-3 text-3xl font-bold text-center lg:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="text-base text-center text-gray">
            You have questions?We have answers.
          </p>
        </div>

        <div className="flex flex-col items-center justify-between space-x-0 space-y-12 lg:space-x-16 lg:flex-row">
          <div className="w-full basis-1/2">
            <div className="flex flex-col justify-center space-y-7">
              {Data.map((item, index) => {
                return (
                  <>
                    <div classNam="">
                      <div
                        className={`flex items-center justify-between w-full px-5 lg:px-10 py-5 transition-all duration-300 ease-in-out border-b border-darkGray/40 ${
                          clicked === index
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
          <div className="flex-1">
            <Image
              src="/img-placeholder.png"
              width={580}
              height={288}
              alt="decorative image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faqs;
