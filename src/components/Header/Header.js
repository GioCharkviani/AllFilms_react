import React, { Fragment } from 'react';
import { BrowserRouter, Link, Route, Switch, useHistory } from 'react-router-dom';

import './Header.css';

const Navbar = (props) => {
    return (
      <Fragment>
        <div className="navbar">
            <div className="main-title-container">
                <Link className="navLink main-title" to="/" >AllFilms</Link>
            </div>
            <div className="main-nav-container">
                <Link className="navLink main-nav" to="/" >Home</Link>
                <Link className="navLink main-nav" to="/films" >Films</Link>
                <Link className="navLink main-nav" to="/animes" >Animes</Link>
            </div>
            <div className="account-container">
                {
                    props.isAuthodized ? <Link className="navLink account-reg" to="/profile" >Profile</Link> : <Link className="navLink account-reg" to="/login" >Login</Link>
                }
                
                
            </div>
        </div>
      </Fragment>
    )
}

const Header = (props) => {
    return (
        <div className="navbar-container">
            <Navbar isAuthodized={props.isAuthodized} />
        </div>
    )
}

export default Header;