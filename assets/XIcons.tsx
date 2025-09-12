import React from "react";

interface XIconProps {
  size?: number | string; // icon size in px or tailwind class
  color?: string; // stroke color
  className?: string; // optional custom classes
}

const XIcon: React.FC<XIconProps> = ({
  size = 24,
  color = "currentColor",
  className = "",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color}
      width={typeof size === "number" ? size : undefined}
      height={typeof size === "number" ? size : undefined}
      className={`${className} ${typeof size === "string" ? size : ""}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
};

export default XIcon;
