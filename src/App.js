import React, { Fragment, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Lab from './components/Lab';
import Connect from './components/Connect';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

const App = () => {

    const detectKey = useCallback(e => {
        switch (e.keyCode) {
            case 48:
                window.location.href = '/';
                break;
            case 49:
                window.location.href = '/projects';
                break;
            case 50:
                window.location.href = '/skills';
                break;
            case 51:
                window.location.href = '/resume';
                break;
            case 52:
                window.location.href = '/lab';
                break;
            case 53:
                window.location.href = '/connect';
                break;
            case 54:
                window.location.href = '/contact';
                break;
            default:
                break;
        }
    }, []);

    useEffect(() => {
        document.addEventListener('keydown', detectKey, false);
    }, [detectKey]);

    return (
        <Fragment>
            <Router>
                <Switch>
                    <Route exact path = "/" component = { HomePage }></Route>
                    <Route path = "/projects" component = { Projects }></Route>
                    <Route path = "/skills" component = { Skills }></Route>
                    <Route path = "/resume" component = { Resume }></Route>
                    <Route path = "/lab" component = { Lab }></Route>
                    <Route path = "/connect" component = { Connect }></Route>
                    <Route path = "/contact" component = { Contact }></Route>
                    <Route component = { NotFound }></Route>
                </Switch>
            </Router>
        </Fragment>
    );
}

export default App;
