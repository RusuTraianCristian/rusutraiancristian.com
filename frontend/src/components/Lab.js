import React, { Fragment } from 'react';
import './Lab.css';
import Explore from './Explore';

const Lab = () => {
    return (
        <Fragment>
            <div id = "main">
                <div className = "title">lab</div>
                <div className = "subtitle">lab</div>
            </div>
            <Explore explore = "experiments and other stuff | 2-3 loaders with react lazy and suspense in codepen/codesandbox"/>
        </Fragment>
    );
}

export default Lab;