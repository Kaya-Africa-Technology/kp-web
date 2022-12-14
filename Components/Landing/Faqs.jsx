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
    <section className="py-24 duration-500 transition-all ease-in-out">
      <div className="container px-4 mx-auto">
        <div className="mb-24">
          <h1 className="mb-3 text-3xl font-bold text-center lg:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="text-base text-center text-gray">
            You have questions?We have answers.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-10 duration-500 transition-all ease-in-out lg:place-items-center lg:grid-cols-2 lg:gap-y-0 lg:gap-x-10">
          <div className="w-full">
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
          <div className="w-full">
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
