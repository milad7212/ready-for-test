import React from "react";
import { BiError } from "react-icons/bi";
import { BsCheckSquareFill } from "react-icons/bs";
function WhyUse() {
  return (
    <div className="my-6 flex flex-col gap-6 ">
      <p className="text-center text-2xl font-bold text-gray-900">
        <span className=""> چرا باید از </span>
        <span className=" mx-2 font-black text-rose-600">Ready For Test</span>
        <span className=""> استفاده کرد</span>
      </p>
      <div className="flex flex-wrap justify-center gap-4 ">
        <img
          className="w-80 rounded-3xl"
          src="/images/foundation/engang.jpg"
          alt=""
        />
        <div className="flex w-80 flex-col justify-around">
          <ErrorItem text=" حجم بالای منابع باعث وحشت میشه" />
          <ErrorItem text=" دوره های موجود بازار با ساعات خیلی زیاد" />
          <ErrorItem text=" هزینه دوره ها سر به فلک میرسه" />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex w-80 flex-col justify-around order-2 md:order-1">
          <ErrorItem text="عدم تسلط بر مباحث در جلسه آزمون" />
          <ErrorItem text="ناتوانی بر پیدا کردن کلید واژه" />
          <ErrorItem text="کم آوردن زمان" />
        </div>
        <img
          className="w-80 rounded-3xl order-1 md:order-2"
          src="/images/foundation/engang2.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <img
          className="w-80 rounded-3xl"
          src="/images/foundation/enghappy.jpg"
          alt=""
        />
        <div className="flex w-80 flex-col justify-around ">
          <SuccessItem text="تمامی سوالات  به تفکیک مبحث جدا شده است" />
          <SuccessItem text="هزینه پایین" />
          <SuccessItem text=" تسلط آسان و سریع به مباحث" />
          <SuccessItem text="عدم نیاز به کلید در آزمون" />
        </div>
      </div>
    </div>
  );
}

export default WhyUse;

function ErrorItem({ text }) {
  return (
    <div className="my-2 flex items-center gap-4 font-bold text-slate-900">
      <BiError size={25} className="text-red-600" />
      <p className="">{text}</p>
    </div>
  );
}

function SuccessItem({ text }) {
  return (
    <div className="my-2 flex items-center gap-4 font-bold text-slate-900">
      <BsCheckSquareFill size={25} className="text-green-500 shadow-lg" />
      <p className="">{text}</p>
    </div>
  );
}
