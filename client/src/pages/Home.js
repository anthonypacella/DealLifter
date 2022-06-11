import { useQuery } from '@apollo/client';
import React from 'react';
import Deal from '../components/Deal'
import DealSmall from '../components/DealSmall'
import auth from '../utils/auth';
import { GET_HOT_DEALS } from '../utils/queries';
import dealArray from '../utils/sampledata'
import { Link } from 'react-router-dom';


function obtainHotDeals () {
  //add query as parameter
  //const {loading, error, data} = useQuery(query);
  //hotDeals = data;
  const hotDeals = dealArray;
  return hotDeals
}

function obtainRecentDeals () {
  //add query as parameter
  //const {loading, error, data} = useQuery(query);
  //recentDeals = data;
  const recentDeals = dealArray;
  return recentDeals
}

function obtainYourFeed () {
  //add query as parameter
  //const {loading, error, data} = useQuery(query);
  //yourFeed = data;
  const yourFeed = dealArray;
  return yourFeed
}

const recentDeals = dealArray;
const yourFeed = dealArray;

export default function Home() {

  if (auth.loggedIn) {
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
              {obtainHotDeals().slice(0,5).map((dealObj) => (
                <DealSmall deal = {dealObj}></DealSmall>
              ))}
          </div>
        </div>
  
        <div className = 'feedDeals columns'>
          <h3>Your Feed:</h3>
          <div className = 'column is-full'>
              {obtainRecentDeals().slice(0,10).map((dealObj) => (
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
              {obtainHotDeals().slice(0,5).map((dealObj) => (
                <DealSmall deal = {dealObj}></DealSmall>
              ))}
          </div>
        </div>
  
        <div className = 'feedDeals columns'>
          <h3>Recent Deals:</h3>
          <div className = 'column is-full'>
              {obtainYourFeed().slice(0,3).map((dealObj) => (
                <Deal deal = {dealObj}></Deal>
              ))}
          </div>
        </div>
        
      </div>
    );
  }
}
