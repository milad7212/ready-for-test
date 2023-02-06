import React, { useState } from "react";

import { links } from "./Mylinks";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function NavLinksMobile() {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div className="group mb-1 rounded-md bg-blue-100 py-3 px-3 text-right shadow ">
            <h1
              className="group flex items-center justify-between  "
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="inline text-xl ">
                {heading === link.name ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </h1>
          </div>

          <div
            className={` 
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {link.sublinks.map((slinks, index) => (
              <div key={index}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="mb-1 mt-3 flex items-center justify-between rounded-lg bg-gray-100 py-4  pl-7 pr-5 font-semibold  shadow "
                  >
                    {slinks.Head}

                    <span className="inline text-xl">
                      {subHeading === slinks.Head ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </span>
                  </h1>
                  <div
                    className={`rounded-sm bg-gray-100  ${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink, index) => (
                      <div
                        key={index}
                        className="mb-1  shadow rounded-sm py-2 pr-6 font-bold"
                      >
                        {slink.name}
                      </div>
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
}

export default NavLinksMobile;
