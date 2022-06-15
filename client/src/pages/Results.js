import React from 'react';
import {useState} from 'react';
import Deal from '../components/Deal'
import { Navigate, useParams, useSearchParams } from 'react-router-dom';
import DealSmall from '../components/DealSmall';
import auth from '../utils/auth';
import dealArray from '../utils/sampledata';
import Pagination from '../components/Pagination';
import { GET_ALL_DEALS, GET_DEALS_BY_KEYWORD } from '../utils/queries';
import {useQuery} from '@apollo/client';

export default function Results() {
  // obtain search keyword from URL
  // const [searchParams, setSearchParams] = useSearchParams();
  // const keyword = searchParams.get('keyword');
  // call the query

  const { keyword: keyword } = useParams();
  console.log(keyword);

  const { loading, data } = useQuery(GET_DEALS_BY_KEYWORD, {
    variables: { keyword }
  });

  console.log(data);

  const resultDeals = data?.getDealsByKeyword || [];

  console.log(resultDeals);

  const [currentPage, setCurrentPage] = useState(1);
  const [dealsPerPage, setDealsPerPage] = useState(8);

  //get current posts
  const indexOfLastDeal = currentPage * dealsPerPage;
  const indexOfFirstDeal = indexOfLastDeal - dealsPerPage;
  const currentDeals = resultDeals.slice(indexOfFirstDeal, indexOfLastDeal);

  //change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const previousPage = (pageNumber) => setCurrentPage(pageNumber-1);
  const nextPage = (pageNumber) => setCurrentPage(pageNumber+1);

  return (
    <div>
      <h1>Results:</h1>
      <div className = 'feedDeals columns'>
        <div className = 'column is-full'>
              {currentDeals.map((dealObj) => (
                <Deal className = 'is-centered' deal = {dealObj}></Deal>
              ))}
        </div>
      </div>

    <Pagination entriesPerPage={dealsPerPage} totalEntries={resultDeals.length} paginate={paginate} previousPage={previousPage} nextPage = {nextPage} />

    </div>
  );
}