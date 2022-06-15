import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'

import Auth from '../../utils/auth';
import InfoBar from '../InfoBar';

const Nav = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();

  };
  
  return (
    <nav className='navbar' role='navigation'>
        <div className='navbar-start'>
            <div className='navbar-item'>
            <Link to="/">
                <img src={logo} alt="logo" style={{'maxHeight': `300px`}}></img>
            </Link>
            </div>
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
                                <span><Link to="/"><button onClick={logout} className="button is-warning">Log Out</button></Link></span>
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

                    <InfoBar />

                    
                </div>
            </div>
        </div>
    </nav>
  );
};

export default Nav;
