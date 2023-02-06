import React from "react";

function StartExam() {
  return (
    <div className="flex items-center justify-center gap-2 py-6  font-bold text-zinc-700 text-xl">
      <p className="">زمان تا شروع آزمون بعدی :</p>
      <p className="">
        <span className="animate-pulse">28</span>
        <span className="mr-2">روز</span>
      </p>
    </div>
  );
}

export default StartExam;
