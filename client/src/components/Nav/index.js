import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Nav = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <nav>
        
        <div class="tabs is-right">
            {Auth.loggedIn() ? (
                <ul>
                    <li>
                        <span class="icon is-small"><i class="fa-solid fa-user-vneck" aria-hidden="true"></i></span>
                        <span><Link to="/me">Account</Link></span>
                    </li>
                    <li>
                        <span class="icon is-small"><i class="fa-solid fa-right-from-bracket" aria-hidden="true"></i></span>
                        <span><Link onClick={logout}>Log Out</Link></span>
                    </li>
                </ul>
            ) : (
                <ul>
                    <li>
                        <span class="icon is-small"><i class="fa-solid fa-right-from-bracket" aria-hidden="true"></i></span>
                        <span><Link to="/login">Log In</Link></span>
                    </li>
                    <li>
                        <span class="icon is-small"><i class="fa-solid fa-user-plus" aria-hidden="true"></i></span>
                        <span><Link to="/login">Sign Up</Link></span>
                    </li>
                </ul>
            )}
        </div>
    </nav>
  );
};

export default Nav;
