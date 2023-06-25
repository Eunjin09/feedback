import { singupType } from "../../types/singUpTypes";
import instance from "./instance";

export function sing_up(data: singupType) {
  // console.log(data, "data");
  instance.post(`api/user/signup`, data).then((response) => {
    console.log(response);
  });
}
export function id_check(data: singupType) {
  instance
    .post(`api/user/confirmId`, {
      userId: data.userId,
    })
    .then((response) => {
      console.log(response, "api값");

      if (response.status === 200)
        alert("아이디 중복검사 확인이 완료 되었습니다.");
      else alert("중복되었거나 서버오류 입니다.");
    });
}
export function nickname_check(data: singupType) {
  instance
    .post(`api/user/confirmNick`, {
      nickname: data.nickname,
    })
    .then((response) => {
      console.log(response.data);
    });
}

// export function email_check(data: singupType) {
//   console.log(data.email);
//   instance
//     .post("api/user/verifyEmail", {
//       email: data.email,
//     })
//     .then((res) => {
//       if (res.data.success) {
//         alert("인증번호 전송이 완료되었습니다");
//         return res.data.data;
//       } else {
//         alert("이미 가입된 이메일입니다.");
//         return false;
//       }
//     });

//   return;
//   ///api/user/verify-email <= URL
// }

export function email_check(sendData: singupType) {
  const data = instance.post("api/user/verifyEmail", {
    email: sendData.email,
  });

  return data;
}
