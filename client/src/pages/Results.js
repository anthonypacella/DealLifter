import React from 'react';
import {useState} from 'react';

import Deal from '../components/Deal'
import { Navigate, useParams, useSearchParams } from 'react-router-dom';


import DealSmall from '../components/DealSmall'
import auth from '../utils/auth';

const dealObject = {
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
}

export default function Results() {


    // obtain search keyword from URL
    const [searchParams, setSearchParams] = useSearchParams();
    const searchKeyword = searchParams.get('store');
    // call the query

    


    // map out the results

  return (
    <div>
      <h1>Results:</h1>
      <div className = 'feedDeals columns'>
        <div className = 'column is-full'>
            <h2>{searchKeyword}</h2>
          {/*Will need to map eventually - just testing below with hard coded Deals*/}
          <Deal deal = {dealObject}></Deal>
          <Deal deal = {dealObject}></Deal>
          <Deal deal = {dealObject}></Deal>
          <Deal deal = {dealObject}></Deal>
          <Deal deal = {dealObject}></Deal>
          <Deal deal = {dealObject}></Deal>
          <Deal deal = {dealObject}></Deal>
        </div>
      </div>

    </div>
  );
}