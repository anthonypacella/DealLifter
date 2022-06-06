import React from 'react';
import { Link } from 'react-router-dom';
import './stores';
import stores from './stores';

const StoreList = () => {
  return (
    <div className='container is-fluid'>
        <div className='tile is-ancestor'>
            {stores.map((store) => (
                <div className='tile is-child is-2 is-warning'>
                        <figure className="image is-4by3">
                            <img src={store.img} alt={store.name}></img>
                        </figure>
                        <Link className="title" to={store.link}>
                            {store.name}
                        </Link>
                </div>
                ))}       
        </div>
    </div>
  );
};

export default StoreList;
