import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";
import { useCallback } from "react";

interface AvatarProps {
  userId: string;
  userName?: string;
  image?: string;
  large?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ userId, userName, image, large }) => {
  const { data: user } = useUser(userId);
  const router = useRouter();

  const onClick = useCallback(
    (event: React.MouseEvent<HTMLImageElement | HTMLDivElement>) => {
      event.stopPropagation();
      const url = `users/${userId}`;
      router.push(url);
    },
    [userId, router]
  );

  return image ? (
    <img
      className={`${
        large ? "w-16 h-16" : "w-12 h-12"
      }  p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500`}
      src={image}
      alt="Bordered avatar"
      onClick={onClick}
    />
  ) : (
    <div
      className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
      onClick={onClick}
    >
      <svg
        className="absolute w-12 h-12 text-gray-400 -left-1"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        fontSize="sm"
      >
        <path
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default Avatar;

export const AvatarSkeleton = () => {
  return (
    <div className="flex flex-col gap-2">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="flex flex-row gap-2 animate-pulse">
          <div className="relative w-10 h-10 overflow-hidden bg-gray-300 rounded-full dark:bg-gray-700"></div>
          <div className="flex flex-col flex-1 space-y-2">
            <div className="h-3 bg-gray-300 rounded w-24 dark:bg-gray-700"></div>
            <div className="h-2 bg-gray-300 rounded w-16 dark:bg-gray-700"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
