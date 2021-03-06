import { Component } from "react";
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Project from "./Project";
import styled from "styled-components";

const ListOfProj = styled.div`
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
    @media (min-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }
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
    AOS.init();
    return (
      <ListOfProj id="projets">
        <h2 data-aos="fade-right">PROJETS</h2>
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
