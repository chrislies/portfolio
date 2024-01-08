import React from "react";
import { TECH } from "@/constants";

const TechStack = () => {
  return (
    <section className="max-container flex flex-col items-center w-full space-y-8">
      <div className="flex flex-wrap justify-center gap-4 max-w-[80%]">
        {TECH.map((tech) => (
          <div key={tech.label} className="bg-slate-600/50 rounded-xl p-2 h-[120px] w-[120px] flex flex-col justify-around items-center">
            {tech.svg}
            <p className="text-white">{tech.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
