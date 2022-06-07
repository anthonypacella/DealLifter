import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'

const Logo = () => {
  return (
    <div className='image is-128x128'>
        <Link to="/">
            <img src={logo} alt="logo"></img>
        </Link>
    </div>
  );
};

export default Logo;


