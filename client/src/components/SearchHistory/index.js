import React, { useRef, useState } from 'react';

import { Link } from 'react-router-dom';

import '../styles/Following.css'
const cardWidth = { width: '100%' };
React.createElement("div", { style: cardWidth });

const SearchHistory = ({
    searches,
}) => {
    console.log(searches);
  if (searches.length === 0) { 
    return <h3>No Search History yet...</h3>;
  }

  return (
    <div className="columns">
      {searches &&
        searches.map((search) => (
            <div className="column is-2">
                <div className='box has-background-warning has-text-centered has-text-weight-semibold '>
                    <p className='has-text-white'><Link to={`/results/${search}`}>{search}</Link></p>
                </div>
            </div>
        ))}
    </div>
  );
};

export default SearchHistory;
