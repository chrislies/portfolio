import React from "react";
import { Permanent_Marker } from "next/font/google";

const permanentMarker = Permanent_Marker({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

type NametagProps = {
  className: string;
};

const Nametag = ({ className }: NametagProps) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="bg-red-600 w-[350px] h-[90px] rounded-t-2xl select-none text-white flex flex-col items-center">
        <p className="text-6xl font-bold uppercase tracking-wider">Hello</p>
        <p className="text-[26px] leading-5">my name is</p>
      </div>
      <div className="bg-white w-[350px] h-[120px] flex justify-center items-center">
        <p
          className={`text-black text-[40px] tracking-tight skew-y-[-1deg] ${permanentMarker.className}`}
        >
          Christopher Lai
        </p>
      </div>
      <div className="bg-red-600 w-[350px] h-[30px] rounded-b-2xl "></div>
    </div>
  );
};

export default Nametag;
