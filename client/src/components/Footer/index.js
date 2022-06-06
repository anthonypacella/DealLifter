import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer class="footer">
      <div class="content has-text-centered" >
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
          <p>Constact Us</p>
        </Link>
        <p>
        © 2022 DealLifter. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
