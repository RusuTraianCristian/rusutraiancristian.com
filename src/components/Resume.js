import React, { Fragment } from 'react';
import './Resume.css';
import Navigator from './Navigator';

const Resume = () => {
    return (
        <Fragment>
            <div id = "main">
                <div className = "title">Resume</div>
                <div className = "subtitle">Resume</div>
                <Navigator />
                resume as both webpage and pdf | pdf both viewable and downloadable
            </div>
        </Fragment>
    );
}

export default Resume;