import { Component } from "react";
import axios from "axios";
import Experience from "./Experience";
import styled from "styled-components";

const ListOfExp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    text-align: center;
    margin-top: 5rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  ul {
    padding: 0;
    margin-bottom: 0;
    @media (min-width: 768px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  li {
    list-style: none;
  }
  @media (min-width: 768px) {
    li:nth-child(odd) {
      transform: translateX(6vw);
    }
    li:nth-child(even) {
      transform: translateX(-6vw);
    }
  }
`;

class ExperienceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experiences: [],
    };
    this.fetchExperiences = this.fetchExperiences.bind(this);
  }
  componentDidMount() {
    this.fetchExperiences();
  }

  fetchExperiences() {
    axios
      .get(
        "https://raw.githubusercontent.com/NicolasBonamy/portfolio/dev/src/Experiences.json"
      )
      .then((resp) => {
        this.setState({
          experiences: resp.data,
        });
      });
  }

  render() {
    const { experiences } = this.state;
    return (
      <ListOfExp id="experiences">
        <h2>EXPERIENCES PROFESSIONNELLES</h2>
        <ul>
          {experiences.map((experience, index) => {
            return (
              <li key={index}>
                <Experience {...experience} />
              </li>
            );
          })}
        </ul>
      </ListOfExp>
    );
  }
}

export default ExperienceList;
