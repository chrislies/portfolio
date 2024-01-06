import Image from "next/image";
import React from "react";
import Nametag from "./Nametag";

const Hello = () => {
  return (
    <section className="max-container min-h-screen bg-blue-500d flex flex-col justify-center pb-[var(--header-height)] pb-[300px]">
      <div className="flex gap-5 justify-center items-center">
        <div className="relative select-none">
          <Image
            src={"/images/chris.png"}
            alt="Christopher"
            height={400}
            width={400}
            className="select-none z-50"
          ></Image>
          <div className="h-[330px] w-[320px] z-[-1] absolute top-[70px] left-10 top-0d left-0d rounded-lg bg-gray-900"></div>
          <div className="h-[330px] w-[320px] z-[-2] absolute top-[82px] left-[48px] angled-gradient rounded-lg opacity-[.8]"></div>
        </div>
        <div className="flex flex-col items-start">
          <Nametag className="rotate-[-3deg] scale-[.85]"></Nametag>
          <div className="flex flex-col gap-3 pt-[20px]">
            <h2 className="text-[40px] font-bold bg-clip-text text-transparent bg-gradient-to-t from-slate-400 to-slate-100">
              I like to build things for the web.
            </h2>
            <p className="text-base text-slate-300 max-w-[500px] leading-6 tracking-wide">
              I'm an aspiring full-stack developer fueled by relentless passion
              and endless curiosity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hello;
