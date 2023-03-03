import styled, { css } from "styled-components";
import { useState } from "react";

export default function Toggle() {
  const [toggle, setToggle] = useState(false);
  const clickedToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <>
      <ToggleBtn onClick={clickedToggle} toggle={toggle}>
        <Circle toggle={toggle} />
      </ToggleBtn>
    </>
  );
}

const ToggleBtn = styled.button<{ toggle: boolean }>`
  width: 44px;
  height: 17px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  background-color: ${(props) =>
    !props.toggle ? "rgba(185, 185, 185, 1)" : "rgb(51,30,190)"};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;
const Circle = styled.div<{ toggle: boolean }>`
  background-color: white;
  box-shadow: -1px 1px 4px 0px rgba(0, 0, 0, 0.25);
  width: 24px;
  height: 24px;
  border-radius: 50px;
  position: absolute;
  left: 0%;
  transition: all 0.5s ease-in-out;
  ${(props) =>
    props.toggle &&
    css`
      transform: translate(22px, 0);
      transition: all 0.5s ease-in-out;
    `}
`;
