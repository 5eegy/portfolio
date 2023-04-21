import { Heading } from "../Others/Heading";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-t  border-white border-opacity-30">
      <Heading head="PROJECTS " position="right" />

      <ProjComp
        name="MUSICA"
        stacks="ReactJs, Tailwind, Firebase"
        info="MUSIC STREAMING SITE"
        live="https://musicang.vercel.app"
        repo="https://github.com/mrseego/musica"
        position="left"
      />

      <ProjComp
        name="VENTA"
        stacks="ReactJs, Tailwind, FramerMotion, Redux, Firebase"
        info="ECOMMERCE WEBSITE"
        live="https://ventashop.netlify.app"
        position="right"
        repo="https://github.com/mrseego/ventashop"
      />

      <ProjComp
        name="VANX"
        stacks="React, SASS & Typescript"
        info="AI NEWS WEBSITE"
        live="https://vanxnews.netlify.app"
        repo="https://github.com/mrseego/vanxnews"
        position="left"
      />

      <ProjComp
        name="ROBOCHT"
        stacks="HTML, CSS, Typescript, NodeJS & ExpressJS"
        info="AI CHAT BOT"
        live="https://robocht.vercel.app"
        repo="https://github.com/mrseego/robocht"
        position="right"
      />
    </div>
  );
};

export default Projects;

function ProjComp({
  name,
  info,
  stacks,
  live,
  repo,
  position,
}: {
  name: string;
  info: string;
  stacks: string;
  live: string;
  repo: string;
  position: string;
}) {
  return (
    <div
      className={
        " border-b border-white border-opacity-20 h-full px-3 min-h-[350px] my-5 pb-5 text-xs  text-" +
        position
      }
    >
      <p className="text-xs lg:text-sm -mt-4 opacity-40">{stacks}</p>

      <motion.div
        initial={{
          opacity: 0,
          x: position === "right"? "20vw": "-20vw"
        }}
        whileInView={{
          opacity: 1,
          x:0
        }}
        viewport={{
          once: true,
          amount: 0.3
        }}
        transition={{duration: 1}}
        className=""
      >
        <h1 className=" block text-5xl lg:text-8xl font-bold mt-4 leading-tight opacity-40">
          {name} - {info}
        </h1>

        <div className="flex justify-between mt-5">
          <div className="block p-[1px] mt-5 mx-3 w-24 rounded-lg bg-gradient-to-r duration-200 from-pink-400 via-red-400 to-yellow-400 hover:to-pink-400 hover:from-red-400 hover:via-yellow-400 hover:shadow-md hover:shadow-yellow-400">
            <a
              href={live}
              className="block p-1 text-xs lg:text-sm bg-black rounded-lg hover: text-center"
            >
              Visit Site
            </a>
          </div>

          <div className="block p-[1px] mt-5 mx-3 w-24 rounded-lg bg-gradient-to-r duration-400 from-pink-400 via-red-400 to-yellow-200 hover:to-pink-200 hover:from-red-200 hover:via-yellow-200 hover:shadow-md hover:shadow-yellow-400">
            <a
              href={repo}
              className="block p-1 text-xs lg:text-sm bg-black rounded-lg hover: text-center"
            >
              repo
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
