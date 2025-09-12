import React from "react";

interface FeatherIconProps {
  size?: number | string; // e.g., 24, "1.5rem"
  color?: string; // e.g., "currentColor", "#000", "blue"
  className?: string; // Optional for Tailwind or custom styles
}

const FeatherIcon: React.FC<FeatherIconProps> = ({
  size = 24,
  color = "currentColor",
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke={color}
    width={size}
    height={size}
    className={className}
  >
    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />{" "}
    <line x1="16" y1="8" x2="2" y2="22" />{" "}
    <line x1="17.5" y1="15" x2="9" y2="15" />
  </svg>
);

export default FeatherIcon;
