import React, { Fragment } from 'react';
import './Contact.css';
import Navigator from './Navigator';

const Contact = () => {
    return (
        <Fragment>
            <div id = "main">
                <div className = "title">contact</div>
                <div className = "subtitle">contact</div>
                <Navigator />
                create a form to allow recruiters to contact me (use a node.js lambda)
            </div>
        </Fragment>
    );
}

export default Contact;