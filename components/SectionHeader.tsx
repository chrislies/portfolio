import React from "react";

type SectionHeaderProps = {
  title: string;
};

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className="relative text-6xl bg-white text-center w-min mx-auto p-4 uppercase rounded-lg">
      {title}
    </div>
  );
};

export default SectionHeader;
