import React from 'react';
import { Link } from 'react-router-dom';
import './tabs';
import tabs from './tabs';

const InfoBar = () => {
    return (
        <aside className='menu'>
            <ul className='menu-list'>
                {tabs.map((tab) => (
                    <li key={tab.id}>
                        <Link to={tab.link}>
                            {tab.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
      );
    };

export default InfoBar;
