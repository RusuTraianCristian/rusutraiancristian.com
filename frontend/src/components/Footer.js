import React from 'react';
import './Footer.css';

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <>
            <footer>
                Rusu Traian Cristian &copy; { year }
            </footer>
        </>
    );
}

export default Footer;