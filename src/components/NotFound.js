import React, { Fragment } from 'react';
import './NotFound.css';
import Navigator from './Navigator';

const NotFound = () => {
    return (
        <Fragment>
            <div id = "main">
                <div className = "title">4 oops 4</div>
                <div className = "subtitle">page not found</div>
                <Navigator />
            </div>
        </Fragment>
    );
}

export default NotFound;