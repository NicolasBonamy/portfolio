import { Component } from "react";
import playerWild from "../pictures/player-wild.png";
import middleTrade from "../pictures/middle-trade.png";
import vegenantesGo from "../pictures/vegenantes-go.png";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid;
  img {
    width: 50%;
  }
`;

class Project extends Component {
  render() {
    const {
      date,
      titre,
      cadre,
      source,
      illustration,
      description,
      skills,
    } = this.props;
    return (
      <Card className="Project">
        <div className="ProjectView">
          {titre === "Player Wild" ? (
            <img src={playerWild} />
          ) : titre === "Middle Trade" ? (
            <img src={middleTrade} />
          ) : titre === "VegeNantes Go" ? (
            <img src={vegenantesGo} />
          ) : (
            ""
          )}
        </div>
        <div className="ProjectDescription">
          <div>{date}</div>
          <div>{titre}</div>
          <div>{cadre}</div>
          {source ? (
            <a href={source}>Allons voir le site...</a>
          ) : (
            <p>En cours de développement.</p>
          )}
          <div>{description}</div>
          <div>{skills}</div>
        </div>
      </Card>
    );
  }
}

export default Project;
