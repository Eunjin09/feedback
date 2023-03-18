import styled, { css } from "styled-components";
import tw from "twin.macro";
import Social from "../auth/Social";
import { useState } from "react";
import Link from "next/link";
import Register from "../auth/Register";
import { useRouter } from "next/router";

export default function Nav() {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();
  const PARAMS = router.pathname;
  // console.log(PARAMS);
  return (
    <Wrap>
      <Menu className="h-full bg-white">
        <h1 className="text-36 text-blue-600 font-bold text-center">
          Feedback
        </h1>
        <ul>
          <li className={PARAMS === "/" ? "active" : ""}>
            <Link href="/">홈</Link>
          </li>
          <li className={PARAMS === "/project/add" ? "active" : ""}>
            <Link href="/project/add">프로젝트 등록</Link>
          </li>
          <li className={PARAMS === "/survey" ? "active" : ""}>
            <Link href="/survey">설문 등록</Link>
          </li>
          <li className={PARAMS === "/feedback" ? "active" : ""}>
            <Link href="/feedback">피드백</Link>
          </li>
          <li className={PARAMS === "/mypage" ? "active" : ""}>
            <Link href="/mypage">마이페이지</Link>
          </li>
        </ul>
      </Menu>
      <TopBar>
        <input type="text" className="search absolute pl-25" />
        <UserInfo onClick={() => setIsLogin(true)}>
          <h2>로그인</h2>
        </UserInfo>
      </TopBar>
      {isLogin ? (
        <>
          <LoginBack />
          <LoginWrap>
            <Mascot />
            <LoginBox>
              {isLogin ? <Social onClose={() => setIsLogin(false)} /> : null}
            </LoginBox>
          </LoginWrap>
        </>
      ) : null}
    </Wrap>
  );
}

const Wrap = styled.div``;
const LoginBack = styled.div`
  position: fixed;
  z-index: 500;
  width: 100vw;
  height: 100%;
  opacity: 0.4;
  background-color: #535353;
`;
const LoginWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 501;
`;

const LoginBox = styled.div`
  width: 500px;
  height: 550px;
  background-color: #fff;
  border-radius: 10px;
`;
const Mascot = styled.div`
  height: 95px;
  background-image: url("asset/image/mascot.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

const Menu = styled.nav`
  position: fixed;
  z-index: 100;
  display: inline-block;
  width: 16vw;
  height: 100vh;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  h1 {
    height: 7.7vw;
    line-height: 7.7vw;
  }
  ul {
    position: relative;
    top: 3.4vw;
    left: 2.3vw;
  }
  li {
    margin-bottom: 9px;
    padding: 10px 17px;
    border-radius: 8px;
    font-size: 18px;
  }
  .active {
    background: #7d93ff;
    color: #fff;
  }
`;

const TopBar = styled.div`
  position: absolute;
  display: inline-block;
  top: 0;
  left: 15vw;
  width: 84vw;
  height: 7.7vw;
  padding: 0 75px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  background: #fff;
  z-index: 99;

  .search {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    width: 45.9vw;
    height: 62px;
    background: #f2f2f2;
    border-radius: 100px;
  }
  input:focus {
    outline: none;
  }
`;
const UserInfo = styled.div`
  float: right;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;
