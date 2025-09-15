import useUsers from "@/hooks/useUsers";
import React from "react";
import Avatar, { AvatarSkeleton } from "../Avatar";

interface User {
  id: string;
  name: string;
  image?: string;
  username: string;
}

const FollowBar = () => {
  const { data: users = [], isLoading } = useUsers();
  if (users.length === 0) {
    return null;
  }
  return (
    <div className="px-2 py-4 hidden md:block">
      <div className="bg-neutral-800 rounded-xl p-3">
        <h2 className="text-white text-xl font-medium">Who to follow</h2>
        <div className="flex flex-col gap-6 mt-4">
          <div>{isLoading && <AvatarSkeleton />}</div>
          {users.map((user: User) => (
            <div key={user.id} className="flex flex-row gap-2">
              <Avatar userId={user.id} image={user.image} />
              <div className="flex flex-col">
                <p className="text-white font-semibold text-sm">{user.name}</p>
                <p className="text-neutral-300 text-sm">{user.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowBar;
