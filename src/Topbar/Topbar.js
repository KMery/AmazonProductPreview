import React from 'react';
import classes from './Topbar.module.css';
import AmazonLogo from './Amazon-Logo-1280x720.png'

const Topbar = () => {
    return(
        <header>
            <nav className={classes.Topbar}>
            <img src={AmazonLogo} alt="Amazon Logo" />
            </nav>
        </header>
    );
}

export default Topbar;