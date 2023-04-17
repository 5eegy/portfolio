import "./app.css"
import Topinfo from "./components/TopInfo/Topinfo";
import About from "./components/About/About";
import Tools from "./components/Tools/Tools";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";


function App() {
  return <div className="font-roboto bg-black text-white p-3">
    <Topinfo/>
    <About/>
    <Tools/>
    <Projects/>
    <Contact/>
  </div>;
}

export default App;
