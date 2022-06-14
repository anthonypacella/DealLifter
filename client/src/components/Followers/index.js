import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../Avatar/index'
import '../styles/Following.css'
const cardWidth = { width: '100%' };
React.createElement("div", { style: cardWidth });

const Followers = ({
    followers,//all params need to be changed later
}) => {
  if (followers.length === 0) { //needs to be changed later
    console.log(followers);
    return <h3>No followers yet...</h3>;
  }

  return (
    <div className="columns parent">
      {followers &&
        followers.map((user) => (
            <div className="column is-2 child">
                <div className="card" style={cardWidth}>
                    <header className="card-header">
                        <p className="card-header-title">
                        <Link className="has-text-black has-text-centered" to={`profile/${user.userName}`}>
                        {user.userName}</Link>
                        </p>
                    </header>
                    <div className="card-image">
                        <figure className="image">
                            <Avatar userName={user.userName} />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <span className="icon-text px-2">
                                <span className="icon">
                                    <i className="fas fa-users"></i>
                                </span>
                                <span>{user.totalFollowers}</span>
                            </span>
                            <span className="icon-text px-2">
                                <span className="icon">
                                    <i className="fas fa-lightbulb"></i>
                                </span>
                                <span>{user.PostedDealsByUser}</span>
                            </span>
                        </div>
                    </div>
                </div>    
            </div>
        ))}
    </div>
  );
};

export default Followers;
