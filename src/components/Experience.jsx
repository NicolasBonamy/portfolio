import React, { Component } from 'react';

class Experience extends Component {
  render() {
    const {date, entreprise, poste, description} = this.props;
    return (
      <div className="Experience">
        <div>hey {date}</div>
        <div>{entreprise}</div>
        <div>{poste}</div>
        <div>{description}</div>
      </div>
    );
  }
}

export default Experience;
