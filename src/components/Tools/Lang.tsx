import { motion } from "framer-motion";

const Lang = ({ children }: { children: string }) => {
  return (
    <motion.li
      initial={{
        rotateZ: "90deg"
      }}
      whileInView={{
        rotateZ: 0
      }}
      transition={{
        duration: .7,
      }}
      viewport={{
        once: true,
      }}
      className={
        "text-sm text-center text-white font-bold opacity-50 w-full h-16 flex justify-center items-center min-w-fit border border-white p-2 rounded-lg"
      }
    >
      <p>{children}</p>
    </motion.li>
  );
};

export default Lang;
