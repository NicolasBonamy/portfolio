import React from 'react';
import styled from 'styled-components';
import mainPortrait from '../pictures/main_portrait.png';
import github from '../pictures/github.png';
import linkedin from '../logos/linkedin.png';

const Portrait = styled.img`
  max-height: 300px;
  padding: 0 20px 0 20px;
  width: auto;
  `;

const Name = styled.h1`
  color: #FFF;
`;

const Poste = styled.h2`
  color: #FFF;
`;

const Global = styled.div`
  display: flex;
  background-color: #222A35;
`;

const NetworkImg = styled.img`
  height: 30px;
`;

function Presentation() {
  return (
    <Global className="Presentation">
      <Portrait src={mainPortrait} alt="main portrait" />
      <div>
        <Name>NICOLAS BONAMY</Name>
        <Poste>Développeur web et web mobile junior</Poste>
        <a href="https://github.com/NicolasBonamy">
          <NetworkImg src={github} alt="gitHub" />
        </a>
        <a href="https://www.linkedin.com/in/nicolas-bonamy/">
          <NetworkImg src={linkedin} alt="linkedin" />
        </a>
      </div>
    </Global>
  );
}

export default Presentation;
