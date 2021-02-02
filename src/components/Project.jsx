import { Component } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import playerWild from "../pictures/player-wild.png";
import middleTrade from "../pictures/middle-trade.png";
import vegenantesGo from "../pictures/vegenantes-go.png";
import magicPills from "../pictures/magic-pills.png";
import meetHalfWay from "../pictures/meet-halfway.png";
import styled from "styled-components";

const media = {
  desktop: "@media(min-width:768px)",
};

const Card = styled.div`
  ${media.desktop} {
    display: flex;
    flex-direction: row;
  }
  max-width: 600px;
  padding: 20px;
  margin: 20px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: 10px;
  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 150px;
  }
  .ProjectDescription {
    padding: 0 0 0 20px;
    h3 {
      padding: 0.5rem 1rem 0.5rem 1rem;
      background: linear-gradient(to right, rgba(34, 42, 53, 0.7), #fff 70%);
      border-radius: 0.5rem;
    }
    h3 .ProjectTitle {
      color: #fff;
    }
    div {
      margin: 1rem 0 1rem 0;
    }
    div:nth-child(2) {
      text-align: justify;
    }
    div:nth-child(3) {
      font-weight: bold;
    }
    div:nth-child(4) {
      font-style: italic;
    }
    a {
      color: #000;
      &:focus,
      &:hover,
      &:visited,
      &:link,
      &:active {
        text-decoration: none;
      }
    }
  }
`;

class Project extends Component {
  render() {
    const { date, titre, cadre, source, description, skills } = this.props;
    AOS.init();
    return (
      <Card data-aos="fade-right" data-aos-delay="500" className="Project">
        <div className="ProjectView">
          {titre === "Player Wild" ? (
            <img src={playerWild} />
          ) : titre === "Middle Trade" ? (
            <img src={middleTrade} />
          ) : titre === "VegeNantes Go" ? (
            <img src={vegenantesGo} />
          ) : titre === "Magic Pills" ? (
            <img src={magicPills} />
          ) : titre === "Meet Halfway" ? (
            <img src={meetHalfWay} />
          ) : (
            ""
          )}
        </div>
        <div className="ProjectDescription">
          <h3>
            <span className="ProjectTitle">{titre} | </span>
            <span className="ProjectCadre">{cadre}</span>
          </h3>

          <div>{description}</div>
          <div>{skills}</div>
          <div>{date}</div>
          {source ? (
            <a href={source}>&gt;&gt;&gt; Allons voir le site &gt;&gt;&gt;</a>
          ) : (
            <p>En cours de développement.</p>
          )}
        </div>
      </Card>
    );
  }
}

export default Project;
