import React, { Component } from 'react';

class Experience extends Component {
  render() {
    const { date, entreprise, poste, description } = this.props;
    return (
      <div className="Experience">
        <div>date : {date}</div>
        <div>entreprise : {entreprise}</div>
        <div>poste : {poste}</div>
        <div>description : {description}</div>
      </div>
    );
  }
}

export default Experience;
