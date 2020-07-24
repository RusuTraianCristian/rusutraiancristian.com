import React, { Fragment } from 'react';
import './Lab.css';
import Navigator from './Navigator';

const Lab = () => {
    return (
        <Fragment>
            <div id = "main">
                <div className = "title">lab</div>
                <div className = "subtitle">lab</div>
                <Navigator />
                experiments and other stuff | 2-3 loaders with react lazy and suspense in codepen/codesandbox
            </div>
        </Fragment>
    );
}

export default Lab;