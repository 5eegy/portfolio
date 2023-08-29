import { Heading } from "../Others/Heading";
import { motion } from "framer-motion";
import Image from "../../assets/image-2.jpg";
import { forwardRef } from "react";

const About = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      className="mt-4 border-b border-t border-opacity-20 lg:pb-0 min-h-fit border-white"
    >
      <Heading position="right" head="ABOUT" />

      <motion.div
        className="max-h-[200px] max-w-[350px] md:max-w-[500px]  lg:max-h-[400px] border-5 border-opacity-20 border-white md:max-h-[300px] m-auto mt-12 relative"
        initial={{
          opacity: 0,
          width: 0,
          height: 0,
        }}
        whileInView={{
          width: "75%",
          height: "17em",
          opacity: 1,
        }}
        viewport={{
          amount: 0.4,
          once: true,
        }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={Image}
          alt="Projects image"
          className="w-full block  h-full filter brightness-75 absolute top-3 left-5 z-[102] rounded-md"
        />
        <p className=" border border-white opacity-20 z-[100] w-full h-full"></p>
        <p className="mt-8 text-center text-white text-xs font-neue">
          <span className=" opacity-20">A RARE PICTURE OF</span>{" "}
          <span className="text-white opacity-50">SEH'G</span>{" "}
          <span className="opacity-20">IN HIS</span>{" "}
          <span className="text-white opacity-50">LAGBAJA</span>{" "}
          <span className="opacity-20">MODE</span>
        </p>
      </motion.div>

      <motion.p
        initial={{
          opacity: 0,
          x: -100,
          y: -100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        viewport={{
          amount: 0.5,
          once: true,
        }}
        transition={{
          duration: 0.3,
        }}
        className="lg:text-center text-left lg:px-8 mt-16 p-3 text-white mx-auto lg:w-2/3 font-roboto text-sm lg:text-lg"
      >
        {`Hi, I'm Seh'G, a software developer with 2-years experience Passionate about building visually stunning and user-friendly web applications fromscratch. I excel in HTML, CSS, and JavaScript, and am well-versed in frameworks and technologies like Typescript, Firebase, Redux, React, and Nextjs. I have experience with responsive design, cross-browser
        compatibility, and accessibility, and have worked in Agile environments
        using version control systems like Git. As a fast learner and team
        player, I am eager to collaborate with a dynamic organization to develop
        innovative websites that meet the needs of clients and users. 
        Aside of coding I also write articles which can be found on my medium page. I take
        ownership of my tasks and see them through to completion, but thrive in
        a collaborative environment where I can learn from and contribute to my team.`
          .split(" ")
          .map((item, i) => {
            return (
              <span
                key={i}
                className="opacity-50 hover:opacity-100  hover:bg-gradient-to-r duration-300 hover:from-purple-400 hover:via-red-200 hover:bg-clip-text hover:text-transparent hover:to-yellow-200"
              >
                {item.toUpperCase()}{" "}
              </span>
            );
          })}

      </motion.p>
      <div className="block p-[1px] text-xs mt-5 mb-12 mx-3 w-28 rounded-lg bg-gradient-to-r duration-400 from-pink-400 via-red-400 to-yellow-400 hover:to-pink-400 hover:from-red-400 hover:via-yellow-400 hover:shadow-md hover:shadow-yellow-400">
        <a
          href="https://drive.google.com/file/d/19fMVTRg2jat4lAvn4O26DbHo5zuUPrlT/view?usp=drive_open"
          target="_blank"
          className="block p-2 text-xs bg-black rounded-lg hover: text-center text-white text-opacity-70 font-openSauce"
        >
          VIEW RESUME
        </a>
      </div>
    </div>
  );
});

export default About;
