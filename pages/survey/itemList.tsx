import styled, { css } from "styled-components";
import tw from "twin.macro";
import React, { useEffect, useState } from "react";

type SelectState = {
  selectState: any;
  setText: any;
};

export default function SurveyItemList({
  selectState,
  setText,
}: SelectState): React.ReactElement {
  // 배열
  const [selOnly, setSelOnly] = useState(["옵션", "옵션"]); // 객관식
  const [selMulti, setSelMulti] = useState(["중복옵션1", "중복옵션2"]); // 객관식(중복)
  const [txtSmall, setTxtSmall] = useState("답변"); // 주관식

  const [selOnlys, setSelOnlys] = useState({}); // 객관식

  // 변경
  const listChange = (e: any) => {
    const { name, value } = e.target;
    setSelOnlys({
      ...selOnlys,
      [name]: value,
    });

    if (selectState === "객관식") {
      console.log(e.target.value);
      setSelOnly({
        ...selOnly,
        [name]: e.target.value,
      });
    }
    if (selectState === "객관식") {
    }
    if (selectState === "객관식(중복)") {
    }
    if (selectState === "주관식") {
      setTxtSmall(e.target.value);
    }
  };
  console.log(selOnly);

  useEffect(() => {
    // setText(["ㅇㅇ"]);
  }, []);

  return (
    <div>
      {selectState === "객관식" && (
        <>
          <ul>
            {selOnly.map((el, idx) => (
              <li key={idx}>
                <input type="radio" name={"textName"} />
                <input
                  type="text"
                  value={el}
                  name={"${idx}"}
                  onChange={listChange}
                />
              </li>
            ))}
          </ul>
          <Add>옵션추가</Add>
        </>
      )}
      {selectState === "객관식(중복)" && (
        <>
          <ul>
            {selMulti.map((el, idx) => (
              <li key={idx}>
                <input type="radio" name="text" onChange={listChange} />
                {el}
              </li>
            ))}
          </ul>
          <Add>중복옵션추가</Add>
        </>
      )}
      {selectState === "주관식" && (
        <ShortForm
          type="text"
          value={txtSmall}
          onChange={listChange}
        ></ShortForm>
      )}
    </div>
  );
}

const Add = styled.div`
  color: #a0a0a0;
  margin-bottom: 18px;
`;

const ShortForm = styled.input`
  width: 100%;
  background: #f0f0f0;
  padding: 10px 10px;
  margin-bottom: 30px;
`;
