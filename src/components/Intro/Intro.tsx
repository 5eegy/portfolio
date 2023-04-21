import Loopstudio from "../../assets/loopstudio.png";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div className="mt-12 h-[95vh] px-3 min-h-[700px] pt-8 lg:justify-center w-full flex flex-col justify-evenly">
      <motion.div
 
      className="flex flex-col justify-evenly lg:flex-row-reverse items-start lg:items-center h-full w-full  min-w-fit min-h-fit ">
        <motion.img
          src={Loopstudio}
          alt="Projects image"
          animate={{ y: 0 }}
          initial={{ y: -250 }}
          transition={{ duration: 0.5, type: "tween", ease: "backInOut" }}
          className="w-1/2 lg:h-full lg:w-2/5 h-full mt-3 lg:-mt-8 block"
        />
        <motion.h1
          initial={{
            height: "0px",
          }}
          animate={{
            height: "100%",
          }}
          transition={{ duration: 0.5, ease: "easeIn", delay: 0.5 }}
              className="text-6xl lg:text-8xl bg-clip-text text-center w-full lg:w-3/5 text-transparent flex flex-wrap bg-gradient-to-r duration-200 from-purple-400 via-red-500 to-yellow-400 font-bold"
        >
          <motion.span
            className="bg-clip-text leading-none my-auto"
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
            {" "}
            FRONTEND <br /> DEVELOPER
          </motion.span>
        </motion.h1>
      </motion.div>

      <div className="h-full -mt-0 lg:flex items-center justify-between">
        <h3 className=" text-5xl lg:text-7xl leading-tight">
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
          className="mt-24 flex flex-col justify-center items-center"
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
