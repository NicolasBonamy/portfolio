import { Component } from 'react';
import axios from 'axios';
import Experience from './Experience';

class ExperienceList extends Component {
    constructor(props){
        super(props);
        this.state ={};
        this.fetchExperiences = this.fetchExperiences.bind(this);
    }
componentDidMount() {
    this.fetchExperiences();
}

fetchExperiences() {
axios.get()
}

    render() {
        return (
            <div></div>
        )
    }
}

export default ExperienceList;
