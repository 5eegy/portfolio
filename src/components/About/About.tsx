import { Heading } from "../Others/Heading";
import { motion } from "framer-motion";
import Image from "../../assets/image-2.jpg";

const bio = ""

const About = () => {
  return (
  <div className="mt-4 border-b border-t border-opacity-20 lg:pb-0 min-h-fit border-white">
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
        transition={{ duration: 1 }}
      >
        <img
          src={Image}
          alt="Projects image"
          className="w-full block  h-full filter brightness-75 absolute top-3 left-5 z-[102] rounded-md"
        />
        <p className=" border border-white opacity-20 z-[100] w-full h-full"></p>
        <p className="mt-8 text-center text-white text-xs font-neue">
          <span className=" opacity-20">A RARE PICTURE OF</span>{" "}
          <span className="text-white opacity-50">SEEGO</span>{" "}
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
          duration: 0.5,
        }}
        className="lg:text-center text-left lg:px-8 mt-16 p-3 text-white mx-auto lg:w-2/3 font-roboto text-sm lg:text-lg"
      >
       {
        `Hi, I'm Seego, a frontend developer with 2-years experience Passionate about building visually stunning and user-friendly web applications fromscratch. I excel in HTML, CSS, and JavaScript, and am well-versed in frameworks and technologies like Typescript, Firebase, Redux, React, and Nextjs. I have experience with responsive design, cross-browser
        compatibility, and accessibility, and have worked in Agile environments
        using version control systems like Git. As a fast learner and team
        player, I am eager to collaborate with a dynamic organization to develop
        innovative websites that meet the needs of clients and users. I take
        ownership of my tasks and see them through to completion, but thrive in
        a collaborative environment where I can learn from and contribute to my team.`.split(" ").map((item, i)=>{
          return <span key={i} className="opacity-50 hover:opacity-100 hover:text-base lg:hover:text-xl hover:bg-gradient-to-r duration-300 hover:from-purple-400 hover:via-red-200 hover:bg-clip-text hover:text-transparent hover:to-yellow-200">{item.toUpperCase()} </span>
        })
       }

        {/* team. Hello, I'm [Your Name], a passionate and driven frontend developer
        with [X] years of experience building visually stunning and responsive
        web applications. As a skilled problem-solver, I'm dedicated to
        delivering high-quality work that meets the needs of clients and users.
        My expertise lies in HTML, CSS, JavaScript, and I'm proficient in using
        frameworks and technologies such as [list a few specific ones you're
        familiar with]. I also have experience working with version control
        systems like Git and in Agile environments. Throughout my career, I've
        had the opportunity to work on a variety of projects that have allowed
        me to hone my skills and develop a strong understanding of what it takes
        to create engaging web experiences. I'm particularly passionate about
        [mention something you're passionate about, such as accessibility, UI/UX
        design, or mobile responsiveness]. As a team player, I thrive in
        collaborative environments and enjoy bouncing ideas off others to
        achieve the best results. At the same time, I'm able to work
        independently and take ownership of my tasks, ensuring that projects are
        completed on time and to a high standard. In my free time, I love
        exploring new technologies, experimenting with code, and contributing to
        open-source projects. I'm excited to continue my career as a frontend
        developer and bring my skills and expertise to a dynamic organization
        that values innovation, creativity, and teamwork. Let's build something
        amazing together! */}
      </motion.p>
      <div className="block p-[1px] text-xs mt-5 mb-12 mx-3 w-28 rounded-lg bg-gradient-to-r duration-400 from-pink-400 via-red-400 to-yellow-400 hover:to-pink-400 hover:from-red-400 hover:via-yellow-400 hover:shadow-md hover:shadow-yellow-400">
        <a
          href="https://twitter.com/seego"
          className="block p-2 text-xs bg-black rounded-lg hover: text-center text-white text-opacity-70 font-openSauce"
        >
          VIEW RESUME
        </a>
      </div>
    </div>
  );
};

export default About;
