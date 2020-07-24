import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Navigator.css';

const Navigator = () => {
    return (
        <Fragment>
            <ul>
                <li><Link to = "/"><span>0.</span>home</Link></li>
                <li className = "nopointer">/</li>
                <li><Link to = "/projects"><span>1.</span>projects</Link></li>
                <li className = "nopointer">/</li>
                <li><Link to = "/skills"><span>2.</span>skills</Link></li>
                <li className = "nopointer">/</li>
                <li><Link to = "/resume"><span>3.</span>resume</Link></li>
                <li className = "nopointer">/</li>
                <li><Link to = "/lab"><span>4.</span>lab</Link></li>
                <li className = "nopointer">/</li>
                <li><Link to = "/connect"><span>5.</span>connect</Link></li>
                <li className = "nopointer">/</li>
                <li><Link to = "/contact"><span>6.</span>contact</Link></li>
            </ul>
        </Fragment>
    );
}

export default Navigator;