import styled from "styled-components";
import tw from "twin.macro";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NextPageContext } from "next";

interface IDetailProps {
  serverData: IProjectViewInfo;
}

interface IProjectViewInfo {
  id: number;
  userId: number;
  userNickname: string;
  imageUrl: string;
  title: string;
  intro: string;
  content: string;
  tags: Array<string>;
}

async function getProjectInfoById(id: number) {
  return await axios.get(`http://localhost:5001/detail/${id}`);
}

export default function View() {
  const { query: params } = useRouter();

  const { data } = useQuery<IProjectViewInfo>(
    ["PrjDetInfo", params.id],
    async () => {
      if (params.id) {
        const response = await getProjectInfoById(Number(params.id));
        return response.data;
      }
    },
    {
      // initialData: {},
    }
  );

  if (!data) {
    return (
      <Background>
        <Wrapper>없는 프로젝트 입니다.</Wrapper>
      </Background>
    );
  }

  return (
    <Background>
      <Wrapper>
        <Box className="option">
          <div className="font-bold text-20">설문이 있는 글입니다</div>
          <div className="bg-[#255AE2] text-[#FFFFFF] rounded-5 p-10">
            설문하러 가기
          </div>
        </Box>
        <Box className="content">
          <div className="h-500 rounded-10 bg-[#DDDDDD]"></div>
          <div className="p-40 pb-10 text-36">{data.title}</div>
          <div className="px-40 pb-20">{data.userNickname}</div>
          <div className="px-40">{data.intro}</div>
          <div className="p-40">{data.tags.join(" ")}</div>
        </Box>
        <Box className="comment">
          <div className="p-40 pb-10 text-24">Comments (12)</div>
          <div className="p-40 pt-0">
            <ul>
              {[0, 1, 2, 3].map((v, key, arr) => {
                return (
                  <li
                    className={`flex justify-between py-10 ${
                      key !== arr.length - 1 && "border-b-1"
                    }`}
                    key={key}
                  >
                    <div className="w-100">Human{v}</div>
                    <div className="flex-1">안녕하세요</div>
                    <div>
                      <button>modify</button>
                      <button className="ml-10">remove</button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </Box>
      </Wrapper>
    </Background>
  );
}

const Background = styled.div`
  ${tw`min-h-[100vh] bg-[#EEEEEE] flex flex-col items-center py-100`}
`;

const Wrapper = styled.div`
  ${tw`w-1000`}
`;

const Box = styled.div`
  ${tw`bg-[#FFFFFF] rounded-10 overflow-hidden`}
  box-shadow: 0px 3px 10px 0 #DDDDDD;

  & + & {
    ${tw`mt-50`}
  }

  &.option {
    ${tw`flex items-center justify-between p-30`}
  }
`;

// export async function getServerSideProps(context: NextPageContext) {
// 	const params = context.query;

// 	const response = await getProjectInfoById(Number(params.id));

// 	return {
// 		props: {
// 			serverData: response,
// 		},
// 	};
// }
