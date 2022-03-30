import React, { Fragment } from 'react';
import './HomePage.css';
import Explore from './Explore';

const HomePage = () => {
    return (
        <Fragment>
            <div id = "main">
                <div className = "logo"><span>Chris.</span></div>
                <div className = "subtitle">software engineer, devops, systems designer, aspiring founder</div>
            </div>
            <Explore explore = "stuff about myself - homepage"/>
        </Fragment>
    );
}

export default HomePage;