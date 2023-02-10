import React, { useState } from "react";
import BookMarkIcon from "./icons/BookMarkIcon";

import { RiEyeCloseLine, RiEye2Line } from "react-icons/ri";

import {BsFillCaretRightFill,BsFillCaretLeftFill} from "react-icons/bs"
function ItemReadTest({
  data,
  changeQuestion,
  selectAnsQuestion,
  indexQuestion,
  deletedAnsQuestion,
  bookedAnsQuestion,
}) {
  const {
  
    option1,
    option2,
    option3,
    option4,
    year,
    month,
    correctAnswer,
    paragraph,
    pageNumber,
  } = data;
  const [showAnswer, setShowAnswer] = useState(false);
  function onChangeValue(event) {
    selectAnsQuestion(event.target.value, indexQuestion);
  }
  function classForCorrectAns(witchOption) {
    if (witchOption == correctAnswer && showAnswer) {
      return "shadow-test rounded-lg  bg-green-400 px-4 py-2 text-justify text-sm font-bold";
    } else {
      return "";
    }
  }

  return (
    <div className="relative m-2 mx-auto max-w-5xl rounded-lg bg-gray-100   p-3 shadow-md md:p-4 ">
      <p className="my-4  text-justify text-sm font-bold md:text-base">
        {data.question}
      </p>

      <div
        className=" mb-4 flex flex-col   gap-4 py-2"
        onChange={() => onChangeValue(event)}
      >
        <div className="flex ">
          <p className={classForCorrectAns(1)}>1. {option1}</p>
        </div>
        <div className="flex text-justify text-sm">
          <p className={classForCorrectAns(2)}>2. {option2}</p>
        </div>
        <div className="flex text-justify text-sm">
          <p className={classForCorrectAns(3)}>3. {option3}</p>
        </div>
        <div className="flex text-justify text-sm">
          <p className={classForCorrectAns(4)}>4. {option4}</p>
        </div>
      </div>
      {showAnswer && (
        <div className="my-3 flex justify-between">
          <div className="shadow rounded-lg bg-gray-200 px-3 py-2">
            <span className="ml-2 text-xs font-bold">صفحه</span>
            <span className="font-bold">{pageNumber}</span>
          </div>
          <div className="shadow whitespace-nowrap rounded-lg bg-gray-200 px-3 py-2">
            <span className="ml-2 text-xs font-bold">بند</span>
            <span className="font-bold">{paragraph}</span>
          </div>
          <div className="shadow rounded-lg bg-gray-200 px-3 py-2 ">
            <span className=" text-xs font-bold">{`${year}/${month}`}</span>
          </div>
        </div>
      )}
      <div className="flex  items-center  ">
       
        <BsFillCaretRightFill onClick={() => {
            changeQuestion(1);
          }} className="text-ciCurrentLine cursor-pointer hover:scale-105 active:scale-95 " size={25}/>
        
        <BsFillCaretLeftFill onClick={() => changeQuestion(-1)} className="text-ciCurrentLine cursor-pointer hover:scale-105 active:scale-95 " size={25}/>
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

        <BookMarkIcon
          onClick={() => bookedAnsQuestion(indexQuestion)}
          className={` mr-auto duration-200 ease-in active:scale-90 ${
            data.booked ? "fill-ciOrange" : ""
          }`}
        />
      </div>

      { false &&<div className="absolute right-0 left-0 -bottom-4 flex justify-center">
        <p className="flex h-8 w-8 items-center justify-center rounded-full border border-ciTiter bg-gray-50 p-4 font-bold shadow-2xl">
          {data.number}
        </p>
      </div>}
    </div>
  );
}

export default ItemReadTest;
