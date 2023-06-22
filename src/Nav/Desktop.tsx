import React from "react";

const Desktop = ({ scroll }) => {
  return (
    <>
      {window.screen.availWidth > 1024 && (
        <ul className="w-full h-full flex justify-evenly  items-center pb-0">
          <li
            onClick={() => scroll("intro")}
            className=" cursor-pointer w-full h-full  text-center flex items-center justify-center text-base font-neue hover:after:w-full hover:after:bg-white hover:after:h-1 after:duration-500 after:w-0 relative hover:after:absolute after:bottom-0 after:left-0 opacity-50 duration-500"
          >
            <p>HOME</p>
          </li>
          <li
            onClick={() => scroll("about")}
            className=" cursor-pointer w-full h-full  text-center flex items-center justify-center text-base font-neue hover:after:w-full hover:after:bg-white hover:after:h-1 after:duration-500 after:w-0 relative hover:after:absolute after:bottom-0 after:left-0 opacity-50 duration-500"
          >
            <p>ABOUT</p>
          </li>{" "}
          <li
            onClick={() => scroll("works")}
            className=" cursor-pointer w-full h-full  text-center flex items-center justify-center text-base font-neue hover:after:w-full hover:after:bg-white hover:after:h-1 after:duration-500 after:w-0 relative hover:after:absolute after:bottom-0 after:left-0 opacity-50 duration-500"
          >
            <p>WORKS</p>
          </li>{" "}
          <li
            onClick={() => scroll("contact")}
            className=" cursor-pointer w-full h-full  text-center flex items-center justify-center text-base font-neue hover:after:w-full hover:after:bg-white hover:after:h-1 after:duration-500 after:w-0 relative hover:after:absolute after:bottom-0 after:left-0 opacity-50 duration-500"
          >
            <p>CONTACT</p>
          </li>
          <li className="block  text-base p-[1px] w-full rounded-lg bg-gradient-to-r duration-400 from-pink-400 via-red-400 to-yellow-400 hover:to-pink-400 hover:from-red-400 hover:via-yellow-400 hover:shadow-md hover:shadow-yellow-400">
        <a
          href="https://drive.google.com/file/d/1Xo-EeOflpo4PF6MOPqkToPKD1foTYQpH/view"
          target="_blank"
          className="block text-base bg-black rounded-lg hover: text-center text-white text-opacity-70 py-1 px-[1px]"
        >
          VIEW RESUME
        </a>
        </li>
        </ul>
      )}
    </>
  );
};

export default Desktop;
