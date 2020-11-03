import React from 'react';
import styled from 'styled-components';
import Presentation from './components/Presentation';

const Main = styled.div`
margin: 0;
padding: 0;
`;

function App() {
  return (
    <Main className="App">
      <Presentation />
    </Main>
  );
}

export default App;
