import axios from "axios";

// const token = localStorage.getItem("accessToken");
const token =
  typeof window !== "undefined" ? sessionStorage.getItem("token") : null;

const instance = axios.create({
  baseURL: "http://52.78.88.12/api",
  headers: {
    Authorization: `Bearer ${token}`,
  },
  timeout: 5000,
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (config) {
    return config;
  },
  function (error) {
    // errorController(error);
    console.log(error);
  }
);

export default instance;
