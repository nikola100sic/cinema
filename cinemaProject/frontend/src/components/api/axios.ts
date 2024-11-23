import axios from 'axios';

export const CinemaAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: 'application/json',
  },
});

export const AuthAxios = axios.create({
  baseURL: 'http://localhost:8080/auth',
  headers: {
    Accept: 'application/json',
  },
});

CinemaAxios.interceptors.request.use(function add_jwt(config) {
  if (window.localStorage['jwt']) {
    config.headers['Authorization'] = 'Bearer ' + window.localStorage['jwt'];
  }

  return config;
});
