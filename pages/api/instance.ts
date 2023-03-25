import axios from "axios";

const token =
  typeof window !== "undefined" ? sessionStorage.getItem("token") : null;

const instance = axios.create({
  //상선님
  // baseURL: "http://54.180.121.151:8000/",
  //수봉님
  //baseURL: "http://52.78.88.12/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

instance.interceptors.response.use(
  function (response) {
    //응답에 성공 했을때
    // console.log(response.data);
    //* 응답은 성공했지만 error인 경우 핸들링
    if (response.data.errorMessage) {
      alert(response.data.errorMessage);
    }
    return response;
  },
  function (error) {
    //에러 핸들링
    console.log(error.data);
  }
);

export default instance;
