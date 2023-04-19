import { motion } from "framer-motion";

export const Heading = ({
  head,
  position,
}: {
  head: string;
  position: string;
}) => {
  return (
    <div className=" border-b flex justify-between ">
      <motion.div
        initial={{
          x: position === "right" ? "-100vw" : "100vw",
        }}
        animate={{
          x: position === "right" ? "100vw" : "-100vw",
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: position === "right" ? "easeIn" : "easeInOut",
        }}
        className="text-2xl p-4 text-center min-w-fit "
      >
        <p className="">{head} &#x27AA;</p>
      </motion.div>

      <motion.div
        initial={{
          x: position === "right" ? "-100vw" : "100vw",
        }}
        animate={{
          x: position === "right" ? "100vw" : "-100vw",
        }}
        transition={{
          duration: 5,
          delay: position === "right" ? 0 : 1.6,
          ease: position === "right" && "easeOut",
          repeat: Infinity,
        }}
        className="text-2xl p-4 text-center min-w-fit text-gray-500"
      >
        <p className="">{head} &#x27AA;</p>
      </motion.div>
      {/* <motion.div      initial={{
        x: position === "right" ? "-100vw" : "100vw",
      }}
      animate={{
        x: position === "right" ? "100vw" : "-100vw",
      }}
      
      transition={{
        duration: 5,
        repeat: Infinity,
      ease: "easeInOut"
      }} className="text-2xl p-4 text-center min-w-fit bg-red-500">
        <p className="">{head} &#x27AA;</p>
      </motion.div>


      <motion.div      initial={{
        x: position === "right" ? "-100vw" : "100vw",
      }}
      animate={{
        x: position === "right" ? "100vw" : "-100vw",
      }}
      
      transition={{
        duration: 5,
        delay: 1.6,
        // ease: "easeIn",
        repeat: Infinity,
        
      }} className="text-2xl p-4 text-center min-w-fit bg-blue-500">
        <p className="">{head} &#x27AA;</p>
      </motion.div> */}
    </div>
  );
};
// initial={{
//   x: position === "right" ? "-100vw" : "100vw",
// }}
// animate={{
//   x: position === "right" ? "100vw" : "-100vw",
// }}

// transition={{
//   duration: 10,
//   repeat: Infinity,
// }}
