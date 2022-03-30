import React, { Fragment } from 'react';
import './Reads.css';
import Explore from './Explore';

const Reads = () => {
    return (
        <Fragment>
            <div id = "main">
                <div className = "title">reads</div>
                <div className = "subtitle">reads</div>
            </div>
            <Explore explore = "some software engineering reads"/>
        </Fragment>
    );
}

export default Reads;