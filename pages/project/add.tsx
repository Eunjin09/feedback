import styled from "styled-components";
import tw from "twin.macro";

export default function Add() {
	return (
		<div>
			{/* Header - no complete */}
			{/* Content */}
			<Content>폰트 테스트</Content>
		</div>
	);
}

const Content = styled.div`
	${tw`w-full text-[24px]`}
`;
