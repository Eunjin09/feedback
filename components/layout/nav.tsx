import styled, { css } from "styled-components";
import tw from "twin.macro";

export default function Nav() {
  return (
    <Wrap>
      <Menu className="h-full bg-white">
        <h1 className="text-36 text-blue-600 font-bold text-center">Feedback</h1>
        <ul>
          <li className="active">홈</li>
          <li>프로젝트 등록</li>
          <li>설문 등록</li>
          <li>마이페이지</li>
        </ul>
      </Menu>
      <TopBar>
        <input type="text" className="search absolute pl-25"/>
        <UserInfo>
          <h2>로그인</h2>
        </UserInfo>
      </TopBar>
    </Wrap>
  )
}

const Wrap = styled.div`
`

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
ul{
  position: relative;
  top:3.4vw;
  left: 2.3vw;
}
li{
  margin-bottom: 9px;
  padding: 10px 17px;
  border-radius: 8px;
  font-size: 18px;
}
.active {
  background: #7D93FF;
  color: #fff
}
`

const TopBar = styled.div`
position: absolute;
display: inline-block; 
top: 0; left: 15vw;
width: 84vw;
height: 7.7vw;
padding:0 75px;
box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
background: #fff;
z-index: 99;

.search {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 45.9vw;
  height: 62px;
  background: #F2F2F2;
  border-radius: 100px;
}
input:focus{
  outline: none;
}
`
const UserInfo = styled.div`
  float: right;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`