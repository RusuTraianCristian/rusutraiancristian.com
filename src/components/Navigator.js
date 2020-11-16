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
                <li><Link to = "/opensource"><span>2.</span>open source</Link></li>
                <li className = "nopointer">/</li>
                <li><Link to = "/skills"><span>3.</span>skills</Link></li>
                <li className = "nopointer">/</li>
                <li><Link to = "/resume"><span>4.</span>resume</Link></li>
                <li className = "nopointer">/</li>
                <li><Link to = "/lab"><span>5.</span>lab</Link></li>
                <li className = "nopointer">/</li>
                <li><Link to = "/reads"><span>6.</span>reads</Link></li>
                <li className = "nopointer">/</li>
                <li><Link to = "/connect"><span>7.</span>connect</Link></li>
                <li className = "nopointer">/</li>
                <li><Link to = "/contact"><span>8.</span>contact</Link></li>
                <li className = "nopointer">/</li>
                <li><Link to = "/support"><span>9.</span>support</Link></li>
            </ul>
        </Fragment>
    );
}

export default Navigator;