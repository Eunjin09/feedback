import axios from "axios";
import Image from "next/image";
import { FormEvent, useRef, useState } from "react";
import { useMutation } from "react-query";
import styled from "styled-components";
import tw from "twin.macro";
import instance from "../api/instance";

interface IAddContent {
  title: string;
  intro: string;
  content: string;
}

export default function Add() {
  const [imadeID, setImageID] = useState();
  const [imgSrc, setImgSrc] = useState(
    "https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927"
  );

  const ref = {
    imageRef: useRef(null),
    titleRef: useRef<HTMLInputElement>(null),
    introRef: useRef<HTMLInputElement>(null),
    contentRef: useRef<HTMLTextAreaElement>(null),
    tagRef: useRef<HTMLInputElement>(null),
  };

  // const { mutateAsync } = useMutation(
  //   async ({ title, intro, content }: IAddContent) => {
  //     return await axios.post(`http://localhost:5001/project/`, {
  //       title,
  //       intro,
  //       imageId: 2,
  //       content,
  //       tags: ["tag1", "tag2"],
  //     });
  //   }
  // );
  //fliter로 빈칸태그 걸러주기

  const addProject = async () => {
    const data = {
      title: ref.titleRef.current?.value,
      intro: ref.introRef.current?.value,
      content: ref.contentRef.current?.value,
      imageId: imadeID,
      tags: tags,
    };

    // mutateAsync(data);
    console.log(data);
    instance.post("api/project", data).then((res) => console.log(res, "답"));
    // console.log(res, "응답");
    // if(res.data.errorMessage)
  };

  //이미지 미리보기

  const imageHanddle = (e: any) => {
    const formData = new FormData();

    console.log(e.target.files[0], "이미지에요");
    formData.append("file", e.target.files[0]);

    // instance.post()
    const token = sessionStorage.getItem("token");

    axios({
      baseURL: "http://54.180.121.151:8000/api",
      url: "/file",
      method: "POST",
      data: formData,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    })
      .then((e) => {
        console.log(e, "응답왔다");
        setImageID(e.data.data.id);
      })
      .catch((e) => console.log(e));
  };

  const [tags, setTags] = useState([]);
  const tagsHanddle = (e: any) => {
    const data = e.target.value.trim().split("#");
    setTags(data.splice(1));
  };

  return (
    <Background>
      {/* Header - no complete */}
      {/* Content */}
      <Content>
        <Box>
          <Wrapper>
            <label className="w-150 h-50 bg-[#666666] text-[#FFFFFF] flex justify-center items-center rounded-10 mt-10 cursor-pointer">
              이미지 등록
              <input
                type="file"
                accept="image/*"
                className="hidden"
                ref={ref.imageRef}
                onChange={imageHanddle}
              />
            </label>
          </Wrapper>
          {/* <Wrapper>
            <div>등록된 이미지</div>
            <Image
              src={imgSrc}
              alt="등록된 이미지"
              // style={{ width: '30px', height: '30px' }}
            />
          </Wrapper> */}
          <Wrapper>
            <input
              type="text"
              className="w-full border-1 border-[#999999] h-70 rounded-10 p-20 text-20 mb-20"
              placeholder="글 제목"
              ref={ref.titleRef}
            />
            <input
              type="text"
              className="w-full border-1 border-[#999999] h-70 rounded-10 p-20 text-16"
              placeholder="내용 요약"
              ref={ref.introRef}
            />
            <textarea
              className="w-full h-300 border-1 border-[#999999] p-20 mt-20 rounded-10 resize-none"
              placeholder="소개글"
              ref={ref.contentRef}
            ></textarea>
            <input
              className="w-full h-50 border-1 border-[#999999] mt-20 rounded-10 px-20 flex items-center text-[#666666]"
              placeholder="#해시태그를 입력해 보세요!"
              ref={ref.tagRef}
              onChange={tagsHanddle}
            />
          </Wrapper>
          <ButtonGroup>
            <button>취소하기</button>
            <button type="submit" onClick={addProject}>
              등록하기
            </button>
          </ButtonGroup>
        </Box>
      </Content>
    </Background>
  );
}

const Background = styled.div``;
const Content = styled.div`
  ${tw`w-full min-h-[100vh] bg-[#f2f4fa] flex flex-col items-center py-100`}
`;

const Box = styled.div`
  ${tw`w-1000 bg-[#FFFFFF] py-30 rounded-md`}
`;

const Wrapper = styled.div<{ noPadding?: boolean }>`
  ${tw`w-full px-30`}

  ${(props) => props.noPadding && tw`px-0`}

	& + & {
    padding-top: 20px;
  }
`;

const ButtonGroup = styled.div`
  ${tw`flex items-center justify-end w-full mt-20 px-30 rounded-10`}

  button {
    ${tw`rounded-10 py-15 px-30 text-[#FFFFFF]`}
  }

  button:nth-of-type(1) {
    ${tw`bg-[#D19785]`}
  }

  button:nth-of-type(2) {
    ${tw`bg-[#5784AD] ml-10`}
  }
`;
