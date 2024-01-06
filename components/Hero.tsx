import React from "react";
import Contact from "./Contact";
import Experience from "./Experience";
import FeaturedProjects from "./FeaturedProjects";
import Hello from "./Hello";
import TechStack from "./TechStack";

const Hero = () => {
  return (
    <section className="flex flex-col gap-40">
      <Hello />
      <TechStack />
      <FeaturedProjects />
      <Experience />
      <Contact />
    </section>
  );
};

export default Hero;
