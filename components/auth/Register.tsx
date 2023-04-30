import axios from "axios";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {
  email_check,
  id_check,
  nickname_check,
  sing_up,
} from "../../pages/api/singupAPI";
import instance from "../../utils/axios";
import Modal from "../common/Modal";
import AuthHeader from "./AuthHeader";

interface RegisterType {
  onClose: () => void;
}
const Register = ({ onClose }: RegisterType) => {
  const ref = {
    id: useRef<HTMLInputElement>(null),
    password: useRef<HTMLInputElement>(null),
    passwordConfirm: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    emailConfirm: useRef<HTMLInputElement>(null),
    nickname: useRef<HTMLInputElement>(null),
  };

  const data = {
    userId: ref.id.current?.value,
    password: ref.password.current?.value,
    email: ref.email.current?.value,
    nickname: ref.nickname.current?.value,
  };

  //회원가입 버튼
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    sing_up(data);
  };
  const [emailConfirm, setEmailConfirm] = useState({
    state: false,
    value: "",
    success: false,
  });
  //회원가입 중복검사 버튼
  const check = async (e: any) => {
    // console.log(e.target.value);
    const value = e.target.value;
    //아이디 중복검사
    if (value === "idCheck") {
      id_check(data);
    } else if (value === "passwordCheck") {
      if (ref.passwordConfirm.current!.value === ref.password.current!.value)
        alert("중복검사가 완료 되었습니다.");
      else {
        alert("비밀번호가 달라요!");
      }
    } else if (value === "nicknameCheck") {
      nickname_check(data);
    } else if (value === "emailCheck") {
      const res = await email_check(data);
      if (res.data.success) {
        alert("인증번호 전송이 완료되었습니다.");
        setEmailConfirm({ ...emailConfirm, state: true, value: res.data.data });
      } else alert("이미 가입된 이메일입니다.");
    } else if (value === "emailConfirm") {
      console.log(ref.emailConfirm.current!.value, "입력값이다.");
      if (ref.emailConfirm.current!.value !== emailConfirm.value)
        alert("인증번호가 틀렸습니다.");
      else {
        alert("인증이 완료 되었습니다.");
        setEmailConfirm({ ...emailConfirm, success: true });
      }

      console.log(emailConfirm.value, "값이다");
    }
  };

  const [inputToggle, setInputToggle] = useState({
    id: false,
    password: false,
    email: false,
    nickname: false,
    emailConfirm: false,
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
    }

    if (name === "password" && value !== "") {
      setInputToggle({
        ...inputToggle,
        password: true,
      });
    } else if (name === "password" && value === "") {
      setInputToggle({
        ...inputToggle,
        password: false,
      });
    }

    if (name === "email" && value !== "") {
      setInputToggle({
        ...inputToggle,
        email: true,
      });
    } else if (name === "email" && value === "") {
      setInputToggle({
        ...inputToggle,
        email: false,
      });
    }

    if (name === "nickname" && value !== "") {
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

    if (name === "emailConfirm" && value !== "") {
      console.log(123123);

      setInputToggle({
        ...inputToggle,
        emailConfirm: true,
      });
    } else if (name === "emailConfirm" && value === "") {
      setInputToggle({
        ...inputToggle,
        emailConfirm: false,
      });
    }
  };
  return (
    <>
      <Form>
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
              <Button
                type="button"
                className={inputToggle.id ? "active" : ""}
                value="idCheck"
                onClick={check}
              >
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
            </Field>
          </Line>
          <Line>
            <span>비밀번호 확인</span>
            <Field>
              <Input type="text" ref={ref.passwordConfirm} />
              <Button
                type="button"
                className={inputToggle.password ? "active" : ""}
                value="passwordCheck"
                onClick={check}
              >
                확인
              </Button>
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
              <Button
                type="button"
                className={inputToggle.nickname ? "active" : ""}
                value="nicknameCheck"
                onClick={check}
              >
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
              <Button
                type="button"
                className={inputToggle.email ? "active" : ""}
                value="emailCheck"
                onClick={check}
              >
                인증
              </Button>
            </Field>
          </Line>
          {emailConfirm.state && (
            <Line>
              <span>인증번호 입력</span>
              <Field>
                <Input
                  type="text"
                  ref={ref.emailConfirm}
                  onChange={ToggleHandler}
                />
                <Button
                  type="button"
                  className={inputToggle.emailConfirm ? "active" : ""}
                  value="emailConfirm"
                  onClick={check}
                >
                  확인
                </Button>
              </Field>
            </Line>
          )}
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
    </>
  );
};

export default Register;

const Form = styled.form``;

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
