import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered" >
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/">
          <p>
            <span>Donate</span>
            <span
                className="emoji"
                role="img"
                aria-label="heart"
                aria-hidden="false"
            >
                ❤️
            </span>{' '}
          </p>
        </Link>
        <Link to="/">
          <p>Contact Us</p>
        </Link>
        <p>
        © 2022 DealLifter. All Rights Reserved.
        </p>
        <p><a href="https://clearbit.com">Logos provided by Clearbit</a></p>
      </div>
    </footer>
  );
};

export default Footer;
