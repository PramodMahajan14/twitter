import Header from "@/components/Header";
import UserBio from "@/components/users/UserBio";
import UserHero from "@/components/users/UserHero";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";

const UserView = () => {
  const router = useRouter();
  const { userId } = router.query;
  const { data: user, isLoading } = useUser(userId as string);

  if (isLoading) return <div>Loading....</div>;
  return (
    <>
      <Header showBackArrow label={user?.name} />
      <UserHero userId={user?.id} />
      <UserBio userId={user?.id} />
    </>
  );
};
export default UserView;
