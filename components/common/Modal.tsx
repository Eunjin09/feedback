import styled from "styled-components";

interface ModalProps {
  text: string;
  onClose: () => void;
}

/**
 *
 * @property {string} text 모달 텍스트
 */

function Modal({ text, onClose }: ModalProps) {
  return (
    <Background onClick={onClose}>
      <Container>
        {text && <div className="text">{text}</div>}
        <hr />
        <ButtonContent>
          <div className="hr" />
          <button>확인</button>
        </ButtonContent>
      </Container>
    </Background>
  );
}

export default Modal;

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(0, 0, 0, 0.8);
  z-index: 99;
  .hr {
    width: 300px;
    border-bottom: 1px solid black;
    margin-top: 30px;
  }
  .text {
    margin-top: 10px;
  }
`;

const Container = styled.div`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  /* padding: 30px; */
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 50px;
  padding: 60px 30px;
  position: fixed;
  left: 40%;
  top: 40%;
  background-color: white;
  z-index: 100;
  border-radius: 12px;
`;
const ButtonContent = styled.div`
  button {
    color: white;
    background-color: blue;
    padding: 5px;
    border-radius: 6px;
    margin-top: 15px;
  }
`;
