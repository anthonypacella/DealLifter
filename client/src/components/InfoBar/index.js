import React from 'react';
import { Link } from 'react-router-dom';
import './categories';
import categories from './categories';
import './deals';
import deals from './deals';

const InfoBar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-menu'>
        
        <div className='navbar-item has-dropdown is-hoverable'>
          <a className="navbar-link">
            Categories
          </a>
          <div className="navbar-dropdown">
            {categories.map((category) => (
              <div className='navbar-item'>
                <Link to={category.link}>
                  <span>{category.name}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
        
        <div className='navbar-item has-dropdown is-hoverable'>
          <a className="navbar-link">
            Deals of the Day
          </a>
          <div className="navbar-dropdown">
            {deals.map((deal) => (
              <div className='navbar-item'>
                <Link to={deal.link}>
                    <span>{deal.name}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default InfoBar;
