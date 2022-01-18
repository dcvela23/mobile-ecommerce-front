import axios from "axios";

const API_URL = "https://front-test-api.herokuapp.com/";

const http = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json"
  }  
});
http.interceptors.response.use(
  res => res,
  err => {
    return Promise.reject(err);
  }
);

export default http;