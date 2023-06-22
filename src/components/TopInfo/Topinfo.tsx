import { useEffect, useState } from "react";
import Logo from "../../assets/20230622_235808.png";
import Desktop from "../../Nav/Desktop";
import { motion } from "framer-motion";

const Topinfo = ({ navBar, scroll, openMenu }) => {
  const [time, setTime] = useState(new Date());
  // const [sec, setSec] = useState(true)

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
      // setSec(!sec)
    }, 1000);
  });

  function padDate(date) {
    if (date < 10) return "0" + date;
    return date;
  }

  return (
    <div className="flex fixed top-0 left-0 w-full  px-2 bg-black z-[1000]   font-neue shadow-sm shadow-gray-800">
      <div className="w-1/2 flex ">

     {
        window.screen.availWidth <= 1024 && <>
         { openMenu ? (
           <p
             className="w-8 text-2xl flex justify-start items-center cursor-pointer opacity-50 "
             onClick={navBar}
           >
             &#x2613;
           </p>
         ) : (
           <p
           className="w-8 text-2xl flex justify-start items-center cursor-pointer opacity-50 "
           onClick={navBar}
           >
             &#x2630;
           </p>
         )}
         </>
     }
        {/* <p>&#x2613;</p> */}
        <motion.div 
        className="flex flex-col justify-center"
        initial={{
          opacity: 0.4
        }}

        animate={{
          opacity: [0.2, 0.4, 0.2]
        }}

        transition={{
          repeat: Infinity,
          duration:2
        }}
        >
          <img src={Logo} alt="LOGO" className="inline-block w-40 p-0 h-20" />
        </motion.div>

        <Desktop scroll={scroll} />
      </div>

      <div className="w-1/2 text-right opacity-50">
        <p className="text-base">
          {padDate(time.getDate()) +
            ":" +
            padDate(time.getMonth() + 1) +
            ":" +
            time.getFullYear()}
        </p>
        <p className="text-base">
          {time.getHours() >= 12
            ? padDate(time.getHours() - 12)
            : padDate(time.getHours())}
          {/* {sec ? ":" : " "} */}
          {":" + padDate(time.getMinutes())}
          {time.getHours() >= 12 ? " PM" : " AM"}
        </p>
      </div>
    </div>
  );
};

export default Topinfo;
