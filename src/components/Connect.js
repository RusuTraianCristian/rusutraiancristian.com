import React, { Fragment } from 'react';
import './Connect.css';
import Explore from './Explore';

const Connect = () => {
    return (
        <Fragment>
            <div id = "main">
                <div className = "title">connect</div>
                <div className = "subtitle">connect</div>
            </div>
            <Explore explore = "update social profiles, put profiles here | linkedin, angel, github, stackoverflow, hashnode, codersrank, codepen, codesandbbox"/>
        </Fragment>
    );
}

export default Connect;