import styled, { css } from "styled-components";
import tw from "twin.macro";
import Image from "next/image";
import {
  useQuery,
  useQueryClient,
} from 'react-query';
import axios from "axios";

export default function Main() {
 const queryClient = useQueryClient()

 const {data} = useQuery('post', () => 
  axios("http://localhost:3003/post")
 );
 
  return (
    <Wrap>
      <ProjectWrap>
        <Title>
          <h1>프로젝트</h1>
          <Filter>
            <li>
            <input type="radio" name="filter" />
              <label htmlFor="feedback">피드백</label>
            </li>
            <li>
              <input type="radio" name="filter" />
              <label htmlFor="event">이벤트</label>
            </li>
        </Filter>
        </Title>
          <ul>
            {
             data && data.data.map((e:any,i:any)=>{
              return(
                <Content key="e.id">
                  <PostImg>
                    <div>
                      <h3 className="font-bold mb-8">{e.title}</h3>
                      <div>
                        <span className="mr-6 bg-neutral-700">피드백</span>
                        <span className="bg-amber-400">이벤트</span>
                      </div>
                    </div>
                  </PostImg>
                  <Intro>디스콰이엇은 사이트를 등록하고 볼 수 있는 프로젝트입니다 디스콰이엇은 사이트를 등록하고 볼 수 있는 프로젝트입니다 디스콰이엇은 사이트를 등록하고 볼 수 있는 프로젝트입니다.디스콰이엇은 사이트를 등록하고 볼 수 있는 프로젝트입니다 디스콰이엇은 사이트를 등록하고 볼 수 있는 프로젝트입니다</Intro>
                  <Keyword>
                    <span>#커뮤니티</span>
                    <span>#IT</span>
                    <span>#스타트업</span>
                  </Keyword>
                  <PostInfo className="flex justify-between mt-12">
                    <div className="flex items-center">
                      <div className="img w-25 h-25 rounded-full mr-5 "></div>
                      <span>유저닉네임</span>
                    </div>
                    <p>2022.09.09 ~ 2022.09.11</p>
                  </PostInfo>
                </Content>
              )
             })
            }
          </ul>
      </ProjectWrap>
      <SideWrap>
        <h2>주간 인기순</h2>
        <RankWeek>
          <li className="mb-24 h-158">
            <img src="" alt="" />
            <div className="pl-20">
              <h4>프로젝트명</h4>
              <p>프로젝트 설명글 프로젝트 설명글 프로젝트 설명글 프로젝트 설명글 프로젝트 설명글 프로젝트 설명글 프로젝트 설명글</p>
            </div>
          </li>
          <li className="mb-24 h-158">
            <img src="" alt="" />
            <div className="pl-20">
              <h4>프로젝트명</h4>
              <p>프로젝트 설명글 프로젝트 설명글 프로젝트 설명글 프로젝트 설명글 프로젝트 설명글 프로젝트 설명글 프로젝트 설명글</p>
            </div>
          </li>
          <li className="mb-24 h-158">
            <img src="" alt="" />
            <div className="pl-20">
              <h4>프로젝트명</h4>
              <p>프로젝트 설명글 프로젝트 설명글 프로젝트 설명글 프로젝트 설명글 프로젝트 설명글 프로젝트 설명글 프로젝트 설명글</p>
            </div>
          </li>
        </RankWeek>
        <h2>일간 인기순</h2>
        <RankDay>
          <li className="mb-24 h-158">
            <img src="" alt="" />
            <div className="pl-20">
              <h4>프로젝트명</h4>
              <p>프로젝트 설명글 프로젝트 설명글 프로젝트 설명글 프로젝트 설명글 프로젝트 설명글 프로젝트 설명글 프로젝트 설명글</p>
            </div>
          </li>
          <li className="mb-24 h-158">
            <img src="" alt="" />
            <div className="pl-20">
              <h4>프로젝트명</h4>
              <p>프로젝트 설명글 프로젝트 설명글 프로젝트 설명글 프로젝트 설명글 프로젝트 설명글 프로젝트 설명글 프로젝트 설명글</p>
            </div>
          </li>
          <li className="mb-24 h-158">
            <img src="" alt="" />
            <div className="pl-20">
              <h4>프로젝트명</h4>
              <p>프로젝트 설명글 프로젝트 설명글 프로젝트 설명글 프로젝트 설명글 프로젝트 설명글 프로젝트 설명글 프로젝트 설명글</p>
            </div>
          </li>
        </RankDay>
        <h2>피드백 랭킹</h2>
        <RankFeed>
          <ul>
            <li>
              <strong>1</strong>
              <div></div>
              <p>유저닉네임</p>
              <span>40</span>
            </li>
            <li>
              <strong>2</strong>
              <div></div>
              <p>유저닉네임</p>
              <span>40</span>
            </li>
            <li>
              <strong>3</strong>
              <div></div>
              <p>유저닉네임</p>
              <span>40</span>
            </li>
            <li>
              <strong>4</strong>
              <div></div>
              <p>유저닉네임</p>
              <span>40</span>
            </li>
            <li>
              <strong>5</strong>
              <div></div>
              <p>유저닉네임</p>
              <span>40</span>
            </li>
          </ul>
        </RankFeed>
      </SideWrap>
    </Wrap>
  )
}

