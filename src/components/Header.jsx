import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import styled from "styled-components";

const MenuIcon = styled.button`
  position: fixed;
  z-index:10;
  top: 0.5rem;
  left: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  outline: none;
  @media (min-width: 768px) {
    display: none;
  }

  div {
    width: 2rem;
    height: 0.2rem;
    background: white;
    border-radius: 10px;
    border: 1px solid #222a35;
    transform-origin: 2.5px;
    position: relative;
    transition: opacity 150ms, transform 200ms;

    :first-child {
      transform: ${({ nav }) => (nav ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ nav }) => (nav ? "0" : "1")};
    }

    :nth-child(3) {
      transform: ${({ nav }) => (nav ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
const Wrapper = styled.header`
  z-index: 100;
  background: none;
  width: 100vw;
  height: 3rem;
  position: fixed;
  top: 0;
`;

const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: left;
  height: fit-content;
  width: fit-content;
  top: 3rem;
  background: rgba(34, 42, 53, 0.8);
  position: absolute;
  border-radius: 5px;
  transition: transform 200ms;
  transform: ${({ nav }) => (nav ? "translateX(0)" : "translateX(-100%)")};
  @media (min-width: 768px) {
    transform: ${({ nav }) => (nav ? "translateX(0)" : "translateX(0)")};
    display: flex;
    flex-direction: row;
    background: #222a35;
    top: 0;
    width: 100%;
    border-radius: 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
    @media (min-width: 768px) {
      transform: ${({ nav }) => (nav ? "translateX(0)" : "translateX(0)")};
      display: flex;
      flex-direction: row;
      width: 100%;
      margin: 0;
      padding: 1rem;
    }
    a {
      text-decoration: none;
      color: white;
      margin-left: 1rem;
      display: flex;
      align-items: center;
      &:focus,
      &:hover,
      &:visited,
      &:link,
      &:active {
        text-decoration: none;
      }
    }
  }

  li {
    margin-bottom: 1.5rem;
    margin-right: 1.2rem;
    @media (min-width: 768px) {
      padding: 0 1rem 0 1rem;
      text-align: center;
      text-decoration: none;
      margin: auto;
    }
  }
`;

const Header = () => {
  const [nav, showNav] = useState(false);

  return (
    <Wrapper className="Header" id="header">
      <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
        <div />
        <div />
        <div />
      </MenuIcon>
      <MenuLinks nav={nav}>
        <ul>
          <AnchorLink
            href="#presentation"
            onClick={() => (nav ? showNav(!nav) : true)}
          >
            <li>Accueil</li>
          </AnchorLink>
          <AnchorLink
            href="#formation"
            onClick={() => (nav ? showNav(!nav) : true)}
          >
            <li>Formation</li>
          </AnchorLink>
          <AnchorLink
            href="#experiences"
            onClick={() => (nav ? showNav(!nav) : true)}
          >
            <li>Expériences professionnelles</li>
          </AnchorLink>
          <AnchorLink
            href="#hardSkills"
            onClick={() => (nav ? showNav(!nav) : true)}
          >
            <li>Hard skills</li>
          </AnchorLink>
          <AnchorLink
            href="#projets"
            onClick={() => (nav ? showNav(!nav) : true)}
          >
            <li>Projets</li>
          </AnchorLink>
        </ul>
      </MenuLinks>
    </Wrapper>
  );
};

export default Header;
