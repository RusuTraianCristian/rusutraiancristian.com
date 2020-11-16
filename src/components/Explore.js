import React, { Fragment, useEffect, useState, useRef } from 'react';
import './Explore.css';

const Explore = props => {

    const [message, setMessage] = useState('');

    useEffect(() => {
        const explore = 'explore';
        const buffer = [];
        for (let i = 0; i < explore.length; i++) {
            setTimeout(() => {
                buffer.push(explore[i]);
                setMessage(buffer.join(''));
            }, 200 * i);
        }
        return () => clearTimeout();
    }, []);

    const myRefpointer = useRef(null);

    const scrollToRef = ref => window.scroll({
        top: ref.current.offsetTop,
        behavior: 'smooth'
    });

    return (
        <Fragment>
            <div className = "subtitle blink" onClick = { () => scrollToRef(myRefpointer) }>{ message }</div>
            <div className = "explore" ref = { myRefpointer }>{ props.explore }</div>
        </Fragment>
    );
}

export default Explore;