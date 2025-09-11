import BellIcon from "@/assets/BellIcon";
import HomeIcon from "@/assets/HomeIcon";
import UserIcon from "@/assets/UserIcon";
import React from "react";
import SideBarLogo from "./SideBarLogo";
import SidebarItem from "./SidebarItem";
import LogoutIcon from "@/assets/LogoutIcon";
import SideBarTwittButton from "./SideBarTwittButton";

const Sidebar = () => {
  const items = [
    {
      label: "Home",
      href: "/",
      icon: HomeIcon,
    },
    {
      label: "Notification",
      href: "/notification",
      icon: BellIcon,
    },
    {
      label: "Profile",
      href: "/users/123",
      icon: UserIcon,
    },
  ];
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[120px]">
          <SideBarLogo />
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              label={item.label}
              href={item.href}
              icon={item.icon}
            />
          ))}
          <SidebarItem
            label="Logout"
            href="/"
            icon={LogoutIcon}
            onClick={() => {}}
          />
          <SideBarTwittButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
