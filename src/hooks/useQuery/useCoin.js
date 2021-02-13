import { useQuery } from 'react-query';
import { GET } from 'utils/request';

const useCoin = (id) => {
  return {
    coin: useQuery(
      ['coin', id],
      () => GET(`/coins/${id}`).then(({ data }) => data),
      {
        staleTime: Infinity,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
      },
    ).data,
  };
};

export default useCoin;
