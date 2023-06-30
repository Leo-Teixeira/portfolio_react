import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
.menu .item{
    height: 58px;
    left: 761px;
    position: absolute;
    top: 31px;
    width: 653px;
}

.menu .div {
    background-color: #292929;
    border: 1px none;
    height: 1024px;
    position: relative;
    width: 1440px;
}

.menu .text-wrapper {
    color: #ffffff;
    font-family: "Montserrat Alternates-Regular", Helvetica;
    font-size: 30px;
    font-weight: 400;
    left: 39px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 30px;
    width: 247px;
}

.menu .aboutSection {
    color: #008000;
    font-family: "Montserrat Alternates-Regular", Helvetica;
    font-size: 30px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 0;
    width: 187px;
}

.menu .skillsSection {
    color: #ffffff;
    font-family: "Montserrat Alternates-Regular", Helvetica;
    font-size: 30px;
    font-weight: 400;
    left: 212px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 0;
    width: 193px;
}

.menu .projectSection {
    color: #ffffff;
    font-family: "Montserrat Alternates-Regular", Helvetica;
    font-size: 30px;
    font-weight: 400;
    left: 424px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 0;
    width: 193px;
}

.menu .contactSection {
color: #ffffff;
font-family: "Montserrat Alternates-Regular", Helvetica;
font-size: 30px;
font-weight: 400;
left: 636px;
letter-spacing: 0;
line-height: normal;
position: absolute;
top: 0;
width: 217px;
}
`;

const Menu = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <header>
        <div className="menu">
          <div className="div">
            <h1 className="text-wrapper">Leo Teixeira</h1>
            <div className="item">
              <a href="#about" className="aboutSection">
                &lt;/About&gt;
              </a>
              <a href="#skills" className="skillsSection">
                &lt;Skills&gt;
              </a>
              <a href="#project" className="projectSection">
                &lt;Project&gt;
              </a>
              <a href="#contact" className="contactSection">
                &lt;Contact&gt;
              </a>
            </div>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Menu;
