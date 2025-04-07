import Navbar from "./Navbar";
import Home from "./Home";
/* import About from "./About"; */
import Projects from "./Projects";
import Contact from "./Contact";
import Learning from "@/pages/Learning";

export default function Index() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Home />
      <Learning />
      {/*    <About /> */}
      <Projects />
      <Contact />
    </div>
  );
}
