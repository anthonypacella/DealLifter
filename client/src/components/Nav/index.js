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
    <nav>
        <div className='navbar-brand'>
        <Link to="/">
            <img className='image is-128x128' src={logo} alt="logo"></img>
        </Link>
        </div>

        <div className='navbar-end'>
            <div className='navbar-item'>
                <div className="tabs is-right">
                    {Auth.loggedIn() ? (
                        <ul>
                            <li>
                                <span><Link to="/me">Account</Link></span>
                            </li>
                            <li>
                                <span><Link onClick={logout}>Log Out</Link></span>
                            </li>
                        </ul>
                    ) : (
                        <ul>
                            <li>
                                <span><Link to="/login">Log In</Link></span>
                            </li>
                            <li>
                                <span><Link to="/signup">Sign Up</Link></span>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    </nav>
  );
};

export default Nav;
