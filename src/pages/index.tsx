import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import styled, { createGlobalStyle } from "styled-components";
import About from "./components/about";
import Menu from "./components/Menu";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Project from "./components/project";
import Skills from "./components/skills";

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

  section {
    min-height: 100vh; /* Définir une hauteur minimale pour chaque section */
  }

  #__next {
    height: 100%; /* Assurer que la boîte englobante occupe toute la hauteur de la fenêtre */
    overflow-y: auto; /* Ajouter une barre de défilement verticale si nécessaire */
  }
`;

const IndexPage: React.FC<PageProps> = () => {
  // React.useEffect(() => {
  //   // Faire défiler la section "About" au chargement de la page
  //   const aboutSection = document.getElementById("about");
  //   if (aboutSection) {
  //     aboutSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, []);

  return (
    <>
      <GlobalStyle />
      <Menu>
        <section id="about">
          <About></About>
        </section>
        <section id="skills">
          <Skills></Skills>
        </section>
        <section id="project">
          <Project></Project>
        </section>
        <section id="contact">
          <Contact></Contact>
        </section>
      </Menu>
      <Footer></Footer>
    </>
  );
};

export default IndexPage;
