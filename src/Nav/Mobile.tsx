import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Mobile = ({ openMenu, scroll }) => {
  return (
    <AnimatePresence>
      {openMenu  && (
        <motion.ul
          initial={{
            x: "-100vw",
          }}
          animate={{
            x: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeIn",
          }}
          exit={{
            x: "100vw",
          }}
          className="bg-black w-full h-full fixed top-16 right-0 z-[1000] flex justify-evenly items-center flex-col pb-16 "
        >
          <li
            onClick={() => scroll("intro")}
            className=" cursor-pointer w-full h-full  text-center flex items-center justify-center text-xl font-neue hover:opacity-50 opacity-30 duration-500 hover:after:w-full hover:after:bg-white hover:after:h-1 after:duration-500 after:w-0 relative hover:after:absolute after:bottom-0 after:left-0"
          >
            <p>HOME</p>
          </li>
          <li
            onClick={() => scroll("about")}
            className=" cursor-pointer w-full h-full  text-center flex items-center justify-center text-xl font-neue hover:opacity-50 opacity-30 duration-500 hover:after:w-full hover:after:bg-white hover:after:h-1 after:duration-500 after:w-0 relative hover:after:absolute after:bottom-0 after:left-0"
          >
            <p>ABOUT</p>
          </li>{" "}
          <li
            onClick={() => scroll("works")}
            className=" cursor-pointer w-full h-full  text-center flex items-center justify-center text-xl font-neue hover:opacity-50 opacity-30 duration-500 hover:after:w-full hover:after:bg-white hover:after:h-1 after:duration-500 after:w-0 relative hover:after:absolute after:bottom-0 after:left-0"
          >
            <p>WORKS</p>
          </li>{" "}
          <li
            onClick={() => scroll("contact")}
            className=" cursor-pointer w-full h-full  text-center flex items-center justify-center text-xl font-neue hover:opacity-50 opacity-30 duration-500 hover:after:w-full hover:after:bg-white hover:after:h-1 after:duration-500 after:w-0 relative hover:after:absolute after:bottom-0 after:left-0"
          >
            <p>CONTACT</p>
          </li>
          <li className="block p-[1px] text-xs mx-3 mb-12 w-full rounded-lg bg-gradient-to-r duration-400 from-pink-400 via-red-400 to-yellow-400 hover:to-pink-400 hover:from-red-400 hover:via-yellow-400 hover:shadow-md hover:shadow-yellow-400">
        <a
          href="https://drive.google.com/file/d/19fMVTRg2jat4lAvn4O26DbHo5zuUPrlT/view?usp=drive_open"
          target="_blank"
          className="block p-2 text-xs bg-black rounded-lg hover: text-center text-white text-opacity-70 font-openSauce"
        >
          VIEW RESUME
        </a>
        </li>
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default Mobile;
