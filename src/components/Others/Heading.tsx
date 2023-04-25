import { motion } from "framer-motion";

export const Heading = ({
  head,
  position,
}: {
  head: string;
  position: string;
}) => {
  return (
    <div className=" border-b border-white border-opacity-20 w-full flex justify-between font-openSauce">
      <motion.div
        initial={{
          width: 0,
        }}
        animate={{
          width:
            position === "right"
              ? ["100%", "0%", "100%", "0%", "100%"]
              : ["0%", "100%", "0%", "100%", "0%"],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="lg:text-7xl md:text-5xl text-2xl py-4 text-center min-w-fit text-white font-black flex w-[120vw] mx-auto  justify-between"
      >
        <p className="opacity-40">{head} &#x27AA;</p>
        <p className="opacity-20">{head} &#x27AA;</p>
      </motion.div>
    </div>
  );
};
