import React from "react";
import styled from "styled-components";

const Nav = styled.div`
background-color: #222a35;
position: sticky;
top: 0px;
z-index: 1;
  ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    color: #ffffff;
    margin: 0;
    padding: 1rem;
  }
  li {
    color: #ffffff;
    padding: 0 1rem 0 1rem;
  }
`;

function Header() {
  return (
    <Nav className="Header" id="header">
      <nav>
        <ul>
          <a href="#presentation">
            <li>Accueil</li>
          </a>
          <a href="#experiences">
            <li>Expériences professionnelles</li>
          </a>
          <a href="#hardSkills">
            <li>Hard skills</li>
          </a>
          <a href="#projets">
            <li>Projets</li>
          </a>
        </ul>
      </nav>
    </Nav>
  );
}

export default Header;
