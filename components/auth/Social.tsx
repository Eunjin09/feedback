import styled, { css } from "styled-components";
import AuthHeader from "./AuthHeader";
import Image from "next/image";
import kakao from "../../public/asset/icon/kakao.png";
import naver from "../../public/asset/icon/naver.png";
import google from "../../public/asset/icon/google.png";
import Login from "./Login";
import { useState } from "react";
import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import Link from "next/link";

export default function Social({ onClose, signup }: any) {
  const [emailLogin, setEmailLogin] = useState(false);

  const click = async () => {
    const server = "http://54.180.121.151:8000/api/user/kakao";
    await axios.get(`${server}/api/user/kakao`);
  };

  return (
    <Wrap>
      <AuthHeader
        onBack={() => {
          setEmailLogin(false);
        }}
        onClose={onClose}
      >
        Sign In
      </AuthHeader>
      {emailLogin ? (
        <Login onClose={onClose} signup={signup} />
      ) : (
        <>
          <ul>
            <Kakao>
              <Image src={kakao} alt="카카오"></Image>
              <Link href="http://52.78.88.12/api/user/kakao" passHref>
                카카오 로그인
              </Link>
            </Kakao>
            <Naver>
              <Image src={naver} alt="네이버"></Image>
              <span>네이버 로그인</span>
            </Naver>
            <Google>
              <Image src={google} alt="구글"></Image>
              <span>구글 로그인</span>
            </Google>
          </ul>
          <p onClick={() => setEmailLogin(true)}>이메일로 로그인</p>
        </>
      )}
    </Wrap>
  );
}

const Wrap = styled.div`
  ul {
    padding: 0 68px;
  }
  li {
    width: 100%;
    height: 65px;
    line-height: 65px;
    border-radius: 10px;
    text-align: center;
    margin-bottom: 27px;
  }
  li span {
    margin-left: 12px;
    font-size: 20px;
    color: #333;
  }
  p {
    text-align: center;
    cursor: pointer;
  }
`;

const Kakao = styled.li`
  background-color: #ffeb3b;
`;
const Naver = styled.li`
  background-color: #00ae4d;
`;
const Google = styled.li`
  background-color: #ededed;
`;
