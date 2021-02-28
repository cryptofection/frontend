import axios from 'axios';

export const GET = async (path, data = {}) => {
  console.log(`${process.env.REACT_APP_API_URL}${path}`);
  return await axios.get(`${process.env.REACT_APP_API_URL}${path}`, data);
};
