import axios from "axios";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import AuthHeader from "./AuthHeader";

const Register = () => {
  const ref = {
    id: useRef<HTMLInputElement>(null),
    password: useRef<HTMLInputElement>(null),
    passwordConfirm: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    emailConfirm: useRef<HTMLInputElement>(null),
    nickname: useRef<HTMLInputElement>(null),
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const data = {
      userId: ref.id.current?.value,
      password: ref.password.current?.value,
      email: ref.email.current?.value,
      nickname: ref.nickname.current?.value,
    };
    axios
      .post(` http://52.78.88.12/api/user/signup`, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        //아이디인지 이메일인지 모르겠음. 같은형식으로 두번 보냈을떄 에러남
        // 마찬가지로 아무것도 안쓴상태에서 보내면 에러남
        if (error.message === "Network Error") {
          console.log("네트워크에러입니다.");
        }
      });
  };
  const [inputToggle, setInputToggle] = useState({
    id: false,
    password: false,
    email: false,
    nickname: false,
  });
  const { id, password, email, nickname } = inputToggle;

  const ToggleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    if (name === "id" && value !== "") {
      setInputToggle({
        ...inputToggle,
        id: true,
      });
    } else if (name === "id" && value === "") {
      setInputToggle({
        ...inputToggle,
        id: false,
      });
    } else if (name === "password" && value !== "") {
      setInputToggle({
        ...inputToggle,
        password: true,
      });
    } else if (name === "password" && value === "") {
      setInputToggle({
        ...inputToggle,
        password: false,
      });
    } else if (name === "email" && value !== "") {
      setInputToggle({
        ...inputToggle,
        email: true,
      });
    } else if (name === "email" && value === "") {
      setInputToggle({
        ...inputToggle,
        email: false,
      });
    } else if (name === "nickname" && value !== "") {
      setInputToggle({
        ...inputToggle,
        nickname: true,
      });
    } else if (name === "nickname" && value === "") {
      setInputToggle({
        ...inputToggle,
        nickname: false,
      });
    }
  };
  return (
    <Form>
      <AuthHeader
        onBack={() => {
          console.log("back");
        }}
        onClose={() => {
          console.log("close");
        }}
      >
        SignUp
      </AuthHeader>
      <div>
        <Line>
          <span>아이디</span>
          <Field>
            <Input
              type="text"
              name="id"
              ref={ref.id}
              onChange={ToggleHandler}
            />
            <Button type="button" className={inputToggle.id ? "active" : ""}>
              중복검사
            </Button>
          </Field>
        </Line>
        <Line>
          <span>비밀번호</span>
          <Field>
            <Input
              type="text"
              name="password"
              ref={ref.password}
              onChange={ToggleHandler}
            />
            <Button
              type="button"
              className={inputToggle.password ? "active" : ""}
            >
              중복검사
            </Button>
          </Field>
        </Line>
        <Line>
          <span>비밀번호 확인</span>
          <Field>
            <Input type="text" ref={ref.passwordConfirm} />
          </Field>
        </Line>
        <Line>
          <span>닉네임</span>
          <Field>
            <Input
              type="text"
              name="nickname"
              ref={ref.nickname}
              onChange={ToggleHandler}
            />
            <Button className={inputToggle.nickname ? "active" : ""}>
              중복검사
            </Button>
          </Field>
        </Line>
        <Line>
          <span>이메일</span>
          <Field>
            <Input
              type="text"
              name="email"
              ref={ref.email}
              onChange={ToggleHandler}
            />
            <Button className={inputToggle.email ? "active" : ""}>체크</Button>
          </Field>
        </Line>
        <Line>
          <span>이메일 확인</span>
          <Field>
            <Input type="text" ref={ref.emailConfirm} />
            <Button>확인</Button>
          </Field>
        </Line>
      </div>
      <div className="w-full">
        <button
          className="w-full p-20 border-1 rounded-10 bg-[#4C70CE] text-[#FFFFFF]"
          onClick={submitHandler}
        >
          회원가입
        </button>
      </div>
    </Form>
  );
};

export default Register;

const Form = styled.form`
  ${tw`px-40 py-30 w-500 border-1`}
`;

const Line = styled.div`
  ${tw`flex items-center justify-between w-full my-20`}
`;

const Field = styled.div`
  ${tw`flex gap-10 w-300`}
`;

const Input = styled.input`
  ${tw`w-full border-0 bg-[#D9D9D9] p-10 rounded-10`}
`;

const Button = styled.button`
  ${tw`w-100 shrink-0 p-10 bg-[#787878] rounded-10 text-[#FFFFFF]`}
  &.active {
    ${tw`w-100 shrink-0 p-10 bg-[#4C70CE] rounded-10 text-[#FFFFFF]`}
  }
`;
