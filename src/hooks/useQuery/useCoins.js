import { useQuery } from 'react-query';
import { GET } from 'utils/request';

const useCoins = () => {
  return {
    coins: useQuery('coins', () => GET('/coins').then(({ data }) => data), {
      staleTime: Infinity,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
    }).data,
  };
};

export default useCoins;
