import type { AppProps } from "next/app";
import "../styles/globals.css";
import styled from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "../components/layout/layout";

// Create a client
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <ExContainer>
          <Component {...pageProps} />
        </ExContainer>
      </Layout>
    </QueryClientProvider>
  );
}

const ExContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 7.7vw 0 0 16vw;
  background: #f2f4fa;
  z-index: -1;
`;

export default MyApp;
