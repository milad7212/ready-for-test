import React from "react";
import { HiHome } from "react-icons/hi2";
import { IoIosArrowBack } from "react-icons/io";

function Breadcrumbs({ title, subTitle }) {
  return (
    <nav
      className="mx-4   my-2 flex px-5 py-3 text-gray-700"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center ">
        <li className="inline-flex items-center">
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            <HiHome className="mx-1 text-gray-500" size={20} />
            خانه
          </a>
        </li>
        <Item name={title} />
        <Item name={subTitle} />
      </ol>
    </nav>
  );
}

export default Breadcrumbs;

function Item({ name }) {
  return (
    <li>
      <div className="flex items-center">
        <IoIosArrowBack  className="mx-1"/>
        <a
          href="#"
          className=" text-sm font-bold  text-gray-700 hover:text-blue-600 "
        >
          {name}
        </a>
      </div>
    </li>
  );
}
