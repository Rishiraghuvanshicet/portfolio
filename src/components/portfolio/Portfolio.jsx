import CustomCursor from "./CustomCursor";
import NoiseOverlay from "./NoiseOverlay";
import Nav from "./Nav";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import Journey from "./Journey";
import Contact from "./Contact";
import GlobalStyles from "./GlobalStyles";

export default function Portfolio() {
  return (
    <div style={{ background: "#04040c", minHeight: "100vh" }}>
      <GlobalStyles />
      <CustomCursor />
      <NoiseOverlay />
      <Nav />
      <Hero />
      <Projects />
      <Skills />
      <Journey />
      <Contact />
    </div>
  );
}