const Wrap = styled.div`
padding: 3.65vw 75px;
height: auto;
`

//** 프로젝트 **//
const ProjectWrap = styled.section`
display: inline-block;
width: 60%;
vertical-align: top;
h1 {
  font-size: 48px;
  line-height: 1;
  float: left;
}
`
const Title = styled.div`
overflow: hidden;
margin-bottom: 35px;
align-items: center;
display: flex;
justify-content: space-between;
`
const Filter = styled.ul`
  float: right;
  display: flex;
  font-size : 14px;
li {
  margin-left: 14px;
  display: flex;
  align-items: center;
}
input[type="radio"] {
  width: 28px;
  height: 28px;
  vertical-align: middle;
  background-color: #a37e7e;
  border: 1px solid #C3C3C3;
}
label {
  margin-left: 8px;
}
`
const Content = styled.li`
width: 100%;
padding: 15px;
border-radius: 15px;
background: #fff;
border: 1px solid #EEE;
margin-bottom: 38px;
`
const PostImg = styled.div`
display: flex;
align-items: flex-end;
width: 100%;
height: 18vw;
border-radius: 7px;
background: linear-gradient(180deg, rgba(235, 235, 235, 0) 26.22%, rgba(0, 0, 0, 0.6) 100%);
padding: 21px 19px;

h3 {
  font-size: 36px;
  color: #fff;
}
span {
  padding: 8px 15px;
  color: #fff;
  border-radius: 3px;
  font-weight: bold;
  font-size: 14px;
}
`
const Intro = styled.p`
font-size: 16px;
line-height: 28px;
height:85px;
overflow: hidden;
text-overflow: ellipsis;
word-break: break-word;
display: -webkit-box;
-webkit-line-clamp: 3; 
-webkit-box-orient: vertical;
color: #505050;
margin: 12px 0;
`
const Keyword = styled.div`
  span {
    padding: 6px 18px;
    background: #DBDBDB;
    color: #505050;
    border-radius: 50px;
    margin-right: 10px;
    font-size: 12px;
  }
`
const PostInfo = styled.div`
color: #A9A9A9;
.img {
  border: 1px solid #A9A9A9;
}
span{
  font-size: 13px;
}
p{
  font-size: 14px;
}
`


//** 일간, 주간, 랭킹 **//
const SideWrap = styled.aside`
display: inline-block;
width: 40%;
padding-left: 75px;
h2 {
  font-size: 32px;
  margin-bottom:16px;
}
li {
  display: flex;
  width: 100%;
  overflow: hidden;
}
img {
  display: block;
  width: 14vw;
  height: 100%;
  border-radius: 15px;
  background-color: #fff;
}
h4 {
  font-size: 24px;
}
p{
  font-size: 16px;
}
`
const RankWeek = styled.ul`

`
const RankDay = styled.ul`

`
const RankFeed = styled.div`
width: 100%;
background: #fff;
border-radius: 15px;
padding: 5px 25px;
ul{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
li{
display: flex;
width: 100%;
align-items: center;
justify-content: space-between;
padding: 15px 5px;
border-bottom: 1px solid #D0D0D0;
color: #666;
font-size: 18px;
}
li:last-child{
  border-bottom:none;
}
div {
  width: 3.5vw;
  height: 3.5vw;
  border: 1px solid #CCCCCC;
  border-radius: 50%;
  background-color: #fcfcfc;
}
strong {
  margin-right: 2.3vw;
  font-size: 32px;
  color: #333;
}
p {
  flex-grow: 1;
  padding-left: 1vw;
}
`

