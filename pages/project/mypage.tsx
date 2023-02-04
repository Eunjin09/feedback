import styled from "styled-components";

export default function mypage() {
  return (
    <Wrap>
      <MyinfoWrap>
        <Title>
          <h1>내 정보</h1>
        </Title>

        <InfoImg></InfoImg>
        <Content>
          <h1>홍길동</h1>
          <div>이메일</div>
          <div>전화번호</div>
          <PasswardBtn>비밀번호 변경</PasswardBtn>
          <SecessionBtn>회원탈퇴</SecessionBtn>
        </Content>
      </MyinfoWrap>
      <MyprojectBox>
      <Title>나의 프로젝트</Title>
      <ProjectWrap>
        <ProjectBox>
          <BoxTitle>프로젝트명</BoxTitle>
          <BoxSub>어쩌구 저쩌구</BoxSub>
        </ProjectBox>
        <ProjectBox>
          <BoxTitle>프로젝트명</BoxTitle>
          <BoxSub>어쩌구 저쩌구</BoxSub>
        </ProjectBox>
        <ProjectBox>
          <BoxTitle>프로젝트명</BoxTitle>
          <BoxSub>어쩌구 저쩌구</BoxSub>
        </ProjectBox>
        <ProjectBox>
          <BoxTitle>프로젝트명</BoxTitle>
          <BoxSub>어쩌구 저쩌구</BoxSub>
        </ProjectBox>
        <ProjectBox>
          <BoxTitle>프로젝트명</BoxTitle>
          <BoxSub>어쩌구 저쩌구</BoxSub>
        </ProjectBox>
        <ProjectBox>
          <BoxTitle>프로젝트명</BoxTitle>
          <BoxSub>어쩌구 저쩌구</BoxSub>
        </ProjectBox>
      </ProjectWrap>
    </MyprojectBox>
    </Wrap>
  );
}

const Wrap = styled.div``;
const MyinfoWrap = styled.div``;
const Title = styled.div`
  h1 {
    font-size: 48px;
    line-height: 1;
    margin-bottom: 34px;
  }
`;
const InfoImg = styled.div`
  width: 265px;
  height: 265px;
  background: #d9d9d9;
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
  width: 225px;
  height: 52px;
  border-radius: 9px;
  background: #444444;
  font-size: 24px;
  color: #ffffff;
`;

const SecessionBtn = styled.button`
  font-size: 16px;
  line-height: 18px;
  color: #b63d3d;
  margin-left: 15px;
`;

const MyprojectBox = styled.div``;
const ProjectWrap = styled.div`
  width: 70%;
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