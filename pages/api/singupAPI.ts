import axios from "axios";
import { singupType } from "../../types/singUpTypes";
import instance from "./instance";

export function sing_up(data: singupType) {
  // console.log(data, "data");
  axios.post(`http://52.78.88.12/api/user/signup`, data).then((response) => {
    console.log(response);
  });
}
export function id_check(data: singupType) {
  console.log(data, data.userId);
  axios
    .post(`http://52.78.88.12/api/user/confirmId`, {
      userId: data.userId,
    })
    .then((response) => {
      console.log(response);
    });
}
export function nickname_check(data: singupType) {
  console.log(data, data.userId, data.password);
  // axios
  //   .post(`api/user/confirm`, {
  //     userId: data.userId,
  //   })
  //   .then((response) => {
  //     console.log(response.data);
  //   });
}

export function email_check(data: singupType) {
  console.log(data.email);
  axios
    .post("http://52.78.88.12/api/user/verifyEmail", {
      email: data.email,
    })
    .then((res) => console.log(res));

  ///api/user/verify-email <= URL
}
