import axios from "axios";
const BASE_ENDPOINT = "http://127.0.0.1:8000/api";
const AXIOS_HEADERS = {
  Accept: "*/*",
  "Content-Type": "application/json",
};

export const axiosPost = async (endpoint: string, data: {}) =>
  axios.post(`${BASE_ENDPOINT}/${endpoint}`, data, {
    headers: AXIOS_HEADERS,
  });

export const axiosGet = async (endpoint: string, params: {}) =>
  axios.get(`${BASE_ENDPOINT}/${endpoint}`, {
    headers: AXIOS_HEADERS,
    params,
  });
