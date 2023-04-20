import Topinfo from "./components/TopInfo/Topinfo";
import About from "./components/About/About";
import Tools from "./components/Tools/Tools";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
//lg:fixed z-[999] lg:w-1/2 lg:h-full lg:top-0 lg:right-0 

function App() {
  return (
    <div className="bg-black text-white min-w-[200px] overflow-x-hidden lg:flex">
      <Topinfo />
      <div className="lg:w-1/2 lg:relative">
        {" "}
        <Intro />
      </div>
      <div className="lg:overflow-x-hidden lg:w-1/2">
        <About />
        <Tools />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
