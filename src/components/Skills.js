import React, { Fragment } from 'react';
import './Skills.css';
import Explore from './Explore';

const Skills = () => {
    return (
        <Fragment>
            <div id = "main">
                <div className = "title">skills</div>
                <div className = "subtitle">skills</div>
            </div>
            <Explore explore = "a list of my skills.."/>
        </Fragment>
    );
}

export default Skills;