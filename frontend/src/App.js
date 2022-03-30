import React, { Fragment, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import Projects from './components/Projects';
import OpenSource from './components/OpenSource';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Lab from './components/Lab';
import Reads from './components/Reads';
import Connect from './components/Connect';
import Contact from './components/Contact';
import Support from './components/Support';
import NotFound from './components/NotFound';
import Navigator from './components/Navigator';
import Footer from './components/Footer';

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
                window.location.href = '/opensource';
                break;
            case 51:
                window.location.href = '/skills';
                break;
            case 52:
                window.location.href = '/resume';
                break;
            case 53:
                window.location.href = '/lab';
                break;
            case 54:
                window.location.href = '/reads';
                break;
            case 55:
                window.location.href = '/connect';
                break;
            case 56:
                window.location.href = '/contact';
                break;
            case 57:
                window.location.href = '/support';
                break;
            default:
                break;
        }
    }, []);

    useEffect(() => {
        document.addEventListener('keydown', detectKey);
        // cleanup eventListener
        return () => document.removeEventListener('keydown', detectKey);
    }, [detectKey]);

    return (
        <Fragment>
            <Router>
                <Navigator />
                <Switch>
                    <Route exact path = "/" component = { HomePage }></Route>
                    <Route path = "/projects" component = { Projects }></Route>
                    <Route path = "/opensource" component = { OpenSource }></Route>
                    <Route path = "/skills" component = { Skills }></Route>
                    <Route path = "/resume" component = { Resume }></Route>
                    <Route path = "/lab" component = { Lab }></Route>
                    <Route path = "/reads" component = { Reads }></Route>
                    <Route path = "/connect" component = { Connect }></Route>
                    <Route path = "/contact" component = { Contact }></Route>
                    <Route path = "/support" component = { Support }></Route>
                    <Route component = { NotFound }></Route>
                </Switch>
                <Footer />
            </Router>
        </Fragment>
    );
}

export default App;
