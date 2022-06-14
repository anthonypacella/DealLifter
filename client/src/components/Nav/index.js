import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'

import Auth from '../../utils/auth';

const Nav = () => {
    
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  
  const data = Auth.getProfile().data
//   console.log(data);
//   console.log(data.userName);
  const [userNameState, setUserNameState] = useState('');
  const handleClick = async(event) => {
    try {
        // if (Auth.loggedIn()) {
           await setUserNameState(Auth.getProfile().data.userName);
           console.log(userNameState);
        // }
    } catch (e) {
        console.error(e);
    }
    setUserNameState('');
    // console.log(userNameState);
  }

  
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
                            <span><Link to={`/profile/${userNameState}`}><button onClick={handleClick}>Account</button></Link></span>
                                {/* <span><Link to={`/profile/${Auth.getProfile().data.userName}`}>Account</Link></span> */}
                            </li>
                            <li>
                                <span><button onClick={logout}>Log Out</button></span>
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
