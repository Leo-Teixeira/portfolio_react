import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import styled, { createGlobalStyle } from "styled-components";
import Layout from "./layout";
import About from "./components/about";
import Menu from "./components/Menu";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #283747;
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #292929;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <GlobalStyle />
      <Menu>
        <section id="about">
          <About></About>
        </section>
      </Menu>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Léo Teixeira</title>;
