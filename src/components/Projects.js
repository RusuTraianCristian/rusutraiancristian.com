import React, { Fragment } from 'react';
import './Projects.css';
import Navigator from './Navigator';

const Projects = () => {
    return (
        <Fragment>
            <div id = "main">
                <div className = "title">projects</div>
                <div className = "subtitle">projects</div>
                <Navigator />
                projects with skills used, with links to github, with website link, update github repos from local
            </div>
        </Fragment>
    );
}

export default Projects;