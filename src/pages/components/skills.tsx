import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
.about {
  background-color: #292929;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.about .ellipse {
  height: 314px;
  left: 129px;
  object-fit: cover;
  position: absolute;
  top: 227px;
  width: 313px;
}

.about .p {
  color: #ffffff;
  font-family: "Montserrat Alternates-Regular", Helvetica;
  font-size: 15px;
  font-weight: 400;
  left: 675px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 313px;
  width: 713px;
}

.about .about-me {
  color: #ffffff;
  font-family: "Montserrat Alternates-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: 675px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 259px;
  width: 204px;
}

.about .SOFTWARE-ENGINEER {
  color: #ffffff;
  font-family: "Montserrat Alternates-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: 129px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 575px;
  width: 369px;
}

.about .arrow {
  height: 65px;
  left: 664px;
  position: absolute;
  top: 895px;
  width: 22px;
}
`;

const About = ({ }) => {
  return (
    <div className="about">
      <div className="div">
        <img className="ellipse" alt="Ellipse" src="ellipse-1.png" />
        <p className="p">
          Lorem ipsum dolor sit amet. Id animi ducimus ut labore voluptas sit
          minima rerum aut adipisci ratione sed fugit voluptas eos officia
          excepturi est debitis quaerat. Ut rerum nesciunt non reiciendis
          distinctio et officiis dolorum. Et fugit ipsa eos consequatur pariatur
          aut alias quod est delectus consequatur aut distinctio sint id dolorem
          earum. Id laudantium dolore ad ullam omnis sit consequatur reiciendis
          sit dignissimos consequuntur eos quis omnis quo quam natus.
        </p>
        <div className="about-me">&lt;About Me&gt;</div>
        <p className="SOFTWARE-ENGINEER">
          SOFTWARE ENGINEER, FRONT END &amp; APP DEVELOPER.
        </p>
        <img className="arrow" alt="Arrow" src="arrow-1.svg" />
      </div>
    </div>
  );
};

export default About;
