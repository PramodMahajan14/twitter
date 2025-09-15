import useUser from "@/hooks/useUser";
import React from "react";
import Avatar from "../Avatar";
import Image from "next/image";

interface UserHeroProps {
  userId: string;
}
const UserHero: React.FC<UserHeroProps> = ({ userId }) => {
  const { data: user } = useUser(userId);
  return (
    <div>
      <div className="bg-neutral-700 h-28 relative">
        {user?.coverImage && (
          <Image
            src={user?.coverImage}
            fill
            alt="cover image"
            style={{ objectFit: "cover" }}
          />
        )}
        <div className="absolute -bottom-6 left-4">
          <Avatar userId={user?.id} image={user?.image} large />
        </div>
      </div>
    </div>
  );
};

export default UserHero;
