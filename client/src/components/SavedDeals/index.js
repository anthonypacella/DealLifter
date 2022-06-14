import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SavedDeals.css'

const cardWidth = { width: '100%' };
React.createElement("div", { style: cardWidth });

const SavedDeals = ({
  savedDeals,//all params need to be changed later
}) => {
  console.log(savedDeals);

  if (savedDeals.length===0) { //needs to be changed later
    return <h3>No Saved Deals Yet</h3>;
  }

  return (
    <div className="columns parent">
      {savedDeals &&
        savedDeals.map((deal) => (
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

export default SavedDeals;
