import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import ProfileTabs from '../components/ProfileTabs';

import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Deal from '../components/Deal'
import PostedDeals from '../components/PostedDeals'

import Auth from '../utils/auth';

const dealObject = [{
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
  }]

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <progress className="progress is-warning" max="100"></progress>;
  }

//   if (!user?.username) {
//     return (
//       <h4>
//         You need to be logged in to see this. Use the navigation links above to
//         sign up or log in!
//       </h4>
//     );
//   }

  return (
    <div className='container is-fluid'>
        <div className="columns">
            <div className="column is-full">
                <p className="title has-text-centered my-1 py-3 has-background-warning">
                    Viewing {userParam ? `${user.username}'s` : 'your'} profile
                </p>
            </div>
        </div>        
        <div >
            <div>
                {!userParam && (
                <div>
                    <ProfileTabs />
                </div>
                )}
            </div>
        </div> 
        
    </div>
  );
};

export default Profile;
