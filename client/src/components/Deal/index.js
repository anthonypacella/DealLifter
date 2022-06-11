import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import '../Deal/style.css'

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
        <div className = "p-6 ml-6 deal_Container card is-horizontal card-content column is-four-fifths is-flex">
            
            <div className = 'media-content column is-3 card-image'>
                <a  href = {deal.productLink}
                    target = '_blank'    
                >
                    <img className = "deal_Image image" src = {deal.photoLink} alt = {`photo of ${deal.title}`}></img>
                </a>
            </div>

            <div className = "column media-content dealInfoContainer column is-5">
                <a 
                    className = "is-size-3 deal_Title"
                    href = {deal.productLink}
                    target = '_blank'
                >
                    {deal.title}
                </a>
                <br></br>
                <a 
                    className = "deal_Merchant is-size-5"
                    href = {deal.merchant.homepage}
                    target = '_blank'
                >
                    {deal.merchant.name}
                </a>
                <div className = "deal_Description">{deal.description}</div>
                <br></br>
                <div className = "deal_StartingPrice">Original Price: {deal.startingPrice}</div>
                <div className = "deal_DealPrice">Price Now: {deal.dealPrice}</div>
                <br></br>
            </div>

            <div className = "deal_UserInfo card-content column is-3">
                    <div className = 'deal_UserUsername'>Posted by: 
                        <Link to = {`/profile/${deal.submittedBy.userName}`}>
                            {deal.submittedBy.userName}
                        </Link>
                    </div>
                    <div className = 'deal_UserPostTime'>
                        Posted: {deal.submittedOn}
                    </div>
                    <div className = 'deal_Expiration'>
                        Expiration: {deal.expiration}
                    </div>
            </div>

            <div className = "deal_UserInteractionContainter columns is-3 is-flex is-vcentered">
                    <button className = {saved === true ? 'button is-large is-pulled-right box has-background-warning' : 'button is-pulled-right is-pulled-up is-large box has-background-white'} onClick= {() => saveDeal({deal},[])}>
                        <div className = 'saveButon'>
                            <i className={saved === true ? 'fas fa-solid fa-star' : 'fas fa-light fa-star'}></i>            
                        </div>
                    </button>
            </div>

        </div>
    )
}

export default Deal;