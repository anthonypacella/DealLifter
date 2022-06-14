import React from 'react';
import { Link, renderMatches } from 'react-router-dom';
import './tabs';
import tabs from './tabs';
import {useState} from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';


import PostedDeals from '../PostedDeals/index'
import SavedDeals from '../SavedDeals/index'
import FavoriteTags from '../FavoriteTags/index'
import Following from '../Following/index'
import Followers from '../Followers/index'

import { GET_USER_BY_USERNAME, GET_USER_BY_ID } from '../../utils/queries';

const ProfileTabs = () => {
  const [isShown, setIsShown] = useState(false);
  const [buttonState, setButtonState] = useState(1);
  const { userName: userParam } = useParams();

  
    const {loading, data} = useQuery(GET_USER_BY_USERNAME, { variables: { userName: userParam }});
    const userObj = data?.getUserByUserName || [];
    console.log(`userObj: `, userObj);
    console.log(userObj.favoriteTags);
    // const {loading, data} = useQuery(GET_USER_BY_ID, { variables: { userId: userId }});
    // const user = data?.getUserById || [];
    // console.log('user', user);

    if (loading) {
      return <div>Loading...</div>;
    }
  // const userObj = GetUserByUserId(GetUserName());
  //   console.log('userobj', userObj);
  
  const handleClick = (id) => {
    console.log(id);
    setIsShown(current => !current);
    setButtonState(id);
  };

  return (
    <div className="columns">
      <div className="column is-one-fifth">
        <nav className="panel">
          {tabs.map((tab) => (
            <a className="panel-block is-active" key={tab.id} onClick={ ()=>handleClick(tab.id)}>
              <span className="panel-icon">
              <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </span>
              {tab.name}
            </a>
          ))}
        </nav>
      </div>

      {/* <div>
        {GetUserName()}
      </div> */}

      <div className="column is-four-fifths" >
        {buttonState===1 ? (
          <PostedDeals postedDeals = {userObj.savedDeals} />
        ) : buttonState === 2 ? (
          <SavedDeals savedDeals = {userObj.savedDeals} />
        ) : buttonState === 3 ? (
          <FavoriteTags favoriteTags = {userObj.favoriteTags} />
        ) : buttonState === 4 ? (
          <Following following = {userObj.savedDeals} />
        ) : buttonState === 5 ? (
          <Followers followers = {userObj.savedDeals} />
        ) : 
              <p className="title is-align-self-stretch">
                Welcome!
              </p>
        }
      </div>
    </div>
  );
};

export default ProfileTabs;
