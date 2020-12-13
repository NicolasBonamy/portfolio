import React, { Component } from 'react';
import styled from 'styled-components';

const ExperienceCard = styled.div`
  border: 1px solid;
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
