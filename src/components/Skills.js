import React, { Fragment } from 'react';
import './Skills.css';
import Navigator from './Navigator';

const Skills = () => {
    return (
        <Fragment>
            <div id = "main">
                <div className = "title">skills</div>
                <div className = "subtitle">skills</div>
                <Navigator />
                a list of my skills..
            </div>
        </Fragment>
    );
}

export default Skills;