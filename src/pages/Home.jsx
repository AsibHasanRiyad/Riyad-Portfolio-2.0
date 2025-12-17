import Contact from "../components/Contact";
import Hero from "../components/Hero";
import MyJourney from "../components/MyJourney";
import MyProject from "../components/MyProject";
import Services from "../components/MyServices";
import SkillsSection from "../components/MySkills";
import PixelBlast from "../components/PixelBlast";
import ProjectShowCase from "../components/ProjectShowCase";

const Home = () => {
  return (
    <div className="relative font-neuhade">
      <div className=" z-50">
        <div id="home">
          <Hero />
        </div>

        <div id="my-journey">
          <MyJourney />
        </div>
        <Services />
        <div id="skills">
          <SkillsSection />
        </div>
        <div id="my-projects">
          <ProjectShowCase />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
