import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered" >
        <Link to="/">
          <p>Home</p>
        </Link>
        <a href="https://github.com/anthonypacella/DealLifter" target="_blank">
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
        </a>

        <p><a href="https://github.com/anthonypacella/DealLifter" target="_blank">Contact Us</a></p>

        <p>© 2022 DealLifter. All Rights Reserved.</p>
        
        <p><a href="https://clearbit.com" target="_blank">Logos provided by Clearbit</a></p>
      </div>
    </footer>
  );
};

export default Footer;
