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
        <div className = "deal_Container card is-horizontal card-content columns is-flex is-vcentered">
            
            <div className = 'media-content column is-full card-image'>
                <a  href = {deal.productLink}
                    target = '_blank'    
                >
                    <img className = "deal_Image image is-128x128" src = {deal.photoLink} alt = {`photo of ${deal.title}`}></img>
                </a>
            </div>

            <div className = "media-content dealInfoContainer column is-full">
                <a 
                    className = "deal_Title"
                    href = {deal.productLink}
                    target = '_blank'
                >
                    {deal.title}
                </a>
                <br></br>
                <a 
                    className = "deal_Merchant"
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

            <div className = "deal_UserInfo column is-full">
                    <div className = 'deal_UserUsername'>Posted by: 
                        <Link to = {`/profile/${deal.submittedBy.userName}`}>
                            {deal.submittedBy.userName}
                        </Link>
                    </div>
                <div className = 'deal_UserPostTime'>Posted: {deal.submittedOn}</div>

                <div className = "deal_UserInteractionContainter">
                    <button className = {saved === true ? 'button is-small is-pulled-right box has-background-warning' : 'button is-pulled-right is-pulled-up is-small box has-background-white'} onClick= {() => saveDeal({deal},[])}>
                        <div className = 'saveButon'>
                            <i className={saved === true ? 'fas fa-solid fa-star' : 'fas fa-light fa-star'}></i>            
                        </div>
                    </button>
                </div>
            </div>




        </div>
    )
}

export default Deal;