import axios from 'axios';
// import { sleep } from 'utils';

export const GET = async (path, headers = {}) => {
  // await sleep(4);
  return await axios.get(`${process.env.REACT_APP_API_URL}${path}`, {
    withCredentials: true,
    headers,
  });
};
