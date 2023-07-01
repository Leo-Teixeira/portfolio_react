import React from "react";
import { createGlobalStyle } from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const GlobalStyle = createGlobalStyle`

`;

const Footer = ({}) => {
  return (
    <div>
      <GlobalStyle />
      <footer>
        © Léo Teixeira 2023
        <div>
          <a href="https://www.linkedin.com/">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/">
            <FaGithub size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
