import React from 'react';
import { Link, renderMatches } from 'react-router-dom';
import './tabs';
import tabs from './tabs';
import {useState} from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import PostedDeals from '../PostedDeals/index'
import SavedDeals from '../SavedDeals/index'
import Following from '../Following/index'
import Followers from '../Followers/index'

import { GET_USER_BY_USERNAME, GET_POSTED_DEALS_BY_USER_ID } from '../../utils/queries';

const postedDealsExample = [
  {
    submittedBy: {
      userName: 'apacella'
    },
    submittedOn: 'Jun 5, 2022',
    title: 'Adidas Ultraboost Size 11',
    description: 'Adidas Ultraboost Size 11, Mens, Running Shoe',
    photoLink: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e8e6bdc1d82a489198bbac550091d249_9366/Ultraboost_4.0_DNA_Shoes_Black_FY9123_01_standard.jpg',
    productLink: 'https://www.adidas.com/us/ultraboost-4.0-dna-shoes/FY9123.html',
    merchant: {
      name: 'Adidas',
      homepage: 'https://www.adidas.com/'
    },
    startingPrice: 189.99,
    dealPrice: 149.49
  },
  {
    submittedBy: {
      userName: 'sally'
    },
    submittedOn: 'Jun 5, 2022',
    title: 'Adidas Ultraboost Size 6.5',
    description: 'Adidas Ultraboost Size 11, Mens, Running Shoe',
    photoLink: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7f6d911db8fa461a866aadc900fca0ae_9366/Ultraboost_4_DNA_Shoes_Pink_GY0286_01_standard.jpg',
    productLink: 'https://www.adidas.com/us/ultraboost-4.0-dna-shoes/FY9123.html',
    merchant: {
      name: 'Adidas',
      homepage: 'https://www.adidas.com/'
    },
    startingPrice: 189.99,
    dealPrice: 149.49
  },
  {
    submittedBy: {
      userName: 'apacella'
    },
    submittedOn: 'Jun 5, 2022',
    title: 'Adidas Ultraboost Size 11',
    description: 'Adidas Ultraboost Size 11, Mens, Running Shoe',
    photoLink: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e8e6bdc1d82a489198bbac550091d249_9366/Ultraboost_4.0_DNA_Shoes_Black_FY9123_01_standard.jpg',
    productLink: 'https://www.adidas.com/us/ultraboost-4.0-dna-shoes/FY9123.html',
    merchant: {
      name: 'Adidas',
      homepage: 'https://www.adidas.com/'
    },
    startingPrice: 189.99,
    dealPrice: 149.49
  },
  {
    submittedBy: {
      userName: 'apacella'
    },
    submittedOn: 'Jun 5, 2022',
    title: 'Adidas Ultraboost Size 6.5',
    description: 'Adidas Ultraboost Size 11, Mens, Running Shoe',
    photoLink: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7f6d911db8fa461a866aadc900fca0ae_9366/Ultraboost_4_DNA_Shoes_Pink_GY0286_01_standard.jpg',
    productLink: 'https://www.adidas.com/us/ultraboost-4.0-dna-shoes/FY9123.html',
    merchant: {
      name: 'Adidas',
      homepage: 'https://www.adidas.com/'
    },
    startingPrice: 189.99,
    dealPrice: 149.49
  },
  {
    submittedBy: {
      userName: 'apacella'
    },
    submittedOn: 'Jun 5, 2022',
    title: 'Adidas Ultraboost Size 11',
    description: 'Adidas Ultraboost Size 11, Mens, Running Shoe',
    photoLink: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e8e6bdc1d82a489198bbac550091d249_9366/Ultraboost_4.0_DNA_Shoes_Black_FY9123_01_standard.jpg',
    productLink: 'https://www.adidas.com/us/ultraboost-4.0-dna-shoes/FY9123.html',
    merchant: {
      name: 'Adidas',
      homepage: 'https://www.adidas.com/'
    },
    startingPrice: 189.99,
    dealPrice: 149.49
  },
  {
    submittedBy: {
      userName: 'apacella'
    },
    submittedOn: 'Jun 5, 2022',
    title: 'Adidas Ultraboost Size 6.5',
    description: 'Adidas Ultraboost Size 11, Mens, Running Shoe',
    photoLink: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7f6d911db8fa461a866aadc900fca0ae_9366/Ultraboost_4_DNA_Shoes_Pink_GY0286_01_standard.jpg',
    productLink: 'https://www.adidas.com/us/ultraboost-4.0-dna-shoes/FY9123.html',
    merchant: {
      name: 'Adidas',
      homepage: 'https://www.adidas.com/'
    },
    startingPrice: 189.99,
    dealPrice: 149.49
  },
  {
    submittedBy: {
      userName: 'apacella'
    },
    submittedOn: 'Jun 5, 2022',
    title: 'Adidas Ultraboost Size 11',
    description: 'Adidas Ultraboost Size 11, Mens, Running Shoe',
    photoLink: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e8e6bdc1d82a489198bbac550091d249_9366/Ultraboost_4.0_DNA_Shoes_Black_FY9123_01_standard.jpg',
    productLink: 'https://www.adidas.com/us/ultraboost-4.0-dna-shoes/FY9123.html',
    merchant: {
      name: 'Adidas',
      homepage: 'https://www.adidas.com/'
    },
    startingPrice: 189.99,
    dealPrice: 149.49
  },
  {
    submittedBy: {
      userName: 'apacella'
    },
    submittedOn: 'Jun 5, 2022',
    title: 'Adidas Ultraboost Size 6.5',
    description: 'Adidas Ultraboost Size 11, Mens, Running Shoe',
    photoLink: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7f6d911db8fa461a866aadc900fca0ae_9366/Ultraboost_4_DNA_Shoes_Pink_GY0286_01_standard.jpg',
    productLink: 'https://www.adidas.com/us/ultraboost-4.0-dna-shoes/FY9123.html',
    merchant: {
      name: 'Adidas',
      homepage: 'https://www.adidas.com/'
    },
    startingPrice: 189.99,
    dealPrice: 149.49
  },
]
const savedDealsExample = [
  {
    submittedBy: {
      userName: 'sally'
    },
    submittedOn: 'Jun 5, 2022',
    title: 'Adidas Ultraboost Size 6.5',
    description: 'Adidas Ultraboost Size 11, Mens, Running Shoe',
    photoLink: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7f6d911db8fa461a866aadc900fca0ae_9366/Ultraboost_4_DNA_Shoes_Pink_GY0286_01_standard.jpg',
    productLink: 'https://www.adidas.com/us/ultraboost-4.0-dna-shoes/FY9123.html',
    merchant: {
      name: 'Adidas',
      homepage: 'https://www.adidas.com/'
    },
    startingPrice: 189.99,
    dealPrice: 149.49
  },
];
const followingExample = [
  {
    userName: 'Sally',
    avatar: 'https://avatars.githubusercontent.com/u/93337957?v=4',
    totalFollowers: 3,
    PostedDealsByUser: 1,
  },
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
    userName: 'Sally',
    totalFollowers: 3,
    PostedDealsByUser: 1,
  },
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

const ProfileTabs = (data) => {
  
  console.log(data);
  

  const [isShown, setIsShown] = useState(false);
  const [buttonState, setButtonState] = useState(1);

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
      <div className="column is-four-fifths" >
        {buttonState===1 ? (
          <PostedDeals postedDeals = {postedDealsExample} />
        ) : buttonState === 2 ? (
          <SavedDeals savedDeals = {savedDealsExample} />
        ) : buttonState === 4 ? (
          <Following following = {followingExample} />
        ) : buttonState === 5 ? (
          <Followers followers = {followersExample} />
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
