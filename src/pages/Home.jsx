import Intro from "../components/Intro";
import EngineeringWork from "../components/EngineeringWork";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Intro />
      <EngineeringWork />
      <Portfolio />
      <Timeline />
      <Skills />
      <Contact />
    </>
  );
}

export default Home;
