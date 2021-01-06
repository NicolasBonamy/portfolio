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
    margin-top: 3rem;
  }
  ul {
    padding: 0;
  }
  li {
    list-style: none;
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
          {experiences.map((experience) => {
            return (
              <li>
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
