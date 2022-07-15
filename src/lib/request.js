import Axios, { AxiosRequestConfig } from "axios";

import { API_URL } from "../config";

// TODO:
// function authRequestInterceptor(config: AxiosRequestConfig) {
//   const token = storage.getToken();
//   if (token) {
//     config.headers.authorization = `${token}`;
//   }
//   config.headers.Accept = "application/json";
//   return config;
// }

const axios = Axios.create({
  baseURL: API_URL,
});

// axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    return Promise.reject(error);
  }
);

const { get, post } = axios;
export { get, post };
