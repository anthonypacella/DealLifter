import React from 'react';

const FavoriteTags = ({
  favoriteTags,//all params need to be changed later
}) => {
  console.log(favoriteTags);

  if (favoriteTags.length===0) { //needs to be changed later
    return <h3>No Favorite Tags Yet</h3>;
  }

  return (
    <div>
        {favoriteTags && favoriteTags.map((tag) => (
            <section class="hero" style={{backgroundColor: `${tag.color}`}}>
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <p class="title">
                            {tag.tagName}
                        </p>
                    </div>
                </div>
            </section>
        ))}
    </div>
  );
};

export default FavoriteTags;
