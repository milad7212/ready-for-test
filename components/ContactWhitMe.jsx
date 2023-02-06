import React from "react";

function ContactWhitMe() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="items-center lg:flex">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
              <span className="text-blue-500">با خبر </span>
              شو
            </h1>
            <p className="mt-4 inline-block text-right text-gray-600 dark:text-gray-400">
              <span className="inline-block">
                زمان ثبت نام آزمون، زمان دریافت کارت و زمان اعلام نتایج به صورت
              </span>
              <span className=" inline-block mx-1  font-bold text-blue-500 ">رایگان</span>
              برای شما ارسال می‌شود
            </p>
            <div className="mt-8 flex flex-col space-y-3 lg:flex-row lg:space-y-0">
              <input
                id="email"
                type="text"
                className="rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
                placeholder="شماره موبایل"
              />
              <button className="w-full transform rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium uppercase tracking-wider text-white transition-colors duration-300 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none lg:mx-4 lg:w-auto">
                ثبت
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 flex w-full items-center justify-center lg:mt-0 lg:w-1/2">
          <img
            className="h-full w-full max-w-md rounded-full  shadow"
            src="/images/foundation/contact.png"
            alt="email illustration vector art"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactWhitMe;
