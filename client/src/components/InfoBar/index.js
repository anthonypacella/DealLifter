import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './categories';
import categories from './categories';
import './deals';
import deals from './deals';

import { useQuery, useMutation } from '@apollo/client';
import { GET_DEALS_BY_KEYWORD } from '../../utils/queries';
import { CREATE_SEARCH, ADD_TO_SEARCH_HISTORY } from '../../utils/mutations';


const InfoBar = () => {
  const [formState, setFormState] = useState({
    keyword: '',
  });
  


  // const [createSearch, {error:searchError, data: searchData}] = useMutation(CREATE_SEARCH);
  const [addToSearchHistory, {error: historyError, data: historyData}] = useMutation(ADD_TO_SEARCH_HISTORY);

 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {

      const { history } = await addToSearchHistory({
        variables: { ...formState },
      })
      
    } catch (error) {

    }
    window.location.assign(`/results/${formState.keyword}`)
  };


  return (
      <div>

        {/* <div className='navbar-item has-dropdown is-hoverable'>
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
        </div> */}

        <div className="navbar-item">
          <form onSubmit={handleFormSubmit}>
            <div className="field has-addons">
              <p className="control">
                <input
                  className="input is-rounded is-medium"
                  type="text"
                  placeholder="Search the deals"
                  autoComplete="off"
                  name="keyword"
                  value={formState.keyword}
                  onChange={handleChange}
                  style={{width: '240px'}}          
                  />
              </p>
              <p className="control">
                <button className="button is-rounded is-warning is-medium" type='submit'>
                  <span className="icon is-small is-left">
                    <i className="fas fa-search"></i>
                  </span>
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
  );
};

export default InfoBar;