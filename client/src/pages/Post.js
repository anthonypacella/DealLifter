import { useQuery } from '@apollo/client';
import React from 'react';
import Deal from '../components/Deal'
import DealSmall from '../components/DealSmall'
import auth from '../utils/auth';
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

export default function Post() {
    return (
        <h1>Post From Goes Here</h1>
    )
}
