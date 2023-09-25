import { useEffect, useRef, useState } from "react";
import Topinfo from "./components/TopInfo/Topinfo";
import About from "./components/About/About";
import Tools from "./components/Tools/Tools";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import Break from "./components/Others/Break";
import Mobile from "./Nav/Mobile";
import { Heading } from "./components/Others/Heading";

function App() {
  const intro = useRef<HTMLDivElement>();
  const about = useRef<HTMLDivElement>();
  const works = useRef<HTMLDivElement>();
  const contact = useRef<HTMLDivElement>();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
      setTimeout(() => {
        setShowContent(true);
      }, 3000);
  
  });

  const [openMenu, setOpenMenu] = useState(false);

  function navBar() {
    setOpenMenu(!openMenu);
  }

  function scroll(element: string): void {
    const elements = {
      about: about.current,
      contact: contact.current,
      works: works.current,
      intro: intro.current,
    };
    elements[element]!.scrollIntoView({ behavior: "smooth" });
    setOpenMenu(false);
  }
  return (
    <div className="bg-black text-white min-w-[200px] overflow-x-hidden font-openSauce">
      {!showContent ? (
        <div className="w-full flex justify-center items-center h-[100vh] ">
          <Heading head="S E H G Y" />
        </div>
      ) : (
        <>
          <Topinfo navBar={navBar} scroll={scroll} openMenu={openMenu} />
          <Mobile openMenu={openMenu} scroll={scroll} />
          <Intro ref={intro} />
          <About ref={about} />
          <Tools />
          <Projects ref={works} />
          <Break />
          <Contact ref={contact} />
        </>
      )}
    </div>
  );
}

export default App;
