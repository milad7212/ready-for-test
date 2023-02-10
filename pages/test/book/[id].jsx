import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {getTest} from '../../../services/testService'
import ReadQuestions from "../../../components/ReadQuestions";


function BookPage() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState([])
  useEffect(() => {
    if (id) {
      async function fetchData() {
        const { data } = await getTest(id);
        
        
        setData(data);
      }
      fetchData();
    }
  }, [id]);
  return (
    <div className="bg-gray-200 ">
      
      <div className={`   flex  min-h-screen    `}>
        <div className="flex w-full justify-center p-4 ">
          {!!data.length &&

          <ReadQuestions data={data} book={id} />
          }
        </div>
      </div>
    </div>
  );
}

export default BookPage;

function Item({ title = "title", explain = "explain", icon }) {
  return (
    <>
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50">
          {icon}
        </div>
        <div className="mr-4">
          <h2 className=" text-sm text-gray-500">{title}</h2>
          <p className="mt-2 font-semibold">{explain}</p>
        </div>
      </div>
    </>
  );
}

function ItemPage({ title = "title", explain = "explain", number }) {
  return (
    <>
      <div className="flex items-start justify-between rounded-xl bg-white p-4 shadow-lg">
        <div className="flex">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-ciBackBeauty bg-ciPink font-black">
            {number}
          </div>
          <div className="mr-4">
            <h2 className=" text-sm text-gray-500">{title}</h2>
            <p className="mt-2 text-sm text-gray-900">{explain}</p>
          </div>
        </div>
      </div>
    </>
  );
}

function ItemTest({ title = "title", explain = "explain", number = "" }) {
  return (
    <>
      <div className="flex items-start justify-between rounded-xl bg-white p-4 shadow-lg">
        <div className="flex">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-ciBackBeauty bg-ciYellow">
            <span className="font-bold">{number}</span>
            <span className="mr-[2px] text-xs">%</span>
          </div>
          <div className="mr-4">
            <h2 className=" text-sm text-gray-500">{title}</h2>
            <p className="mt-2 font-semibold">{explain}</p>
          </div>
        </div>
      </div>
    </>
  );
}
