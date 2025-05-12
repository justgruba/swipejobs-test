import { useQuery } from '@tanstack/react-query';

import { fetchUserProfile } from '@/api/worker';
import { useUserContext } from '@/context/UserContext';

export const useUserProfile = () => {
  const { userId } = useUserContext();
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['profile'],
    queryFn: () => fetchUserProfile(userId),
  });

  return {
    data,
    isLoading,
    error,
    refetch,
  };
};
