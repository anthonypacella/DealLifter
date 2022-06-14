import React from 'react';
import {useState} from 'react';
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
                                <span><Link to={`/profile/${Auth.getProfile().data.userName}`}><button className="button is-warning">Account</button></Link></span>
                            </li>
                            <li>
                                <span><button onClick={logout} className="button is-warning">Log Out</button></span>
                            </li>
                        </ul>
                    ) : (
                        <ul>
                            <li>
                                <span><Link to="/login"><button className="button is-warning">Log In</button></Link></span>
                            </li>
                            <li>
                                <span><Link to="/signup"><button className="button is-warning">Sign Up</button></Link></span>
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
