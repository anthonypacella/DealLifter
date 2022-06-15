import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_POSTED_DEALS_BY_USER_ID } from '../../utils/queries';

import '../styles/PostedDeals.css'
const cardWidth = { width: '100%' };
React.createElement("div", { style: cardWidth });


const PostedDeals = ({
  userId,//all params need to be changed later
}) => {

  const {loading, data} = useQuery(GET_POSTED_DEALS_BY_USER_ID, { variables: { userId: userId }});
  const postedDeals = data?.getPostedDealsByUserId || [];
  console.log(postedDeals);

  if (postedDeals.length===0) { //needs to be changed later
    return <div><h3>No Posted Deals Yet</h3></div>;
  }

  return (
    <div >
      <div>
        <button className='button'><Link to='/post'>POST A DEAL +</Link></button>
      </div>
      <div className="columns parent">
      {postedDeals &&
        postedDeals.map((deal) => (
            <div className="column is-one-quarter child">
                <div className="card" style={cardWidth}>
                    <header className="card-header">
                        <p className="card-header-title">
                        {deal.title}
                        </p>
                    </header>
                <div className="card-image">
                <figure className="image">
                    <img src={deal.photoLink} alt={deal.title}></img>
                </figure>
                </div>
                <div className="card-content">
                <div className="content">
                    <p>{deal.description}</p>
                    <p><span aria-label="heart emoji" role="img">❤️ </span>{deal.likes} </p>
                    <p><del>${deal.startingPrice}</del> <strong>${deal.dealPrice}</strong></p>
                </div>
                </div>
            </div>
          </div>
        ))
      }
      </div>
      
    </div>
  );
};

export default PostedDeals;
