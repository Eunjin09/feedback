import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { useQueryClient } from "react-query";
import axios from "axios";
import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Feedback() {
  const [state, setState] = useState(0);

  const data = {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Wrap>
      <h1>프로젝트 이름</h1>
      <Menu>
        <button>뒤로</button>
        <ul>
          <li onClick={() => setState(0)}>통계</li>
          <li onClick={() => setState(1)}>개별</li>
          <li>이벤트</li>
        </ul>
      </Menu>
      <Container>
        {state === 0 && (
          <ul>
            <Card>
              <h2>
                한 해 동안 쓴 금액과 지출 수단은?
                <span>응답4개</span>
              </h2>
              <TypeArea>
                <div style={{ width: "200px", height: "200px" }}>
                  <Doughnut
                    data={data}
                    options={{
                      responsive: true,
                      maintainAspectRatio: true,
                    }}
                  />
                </div>
                <ul>
                  <li>신용카드</li>
                  <li>현금</li>
                </ul>
              </TypeArea>
            </Card>
          </ul>
        )}
        {state === 1 && (
          <ul>
            <Card2>
              <div>
                <Profile></Profile>
                <h2>닉네임</h2>
              </div>
              <p>이메일</p>
              <div>
                <h3>33</h3>
                <p>2023-02-12 13:00</p>
              </div>
            </Card2>
          </ul>
        )}
      </Container>
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 3.65vw 75px;
  height: auto;
  background: #f2f4fa;
  h1 {
    font-size: 42px;
  }
`;

const Menu = styled.div`
  display: flex;
  margin-top: 30px;
  ul {
    display: flex;
  }
  li {
    border-left: 5px solid #3856d7;
    padding: 5px 34px;
    border-radius: 5px;
    background: #fff;
    margin-left: 20px;
    box-shadow: -7px 8px 8px 0px rgba(0, 0, 0, 0.06);
    cursor: pointer;
  }
  li:nth-child(2) {
    border-left: 5px solid #60b283;
  }
  li:nth-child(3) {
    border-left: 5px solid #dcb05b;
  }
`;

const Container = styled.div`
  margin-top: 30px;
  width: 100%;
`;
const Card = styled.li`
  background: #fff;
  padding: 20px 15px;
  span {
    font-size: 12px;
    color: #b5b5b5;
    padding-left: 6px;
  }
`;

const TypeArea = styled.div`
  margin-top: 10px;
  li {
    width: 100%;
    padding: 8px 12px;
    background: #f2f3f8;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.09);
    font-size: 12px;
    margin-top: 8px;
  }
`;

// 개별 컴포넌트
const Card2 = styled.li`
  padding: 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.09);
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    align-items: center;
  }
  h2 {
    margin-left: 30px;
  }
  h3 {
    margin-right: 50px;
  }
`;
const Profile = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #ececf0;
`;
