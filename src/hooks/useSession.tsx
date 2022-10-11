import { useQuery } from "@tanstack/react-query";
import { getSession } from "services/supabase/auth";

const useSession = () => {
  const { data, isLoading } = useQuery(["session"], getSession);

  return {
    response: data,
    isLoading,
  };
};

export default useSession;
