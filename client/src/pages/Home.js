import { useQuery, useMutation } from '@apollo/client';
import React from 'react';
import Deal from '../components/Deal'
import DealSmall from '../components/DealSmall'
import auth from '../utils/auth';
import { GET_ALL_DEALS, GET_HOT_DEALS, GET_PERSONALIZED_DEALS_BY_USER_ID, GET_ALL_TAGS, GET_EXPIRING_DEALS } from '../utils/queries';
import { FAVORITE_TAG_BY_ID } from "../utils/mutations";

import dealArray from '../utils/sampledata'
import { Link } from 'react-router-dom';

//might need useEffect here

function ObtainHotDeals () {
  const {loading, data} = useQuery(GET_HOT_DEALS);
  const hotDeals = data?.getHotDeals || [];
  return hotDeals
}

function ObtainExpiringDeals () {
  const {loading, error, data} = useQuery(GET_EXPIRING_DEALS);
  const expiringDeals = data?.getExpiringDeals || [];
  return expiringDeals
}

function ObtainYourFeed () {
  const userId = auth.getProfile().data._id;

  // const {loading, error, data} = useQuery(GET_PERSONALIZED_DEALS_BY_USER_ID, {
  //   variables: {userId}
  // });
  const {loading, error, data} = useQuery(GET_ALL_DEALS);

  const yourFeed = data?.getAllDeals || [];
  return yourFeed
}

function ObtainAllTags () {
  const {loading, error, data} = useQuery(GET_ALL_TAGS);
  const allTags = data?.getAllTags || [];
  return allTags
}

const recentDeals = dealArray;
const yourFeed = dealArray;

const loggedIn = true; // should remove this later

export default function Home() {
  const [favoriteTag, { data, loading, error }] = useMutation(FAVORITE_TAG_BY_ID);

  const SaveTag = async (tagId) => {
    console.log('tagid', tagId);
    try {
        console.log(tagId);
        const { data } = await favoriteTag({ variables: { tagId: tagId }});
        console.log('saved tag!')
        window.alert("This tag has been saved!");
    } catch (err) {
        console.error(err);
    }
  }

  if (auth.loggedIn()) { // should be auth.loggedIn
    return (
      <div className = 'm-5'>
        <section className = 'section is-flex is-justify-content-right'>
          <Link to = '/post'>
            <button className = 'box button is-large is-pulled-right has-background-danger-light is-white'>POST A DEAL +</button>
          </Link>
        </section>
  
        <div className = 'featuredDeals section is-fullwidth'>
          <div className='box is-fullwidth'>
            <h3 className='title'>Featured Deals</h3>
            <div className = 'is-flex p-6'>
                {ObtainHotDeals().slice(0,4).map((dealObj) => (
                  <DealSmall deal = {dealObj}></DealSmall>
                ))}
            </div>
          </div>
        </div>
            
        <div className = 'featuredDeals section is-fullwidth'>
          <div className='box'>
            <h3 className='title'>Follow Popular Tags</h3>
            <div className='columns'>
              {ObtainAllTags().map((tag) => (<div className='column is-one-fifth'><div className='box' style={{backgroundColor: `${tag.color}`}} onClick={()=>SaveTag(tag._id)}><p className='is-size-4 has-text-centered'>{tag.tagName}</p></div></div>))}
            </div>
          </div>
        </div>

        <div className = 'feedDeals section is-fullwidth'>
          <div className='box'>
            <h3 className='title'>Your Feed</h3>
            <div className='columns'>
              <div className = 'column is-full'>
                {ObtainYourFeed().slice(0,10).map((dealObj) => (
                  <Deal deal = {dealObj}></Deal>
                ))}
              </div>
            </div>
          </div>         
        </div>
        
      </div>
    );
  }

  else {
    return (
      <div className = 'm-5'>  
        <div className = 'featuredDeals section is-fullwidth'>
          <div className='box'>
            <h3 className='title'>Featured Deals:</h3>
            <div className = 'is-flex p-6'>
              {ObtainHotDeals().slice(0,5).map((dealObj) => (
                <DealSmall deal = {dealObj}></DealSmall>
              ))}
            </div>
          </div>
        </div>
  
        <div className = 'feedDeals section is-fullwidth'>
          <div className='box'>
            <h3 className='title'>Act Fast Deals:</h3>
            <div className='columns'>  
              <div className = 'column is-full'>
                {ObtainExpiringDeals().slice(0,3).map((dealObj) => (
                  <Deal deal = {dealObj}></Deal>
                ))}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}
