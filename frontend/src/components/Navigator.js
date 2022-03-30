import React, { Fragment, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigator.css';

const Navigator = () => {

    const [headerStyle, setHeaderStyle] = useState({ top: '0' });

    useEffect(() => {
        let  threshold = 0;
        window.onscroll = () => {
            if (window.scrollY > (threshold + 60)) {
                threshold = window.scrollY;
                setHeaderStyle({ top: '-100px' });
            } else if (window.scrollY < threshold) {
                threshold = window.scrollY;
                setHeaderStyle({ top: '0' });
            } else if (window.scrollY === 0) {
                threshold = 0;
                setHeaderStyle({ top: '0' });
            }
        }
    }, []);

    return (
        <Fragment>
            <header style = { headerStyle }>
                <ul>
                    <li><NavLink exact activeClassName = "is-active" to = "/"><span>0.</span>home</NavLink></li>
                    <li className = "nopointer">/</li>
                    <li><NavLink activeClassName = "is-active" to = "/projects"><span>1.</span>projects</NavLink></li>
                    <li className = "nopointer">/</li>
                    <li><NavLink activeClassName = "is-active" to = "/opensource"><span>2.</span>open source</NavLink></li>
                    <li className = "nopointer">/</li>
                    <li><NavLink activeClassName = "is-active" to = "/skills"><span>3.</span>skills</NavLink></li>
                    <li className = "nopointer">/</li>
                    <li><NavLink activeClassName = "is-active" to = "/resume"><span>4.</span>resume</NavLink></li>
                    <li className = "nopointer">/</li>
                    <li><NavLink activeClassName = "is-active" to = "/lab"><span>5.</span>lab</NavLink></li>
                    <li className = "nopointer">/</li>
                    <li><NavLink activeClassName = "is-active" to = "/reads"><span>6.</span>reads</NavLink></li>
                    <li className = "nopointer">/</li>
                    <li><NavLink activeClassName = "is-active" to = "/connect"><span>7.</span>connect</NavLink></li>
                    <li className = "nopointer">/</li>
                    <li><NavLink activeClassName = "is-active" to = "/contact"><span>8.</span>contact</NavLink></li>
                    <li className = "nopointer">/</li>
                    <li><NavLink activeClassName = "is-active" to = "/support"><span>9.</span>support</NavLink></li>
                </ul>
            </header>
        </Fragment>
    );
}

export default Navigator;