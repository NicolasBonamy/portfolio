import React, { Component } from "react";
import styled from "styled-components";
import WCS from "../logos/WCS.png"

const TrainingCard = styled.div`
  max-width: 600px;
  padding: 20px;
  margin: 20px;
  @media (min-width: 768px) {
    margin: 10px 20px;
  }
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: 10px;
  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  p {
    text-align: justify;
  }
`;

const LogoWCS = styled.img`
width: 6rem;
`;

class Training extends Component {
  render() {
    const { date, lieu, école, formation, description, id } = this.props;
    return (
      <TrainingCard className="Training">
        <LogoWCS src={WCS} alt="logo WCS" />
        <h3>
          {école} | {formation}
        </h3>
        <h4>
          {lieu} / {date}
        </h4>
        <p>{description}</p>
      </TrainingCard>
    );
  }
}

export default Training;
