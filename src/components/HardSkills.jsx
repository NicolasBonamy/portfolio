import React from "react";
import styled from "styled-components";
import html5 from "../logos/html-5.svg";
import css3 from "../logos/css-3.svg";
import react from "../logos/react.svg";
import npm from "../logos/npm.svg";
import nodejs from "../logos/nodejs.png";
import javascript from "../logos/javascript.svg";
import express from "../logos/express.png";
import mysql from "../logos/mysql.png";
import git from "../logos/git.png";
import github from "../logos/github.png";

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    text-align: center;
    margin-top: 5rem;
  }
`;

const SkillsLogos = styled.div`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Logos = styled.img`
  width: 4rem;
  height: auto;
  margin: auto 1rem auto 1rem;
  transition: transform 0.2s;
  :hover {
    transform: scale(1.2);
  }
`;

function HardSkills() {
  return (
    <Skills className="HardSkills" id="hardSkills">
      <h2>HARD SKILLS</h2>
      <SkillsLogos className="SkillsLogos">
        <Logos src={html5} alt="logo html5" />
        <Logos src={css3} alt="logo css3" />
        <Logos src={javascript} alt="logo javascript" />
        <Logos src={react} alt="logo react" />
        <Logos src={npm} alt="logo npm" />
        <Logos src={nodejs} alt="logo nodejs" />
        <Logos src={express} alt="logo express" />
        <Logos src={mysql} alt="logo mysql" />
        <Logos src={git} alt="logo git" />
        <Logos src={github} alt="logo github" />
      </SkillsLogos>
    </Skills>
  );
}

export default HardSkills;
