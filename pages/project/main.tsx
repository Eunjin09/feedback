import styled, { css } from "styled-components";
import tw from "twin.macro";
import Image from "next/image";
import { useQuery, useQueryClient } from "react-query";
import { useEffect, useRef, useState } from "react";
import { getList, getLikeList } from "../../api/project";

export default function Main() {
  const [list, setList] = useState([]);
  const getLists = async () => {
    const data = await getList();
    setList(data?.data);
  };
  const getListss = async () => {
    const data = await getLikeList();
    console.log(data);
    // setList(data.data);
  };

  useEffect(() => {
    getLists();
    getListss();
  }, []);

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
          {list?.map((e: any, i: number) => {
            return (
              <Content key={e.id}>
                <PostImageContainer>
                  {/* <PostImage
                    layout="fill"
                    width="100px"
                    height="100px"
                    src={`https://cdn.crowdpic.net/list-thumb/thumb_l_4291713E6EC8D22461618B2107D30880.jpg`}
                  ></PostImage> */}
                  <PostTitle>
                    <div className="inner">
                      <h3 className="font-bold mb-8">{e.title}</h3>
                      <div>
                        <span className="mr-6 bg-neutral-700">피드백</span>
                        <span className="bg-amber-400">이벤트</span>
                      </div>
                    </div>
                  </PostTitle>
                </PostImageContainer>
                <Intro>{e.intro}</Intro>
                <Keyword>
                  {e.tags?.map((e: any, i: number) => (
                    <span key={i}>#{e}</span>
                  ))}
                </Keyword>
                <PostInfo className="flex justify-between mt-12">
                  <div className="flex items-center">
                    <div className="img w-25 h-25 rounded-full mr-5 relative overflow-hidden">
                      {/* <RankImage
                        layout="fill"
                        objectFit="cover"
                        src={`https://cdn.crowdpic.net/list-thumb/thumb_l_4291713E6EC8D22461618B2107D30880.jpg`}
                        alt={e.title}
                      ></RankImage> */}
                    </div>
                    <span>{e.userNick}</span>
                  </div>
                  <p>2022.09.09 ~ 2022.09.11</p>
                </PostInfo>
              </Content>
            );
          })}
        </ul>
      </ProjectWrap>
      <SideWrap>
        <h2>주간 인기순</h2>
        <RankWeek>
          {/* {bestList &&
            bestList?.data?.map((e: any, i: number) => {
              return (
                <li className="mb-24 h-158" key={e.id}>
                  <RankImageContainer>
                    <RankImage
                      layout="fill"
                      objectFit="cover"
                      src={e.img}
                      alt={e.title}
                    ></RankImage>
                  </RankImageContainer>
                  <div className="pl-20">
                    <h3>{e.title}</h3>
                    <h4>{e.userNick}</h4>
                    <p>{e.intro}</p>
                  </div>
                </li>
              );
            })} */}
        </RankWeek>
        <h2>일간 인기순</h2>
        {/* <RankDay>
          {bestList &&
            bestList.data.map((e: any, i: number) => {
              return (
                <li className="mb-24 h-158" key={e.id}>
                  <RankImageContainer>
                    <RankImage
                      layout="fill"
                      objectFit="cover"
                      src={e.img}
                      alt={e.title}
                    ></RankImage>
                  </RankImageContainer>
                  <div className="pl-20">
                    <h3>{e.title}</h3>
                    <h4>{e.userNick}</h4>
                    <p>{e.intro}</p>
                  </div>
                </li>
              );
            })}
        </RankDay> */}
        <h2>피드백 랭킹</h2>
        <RankFeed>
          {/* <ul>
            {feedRankList &&
              feedRankList.data.map((e: any, i: number) => {
                return (
                  <li key={e.id}>
                    <strong>{i + 1}</strong>
                    <RankImageContainer>
                      <RankImage
                        layout="fill"
                        objectFit="cover"
                        src={e.img}
                        alt={e.title}
                      ></RankImage>
                    </RankImageContainer>
                    <p>{e.userNick}</p>
                    <span>{e.count}</span>
                  </li>
                );
              })}
          </ul> */}
        </RankFeed>
      </SideWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 3.65vw 75px;
  height: auto;
`;

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
`;
const Title = styled.div`
  overflow: hidden;
  margin-bottom: 35px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.ul`
  float: right;
  display: flex;
  font-size: 14px;
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
    border: 1px solid #c3c3c3;
  }
  label {
    margin-left: 8px;
  }
`;
const Content = styled.li`
  width: 100%;
  padding: 15px;
  border-radius: 15px;
  background: #fff;
  border: 1px solid #eee;
  margin-bottom: 38px;
`;

const PostImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 18vw;
  border-radius: 7px;
  overflow: hidden;
  span {
    position: unset !important;
  }
`;
const PostImage = styled(Image)`
  position: absolute;
  width: unset !important;
  position: relative !important;
  height: 100% !important;
`;
const PostTitle = styled.div`
  display: flex;
  align-items: flex-end;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  padding: 21px 19px;
  background: linear-gradient(
    180deg,
    rgba(235, 235, 235, 0) 26.22%,
    rgba(0, 0, 0, 0.6) 100%
  );
  .inner {
    position: absolute;
  }
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
`;

const Intro = styled.p`
  font-size: 16px;
  line-height: 28px;
  height: 85px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color: #505050;
  margin: 12px 0;
`;
const Keyword = styled.div`
  span {
    padding: 6px 18px;
    background: #dbdbdb;
    color: #505050;
    border-radius: 50px;
    margin-right: 10px;
    font-size: 12px;
  }
`;
const PostInfo = styled.div`
  color: #a9a9a9;
  span {
    font-size: 13px;
  }
  p {
    font-size: 14px;
  }
`;

const RankImageContainer = styled.div`
  position: relative;
  display: block;
  width: 90vw;
  height: 100%;
  border-radius: 15px;
  background-color: #fff;
  overflow: hidden;
`;
const RankImage = styled(Image)`
  position: absolute;
  object-fit: scale-down;
  width: unset !important;
  position: relative !important;
  height: 100% !important;
`;

//** 일간, 주간, 랭킹 **//
const SideWrap = styled.aside`
  display: inline-block;
  width: 40%;
  padding-left: 75px;
  h2 {
    font-size: 32px;
    margin-bottom: 16px;
  }
  li {
    display: flex;
    width: 100%;
    overflow: hidden;
  }
  h3 {
    font-size: 24px;
  }
  h4 {
    font-size: 18px;
  }
  p {
    font-size: 16px;
  }
`;

const RankWeek = styled.ul``;
const RankDay = styled.ul``;
const RankFeed = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 15px;
  padding: 5px 25px;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  li {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 15px 5px;
    border-bottom: 1px solid #d0d0d0;
    color: #666;
    font-size: 18px;
  }
  li:last-child {
    border-bottom: none;
  }
  div {
    width: 3.5vw;
    height: 3.5vw;
    border: 1px solid #cccccc;
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
`;
