import { Component }from 'react';
import playerWild from '../pictures/player-wild.png';
import middleTrade from '../pictures/middle-trade.png';
import vegenantesGo from '../pictures/vegenantes-go.png';


class Project extends Component {
    render() {
        const { date, titre, cadre, source, illustration, description, skills } = this.props;
        return (
        <div className="Project">
            <div>{date}</div>
            <div>{titre}</div>es
            <div>{cadre}</div>
            <div>{source}</div>
            <img src={illustration} />
            <div>{description}</div>
            <div>{skills}</div>
        </div>
        );
    }
}

export default Project;
