import { useQuery } from 'react-query';
import { POST } from 'utils/request';
import { selectSearchQuery } from 'slices/global';
import { useSelector } from 'react-redux';

const useInfo = () => {
  const coin = useSelector(selectSearchQuery);

  return {
    info: useQuery(
      ['info', coin],
      () => POST('/info', { coin }).then(({ data }) => data),
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
