import React from 'react';
import SVG from 'react-inlinesvg';
import { identicon } from 'minidenticons'

const Avatar = ({
    userName
}) => {

    const image = identicon(userName);
    console.log('image')

    return(
        <div>
            <SVG src={image} />
        </div>
    );
};

export default Avatar;