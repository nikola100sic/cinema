import { AuthAxios } from './axios';

const getUser = (username: string) => {
  return AuthAxios.get(`/${username}`);
};

export default {
  getUser,
};
