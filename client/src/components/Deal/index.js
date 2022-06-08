import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";


//import Font Awesome

const Deal = ({ deal }) => {
    // const [likes, setLikes] = useState(0);
    // const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);
    console.log(saved);
    
    const saveDeal = ({deal}) => {
        setSaved(!saved);
        console.log(saved);
        // saveDealToUserProfile(user._id, {deal}); //add UserID to param
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

    return (
        <div className = "deal_Container">
            <div className = "deal_UserInfo">
                    <div className = 'deal_UserUsername'>Posted by: 
                        <Link to = {`/profile/${deal.submittedBy.userName}`}>
                            {deal.submittedBy.userName}
                        </Link>
                    </div>
                <div className = 'deal_UserPostTime'>Posted: {deal.submittedOn}</div>
            </div>

            <div className = "dealInfoContainer">
                <Link to = {deal.productLink}>
                    <img className = "deal_Image" src = {deal.photoLink} alt = {`photo of ${deal.title}`}></img>
                </Link>
                <a 
                    className = "deal_Title"
                    href = {deal.productLink}
                    target = '_blank'
                >
                    {deal.title}
                </a>
                <a 
                    className = "deal_Merchant"
                    href = {deal.merchant.homepage}
                    target = '_blank'
                >
                    {deal.merchant.name}
                </a>
                <div className = "deal_Description">{deal.description}</div>
                <div className = "deal_StartingPrice">{deal.startingPrice}</div>
                <div className = "deal_DealPrice">{deal.dealPrice}</div>
            </div>

            <div className = "deal_UserInteractionContainter">
                <button className = {saved === true ? 'box has-background-warning' : 'box has-background-white'} onClick= {() => saveDeal({deal},[])}>
                    <div className = 'saveButon'>
                        <i className={saved === true ? 'fas fa-solid fa-star' : 'fas fa-light fa-star'}></i>            
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