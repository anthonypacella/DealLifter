import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import ProfileTabs from '../components/ProfileTabs';

import { GET_USER_BY_ID, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  const { userName: userParam } = useParams();
  console.log(userParam);
  const { loading, data } = useQuery(userParam ? GET_USER_BY_ID : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.user || {};


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
                    Viewing {userParam}'s profile
                </p>
            </div>
        </div>        
        <div >
            <div>
                {/* {!userParam && ( */}
                <div>
                    <ProfileTabs />
                </div>
                {/* )} */}
            </div>
        </div> 
        
    </div>
  );
};

export default Profile;
