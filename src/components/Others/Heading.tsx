import { motion } from "framer-motion";

export const Heading = ({
  head,
  position,
}: {
  head: string;
  position: string;
}) => {
  return (
    <div className=" border-b border-white border-opacity-20 w-full flex justify-between ">
      <motion.div
        initial={{
         width: 0
        }}
        animate={{
         width:position === "right" ? ["100%", "0%","100%", "0%", "100%"] : ["0%", "100%","0%", "100%", "0%"]

        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatDelay: 0,
          ease: "easeOut",
        }}
        className="lg:text-7xl text-2xl py-4 text-center min-w-fit text-white font-black flex w-[120vw] mx-auto  justify-between"
      >
        <p className="opacity-40">{head} &#x27AA;</p>
        <p className="opacity-20">{head} &#x27AA;</p>

      </motion.div>

      {/* <motion.div
        initial={{
          x: position === "right" ? "-150vw" : "100vw",
        }}
        animate={{
          x: position === "right" ? "100vw" : "-150vw",
        }}
        transition={{
          duration: 10,
          delay: position === "right" ? 0 : 1.5,
          ease: "easeOut",
          repeat: Infinity,
        }}
        className="text-2xl p-4 text-center min-w-fit text-white opacity-20 font-black flex w-[120vw] ml-28 bg-blue-500 justify-between"
      >
        <p className="">{head} &#x27AA;</p>
        <p className="">{head} &#x27AA;</p>

      </motion.div> */}
 
    </div>
  );
};