// components/skeletons/LayoutSkeleton.tsx
import React from "react";

const LayoutSkeleton: React.FC = () => {
  return (
    <div className="h-screen bg-black">
      <div className="container h-full mx-auto xl:px-30 max-w-6xl">
        <div className="grid grid-cols-10 h-full gap-4 p-4">
          {/* Sidebar skeleton (1 column) */}
          <div className="col-span-1 space-y-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="h-4 bg-gray-700 rounded w-3/4 animate-pulse"
              ></div>
            ))}
          </div>

          {/* Post/content skeleton (4–6 columns depending on screen) */}
          <div className="col-span-4 md:col-span-6 lg:col-span-5 space-y-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                role="status"
                className="max-w-full p-4 animate-pulse space-y-2 bg-neutral-900 rounded-md"
              >
                <div className="h-2.5 bg-gray-800 rounded-full w-48 mb-4"></div>
                <div className="h-2 bg-gray-800 rounded-full max-w-[360px] mb-2.5"></div>
                <div className="h-2 bg-gray-800 rounded-full mb-2.5"></div>
                <div className="h-2 bg-gray-800 rounded-full max-w-[330px] mb-2.5"></div>
                <div className="h-2 bg-gray-800 rounded-full max-w-[300px] mb-2.5"></div>
                <div className="h-2 bg-gray-800 rounded-full max-w-[360px]"></div>
                <span className="sr-only">Loading...</span>
              </div>
            ))}
          </div>

          {/* FollowBar/right column (3–4 columns) */}
          <div className="col-span-3 lg:col-span-4">
            <div className="bg-neutral-900 rounded-md p-4 space-y-3 animate-pulse">
              <div className="h-4 bg-gray-700 rounded w-1/2 mb-2"></div>
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-3 bg-gray-700 rounded w-full"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutSkeleton;
