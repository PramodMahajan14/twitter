import TwitterIcon from "../../assets/TwitterIcon";
import { useRouter } from "next/router";
import React from "react";
// import TwitterIcon from "../../assets/TwitterIcon.svg";

const SideBarLogo = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className="
    rounded-full
    h-14
    w-14
    p-4
    flex
    items-center
    justify-center
    hover:bg-blue-300
    cursor-pointer
    transition
  "
    >
      <TwitterIcon color="white" />
    </div>
  );
};

export default SideBarLogo;
