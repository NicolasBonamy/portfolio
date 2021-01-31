import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import ExperienceList from "./components/ExperienceList";
import HardSkills from "./components/HardSkills";
import Portfolio from "./components/Portfolio";
import Presentation from "./components/Presentation";
import Footer from "./components/Footer";

const Main = styled.div`
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  background-color: #e6e9ec;
`;

function App() {
  return (
    <Main className="App">
      <Header />
      <Presentation />
      <ExperienceList />
      <HardSkills />
      <Portfolio />
      <Footer />
    </Main>
  );
}

export default App;
