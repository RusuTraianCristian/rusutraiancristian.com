import React, { Fragment } from 'react';
import './Resume.css';
import Explore from './Explore';

const Resume = () => {
    return (
        <Fragment>
            <div id = "main">
                <div className = "title">Resume</div>
                <div className = "subtitle">Resume</div>
            </div>
            <Explore explore = "resume as both webpage and pdf | pdf both viewable and downloadable"/>
        </Fragment>
    );
}

export default Resume;