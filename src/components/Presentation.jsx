import React from 'react';
import styled from 'styled-components';
import mainPortrait from '../pictures/main_portrait.jpg';
import github from '../pictures/github.png';

const Portrait = styled.img`
  max-height: 300px;
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
  height: 10%;
`;

const GitHubImg = styled.img`
  height: 10%;
`;

function Presentation() {
  return (
    <Global className="Presentation">
      <Portrait src={mainPortrait} alt="main portrait" />
      <div>
        <Name>NICOLAS BONAMY</Name>
        <Poste>Développeur web et web mobile junior</Poste>
        <a href="https://github.com/NicolasBonamy">
          <GitHubImg src={github} alt="gitHub" />
        </a>
      </div>
    </Global>
  );
}

export default Presentation;
