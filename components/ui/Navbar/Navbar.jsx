import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { CiSquareCheck } from "react-icons/ci";
import { IoCloseCircleOutline } from "react-icons/io5";
import NavLinksMobile from "./NavLinksMobile";
import {GrFormClose} from 'react-icons/gr'
import Link from "next/link";

const Navbar = () => {

  const [open, setOpen] = useState(false);
  function closeMenu(){
    setOpen(false)
  }

  return (

    <nav className="bg-gray-200 py-3 px-8 shadow-xl">
      <div className="flex items-center justify-between font-medium">
        <div className="flex items-center gap-2">
          <div className="text-3xl md:hidden " onClick={() => setOpen(!open)}>
            {open ? (
              <GrFormClose className="text-gray-500" />
            ) : (
              <AiOutlineMenu className="text-gray-500" />
            )}
          </div>
          <Link href='/'>
          <div className=" mr-4  hover:scale-125 duration-200 ease-out  flex w-full justify-between md:w-auto">
            
            <CiSquareCheck
              src=""
              alt="logo"
              size={35}
              className=" text-ciBackBeauty md:cursor-pointer"
            />
          </div>
          </Link>
          <ul className="hidden items-center gap-8 md:flex ">
            <NavLinks />
          </ul>
        </div>

        <div className="flex items-center gap-4 font-bold">
          {/* <Link href='/login'>
          
          <p className="text-gray-500 transition-all duration-200 ease-out hover:scale-105 hover:text-blue-600">ورود</p>
          </Link>
          <Link href='/register'>
          <p className="text-gray-500 transition-all duration-200 ease-out hover:scale-105 hover:text-blue-600">ثبت نام</p>
          </Link> */}

          {false &&<FaRegUser
            size={30}
            className="cursor-pointer text-gray-500 transition-all duration-200 ease-out hover:scale-105 hover:text-blue-600"
          />}
        </div>
        {/* Mobile nav */}
        <div
          className={`
        fixed top-0 z-50 bottom-0 w-full overflow-y-auto bg-gray-100 p-4 duration-500
        md:hidden ${open ? "right-0" : "right-[-100%]"}
        `}
        >
          <IoCloseCircleOutline
            onClick={() => setOpen(false)}
            size={30}
            className=" mr-auto text-gray-500 active:scale-95"
          />
          <div className="my-4">
            <div className="flex items-center ">
              <CiSquareCheck
                src=""
                alt="logo"
                size={35}
                className=" text-ciBackBeauty md:cursor-pointer"
              />
              <p className="mr-2 font-bold text-gray-800">آماده برای آزمون</p>
            </div>
            <p className="text-left font-black  text-gray-400">
              Ready for test
            </p>
          </div>
          <p className=" mb-4 rounded-lg bg-slate-200 py-2 text-center font-black text-stone-800 shadow-lg">
            فهرست
          </p>

          <NavLinksMobile closeMenu={closeMenu} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
