import Image from "next/image";
import React from "react";
import SectionHeader from "./SectionHeader";
import { TECH } from "@/constants";

const TechStack = () => {
  return (
    <section className="max-container flex flex-col items-center w-full space-y-8">
      <div className="flex flex-wrap justify-center gap-4 max-w-[80%]">
        {TECH.map((tech) => (
          <div className="bg-red-500">
            <p>{tech.label}</p>
            {tech.svg}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
