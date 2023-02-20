import React, { useState } from "react";

function login() {
  const [whichStep, setWhichStep] = useState("phoneNumber");
  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      <div className="max-w-sm w-full">
        <div className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            {whichStep == "phoneNumber" && "  ثبت نام"}
          </h2>
          {whichStep == "phoneNumber" && (
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  موبایل:
                </label>
                <input
                  className="shadow-appearance border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow"
                  id="username"
                  type="text"
                  placeholder="شماره موبایل"
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => setWhichStep("Verification")}
                  className="bg-blue-500 active:scale-95 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline focus:shadow"
                  type="button"
                >
                  دریافت کد
                </button>
              </div>
            </form>
          )}

          {whichStep == "Verification" && (
            <form>
              <div className="mb-4">
                <div className="my-2 text-center text-gray-600  text-sm">
                  کد ارسالی به
                  <span className="mx-1 font-bold">09139939426</span>
                  را وارد نمایید.
                </div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  کد تایید:
                </label>
                <input
                  className="shadow-appearance border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow"
                  id="username"
                  type="text"
                  placeholder=""
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => setWhichStep("set-password")}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline focus:shadow"
                  type="button"
                >
                  تایید
                </button>
                <a
                  href="#"
                  className="inline-block items-center justify-center px-2 py-1 text-xs font-bold leading-none uppercase tracking-wide bg-gray-200 hover:bg-gray-300 rounded text-gray-500 hover:text-white focus:outline focus:shadow outline-none active:bg-gray-400 active:text-white transition ease-in-out duration-150"
                >
                  اصلاح شماره موبایل
                </a>
              </div>
            </form>
          )}

          {whichStep == "set-password" && (
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  رمز عبور:
                </label>
                <input
                  className="shadow-appearance border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow"
                  id="username"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  تکرار رمز عبور:
                </label>
                <input
                  className="shadow-appearance border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow"
                  id="username"
                  type="text"
                  placeholder=""
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline focus:shadow"
                  type="button"
                >
                  ثبت نام
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default login;
