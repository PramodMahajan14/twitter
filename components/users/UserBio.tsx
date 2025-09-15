import { format } from "date-fns";
import useCurrentUser from "@/hooks/useCurrentUser";
import useUser from "@/hooks/useUser";
import React, { useMemo } from "react";
import Button from "../Button";
import CalenderIcon from "@/assets/CalenderIcon";

interface UserBioProps {
  userId: string;
}
const UserBio: React.FC<UserBioProps> = ({ userId }) => {
  const { data: currentuser } = useCurrentUser();
  const { data: user } = useUser(userId);
  const createdAt = useMemo(() => {
    if (!user?.createdAt) {
      return null;
    }

    return format(new Date(user.createdAt), "MMMM yyyy");
  }, [user?.createdAt]);
  return (
    <div className="border-b-[1px] border-neutral-800 pb-4">
      <div className="flex justify-end p-2">
        {user?.id === userId ? (
          <Button secondary label="Edit Profile" onClick={() => {}} />
        ) : (
          <Button secondary label="Follow" onClick={() => {}} />
        )}
      </div>
      <div className="mt-2 px-1">
        <div className="flex flex-col">
          <p className="text-white text-2xl font-semibold">{user?.name}</p>
          <p className="text-neutral-500 text-md ">{user?.username}</p>
        </div>
        <div className="flex flex-col mt-1">
          <p className="text-white">{user.bio}</p>
        </div>
        <div className="flex flex-row items-center gap-2 mt-2 text-neutral-500">
          <CalenderIcon size={18} color="white" />{" "}
          <p className="text-white text-sm">Joined {createdAt}</p>
        </div>
      </div>
      <div className="flex flex-row items-center mt-2 gap-3 px-1">
        <div className="flex flex-row items-center gap-1">
          <p className="text-white">{user?.followingIds?.length}</p>
          <p className="text-neutral-500">Followers</p>
        </div>
        <div className="flex flex-row items-center gap-1">
          <p className="text-white">{user?.followingIds?.length}</p>
          <p className="text-neutral-500">Following</p>
        </div>
      </div>
    </div>
  );
};

export default UserBio;
