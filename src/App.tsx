import "./app.css"
import Topinfo from "./components/TopInfo/Topinfo";
import About from "./components/About/About";
import Tools from "./components/Tools/Tools";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";


function App() {
  return <div className="bg-black text-white min-w-[200px] overflow-x-hidden">
    <Topinfo/>
    <Intro/>
    <About/>
    <Tools/>
    <Projects/>
    <Contact/>
  </div>;
}

export default App;
