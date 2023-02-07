import React from "react";

function SourceExams() {
  return (
    <>
      <section className="mt-10 mb-9">
        <div className="mx-auto max-w-7xl px-4">
          <div className=" rounded-lg bg-white pt-3 pb-3 pr-6 shadow-sm sm:pt-6 sm:pb-4">
            <p className="text-2xl font-bold text-blue-500">منبع کدام آزمون:</p>

            <div className="flex flex-wrap justify-center py-4">
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-10 mb-9">
        <div className="mx-auto max-w-7xl px-4">
          <div className=" rounded-lg bg-white pt-3 pb-3 pr-6 shadow-sm sm:pt-6 sm:pb-4">
            <p className="text-2xl font-bold text-blue-500">عملکرد کتاب در آزمون ها: </p>

            <div className="flex flex-wrap justify-center py-4">
            <ItemTest title="میانگین" explain='عمران-نظارت' number='12'/>
            <ItemTest title="میانگین" explain='عمران-نظارت' number='12'/>
            <ItemTest title="میانگین" explain='عمران-نظارت' number='12'/>
            <ItemTest title="میانگین" explain='عمران-نظارت' number='12'/>
            <ItemTest title="میانگین" explain='عمران-نظارت' number='12'/>
            <ItemTest title="میانگین" explain='عمران-نظارت' number='12'/>
            <ItemTest title="میانگین" explain='عمران-نظارت' number='12'/>
            <ItemTest title="میانگین" explain='عمران-نظارت' number='12'/>
            <ItemTest title="میانگین" explain='عمران-نظارت' number='12'/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SourceExams;

function Item() {
  return (
    <div className="relative mx-2 flex h-24 w-24 items-center justify-center rounded-lg border  bg-gray-100 shadow-xl">
      <p className="absolute top-1 right-2    text-xs font-bold ">عمران</p>
      <p className="font-bold">نظارت</p>
    </div>
  );
}

function ItemTest({ title = "title", explain = "explain", number = "" }) {
  return (
    <>
      <div className="flex mx-2 my-4 items-start justify-between rounded-xl bg-white p-4 shadow border border-gray-300">
        <div className="flex items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg border  bg-gray-100">
            <span className="font-bold text-xl">{number}</span>
            <span className="mr-[2px] text-xs">%</span>
          </div>
          <div className="mr-4">
            
            <h2 className=" font-semibold">{explain}</h2>
          </div>
        </div>
      </div>
    </>
  );
}
