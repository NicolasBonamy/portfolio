import React from "react";
import styled from "styled-components";
import mainPortrait from "../pictures/main_portrait.png";
import github from "../pictures/github.png";
import linkedin from "../logos/linkedin.png";

const media = {
  desktop: '@media(min-width:768px)',
};

const Portrait = styled.img`
  max-height: 30vh;
  padding: 70px 20px 0 20px;
  width: auto;
`;

const Prez = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.h1`
  color: #fff;
  text-align: center;
`;

const Poste = styled.h2`
  color: #fff;
  text-align: center;
`;

const Global = styled.div`
${media.desktop} {
  flex-direction: row;
  justify-content: center;
}
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #222a35;
  position: relative;
`;

const NetworkImg = styled.img`
  height: 2rem;
  margin: 0.8rem;
`;

function Presentation() {
  return (
    <Global className="Presentation" id="presentation">
      <Portrait src={mainPortrait} alt="main portrait" />
      <Prez>
        <Name>NICOLAS BONAMY</Name>
        <Poste>Développeur web et web mobile junior</Poste>
        <div>
          <a href="https://github.com/NicolasBonamy">
            <NetworkImg src={github} alt="gitHub" />
          </a>
          <a href="https://www.linkedin.com/in/nicolas-bonamy/">
            <NetworkImg src={linkedin} alt="linkedin" />
          </a>
        </div>
      </Prez>
    </Global>
  );
}

export default Presentation;
