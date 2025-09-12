import ArrowLeftIcon from "@/assets/ArrowLefticon";
import { useRouter } from "next/router";
import { useCallback } from "react";

interface HeaderProps {
  label: string;
  showBackArrow?: boolean;
}
const Header: React.FC<HeaderProps> = ({ label, showBackArrow }) => {
  const router = useRouter();
  const handleBack = useCallback(() => {
    router.back();
  }, [router]);
  return (
    <div className="border-b-[1px] border-neutral-800 p-5">
      <div className="flex flex-row items-center gap-2">
        {showBackArrow && (
          <ArrowLeftIcon color="white" className="cursor-pointer" />
        )}
        <h1 className="text-white font-medium text-xl">{label}</h1>
      </div>
    </div>
  );
};

export default Header;
