import React, { useState } from "react";

import { RiEyeCloseLine, RiEye2Line } from "react-icons/ri";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";

import { HiOutlineBookmark } from "react-icons/hi";
const data = {
  title: "نظارت-مهر98",
  number: "11",
  question:
    "کدام‌یک از گزینه‌های زیر در مورد شیشه‌نشکن حرارتی و شیشه تنش‌زدایی‌شده، صحیح نیست ؟",
  option1:
    " شیشه‌نشکن حرارتی مقاومت کمتری نسبت به شیشه تنش زدایی‌شده در برابر ضربه نشان می‌دهد.",
  option2:
    "شیشه نشکن حرارتی مقاومت بیشتری نسبت به شیشه تنش زدایی‌شده در برابر ضربه نشان می‌دهد. ",
  option3:
    "شیشه‌نشکن حرارتی مقاومت بیشتری نسبت به شیشه تنش زدایی‌شده در برابر بار مکانیکی نشان می‌دهد.",
  option4:
    "شیشه‌نشکن حرارتی مقاومت بیشتری نسبت به شیشه تنش زدایی‌شده در برابر تنش حرارتی نشان می‌دهد.",
  correctOption: "1",
  paragraph: "5-14-1-10",
  page: "110",
  book: "5",
};

function ShowItemTest() {
  const {
    number,
    option1,
    option2,
    option3,
    option4,
    title,
    correctOption,
    paragraph,
    page,
  } = data;
  const [showAnswer, setShowAnswer] = useState(false);
  const [booked, setBooked] = useState(false);
  function onChangeValue(event) {
    selectAnsQuestion(event.target.value, indexQuestion);
  }
  function classForCorrectAns(witchOption) {
    if (witchOption == correctOption && showAnswer) {
      return "shadow-test rounded-lg  bg-green-400 px-4 py-2 text-justify text-sm font-bold";
    } else {
      return "";
    }
  }

  return (
    <div className="my-4">
      <p className=" py-4 text-xl font-bold text-gray-800">مثالی از سوالات :</p>
      <div className="relative   mx-auto max-w-5xl rounded-lg bg-gray-100 p-3 shadow-xl md:p-4 ">
        <p className="my-4  text-justify text-sm font-bold md:text-base">
          {data.question}
        </p>

        <div
          className=" mb-4 flex flex-col   gap-4 py-2"
          onChange={() => onChangeValue(event)}
        >
          <div className="flex text-justify  ">
            <p className={classForCorrectAns(1)}>1. {option1}</p>
          </div>
          <div className="flex text-justify ">
            <p className={classForCorrectAns(2)}>2. {option2}</p>
          </div>
          <div className="flex text-justify ">
            <p className={classForCorrectAns(3)}>3. {option3}</p>
          </div>
          <div className="flex text-justify ">
            <p className={classForCorrectAns(4)}>4. {option4}</p>
          </div>
        </div>
        {showAnswer && (
          <div className="my-3 flex justify-between">
            <div className="shadow-page  rounded-lg bg-gray-200 px-3 py-2">
              <span className="ml-2 text-xs font-bold">صفحه</span>
              <span className="font-bold">{page}</span>
            </div>
            <div className="shadow-page  whitespace-nowrap rounded-lg bg-gray-200 px-3 py-2">
              <span className="ml-2 text-xs font-bold">بند</span>
              <span className="font-bold">{paragraph}</span>
            </div>
            <div className="shadow-page  rounded-lg bg-gray-200 px-3 py-2 ">
              <span className="ml-2 text-xs font-bold">{title}</span>
            </div>
          </div>
        )}
        <div className="flex  items-center  ">
          <BsFillCaretRightFill
            onClick={() => {}}
            className="cursor-pointer text-ciCurrentLine hover:scale-105 active:scale-95 "
            size={25}
          />

          <BsFillCaretLeftFill
            onClick={() => {}}
            className="cursor-pointer text-ciCurrentLine hover:scale-105 active:scale-95 "
            size={25}
          />
          {showAnswer ? (
            <RiEye2Line
              size={25}
              onClick={() => setShowAnswer((e) => !e)}
              className="mr-2 cursor-pointer text-green-700 hover:scale-125 "
            />
          ) : (
            <RiEyeCloseLine
              size={25}
              onClick={() => setShowAnswer((e) => !e)}
              className="mr-2  cursor-pointer hover:scale-125 "
            />
          )}
          <HiOutlineBookmark
            size={25}
            onClick={() => {
              setBooked((e) => !e);
            }}
            className={` mr-auto cursor-pointer duration-200 ease-in active:scale-90 ${
              booked ? "fill-ciOrange" : ""
            }`}
          />
        </div>
      </div>
      <p className=" mt-4 font-bold text-gray-800">توضیحات : </p>
      <div className="flex  flex-wrap justify-start items-center md:justify-center gap-6 py-4">
        <div className="flex">
          <BsFillCaretRightFill
            onClick={() => {}}
            className="cursor-pointer text-ciCurrentLine hover:scale-105 active:scale-95 "
            size={25}
          />

          <BsFillCaretLeftFill
            onClick={() => {}}
            className="cursor-pointer text-ciCurrentLine hover:scale-105 active:scale-95 "
            size={25}
          />
          <p className="mr-2">برای جابجایی سوال</p>
        </div>
        <div className="flex">
          {showAnswer ? (
            <RiEye2Line
              size={25}
              onClick={() => setShowAnswer((e) => !e)}
              className="mr-2 cursor-pointer text-green-700 hover:scale-125"
            />
          ) : (
            <RiEyeCloseLine
              size={25}
              onClick={() => setShowAnswer((e) => !e)}
              className="mr-2  cursor-pointer hover:scale-125"
            />
          )}
          <p className="mr-2">
            برای نمایش جواب سوال، شماره صفحه و بند آیین نامه‌ای که سوال ازش آمده
            است.
          </p>
        </div>
        <div className="flex">
          <HiOutlineBookmark
            size={25}
            onClick={() => {
              setBooked((e) => !e);
            }}
            className={` mr-auto cursor-pointer duration-200 ease-in active:scale-90 ${
              booked ? "fill-ciOrange" : ""
            }`}
          />
          <p className="mr-2">برای نشان کردن سوال</p>
        </div>
      </div>
    </div>
  );
}

export default ShowItemTest;
