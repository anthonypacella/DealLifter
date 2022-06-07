import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//import Font Awesome

const Deal = ({ deal }) => {
    // const [likes, setLikes] = useState(0);
    // const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);
    
    const saveDeal = ({user}, {deal}) => {
        setSaved(!saved);
        saveDealToUserProfile(user._id, {deal});
    };

    // const likeDeal = ({deal}) => {
    //     setLiked(!liked)

    //     if (liked) {
    //         setLikes(deal.likes + 1);
    //     }

    //     else {
    //         setLikes(deal.likes - 1);
    //     }
    // }

    const saveDealToUserProfile = (userId, {deal}) => {
        //talk to backend to save the deal to the user profile with matching userID

        //call Mutation from back end
    }

    const goToProfile = (userId) => {

    }

    return (
        <div className = "deal_Container">
            <div className = "deal_UserInfo">
                    <div className = 'deal_UserUsername'>Posted by: 
                        <Link to = {`/profile/${deal.submittedBy.userName}`}>
                            {deal.submittedBy.userName}
                        </Link>
                    </div>
                <div className = 'deal_UserPostTime'>Posted at: {deal.submittedOn}</div>
            </div>

            <div className = "dealInfoContainer">
                <Link to = {deal.productLink}>
                    <img className = "deal_Image" src = {deal.photoLink} alt = {`photo of ${deal.title}`}></img>
                </Link>
                <Link to = {deal.productLink}>
                <div className = "deal_Title">{deal.title}</div>
                </Link>
                <Link to = {deal.Merchant.homepage}>
                    <div className = "deal_Merchant">{deal.Merchant}</div>
                </Link>
                <div className = "deal_Description">{deal.description}</div>
                <div className = "deal_StartingPrice">{deal.startingPrice}</div>
                <div className = "deal_DealPrice">{deal.dealPrice}</div>
            </div>

            <div className = "deal_UserInteractionContainter">
                <button>
                    <div className = "saveButton" onClick={() => saveDeal(deal)}>
                        <FontAwesomeIcon icon={saved = true ? 'fa-solid fa-star' : 'fa-light fa-star'} />            
                    </div>
                </button>
                {/* <button>
                    <div className = "likeButton" onClick={() => likeDeal(deal)}>
                        <FontAwesomeIcon icon={liked = true ? 'fa-solid fa-heart' : 'fa-light fa-heart' }/>
                        <div className = "likes">{likes}</div>
                    </div>
                </button> */}
            </div>
        </div>
    )
}

export default Deal;