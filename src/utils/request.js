import axios from 'axios';

export const POST = async (path, data) =>
  await axios.post(`${process.env.REACT_APP_API_URL}${path}`, data);

export const GET = async (path) =>
  await axios.get(`${process.env.REACT_APP_API_URL}${path}`);
