import React from 'react';
import { Link } from 'react-router-dom';

const cardWidth = { width: '100%' };
React.createElement("div", { style: cardWidth });

const PostedDeals = ({
  postedDeals,//all params need to be changed later
}) => {
  if (!postedDeals.length) { //needs to be changed later
    console.log(postedDeals);
    return <h3>No Saved Deals Yet</h3>;
  }

  return (
    <div className="columns">
      {postedDeals &&
        postedDeals.map((deal) => (
            <div className="column is-one-quarter">
                <div class="card" style={cardWidth}>
                    <header class="card-header">
                        <p class="card-header-title">
                        {deal.title}
                        </p>
                        <button class="card-header-icon" aria-label="more options">
                        <span class="icon">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                        </button>
                    </header>
                <div class="card-image">
                <figure class="image is-4by3">
                    <img src={deal.photoLink} alt={deal.title}></img>
                </figure>
                </div>
                <div class="card-content">
                <div class="content">
                    <p>{deal.description}</p>
                    <p><a href={deal.productLink}>#PurchaseHere</a></p>
                    <p><del>${deal.startingPrice}</del> <strong>${deal.dealPrice}</strong></p>
                </div>
                </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostedDeals;
