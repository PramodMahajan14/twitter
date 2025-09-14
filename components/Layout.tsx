import React from "react";
import Sidebar from "./layout/Sidebar";
import FollowBar from "./layout/FollowBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen bg-black">
      <div className="container h-full mx-auto xl:px-30 max-w-6xl">
        <div className="grid grid-cols-10 h-full">
          {/* Sidebar takes 1 column */}
          <div className="col-span-1">
            <Sidebar />
          </div>

          {/* Main content takes 2 columns */}
          <div className="col-span-4 md:col-span-6 lg:col-span-5 border-x-[1px] border-neutral-800">
            {children}
          </div>

          {/* FollowBar takes 3 columns */}
          <div className="col-span-3  lg:col-span-4">
            <FollowBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
