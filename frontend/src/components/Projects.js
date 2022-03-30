import React, { Fragment } from 'react';
import './Projects.css';
import Explore from './Explore';

const Projects = () => {
    return (
        <Fragment>
            <div id = "main">
                <div className = "title">projects</div>
                <div className = "subtitle">projects</div>
            </div>
            <Explore explore = "projects with skills used, with links to github, with website link, update github repos from local"/>
        </Fragment>
    );
}

export default Projects;