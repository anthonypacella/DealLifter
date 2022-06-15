import React from 'react';
import { Link, renderMatches } from 'react-router-dom';
import './tabs';
import tabs from './tabs';
import {useState} from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';


import PostedDeals from '../PostedDeals/index'
import SavedDeals from '../SavedDeals/index'
import FavoriteTags from '../FavoriteTags/index'
import Following from '../Following/index'
import Followers from '../Followers/index'
import SearchHistory from '../SearchHistory/index'

import { GET_USER_BY_USERNAME } from '../../utils/queries';

const followingExample = [
  {
    userName: 'Anthony',
    avatar: 'https://avatars.githubusercontent.com/u/93337957?v=4',
    totalFollowers: 2,
    PostedDealsByUser: 1,
  },
  {
    userName: 'Kashane',
    avatar: 'https://avatars.githubusercontent.com/u/93337957?v=4',
    totalFollowers: 6,
    PostedDealsByUser: 1,
  },
  {
    userName: 'Xuyang',
    avatar: 'https://avatars.githubusercontent.com/u/93337957?v=4',
    totalFollowers: 8,
    PostedDealsByUser: 4,
  },
  {
    userName: 'Jeff',
    avatar: 'https://avatars.githubusercontent.com/u/93337957?v=4',
    totalFollowers: 2,
    PostedDealsByUser: 3,
  },
  {
    userName: 'Andres',
    avatar: 'https://avatars.githubusercontent.com/u/93337957?v=4',
    totalFollowers: 5,
    PostedDealsByUser: 1,
  },
  {
    userName: 'Jacob',
    avatar: 'https://avatars.githubusercontent.com/u/93337957?v=4',
    totalFollowers: 3,
    PostedDealsByUser: 7,
  },
  {
    userName: 'AJ',
    avatar: 'https://avatars.githubusercontent.com/u/93337957?v=4',
    totalFollowers: 3,
    PostedDealsByUser: 1,
  },
];
const followersExample = [
  {
    userName: 'Anthony',
    totalFollowers: 2,
    PostedDealsByUser: 1,
  },
  {
    userName: 'Kashane',
    totalFollowers: 6,
    PostedDealsByUser: 1,
  },
  {
    userName: 'Xuyang',
    totalFollowers: 8,
    PostedDealsByUser: 4,
  },
];
const ProfileTabs = () => {
  const [isShown, setIsShown] = useState(false);
  const [buttonState, setButtonState] = useState(0);
  const { userName: userParam } = useParams();

  
    const {loading, data} = useQuery(GET_USER_BY_USERNAME, { variables: { userName: userParam }});
    const userObj = data?.getUserByUserName || [];
    console.log(`userObj: `, userObj);
    console.log(userObj);
    // const {loading, data} = useQuery(GET_USER_BY_ID, { variables: { userId: userId }});
    // const user = data?.getUserById || [];
    // console.log('user', user);

    if (loading) {
      return <div>Loading...</div>;
    }
  // const userObj = GetUserByUserId(GetUserName());
  //   console.log('userobj', userObj);
  
  const handleClick = (id) => {
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

      <div className="column is-four-fifths" >
        {buttonState===1 ? (
          <SavedDeals savedDeals = {userObj.savedDeals} />
        ) : buttonState === 2 ? (
          <FavoriteTags favoriteTags = {userObj.favoriteTags} />
        ) : buttonState === 3 ? (
          <Following following = {followingExample} />
        ) : buttonState === 4 ? (
          <Followers followers = {followersExample} />
        ) : buttonState === 5 ? (
          <PostedDeals userId = {userObj._id} />
        ) : buttonState === 6 ? (
          <SearchHistory searches = {userObj.searchHistory} />
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
