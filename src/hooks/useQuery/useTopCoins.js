import { useQuery } from 'react-query';
import { GET } from 'utils/request';
import ms from 'ms';

const useTopCoins = () => {
  return {
    topCoins: useQuery(
      'topCoins',
      () => GET('/coins?sorted&limit=5').then(({ data }) => data),
      {
        staleTime: 0,
        refetchInterval: ms('1h'),
        refetchIntervalInBackground: true,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
      },
    ).data,
  };
};

export default useTopCoins;
