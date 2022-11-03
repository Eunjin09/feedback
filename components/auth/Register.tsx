import { FormEvent, useRef } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import AuthHeader from "./AuthHeader";

const Register = () => {
	const ref = {
		id: useRef(null),
		password: useRef(null),
		passwordConfirm: useRef(null),
		email: useRef(null),
		emailConfirm: useRef(null),
		nickname: useRef(null),
	};
	//회원가입 버튼 클릭시 
	const RegisterBtn=(e:FormEvent)=>{
		e.preventDefault();
		const data = ref.id.current
		console.log(data)
	}
	return (
		<Form>
			<AuthHeader
				onBack={() => {
					console.log("back");
				}}
				onClose={() => {
					console.log("close");
				}}
			>
				SignUp
			</AuthHeader>
			<div>
				<Line>
					<span>아이디</span>
					<Field>
						<Input type="text" ref={ref.id}/>
						<Button>중복검사</Button>
					</Field>
				</Line>
				<Line>
					<span>비밀번호</span>
					<Field>
						<Input type="text" ref={ref.password} />
						<Button>중복검사</Button>
					</Field>
				</Line>
				<Line>
					<span>비밀번호 확인</span>
					<Field>
						<Input type="text" ref={ref.passwordConfirm}/>
					</Field>
				</Line>
				<Line>
					<span>닉네임</span>
					<Field>
						<Input type="text" ref={ref.nickname}/>
						<Button>중복검사</Button>
					</Field>
				</Line>
				<Line>
					<span>이메일</span>
					<Field>
						<Input type="text" ref={ref.email}/>
						<Button>체크</Button>
					</Field>
				</Line>
				<Line>
					<span>이메일 확인</span>
					<Field>
						<Input type="text" ref={ref.emailConfirm}/>
						<Button>확인</Button>
					</Field>
				</Line>
			</div>
			<div className="w-full">
				<button onClick={RegisterBtn} className="w-full p-20 border-1 rounded-10 bg-[#4C70CE] text-[#FFFFFF]">
					회원가입
				</button>
			</div>
		</Form>
	);
};

export default Register;

const Form = styled.form`
	${tw`px-40 py-30 w-500 border-1`}
`;

const Line = styled.div`
	${tw`flex items-center justify-between w-full my-20`}
`;

const Field = styled.div`
	${tw`flex gap-10 w-300`}
`;

const Input = styled.input`
	${tw`w-full border-0 bg-[#D9D9D9] p-10 rounded-10`}
`;

const Button = styled.button`
	${tw`w-100 shrink-0 p-10 bg-[#787878] rounded-10 text-[#FFFFFF]`}
`;
