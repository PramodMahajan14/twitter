import React from "react";
import Link from "next/link";

interface SidebarItemProps {
  label: string;
  href?: string;
  icon: React.ComponentType<{
    size?: number | string;
    color?: string;
    className?: string;
  }>;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
}) => {
  const content = (
    <>
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
    </>
  );

  if (href) {
    return (
      <Link href={href}>
        <div className="flex flex-row items-center">{content}</div>
      </Link>
    );
  }

  return (
    <div className="flex flex-row items-center" onClick={onClick}>
      {content}
    </div>
  );
};

export default SidebarItem;
