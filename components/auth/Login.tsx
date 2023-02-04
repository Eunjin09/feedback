import axios from "axios";
import { getPackedSettings } from "http2";
import { useState, FormEvent } from "react";
import styled, { css } from "styled-components";
import { getUser } from "../../api/user";
import instance from "../../pages/api/instance";
import Register from "./Register";

import { useMutation } from "react-query";

interface IAddContent {
  userId: any;
  password: any;
}

export default function Login() {
  const [isOpen, setIsOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({
    userId: "test1234",
    password: "pass1234",
  });

  const onChange = (e: any) => {
    const { value, id } = e.target;
    setUserInfo({
      ...userInfo,
      [id]: value,
    });
  };

  const getInfo = async (e: any) => {
    console.log(userInfo);
    const data = mutateAsync(userInfo);
    localStorage.setItem("accessToken", "123123123");
  };

  const { mutateAsync } = useMutation(async (userInfo: IAddContent) => {
    return await instance.post(`/api/user/login`, userInfo);
  });

  return (
    <Wrap>
      {isOpen ? (
        <Register />
      ) : (
        <Form>
          <div>
            <label htmlFor="userId">
              <input
                type="text"
                id="userId"
                placeholder="아이디"
                onChange={onChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              <input
                type="password"
                id="password"
                placeholder="비밀번호"
                onChange={onChange}
              />
            </label>
          </div>
          <button onClick={getInfo}>로그인</button>
          <Line>
            <hr />
            <span>또는</span>
          </Line>
          <button className="signup" onClick={() => setIsOpen(true)}>
            회원가입
          </button>
        </Form>
      )}
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 0 50px;
`;
const Line = styled.div`
  display: flex;
  justify-items: center;
  width: 100%;
  align-items: center;
  position: relative;
  height: 30px;
`;

const Form = styled.div`
  input {
    width: 100%;
    border: 1px solid #dadada;
    border-radius: 6px;
    padding: 14px 12px;
    margin-bottom: 15px;
  }
  input::placeholder {
    color: #dbdbdb;
  }
  button {
    width: 100%;
    border-radius: 6px;
    background-color: #4c70ce;
    color: #fff;
    padding: 10px 0;
    text-align: center;
  }
  button.signup {
    background-color: #f0f0f0;
    color: #333;
  }
  hr {
    width: 100%;
  }
  span {
    position: absolute;
    transform: translateX(-50%);
    background-color: #fff;
    left: 50%;
    padding: 0 5px;
  }
`;
