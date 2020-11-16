import React, { Fragment } from 'react';
import './OpenSource.css';
import Explore from './Explore';

const OpenSource = () => {
    return (
        <Fragment>
            <div id = "main">
                <div className = "title">open source</div>
                <div className = "subtitle">open source</div>
            </div>
            <Explore explore = "my open source stuff things"/>
        </Fragment>
    );
}

export default OpenSource;