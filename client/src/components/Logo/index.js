import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../public/images/logo192.png'

const Logo = () => {
  return (
    <div>
        <Link to="/">
            <img src={logo} alt="logo"></img>
        </Link>
        <p>Do we need a slogan here?</p>
    </div>
  );
};

export default Logo;


