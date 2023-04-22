import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Intro = () => {
  const [num, setNum] = useState(1);

  useEffect(() => {
    setTimeout(() => {
        if (num < 7) {
          setNum(num+1);
        } else {
          setNum(1)
        }  
    }, 500);
  });

  return (
    <div className="mt-12 h-[95vh] px-3 min-h-[700px] pt-8 lg:justify-center w-full flex flex-col justify-evenly">
      <motion.div className="flex flex-col justify-between lg:flex-row-reverse items-start lg:items-center h-full w-full  min-w-fit min-h-fit ">
        <motion.img
          src={`/src/assets/projects/project-${num}.png`}
          alt="Projects image"
          animate={{ y: 0 }}
          initial={{ y: -250 }}
          transition={{ duration: 0.5, type: "tween", ease: "backInOut" }}
          className="w-3/5 md:w-2/3 max-w-[250px] lg:h-40 lg:w-1/5 h-full  mt-3 lg:-mt-8 block"
        />
        <motion.h1
          initial={{
            height: "0px",
          }}
          animate={{
            height: "100%",
          }}
          transition={{ duration: 0.5, ease: "easeIn", delay: 0.5 }}
          className="text-6xl mt-16 lg:mt-0 md:text-9xl bg-clip-text text-start w-full lg:w-3/5 text-transparent flex flex-wrap bg-gradient-to-r duration-200 from-purple-400 via-red-500 to-yellow-400 font-bold"
        >
          <motion.span
            className="bg-clip-text leading-tight my-auto"
            initial={{
              background: "linear-gradient(to right, purple,yellow, purple)",
              opacity: 0,
            }}
            animate={{
              background:
                "linear-gradient(to bottom right , rgb(160, 8, 165) 20%, rgb(165, 8, 8) 70%,  rgb(165, 8, 8) 70%,rgb(111, 147, 0) 10%",
              backgroundClip: "revert-layer",
              opacity: 1,
            }}
            transition={{
              delay: 1,
              duration: 0.8,
              ease: "easeIn",
            }}
          >
            {
               `FRONTEND DEVELOPER`.split(" ").map((item) =>{
                return <span key={item} className="hover:bg-gradient-to-r duration-500 hover:from-purple-400 hover:via-red-500 hover:bg-clip-text hover:text-transparent hover:to-yellow-400">{item} <br></br> </span>
              })
            }
          
          </motion.span>
        </motion.h1>
      </motion.div>

      <div className="h-full lg:-mt-28 mt-2 lg:flex items-center justify-between">
        <h3 className=" text-5xl md:text-7xl leading-tight font-neue">
          <span className="opacity-30">CREATING</span>
          <br /> <span className="opacity-80 text-white">EXCEPTIONAL</span>
          <motion.p
            initial={{
              x: 50,
            }}
            animate={{
              x: 0,
              rotate: 45,
            }}
            transition={{ duration: 0.5, delay: 2, ease: "easeIn" }}
            className="inline-block mx-5 rotate-45 w-[18px] h-[18px] text-4xl text-pink-700"
          >
            &#x272F;
          </motion.p>{" "}
          <br></br>
          <span className="opacity-30"> WEB EXPERIENCE</span>
        </h3>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 2,
          }}
          className="mt-10 lg:mt-0 flex flex-col justify-center items-center"
        >
          <p className="text-white opacity-70 text-xs">scroll down</p>
          <motion.p
            initial={{
              y: 0,
              rotate: "-90deg",
            }}
            animate={{
              y: [5, 10, 15, 20, 15, 10, 5],
              rotate: "-90deg",
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
            }}
            className="-rotate-90 w-4 text-xl text-white opacity-70"
          >
            &#x276E;
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
