import styled, { css } from "styled-components";
import tw from "twin.macro";
import Toggle from "../../components/common/toggle";
import React, { useState } from "react";
import SurveyItemList from "./itemList";

export interface SurveyQuestions {
  qTitle: string;
  qType: string;
  qModel: string[];
  qRequired: boolean;
  qOrder: number;
}

export default function SurveyItem(props: any) {
  const { title2, listChange, selOnly, setSelOnly, titleChanges } = props;
  const [selectState, setSelectState] = useState("객관식");
  const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectState(e.target.value);
  };

  return (
    <Crad>
      <InnerTop>
        <LeftBox>
          <SubTitle type="text" onChange={titleChanges} value={title2} />
          <SurveyItemList
            selectState={selectState}
            setSelOnly={setSelOnly}
            selOnly={selOnly}
            listChange={listChange}
          />
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
