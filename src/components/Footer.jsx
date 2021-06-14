import React from "react";
import styled from "styled-components";

const Foot = styled.div`
  h3 {
    background: #222a35;
    font-weight: lighter;
    color: #fff;
    padding: 1rem;
    margin-bottom: 0;
    text-align: end;
    font-size: 1rem;
  }
`;

function Footer() {
  return (
    <Foot>
      <h3>Nicolas Bonamy | Juin 2021</h3>
    </Foot>
  );
}

export default Footer;
