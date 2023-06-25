import styled, { css } from "styled-components";
import tw from "twin.macro";
import { useQueryClient } from "react-query";
import axios from "axios";
import Toggle from "../../components/common/toggle";
import SurveyItem from "./item";
import { useState } from "react";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

export interface InputProp {
  inputChange: () => void;
}

export default function Survey() {
  const [itemList, setItemList] = useState([
    {
      qTitle: "첫번째 질문명11111",
      qType: "SEL_ONLY",
      qModel: "주관식",
      qRequired: true,
      qOrder: 1,
    },
  ]);

  // function onChanges(newList: any) {
  //   setItemList([...itemList, newList]);
  // }

  const onChanges = (newList: any) => {
    setItemList([...itemList, newList]);
  };

  // const queryClient = useQueryClient();
  // SEL_ONLY , SEL_MULTI

  // const lists = [
  //   {
  //     qTitle: "첫번째 질문명11111",
  //     qType: "SEL_ONLY",
  //     qModel: "주관식",
  //     qRequired: true,
  //     qOrder: 1,
  //   },
  // ];

  function onChange(newList: any) {
    // const { name, value } = e.target;
    setItemList([...itemList, newList]);
  }

  const list = [
    {
      surveyTitle: "설문제목",
      surveyQuestions: itemList,
    },
  ];

  // const onChange = (e: any) => {
  //   const { name, value } = e.target;
  //   console.log(name, value);
  // };

  // 저장 클릭시 최종 리스트 가져오기
  const send = () => {
    console.log(itemList);
  };

  return (
    <Wrap>
      <Container>
        <Title placeholder="제목 없는 설문지" type="text" />

        <AiOutlinePlus
          size={35}
          style={{
            backgroundColor: "white",
            padding: 8,
            position: "absolute",
            right: 80,
            top: 350,
            cursor: "pointer",
          }}
          onClick={() =>
            setItemList([
              ...itemList,
              {
                qTitle: "",
                qType: "",
                qModel: "",
                qRequired: true,
                qOrder: 1,
              },
            ])
          }
        />
        {itemList.map((el, idx) => (
          <SurveyItem
            key={idx}
            onChanges={onChanges}
            setItem={setItemList}
            item={el}
          />
        ))}

        <button onClick={send}>저장하기</button>
      </Container>
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 3.65vw 75px;
  height: auto;
  background: #f2f4fa;
`;

const Container = styled.div`
  padding: 0 90px;
  button {
    cursor: pointer;
  }
`;

const Title = styled.input`
  margin-bottom: 60px;
  font-size: 40px;
  color: #333;
  width: 100%;
  padding: 20px 40px;
  background-color: #dce2f3;
  border-radius: 5px;
`;
