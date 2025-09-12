import FeatherIcon from "@/assets/FeatherIcon";
import { useRouter } from "next/router";
import React from "react";

const SideBarTwittButton = () => {
  const router = useRouter();
  return (
    <div onClick={() => router.push("/")}>
      <div
        className="
    
    lg:hidden
    rounded-full
    p-2
    h-14 w-14 flex items-center bg-sky-500 hover:bg-opacity-80 transition cursor-pointer
    "
      >
        <FeatherIcon size={24} color="white" />
      </div>
      <div
        className="
        mt-6
    hidden
    rounded-full
    px-2 py-1
    lg:block items-center bg-sky-500 hover:bg-opacity-80 transition cursor-pointer hover:bg-sky-400
    "
      >
        <p className="hidden lg:block text-center font-medium text-white text-[20px]">
          Tweet
        </p>
      </div>
    </div>
  );
};

export default SideBarTwittButton;
