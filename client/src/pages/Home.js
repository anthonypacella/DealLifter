import { useQuery } from '@apollo/client';
import React from 'react';
import Deal from '../components/Deal'
import DealSmall from '../components/DealSmall'
import auth from '../utils/auth';
import { GET_HOT_DEALS, GET_PERSONALIZED_DEALS_BY_USER_ID } from '../utils/queries';
import { GET_ALL_DEALS } from '../utils/queries';
import dealArray from '../utils/sampledata'
import { Link } from 'react-router-dom';

//might need useEffect here

function ObtainHotDeals () {
  const {loading, data} = useQuery(GET_HOT_DEALS);
  const hotDeals = data?.getHotDeals || [];
  return hotDeals
}

function ObtainRecentDeals () {
  const {loading, error, data} = useQuery(GET_ALL_DEALS);
  const recentDeals = data?.getAllDeals || [];
  return recentDeals
}

function ObtainYourFeed () {
  const {loading, error, data} = useQuery(GET_PERSONALIZED_DEALS_BY_USER_ID);
  //yourFeed = data;
  const yourFeed = dealArray;
  return yourFeed
}

const recentDeals = dealArray;
const yourFeed = dealArray;

const loggedIn = true; // should remove this later

export default function Home() {

  if (loggedIn) { // should be auth.loggedIn
    return (
      <div className = 'm-5'>
        <div className = 'is-flex'>
          <h1>Home Page</h1>
          <Link to = '/post'>
            <button className = 'button is-large is-pulled-right'>POST A DEAL +</button>
          </Link>
        </div>
  
        <div className = 'featuredDeals'>
          <h3>Featured Deals:</h3>
          <div className = 'is-flex p-6'>
              {ObtainHotDeals().slice(0,4).map((dealObj) => (
                <DealSmall deal = {dealObj}></DealSmall>
              ))}
          </div>
        </div>
  
        <div className = 'feedDeals columns'>
          <h3>Your Feed:</h3>
          <div className = 'column is-full'>
              {ObtainRecentDeals().slice(0,10).map((dealObj) => (
                <Deal deal = {dealObj}></Deal>
              ))}
          </div>
        </div>
        
      </div>
    );
  }

  else {
    return (
      <div className = 'm-5'>
        <h1>Home Page</h1>
  
        <div className = 'featuredDeals'>
          <h3>Featured Deals:</h3>
          <div className = 'is-flex p-6'>
              {ObtainHotDeals().slice(0,5).map((dealObj) => (
                <DealSmall deal = {dealObj}></DealSmall>
              ))}
          </div>
        </div>
  
        <div className = 'feedDeals columns'>
          <h3>Recent Deals:</h3>
          <div className = 'column is-full'>
              {ObtainYourFeed().slice(0,3).map((dealObj) => (
                <Deal deal = {dealObj}></Deal>
              ))}
          </div>
        </div>
        
      </div>
    );
  }
}
