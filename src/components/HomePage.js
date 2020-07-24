import React, { Fragment } from 'react';
import './HomePage.css';
import Navigator from './Navigator';

const HomePage = () => {
    return (
        <Fragment>
            <div id = "main">
                <div className = "title">Rusu Traian Cristian</div>
                <div className = "subtitle">software engineer, systems designer, aspiring founder</div>
                <Navigator />
                stuff about myself
            </div>
        </Fragment>
    );
}

export default HomePage;