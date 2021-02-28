import { useQuery } from 'react-query';
import { GET } from 'utils/request';

const useInfo = (coin) => {
  return {
    coins: useQuery(
      ['info', coin],
      () => GET('/info', { coin }).then(({ data }) => data),
      {
        staleTime: Infinity,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
        enabled: !!coin,
      },
    ).data,
  };
};

export default useInfo;
