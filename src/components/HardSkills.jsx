import React from 'react';
import styled from 'styled-components';
import html5 from '../logos/html-5.svg';
import css3 from '../logos/css-3.svg';
import react from '../logos/react.svg';
import npm from '../logos/npm.svg';
import nodejs from '../logos/nodejs.png';

const Logos = styled.img`
width: 4rem;;
height: auto;
margin: 1rem;
transition: transform 0.2s;
:hover {
    transform: scale(1.2);
}
`;

function HardSkills() {
    return <div>
        <Logos src={html5} alt="logo html5" />
        <Logos src={css3} alt="logo css3" />
        <Logos src={react} alt="logo react" />
        <Logos src={npm} alt="logo npm" />
        <Logos src={nodejs} alt="logo nodejs" />
    </div>
}

export default HardSkills;
