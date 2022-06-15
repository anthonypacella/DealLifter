import React, { useState, useEffect } from 'react';
import { UNFAVORITE_TAG_BY_ID } from '../../utils/mutations';
import { GET_USER_BY_USERNAME } from '../../utils/queries';

import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';

const FavoriteTags = ({
  favoriteTags,//all params need to be changed later
}) => {
  console.log(favoriteTags);
  const [unfavoriteTag, {data, loading, error}] = useMutation(UNFAVORITE_TAG_BY_ID);
  const { userName: userParam } = useParams();
  const {loading: userLoading, data: userData} = useQuery(GET_USER_BY_USERNAME, { variables: { userName: userParam }});
  const userFavoriteTags = userData?.getUserByUserName.favoriteTags || {};
  console.log(userFavoriteTags);

  useEffect(() => {
    console.log(favoriteTags);
  }, []);

  if (favoriteTags.length===0) { //needs to be changed later
    return <h3>No Favorite Tags Yet</h3>;
  };

  const UnfavoriteTag = async (id) => {
    try {
      const {data} = await unfavoriteTag({ variables: { tagId: id }});
      console.log(favoriteTags);
      
    } catch (err) {
      console.error(err);
  }
  };

  return (
    <div>
        {favoriteTags && favoriteTags.map((tag) => (
            <section className="hero" style={{backgroundColor: `${tag.color}`}}>
                <div className="hero-body">
                    <div className="container has-text-centered">
                      <div className='columns'>
                        <div className="column is-11">
                          <span className="title">
                              {tag.tagName}
                          </span>
                        </div>
                        <div className="column is-1">
                          <button className="delete is-large" onClick={()=>UnfavoriteTag(tag._id)}></button>
                        </div>
                      </div>
                    </div>
                </div>
            </section>
        ))}
    </div>
  );
};

export default FavoriteTags;
