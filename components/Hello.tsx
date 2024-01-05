import Image from "next/image";
import React from "react";

const Hello = () => {
  return (
    <section className="max-container">
      <div className="flex gap-5 justify-center items-center">
        <div className="relative select-none">
          <Image
            src={"/images/chris.png"}
            alt="Christopher"
            height={400}
            width={400}
            className="select-none z-50 "
          ></Image>
          <div className="h-[330px] w-[320px] z-[-1] absolute top-[70px] left-10 top-0d left-0d rounded-lg bg-gray-900"></div>
          <div className="h-[330px] w-[320px] z-[-2] absolute top-[82px] left-[48px] angled-gradient rounded-lg opacity-[.8]"></div>
        </div>
        <div className="flex flex-col gap-5 text-white">
          <h1 className="text-6xl flex-row">
            <span className="flex flex-row gap-5 items-center ">
              <span className="bg-white text-black p-4 relative z-[-1] uppercase skew-x-6 skew-y-[-3deg]">
                <span className="skew-y-0">Hello!</span>
              </span>
              <span className="">{"I'm"}</span>
            </span>
          </h1>
          <h1 className="text-6xl bg-clip-text text-transparent bg-gradient-to-b from-gray-300 to-blue-400">
            Christopher Lai
          </h1>
          <p className="text-xl max-w-[500px] leading-6 tracking-wide">
            An aspiring full-stack developer fueled by relentless passion and
            endless curiosity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hello;
