import React from "react";

const FollowBar = () => {
  return (
    <div className="px-2 py-4 hidden md:block">
      <div className="bg-neutral-800 rounded-xl p-3">
        <h2 className="text-white text-xl font-medium">Who to follow</h2>
        <div className="flex flex-col gap-6 mt-4">{/* {TODO List} */}</div>
      </div>
    </div>
  );
};

export default FollowBar;
