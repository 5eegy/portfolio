import { Heading } from "../Others/Heading";
import Lang from "./Lang";

const Tools = () => {

  return (
    <div>
     <Heading head="TOOLS" position="left"/>
      <ul className="list-none px-6 text-center h-full grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] p-3 items-center justify-center">
      <Lang>HTML</Lang>
      <Lang>CSS/SASS</Lang>
      <Lang>Tailwind</Lang>
      <Lang>JavaScript</Lang>
      <Lang>TypeScript</Lang>
      <Lang>React</Lang>
      <Lang>Redux-Toolkit</Lang>
      <Lang>Firebase</Lang>
      <Lang>Sanity CMS</Lang>
      <Lang>Framer-Motion</Lang>
      <Lang>NodeJS/Express</Lang>
      <Lang>MongoDB</Lang>



      </ul>
    </div>
  );
};

export default Tools;
