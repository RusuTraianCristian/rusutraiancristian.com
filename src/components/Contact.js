import React, { Fragment } from 'react';
import './Contact.css';
import Explore from './Explore';

const Contact = () => {
    return (
        <Fragment>
            <div id = "main">
                <div className = "title">contact</div>
                <div className = "subtitle">contact</div>
            </div>
            <Explore explore = "create a form to allow recruiters to contact me (use a node.js lambda)"/>
        </Fragment>
    );
}

export default Contact;