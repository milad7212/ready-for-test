import React, { useState } from "react";

import { links } from "./Mylinks";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Link from "next/link";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div className="group px-3 text-right md:cursor-pointer">
            <h1
              className="group flex items-center justify-between pr-5 md:pr-0"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="inline text-xl md:hidden">
                {heading === link.name ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>

              <IoIosArrowDown className="mr-2" />
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute  top-10 hidden hover:md:block group-hover:md:block">
                  <div className="py-3">
                    <div
                      className="absolute right-3 mt-1 h-4 
                    w-4 rotate-45 bg-white"
                    ></div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 rounded-lg bg-white p-5 shadow-lg">
                    {link.sublinks.map((mysublinks) => (
                      <div key={index}>
                        <h1 className="rounded-lg bg-gray-100 px-2 py-1 text-lg font-semibold">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink, index) => (
                          <li
                            key={index}
                            className="my-2.5 pr-2 text-sm text-gray-600 transition-all duration-150 ease-out hover:font-bold hover:text-black"
                          >
                        
                            <Link
                              href={`/${mysublinks.Head}/${slink.name}/`}
                              className="hover:text-primary"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks, index) => (
              <div key={index}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="flex items-center justify-between bg-red-400 py-4 pl-7 pr-5  font-semibold  md:pr-0"
                  >
                    {slinks.Head}

                    <span className="inline text-xl md:mt-1 md:ml-2">
                      <a
                        name={`${
                          subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></a>
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14">
                        <a href={slink.link}>{slink.name}</a>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
