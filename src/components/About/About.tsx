import { Heading } from "../Others/Heading";
import { motion } from "framer-motion";
import Image from "../../assets/loopstudio.png";

const About = () => {
  return (
    <div className="mt-4 border-b border-t border-opacity-20 lg:pb-0 min-h-fit border-white ">
      <Heading position="right" head="ABOUT" />

      <motion.div
        className=" max-w-[500px] min-h-[7em] lg:h-[20em] border-5 border-opacity-20 border-white md:min-h-[17em] m-auto mt-12 relative"
        initial={{
          opacity: 0,
          width: 0,
          height: 0,
        }}
        whileInView={{
          width: "75%",
          height: "170px",
          opacity: 1,
        }}
        viewport={{ amount: 0.4, once: true }}
        transition={{ duration: 1 }}
      >
        <img
          src={Image}
          alt="Projects image"
          className="w-full block  h-full filter brightness-75 absolute top-3 left-5 z-[102]"
        />
        <p className=" border border-white opacity-30 z-[100] w-full h-full"></p>
        <p className="mt-8 text-center text-white opacity-30 text-xs">SEEGO</p>


      </motion.div>

      <motion.p
        initial={{
          opacity: 0,
          x: -100,
          y: -100
        }}
        whileInView={{
          opacity: .8,
          x:0,
          y:0
        }}
        viewport={{
          amount: 0.5,
          once: true,
        }}
        transition={{
          duration: .5,
        }}
        className="text-lg text-left lg:px-8 mt-16 p-3 text-white "
      >
        Hi, I'm Seego, a software developer with 2-years experience focused on
        creating amazing and fun experience on the web using the latest
        technology especially the MERN stack to solve real problems.
      </motion.p>
      <div className="block p-[1px] text-xs mt-5 mb-12 mx-3 w-24 rounded-lg bg-gradient-to-r duration-400 from-pink-400 via-red-400 to-yellow-400 hover:to-pink-400 hover:from-red-400 hover:via-yellow-400 hover:shadow-md hover:shadow-yellow-400">
        <a
          href="https://twitter.com/seego"
          className="block p-1 text-xs bg-black rounded-lg hover: text-center text-white text-opacity-70"
        >
          View Resume
        </a>
      </div>
    </div>
  );
};

export default About;
