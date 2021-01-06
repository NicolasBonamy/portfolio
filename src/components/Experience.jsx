import React, { Component } from 'react';
import styled from 'styled-components';

const ExperienceCard = styled.div`
  max-width: 600px;
  padding: 20px;
  margin: 20px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: 10px;
  :hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

class Experience extends Component {
  render() {
    const { date, lieu, entreprise, poste, description } = this.props;
    return (
      <ExperienceCard className="Experience">
        <h3>{entreprise} | {poste}</h3>
        <h4>{lieu} / {date}</h4>
        <p>{description}</p>
      </ExperienceCard>
    );
  }
}

export default Experience;
