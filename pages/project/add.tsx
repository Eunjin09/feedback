import axios from "axios";
import { FormEvent, useRef } from "react";
import { useMutation } from "react-query";
import styled, { css } from "styled-components";
import tw from "twin.macro";

interface IAddContent {
	title: string;
	intro: string;
	content: string;
}

export default function Add() {
	const ref = {
		imageRef: useRef(null),
		titleRef: useRef<HTMLInputElement>(null),
		introRef: useRef<HTMLInputElement>(null),
		contentRef: useRef<HTMLTextAreaElement>(null),
	};

	const { mutateAsync } = useMutation(async ({ title, intro, content }: IAddContent) => {
		return await axios.post(`http://localhost:5001/project/`, {
			id: 1,
			userId: 1,
			userNickname: "test",
			imageUrl: "https://cdn.pixabay.com/photo/2021/11/24/11/01/autumn-6820879_1280.jpg",
			title,
			intro,
			content,
			tags: ["tag1", "tag2"],
		});
	});

	function addProject(e: FormEvent) {
		const data = {
			title: ref.titleRef.current?.value ?? "",
			intro: ref.introRef.current?.value ?? "",
			content: ref.contentRef.current?.value ?? "",
		};

		mutateAsync(data);
	}

	return (
		<Background>
			{/* Header - no complete */}
			{/* Content */}
			<Content>
				<Box>
					<Wrapper>
						<div className="w-full h-500 bg-[#999999] rounded-10"></div>
						<div className="w-150 h-50 bg-[#666666] text-[#FFFFFF] flex justify-center items-center rounded-10 mt-10">
							이미지 등록
						</div>
					</Wrapper>
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
						<div className="w-full h-50 border-1 border-[#999999] mt-20 rounded-10 px-20 flex items-center text-[#666666]">
							#test #test
						</div>
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
	${tw`w-full min-h-[100vh] bg-[#EEEEEE] flex flex-col items-center py-100`}
`;

const Box = styled.div`
	${tw`w-1000 bg-[#FFFFFF] py-30`}
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
