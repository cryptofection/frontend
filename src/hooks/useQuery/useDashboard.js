import { useQuery } from 'react-query';
import { GET } from 'utils/request';
import ms from 'ms';

const useDashboard = () => {
  return {
    dashboard: useQuery(
      'dashboard',
      () => GET(`/dashboard`).then(({ data }) => data),
      {
        staleTime: 0,
        refetchInterval: ms('5m'),
        refetchOnMount: true,
        refetchOnWindowFocus: true,
        refetchOnReconnect: true,
        retry: false,
      },
    ).data,
  };
};

export default useDashboard;
