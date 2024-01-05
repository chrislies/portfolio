import React from "react";
import Contact from "./Contact";
import Experience from "./Experience";
import About from "./About";
import FeaturedProjects from "./FeaturedProjects";

const Hero = () => {
  return (
    <section>
      <About />
      <FeaturedProjects />
      <Experience />
      <Contact />
    </section>
  );
};

export default Hero;
