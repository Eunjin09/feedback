import { singupType } from "../../types/singUpTypes";
import instance from "./instance";

export function sing_up(data: singupType) {
  // console.log(data, "data");
  instance.post(`api/user/signup`, data).then((response) => {
    console.log(response);
  });
}
export function id_check(data: singupType) {
  console.log(data, data.userId);
  instance
    .post(`api/user/confirmId`, {
      userId: data.userId,
    })
    .then((response) => {
      console.log(response);
    });
}
export function nickname_check(data: singupType) {
  console.log(data, data.userId, data.password);
  // instance
  //   .post(`api/user/confirm`, {
  //     userId: data.userId,
  //   })
  //   .then((response) => {
  //     console.log(response.data);
  //   });
}

export function email_check(data: singupType) {
  console.log(data.email);
  ///api/user/verify-email <= URL
}
