import styled, { css } from "styled-components";
import tw from "twin.macro";
import { useQueryClient } from "react-query";
import Toggle from "../../components/common/toggle";
import React, { useState } from "react";
import SurveyItemList from "./itemList";

// import { useRef } from "react";

export interface SurveyQuestions {
  qTitle: string;
  qType: string;
  qModel: string[];
  qRequired: boolean;
  qOrder: number;
}
// //배열
// export interface ListTypes {
//   surveyTitle: string;
//   surveyQuestions: SurveyQuestions[];
// }

export default function SurveyItem(props: any) {
  const { onChanges, setItem, item } = props;
  // const queryClient = useQueryClient();
  const [selectState, setSelectState] = useState("객관식");
  const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectState(e.target.value);
  };

  // 질문
  const [title, setTitle] = useState("질문");
  // 답변 배열
  const [text, setText] = useState([]);

  const infoList: SurveyQuestions[] = [
    {
      qTitle: title,
      qType:
        selectState === "객관식"
          ? "SEL_ONLY"
          : selectState === "객관식(중복)"
          ? "SEL_MULTI"
          : "TXT_SMALL",
      qModel: text,
      qRequired: true,
      qOrder: 1,
    },
  ];

  // onChanges(infoList);

  // onChange로 input값 변경시 list변수에 저장을 한다.
  // 그럼 한 질문에 리스트(질문,답)가 만들어진다.
  // 이걸 큰 리스트(보낼 객체)에 넣어야한다.
  // 넣는 이벤트를 언제 발생시키는가?

  // 설문지 컴포넌트 나누는 방식!
  // 1. 크게 덩어리로 하나의 컴포넌트를 만든다
  // 2. 그 안에는 셀럭터가 어떤 텍스트를 갖고있느냐에 따라 if문을 통해 객관식컴포넌트, 객관식중복컴포넌트, 주관식컴포넌트가 나타난다.

  // props.setItem([...props.item, infoList]);

  // const [list, setList] = useState<ListTypes[]>([]);

  // const onSubmit = () => {
  //   // console.log(infoList);
  //   setList(infoList);
  // };

  return (
    <Crad>
      <InnerTop>
        <LeftBox>
          <SubTitle
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
          <SurveyItemList selectState={selectState} setText={setText} />
        </LeftBox>
        <select onChange={selectChange}>
          <option value="객관식">객관식</option>
          <option value="객관식(중복)">객관식(중복)</option>
          <option value="주관식">주관식</option>
        </select>
      </InnerTop>
      <hr />
      <Options>
        <li>삭제</li>
        <li>필수</li>
        <Toggle />
      </Options>
    </Crad>
  );
}

const Crad = styled.div`
  width: 100%;
  padding: 35px 40px 8px;
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 30px;
`;

const Add = styled.div`
  color: #a0a0a0;
  margin-bottom: 18px;
`;

const Options = styled.ul`
  display: flex;
  justify-content: end;
  align-items: center;

  li {
    padding: 20px 10px;
  }
`;

const InnerTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  select {
    height: 58px;
    border: 1px solid #ddd;
    padding: 0 15px;
  }
`;

const SubTitle = styled.input`
  :focus {
    outline: none;
  }
  background: #f6f6f6;
  border-bottom: 1px solid #5b5b5b;
  color: #5b5b5b;
  padding: 16px 20px;
  width: 80%;
  margin-bottom: 30px;
`;
const LeftBox = styled.div`
  width: 100%;
  li {
    margin-bottom: 18px;
  }

  input {
    margin-right: 10px;
  }
`;

const ShortForm = styled.input`
  width: 100%;
  background: #f0f0f0;
  padding: 10px 10px;
  margin-bottom: 30px;
`;
