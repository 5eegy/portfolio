import { forwardRef } from "react";
import { Heading } from "../Others/Heading";
import { motion } from "framer-motion";

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="border-t  border-white border-opacity-30">
      <Heading head="PROJECTS " position="right" />

      <ProjComp
        name="MUSICA"
        stacks="ReactJs, Tailwind,Redux-Toolkit, Firebase"
        info="MUSIC STREAMING SITE"
        live="https://musicang.vercel.app"
        repo="https://github.com/5egy/Musica"
        position="left"
      />

      <ProjComp
        name="VENTA"
        stacks="ReactJs, Tailwind, FramerMotion, Redux, Firebase"
        info="ECOMMERCE WEBSITE"
        live="https://ventashop.netlify.app"
        position="right"
        repo="https://github.com/5egy/venta-ecommerce"
      />

      <ProjComp
        name="VANX"
        stacks="React, SASS & Typescript"
        info="AI NEWS WEBSITE"
        live="https://vanxnews.netlify.app"
        repo="https://github.com/5egy/vanxnews-ai"
        position="left"
      />

      <ProjComp
        name="ROBOCHT"
        stacks="HTML, CSS, Typescript, NodeJS & ExpressJS"
        info="AI CHAT BOT WEBSITE"
        live="https://robocht.vercel.app"
        repo="https://github.com/5egy/Robo-chat"
        position="right"
      />

      <ProjComp
        name="MYBANKR"
        stacks="React, Styled Components & Firebase"
        info="FINTECH WEBSITE"
        live="https://mybankr.netlify.app"
        repo="https://github.com/5egy/mybankr"
        position="left"
      />

<ProjComp
        name="BAZAAR"
        stacks="NextJS & SanityCMS"
        info="ECOMMERCE WEBSITE"
        live="https://bazaarshop.vercel.app/"
        repo="https://github.com/5egy/bazaar-ecommerce"
        position="right"
      />

<ProjComp
        name="BLOG APP"
        stacks="React, Nodejs, MongoDB & Express"
        info="SIMPLE BLOG WEBSITE"
        live="https://segyblog.vercel.app"
        repo="https://github.com/5egy/oi-web-dev-assessment"
        position="left"
      />
    </div>
  );
});

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
        " border-b border-white border-opacity-20 font-roboto flex items-center relative h-full w-full px-3  min-h-[350px] my-5 pb-5 text-xs  text-" +
        position
      }
    >
      <p
        className={`text-sm lg:text-sm -mt-4 opacity-40 font-openSauce px-3 absolute top-0 ${
          position === "right" ? "right-0" : "left-0"
        }`}
      >
        {stacks.toUpperCase()}
      </p>

      <motion.div
        initial={{
          opacity: 0,
          x: position === "right" ? "20vw" : "-20vw",
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{ duration: 0.4 }}
        className={``}
      >
        <h1 className=" block text-5xl lg:text-8xl font-bold ju mt-4 leading-tight opacity-40">
          {`${name} - ${info}`.split(" ").map((item) => {
            return (
              <span
                key={item}
                className="hover:bg-gradient-to-r duration-300 hover:from-purple-400 hover:via-red-200 hover:bg-clip-text hover:text-transparent hover:to-yellow-200"
              >
                {item}{" "}
              </span>
            );
          })}
        </h1>

        <div className="flex justify-between mt-5 font-openSauce">
          <div className="block p-[1px] mt-5 mx-3 w-24 rounded-lg bg-gradient-to-r duration-200 from-pink-400 via-red-400 to-yellow-400 hover:to-pink-400 hover:from-red-400 hover:via-yellow-400 hover:shadow-md hover:shadow-yellow-400">
            <a
              href={live}
              className="block p-1 text-xs lg:text-sm bg-black rounded-lg hover: text-center"
              target="_blank"
            >
              VISIT SITE
            </a>
          </div>

          <div className="block p-[1px] mt-5 mx-3 w-24 rounded-lg bg-gradient-to-r duration-400 from-pink-400 via-red-400 to-yellow-200 hover:to-pink-200 hover:from-red-200 hover:via-yellow-200 hover:shadow-md hover:shadow-yellow-400">
            <a
              href={repo}
              target="_blank"
              className="block p-1 text-xs lg:text-sm bg-black rounded-lg hover: text-center"
            >
              REPO
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
