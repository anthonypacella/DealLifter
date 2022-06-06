import React from 'react';
import { Link } from 'react-router-dom';
import './tabs';
import tabs from './tabs';

const InfoBar = () => {
  return (
    <div className='navbar-menu'>
        {tabs.map((tab) => (
            <div className='navbar-item'>
                <Link to={tab.link}>
                    <span>{tab.icon}</span>
                    <span>{tab.name}</span>
                </Link>
            </div>
        ))}
    </div>
  );
};

export default InfoBar;
