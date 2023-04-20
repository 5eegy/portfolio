import { Heading } from "../Others/Heading";
import { motion } from "framer-motion";
import Image from "../../assets/loopstudio.png";

const About = () => {
  return (
    <div className="mt-4  border-b border-t pb-8">
      <Heading position="right" head="ABOUT" />

      <motion.img
        src={Image}
        alt="Projects image"
        className="w-[95%]  h-[170px] bg-red-400 m-auto mt-12"
        initial={{
          opacity: 0,
          width: 0,
          height: 0,
        }}
        whileInView={{
          width: "95%",
          height: "170px",
          opacity: 1,
        }}
        viewport={{ amount: 0.4, once: true }}
        transition={{ duration: 1 }}
      />

      <motion.p
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          amount: 0.5,
          once: true,
        }}
        transition={{
          duration: 2,
        }}
        className="text-lg text-left mt-8 p-3 "
      >
        Hi, I'm Seego, a software developer with 2-years experience focused on
        creating amazing and fun experience on the web using the latest
        technology especially the MERN stack to solve real problems.
      </motion.p>
      <div className="block p-[1px] text-xs mt-5 mx-3 w-24 rounded-lg bg-gradient-to-r duration-400 from-pink-400 via-red-400 to-yellow-400 hover:to-pink-400 hover:from-red-400 hover:via-yellow-400 hover:shadow-md hover:shadow-yellow-400">
        <a
          href="https://twitter.com/seego"
          className="block p-1 text-xs bg-black rounded-lg hover: text-center"
        >
          View Resume
        </a>
      </div>
    </div>
  );
};

export default About;
