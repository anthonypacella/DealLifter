import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../DealSmall/style.css'

const DealSmall = ({ deal }) => {
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
        <div className = "dealSmall_Container card p-4 m-4">
            <div className = "dealSmall_UserInteractionContainter has-text-centered">
                <button className = {saved === true ? 'button is-small is-pulled-right box has-background-warning' : 'button is-pulled-right is-small box has-background-white'} onClick= {() => saveDeal({deal},[])}>
                    <div className = 'saveButon'>
                        <i className={saved === true ? 'fas fa-solid fa-star' : 'fas fa-light fa-star'}></i>            
                    </div>
                </button>
            </div>

            <div className = "media-content">
                <a 
                    className = "is-size-4 dealSmall_Title"
                    href = {deal.productLink}
                    target = '_blank'
                >
                    {deal.title}
                </a>
                <br></br>
                <a 
                    className = "is-size-5 dealSmall_Merchant"
                    href = {deal.merchant.homepage}
                    target = '_blank'
                >
                    {deal.merchant.name}
                </a>
            </div>


            <div className = 'card-image'>
                <a
                    href = {deal.productLink}
                    target = '_blank'
                >
                     <img className = "dealSmall_Image" src = {deal.photoLink} alt = {`photo of ${deal.title}`}></img>
                 </a>
            </div>

            <div className = "dealSmall_InfoContainer">
                <div className = "dealSmall_Description">{deal.description}</div>
                <br></br>
                <div className = "is-size-5 dealSmall_StartingPrice">Original Price: {deal.startingPrice}</div>
                <div className = "is-size-5 DealSmall_DealPrice">Price Now: {deal.dealPrice}</div>
                <br></br>
            </div>

            <div className = "dealSmall_UserInfo">
                    <div className = 'dealSmall_UserUsername'>Posted by: 
                        <Link to = {`/profile/${deal.submittedBy.userName}`}>
                            {deal.submittedBy.userName}
                        </Link>
                    </div>
                <div className = 'dealSmall_UserPostTime'>Posted: {deal.submittedOn}</div>
            </div>


        </div>
    )
}

export default DealSmall;