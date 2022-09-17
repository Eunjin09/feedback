import type { NextPage } from 'next'
import styled, { css } from "styled-components";
import styles from '../styles/Home.module.css'
import Layout from '../components/layout/layout'
import Add from './project/add';
import Main from './project/main'

const Home: NextPage = () => {
  return (
    <Layout>
            <ExContainer>
              <Main />
            </ExContainer>
    </Layout>
  )
}

export default Home

const ExContainer = styled.div`
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: auto;
  padding : 7.7vw 0 0 16vw;
  background: #F9F9F9;
  z-index: -1;
`
