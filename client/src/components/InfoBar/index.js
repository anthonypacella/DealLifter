import React from 'react';
import { Link } from 'react-router-dom';
import './categories';
import categories from './categories';
import './deals';
import deals from './deals';

const InfoBar = () => {
  return (
    <div className='navbar-menu'>
      <div className='navbar-item has-dropdown is-hoverable'>
        Categories
        {categories.map((category) => (
              <div className='navbar-item'>
                  <Link to={category.link}>
                      <span>{category.icon}</span>
                      <span>{category.name}</span>
                  </Link>
              </div>
          ))}
      </div>
      
      <div>
        <div className='navbar-item has-dropdown is-hoverable'>
          <span><i class="fa-solid fa-fire"></i></span>
          Deals of the Day
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
  );
};

export default InfoBar;
