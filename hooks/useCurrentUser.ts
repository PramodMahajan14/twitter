import useSWR from "swr";

import fetcher from "@/lib/fetcher";

const useCurrentUser = () => {
  const { data, isLoading, mutate, error } = useSWR("/api/current");

  return {
    data,
    isLoading,
    mutate,
    error,
  };
};
export default useCurrentUser;
