import axios from 'axios';

export const GET = async (path) => {
  console.log(`${process.env.REACT_APP_API_URL}${path}`)
  return await axios.get(`${process.env.REACT_APP_API_URL}${path}`);
};
