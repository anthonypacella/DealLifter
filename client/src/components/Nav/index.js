import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'

import Auth from '../../utils/auth';

const Nav = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand" to="/">
            <Link className="navbar-item">
                <span><img src={logo} alt="logo"></img></span>
            </Link> 
            
        </div>
        <div className="tabs is-right">
            {Auth.loggedIn() ? (
                <ul>
                    <li>
                        <span className="icon is-small"><i className="fa-solid fa-user-vneck" aria-hidden="true"></i></span>
                        <span><Link to="/">Account</Link></span>
                    </li>
                    <li>
                        <span className="icon is-small"><i className="fa-solid fa-right-from-bracket" aria-hidden="true"></i></span>
                        <span><Link onClick={logout}>Log Out</Link></span>
                    </li>
                </ul>
            ) : (
                <ul>
                    <li>
                        <span className="icon is-small"><i className="fa-solid fa-right-from-bracket" aria-hidden="true"></i></span>
                        <span><Link to="/login">Log In</Link></span>
                    </li>
                    <li>
                        <span className="icon is-small"><i className="fa-solid fa-user-plus" aria-hidden="true"></i></span>
                        <span><Link to="/login">Sign Up</Link></span>
                    </li>
                </ul>
            )}
        </div>
    </nav>
  );
};

export default Nav;
