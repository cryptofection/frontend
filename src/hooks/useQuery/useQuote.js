import { useQuery } from 'react-query';
import { GET } from 'utils/request';

const useQuote = (id) => {
  return {
    quote: useQuery(
      ['quote', id],
      () => GET(`/quotes/${id}`).then(({ data }) => data),
      {
        staleTime: 0,
        refetchOnMount: true,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
        enabled: !!id,
      },
    ).data,
  };
};

export default useQuote;
