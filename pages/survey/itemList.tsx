import styled, { css } from "styled-components";
import tw from "twin.macro";
import React from "react";

type SelectState = {
  selectState: any;
  selOnly: any;
  setSelOnly: any;
  listChange: any;
};

export default function SurveyItemList({
  selectState,
  setSelOnly,
  selOnly,
  listChange,
}: SelectState): React.ReactElement {
  // 배열
  // const [selOnly, setSelOnly] = useState(["옵션"]); // 객관식
  // const [selMulti, setSelMulti] = useState(["중복옵션1", "중복옵션2"]); // 객관식(중복)
  // const [txtSmall, setTxtSmall] = useState("답변"); // 주관식

  return (
    <div>
      {selectState === "객관식" && (
        <>
          <ul>
            {selOnly.map((el: any, idx: any) => (
              <li key={idx}>
                <input type="radio" name={"textName"} />
                <input
                  type="text"
                  value={selOnly[idx]}
                  name={`${idx}`}
                  onChange={listChange}
                />
              </li>
            ))}
          </ul>
          <Add
            onClick={() => {
              setSelOnly([...selOnly, "옵션"]);
            }}
          >
            옵션추가
          </Add>
        </>
      )}
      {/* {selectState === "객관식(중복)" && (
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
      )} */}
    </div>
  );
}

const Add = styled.button`
  color: #a0a0a0;
  margin-bottom: 18px;
  cursor: pointer;
`;

const ShortForm = styled.input`
  width: 100%;
  background: #f0f0f0;
  padding: 10px 10px;
  margin-bottom: 30px;
`;
