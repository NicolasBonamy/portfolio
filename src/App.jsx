import React from 'react';
import styled from 'styled-components';
import Experience from './components/Experience';
import ExperienceList from './components/ExperienceList';
import HardSkills from './components/HardSkills';
import Portfolio from './components/Portfolio';
import Presentation from './components/Presentation';

const Main = styled.div`
margin: 0;
padding: 0;
font-family: 'Roboto', sans-serif;
`;

function App() {
  return (
    <Main className="App">
      <Presentation />
      <ExperienceList />
      <HardSkills />
      <Portfolio />
    </Main>
  );
}

export default App;
