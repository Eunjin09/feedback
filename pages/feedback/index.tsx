import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { useQueryClient } from "react-query";
import axios from "axios";
import { useState } from "react";
import Link from "next/link";

export default function Feedback() {
  return (
    <Wrap>
      <h1>프로젝트</h1>
      <Container>
        <Card href="/feedback/detail">
          <LinkBox>
            <h2>프로젝트이름</h2>
            <p>소개글소개글소개글소개글</p>
          </LinkBox>
        </Card>
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
const Container = styled.div`
  margin-top: 70px;
  width: 100%;
`;
const LinkBox = styled.a`
  display: block;
  border-left: 15px solid #adbdff;
  width: 40%;
  padding: 20px 30px;
  border-radius: 10px;
  background: #fff;
  box-shadow: -7px 8px 8px 0px rgba(0, 0, 0, 0.06);
  cursor: pointer;
`;
const Card = styled(Link)`
  h2 {
    font-size: 20px;
    margin-bottom: 30px;
  }
  p {
    font-size: 16px;
  }
`;
