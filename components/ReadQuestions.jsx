import React, { useState } from "react";

import BookMarkIcon from "./icons/BookMarkIcon";
import ItemReadTest from "./ItemReadTest";

function ReadQuestions({ data }) {


  const [witchQuestion, setWitchQuestion] = useState(0);
  const [questions, setQuestions] = useState(data);

  
  return (
    <>
      <div className="pt-1 px-2 md:pt-6">
        {!!questions.length && (
          <ItemReadTest
            data={questions[witchQuestion]}
            indexQuestion={witchQuestion}
            changeQuestion={changeQuestion}
            selectAnsQuestion={selectAnsQuestion}
            bookedAnsQuestion={bookedAnsQuestion}
          />
        )}
      </div>
      <div
        className=" mt-9 px-2  flex   w-full flex-wrap gap-1 max-w-6xl mx-auto   md:mt-8"
        style={{ direction: "ltr" }}
      >
        {questions?.map((item, index) => (
          <span
            onClick={() => changeCertainQuestion(index)}
            key={index}
            className={`${choiceStyle(
              index
            )} relative flex h-6 w-6 cursor-pointer items-center justify-center rounded-lg text-xs font-bold duration-100 active:scale-90`}
          >
            {index + 1}
            {item.booked && (
              <span className="absolute -top-4 left-0 right-0 flex justify-center">
                <BookMarkIcon className="h-3 w-3 fill-orange-300 " />
              </span>
            )}
          </span>
        ))}
      </div>
    </>
  );

  function changeQuestion(value) {
    let newTest = witchQuestion + value;
    if (newTest >= 0 && newTest < questions.length) {
      setWitchQuestion(newTest);
    }
  }
  function changeCertainQuestion(value) {
    setWitchQuestion(value);
  }

  function choiceStyle(value) {
    if (value == witchQuestion) {
      return "bg-gray-400 shadow-lg -translate-y-1  ";
    } else {
      return "bg-gray-300";
    }
  }

  function selectAnsQuestion(answer, indexQuestion) {
    let newQuestion = [...questions];
    newQuestion[indexQuestion] = {
      ...newQuestion[indexQuestion],
      answer: answer,
    };
    setQuestions(newQuestion);
  }

  function bookedAnsQuestion(indexQuestion) {
    let newQuestion = [...questions];

    if (newQuestion[indexQuestion].booked) {
      newQuestion[indexQuestion] = {
        ...newQuestion[indexQuestion],
        booked: false,
      };
    } else {
      newQuestion[indexQuestion] = {
        ...newQuestion[indexQuestion],
        booked: true,
      };
    }

    setQuestions(newQuestion);
  }
}

export default ReadQuestions;
