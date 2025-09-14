import React, { useCallback } from "react";
import Link from "next/link";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useRouter } from "next/router";
import useLoginModal from "@/hooks/useLoginModal";

interface SidebarItemProps {
  label: string;
  href?: string;
  icon: React.ComponentType<{
    size?: number | string;
    color?: string;
    className?: string;
  }>;
  onClick?: () => void;
  auth?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
  auth,
}) => {
  const route = useRouter();
  const loginModal = useLoginModal();
  const { data: curretUser } = useCurrentUser();
  const handleOnClick = useCallback(() => {
    if (onClick) {
      return onClick();
    }

    if (auth && !curretUser) {
      loginModal.onOpen();
    } else if (href) {
      route.push(href);
    }
  }, [route, onClick, href, curretUser, auth]);

  return (
    <div className="flex flex-row items-center" onClick={handleOnClick}>
      {/* Mobile: Icon only */}
      <div
        className="
          relative
          rounded-full
          h-14
          w-14
          flex
          items-center
          justify-center
          px-1 py-0.5
          hover:bg-slate-500
          hover:bg-opacity-10
          cursor-pointer
          transition
          lg:hidden
        "
      >
        <Icon size={28} color="white" />
      </div>

      {/* Desktop: Icon + Label */}
      <div
        className="
          relative
          hidden
          lg:flex
          items-center
          gap-2
          rounded-full
          px-1.5 py-0.5
          hover:bg-slate-500
          hover:bg-opacity-10
          cursor-pointer
          transition
          my-4
        "
      >
        <Icon size={24} color="white" />
        <p className="text-white text-md">{label}</p>
      </div>
    </div>
  );
};

export default SidebarItem;
