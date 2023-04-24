import { motion } from "framer-motion";

const Lang = ({ children }: { children: string }) => {
  return (
    <motion.li
      initial={{
        rotateZ: "90deg",
      }}
      whileInView={{
        rotateZ: 0,
      }}
      transition={{
        duration: 0.7,
      }}
      viewport={
        {
          // once: true,
        }
      }
      className={
        "text-3xl text-white font-thin font-neue text-opacity-40 w-1/2 md:w-1/3 lg:w-1/4 h-full flex justify-center items-center min-h-[100px] lg:min-h-[150px] min-w-fit border border-white border-opacity-20 p-2"
      }
    >
      <p>{children.toUpperCase()}</p>
    </motion.li>
  );
};

export default Lang;
