import {motion} from "framer-motion"

const Lang = ({ children, }: { children: string}) => {
  return (
    <motion.li 
    initial={{
      marginBlock: "1.3em"
    }}
    whileInView={{
  marginBlock: 0
}}

transition={{
  duration:.6,
}}

viewport={{
  once: true
}}
className={"text-sm text-center font-bold opacity-50  w-full h-16 flex justify-center items-center min-w-fit border p-2 rounded-lg"}>
      <p>{children}</p>
    </motion.li>
  );
};

export default Lang;
