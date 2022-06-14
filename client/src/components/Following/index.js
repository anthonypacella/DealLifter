import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../Avatar/index'
import '../styles/Following.css'

const cardWidth = { width: '100%' };
React.createElement("div", { style: cardWidth });

const Following = ({
    following,//all params need to be changed later
}) => {
  if (following.length ===0) { //needs to be changed later
    console.log(following);
    return <h3>This user does not follow anyone...</h3>;
  }

  return (
    <div className="columns parent">
      {following &&
        following.map((user) => (
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
                            <span class="icon-text px-2">
                                <span class="icon">
                                    <i class="fas fa-users"></i>
                                </span>
                                <span>{user.totalFollowers}</span>
                            </span>
                            <span class="icon-text px-2">
                                <span class="icon">
                                    <i class="fas fa-lightbulb"></i>
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

export default Following;
