import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #141414;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Planet = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  position: absolute;
`;

const Orbit = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  border: 2px solid white;
  position: absolute;
  transform-origin: 50% 50%;
  animation: orbit ${(props) => props.duration}s linear infinite;

  @keyframes orbit {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

function App() {
  const [orbits, setOrbits] = useState([]);

  useEffect(() => {
    // Crée un tableau de données pour chaque orbite
    const newOrbits = [];
    for (let i = 0; i < 8; i++) {
      newOrbits.push({
        size: 100 + Math.floor(Math.random() * 200),
        duration: 5 + Math.random() * 10,
        angle: 45 * i,
      });
    }

    setOrbits(newOrbits);
  }, []);

  return (
    <Container>
      <Planet size={200} color="#cccccc" />
      {orbits.map((orbit, index) => (
        <Orbit
          key={index}
          size={orbit.size}
          duration={orbit.duration}
          style={{
            top: "50%",
            left: "50%",
            transform: `rotate(${orbit.angle}deg)`,
          }}>
          <Planet size={50} color="#999999" />
        </Orbit>
      ))}
    </Container>
  );
}

export default App;
