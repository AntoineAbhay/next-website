import React from "react";

const Chip: React.FC<{
  text: string | undefined;
  backgroundColor: string | undefined;
}> = ({ text = "", backgroundColor = "#dddddd" }) => (
  <span className="mr-1.5 mb-1 inline-block rounded-2xl text-sm">
    <span
      style={{ backgroundColor }}
      className="relative top-0.5 mr-1 inline-block h-3 w-3 rounded-full"
    ></span>
    <span>{text}</span>
  </span>
);

export default Chip;
