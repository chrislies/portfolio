import React from "react";
import Contact from "./Contact";
import Experience from "./Experience";
import About from "./About";
import FeaturedProjects from "./FeaturedProjects";
import Hello from "./Hello";

const Hero = () => {
  return (
    <section className="flex flex-col gap-40">
      <Hello />
      <About />
      <FeaturedProjects />
      <Experience />
      <Contact />
    </section>
  );
};

export default Hero;
