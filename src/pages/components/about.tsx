import React from "react";
import "../../css/style.css";

const About = ({ children }) => {
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
