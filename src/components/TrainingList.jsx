import { Component } from "react";
import axios from "axios";
import Training from "./Training";
import styled from "styled-components";

const ListOfTrain = styled.div`
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

class TrainingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainingCourses: [],
    };
    this.fetchTrainingCourses = this.fetchTrainingCourses.bind(this);
  }
  componentDidMount() {
    this.fetchTrainingCourses();
  }

  fetchTrainingCourses() {
    axios
      .get(
        "https://raw.githubusercontent.com/NicolasBonamy/portfolio/dev/Training_courses.json"
      )
      .then((resp) => {
        this.setState({
          trainingCourses: resp.data,
        });
      });
  }

  render() {
    const { trainingCourses } = this.state;
    return (
      <ListOfTrain id="trainingCourses">
        <h2>FORMATION</h2>
        <ul>
          {trainingCourses.map((trainingCourse, index) => {
            return (
              <li key={index}>
                <Training {...trainingCourse} />
              </li>
            );
          })}
        </ul>
      </ListOfTrain>
    );
  }
}

export default TrainingList;
