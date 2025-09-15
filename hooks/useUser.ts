import useSWR from "swr";

import fetcher from "@/lib/fetcher";

const useUser = (userId: string) => {
  const { data, isLoading, mutate, error } = useSWR(
    userId ? `/api/users/${userId}` : null,
    fetcher
  );

  return {
    data,
    isLoading,
    mutate,
    error,
  };
};
export default useUser;
