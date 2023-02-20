import React from "react";

function login() {
  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      <div className="max-w-sm w-full">
        <div className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">ورود</h2>
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
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                رمز
              </label>
              <input
                className="shadow-appearance border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow"
                id="password"
                type="password"
                placeholder="******************"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline focus:shadow"
                type="button"
              >
                ورود
              </button>
              <a
                href="#"
                className="inline-block items-center justify-center px-2 py-1 text-xs font-bold leading-none uppercase tracking-wide bg-gray-200 hover:bg-gray-300 rounded text-gray-500 hover:text-white focus:outline focus:shadow outline-none active:bg-gray-400 active:text-white transition ease-in-out duration-150"
              >
                فراموشی رمز؟
              </a>
            </div>
          </form>
        </div>
        <p className="text-xs italic mt-4 text-gray-500">
          قبلا ثبت نام نکردی؟
          <a
            href="#"
            className="no-underline mr-1 font-bold text-blue-500 hover:text-blue-700 transition ease-in-out duration:150"
          >
            ثبت نام
          </a>
        </p>
      </div>
    </div>
  );
}

export default login;
