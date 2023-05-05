import axios, { AxiosError, AxiosResponse } from "axios";

const http = axios.create({
  baseURL: "https://newsapi.org/v2",
  headers: {
    "X-Api-Key": `a93f2d658d3c401e8bb676cc97829d48`,
  },
});

http.interceptors.response.use(
  function (config: AxiosResponse): AxiosResponse {
    return config;
  },
  function (error: AxiosError): Promise<AxiosError> {
    return Promise.reject(error);
  }
);

export default http;
