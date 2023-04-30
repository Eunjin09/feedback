import axios from "axios";

const token =
  typeof window !== "undefined" ? sessionStorage.getItem("token") : null;

const instance = axios.create({
  //상선님
  // baseURL: "http://54.180.121.151:8000/",
  //수봉님
  baseURL: "http://54.180.121.151:8000/",
});

instance.interceptors.request.use(
  (config) => {
    if (token) config.headers!.Authorization = `Bearer ${token}`;
    console.log(config, "전송전");

    return config;
  },
  function (err) {}
);

instance.interceptors.response.use(
  function (response) {
    //응답에 성공 했을때
    // console.log(response.data);
    //* 응답은 성공했지만 error인 경우 핸들링
    console.log(response, "전송후");

    if (response.data.errorMessage) {
      alert(response.data.errorMessage);
    }
    return response;
  },
  function (error) {
    //에러 핸들링
    return error.response;
  }
);

export default instance;
