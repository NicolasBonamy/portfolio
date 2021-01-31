import { Component } from "react";
import axios from "axios";
import Project from "./Project";
import styled from "styled-components";

const ListOfProj = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    text-align: center;
    margin-top: 5rem;
  }
  ul {
    padding: 0;
  }
  li {
    list-style: none;
  }
`;

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
    this.fetchProjects = this.fetchProjects.bind(this);
  }
  componentDidMount() {
    this.fetchProjects();
  }

  fetchProjects() {
    axios
      .get(
        "https://raw.githubusercontent.com/NicolasBonamy/portfolio/dev/src/Projects.json"
      )
      .then((resp) => {
        this.setState({
          projects: resp.data,
        });
      });
  }

  render() {
    const { projects } = this.state;
    return (
      <ListOfProj id="projets">
        <h2>PROJETS</h2>
        <ul>
          {projects.map((project, index) => {
            return (
              <li key={index}>
                <Project {...project} />
              </li>
            );
          })}
        </ul>
      </ListOfProj>
    );
  }
}

export default Portfolio;
