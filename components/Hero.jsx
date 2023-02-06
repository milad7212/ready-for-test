import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className=" flex flex-col space-y-6  py-10 lg:h-[32rem] lg:flex-row lg:items-center lg:py-16">
      <div className="w-full lg:w-1/2">
        <div className="lg:max-w-lg">
          <h1 className="inline-block text-2xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
            آماده شو برای آزمون مثل
            <span className="inline-block text-[#A32C1D]">موشک</span>
          </h1>
          <div className="mt-8 space-y-5">
            <Item text="آسان در استفاده" />
            <Item text="تسلط سریع " />
            <Item text="تضمین قبولی در آزمون" />
          </div>
        </div>
      </div>
      <div className="flex h-96 w-full items-center justify-center lg:w-1/2">
        <Image
          width={500}
          height={500}
          className=" h-full  rounded-xl shadow-lg"
          src="/images/foundation/icon.jpg"
          alt="glasses photo"
        />
      </div>
    </div>
  );
}

export default Hero;

function Item({ text }) {
  return (
    <p className="-mx-2 flex items-center text-gray-700 dark:text-gray-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mx-2 h-6 w-6 text-blue-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span className="mx-2">{text}</span>
    </p>
  );
}
