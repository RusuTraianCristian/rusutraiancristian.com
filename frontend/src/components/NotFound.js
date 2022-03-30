import React, { Fragment } from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <Fragment>
            <div id = "main">
                <div className = "title">404</div>
                <div className = "subtitle">page not found</div>
            </div>
        </Fragment>
    );
}

export default NotFound;