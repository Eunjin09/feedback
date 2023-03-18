import styled from "styled-components";

export default function MyPage() {
  // 회원정보
  const userInfo = {
    userId: "xoxo",
    nickname: "googoo",
    email: "xoxokss@test.com",
    profileImg:
      "https://img.danawa.com/images/descFiles/5/268/4267661_1590591430238.jpeg",
  };
  return (
    <Wrap>
      <MyinfoWrap>
        <Title>내 정보</Title>
        <Header>
          <InfoImg src={userInfo.profileImg} />
          <Content>
            <h1>{userInfo.nickname}</h1>
            <div>이메일</div>
            <div>{userInfo.email}</div>
            <div>전화번호</div>
            <div>전화번호를 보여주는 api가 없네용</div>
            <PasswardBtn>비밀번호 변경</PasswardBtn>
            <SecessionBtn>회원탈퇴</SecessionBtn>
          </Content>
        </Header>
      </MyinfoWrap>
      <MyprojectBox>
        <Title>나의 프로젝트</Title>
        <ProjectWrap>
          <ProjectBox>
            <BoxTitle>프로젝트명</BoxTitle>
            <BoxSub>어쩌구 저쩌구</BoxSub>
          </ProjectBox>
        </ProjectWrap>
      </MyprojectBox>
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 100px;
  background-color: #f2f4fa;
`;
const MyinfoWrap = styled.div``;
const Title = styled.div`
  font-size: 48px;
  line-height: 1;
  margin-bottom: 34px;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  margin-bottom: 100px;
  /* width: 200px; */
`;
const InfoImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-right: 30px;
`;
const Content = styled.div`
  h1 {
    font-size: 32px;
    margin-bottom: 32px;
  }
  div {
    font-size: 24px;
    line-height: 28px;
  }
`;
const PasswardBtn = styled.button`
  width: 180px;
  height: 40px;
  border-radius: 9px;
  background: #444444;
  font-size: 20px;
  color: #ffffff;
  margin-top: 20px;
`;

const SecessionBtn = styled.button`
  font-size: 16px;
  line-height: 18px;
  color: #b63d3d;
  margin-left: 30px;
`;

const MyprojectBox = styled.div``;
const ProjectWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 6%;
  column-gap: 3%;
`;
const ProjectBox = styled.div`
  width: 100%;
  height: 289px;
  background: #d9d9d9;
  border-radius: 18px;
  position: relative;
`;
const BoxTitle = styled.div`
  font-weight: 700;
  font-size: 36px;
  line-height: 41px;
  position: absolute;
  bottom: 20%;
  box-sizing: border-box;
  padding-left: 15px;
`;
const BoxSub = styled.div`
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  position: absolute;
  bottom: 5%;
  box-sizing: border-box;
  padding-left: 15px;
`;
