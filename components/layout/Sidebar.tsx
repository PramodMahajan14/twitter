import useCurrentUser from "@/hooks/useCurrentUser";
import BellIcon from "@/assets/BellIcon";
import HomeIcon from "@/assets/HomeIcon";
import UserIcon from "@/assets/UserIcon";
import { signOut } from "next-auth/react";
import SideBarLogo from "./SideBarLogo";
import SidebarItem from "./SidebarItem";
import LogoutIcon from "@/assets/LogoutIcon";
import SideBarTwittButton from "./SideBarTwittButton";

const Sidebar = () => {
  const { data: currentUser } = useCurrentUser();
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
      auth: true,
    },
    {
      label: "Profile",
      href: "/users/123",
      icon: UserIcon,
      auth: true,
    },
  ];
  return (
    <div className="col-span-1 h-full  md:pr-2">
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

          {currentUser && (
            <SidebarItem
              label="Logout"
              href="/"
              icon={LogoutIcon}
              onClick={() => signOut()}
            />
          )}

          <SideBarTwittButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
