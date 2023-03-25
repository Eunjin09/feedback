import styled, { css } from "styled-components";
import tw from "twin.macro";
import SurveyItem from "./item";
import { useState } from "react";
import React from "react";

export interface InputProp {
  inputChange: () => void;
}

export default function Survey() {
  const [itemList, setItemList] = useState([]);
  const [title, setTitle] = useState("제목");

  const [title2, setTitle2] = useState("질문");
  const [selOnly, setSelOnly] = useState(["옵션"]);
  const [itemLists, setItemLists] = useState([
    {
      order: 1,
      title: title2,
      type: "ONE",
      choice: selOnly,
    },
  ]);

  // 제목 변경 함수
  const titleChanges = (event: any) => {
    setTitle2(event.target.value);
  };

  const listChange = (e: any) => {
    const { name, value } = e.target;
    const copy = [...selOnly];
    copy[name] = value;
    setSelOnly(copy);

    // const copy2 = [...itemLists];
    // copy2[name] = value;
    // setItemLists();
  };

  const addEvent = () => {
    // 추가
    setItemLists([
      ...itemLists,
      {
        order: 1,
        title: title2,
        type: "ONE",
        choice: selOnly,
      },
    ]);
  };

  const send = () => {
    const list = [
      {
        order: 1,
        title: title2,
        type: "ONE",
        choice: selOnly,
      },
    ];
    const lists = [
      {
        title: title,
        question: list,
      },
    ];
    // const copy = [...itemLists];
    // console.log(copy);
    // setItemLists(list);
    console.log(lists);
  };

  return (
    <Wrap>
      <Container>
        <Title
          placeholder="제목 없는 설문지"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {itemLists.map((el, idx) => (
          <SurveyItem
            key={idx}
            titleChanges={titleChanges}
            title2={title2}
            listChange={listChange}
            selOnly={selOnly}
            setSelOnly={setSelOnly}
          />
        ))}
        {/* <SurveyItem
          titleChanges={titleChanges}
          title2={title2}
          listChange={listChange}
          selOnly={selOnly}
          setSelOnly={setSelOnly}
        ></SurveyItem> */}
        <button onClick={addEvent}>질문추가버튼</button>
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
