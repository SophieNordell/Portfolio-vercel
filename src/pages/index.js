import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Index() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
