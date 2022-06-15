import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import '../Deal/style.css'
import { useQuery, useMutation } from '@apollo/client';
import { UPDATE_USER, SAVE_DEAL_BY_ID, LIKE_DEAL } from "../../utils/mutations";
import { GET_USER_BY_USERNAME, GET_USER_BY_ID } from '../../utils/queries';

const vcenter = {height: 'auto', position: 'relative'};
React.createElement("div", {style: vcenter});
const vcenterChild = {transform: 'translateY(100%)'};
React.createElement("div", {style: vcenterChild});

const Deal = ({ deal }) => {
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);
    const [saveDeal, { data, loading, error }] = useMutation(SAVE_DEAL_BY_ID);
    const [likeDeal, {data:dealData, loading:dealLoading, error:dealError}] = useMutation(LIKE_DEAL);

    function GetUserName (name) {
        const {loading, data} = useQuery(GET_USER_BY_USERNAME, { variables: { userName: name }});
        const userId = data?.getUserByUserName._id || {};
        return userId;
    }
      
    function GetUserByUserId (userId) {
        const {loading, data} = useQuery(GET_USER_BY_ID, { variables: { userId: userId }});
        const user = data?.getUserById || [];
        return user;
    }
    
    const SaveDeal = async (dealId) => {
        try {
            const { data } = await saveDeal({ variables: { dealId: dealId }});
            setSaved(true);
        } catch (err) {
            console.error(err);
        }
    }



    const LikeDeal = async (dealId) => {
        try {
            const {data} = await likeDeal({ variables: { dealId: dealId }});
            setLiked(true);
        } catch (err) {
            console.error(err);
        }
    }
    // const likeDeal = ({deal}) => {
    //     setLiked(!liked)

    //     if (liked) {
    //         setLikes(deal.likes + 1);
    //     }

    //     else {
    //         setLikes(deal.likes - 1);
    //     }
    // }

    const saveDealToUserProfile = async (userId, {deal}) => {
        //talk to backend to save the deal to the user profile with matching userID
        
        //call Mutation from back end
        
    }

    return (
        <div className = "p-6 ml-6 deal_Container card is-horizontal card-content column is-four-fifths is-flex">
            <div className='columns is-ventered'>
                <div className = 'column is-3'> 
                    <div className = 'media-content card-image is-flex is-vcentered m-1'>
                        <a  href = {deal.productLink}
                            target = '_blank'    
                        >
                            <img className = "deal_Image image" src = {deal.photoLink} alt = {`photo of ${deal.title}`}></img>
                        </a>
                    </div>
                </div>
               
                <div className = "column media-content dealInfoContainer is-4 m-1">
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
                    <div className = "deal_StartingPrice">Original Price: ${deal.startingPrice}</div>
                    <div className = "deal_DealPrice">Price Now: ${deal.dealPrice}</div>
                    <br></br>
                </div>

                <div className = "deal_UserInfo card-content column is-2" style={vcenter}>
                    <div style={vcenterChild}>
                        <div className = 'deal_UserUsername'>Posted by: 
                            <Link to = {`/profile/${deal.submittedBy.userName}`}>
                                {deal.submittedBy.userName}
                            </Link>
                        </div>
                        <div className = 'deal_UserPostTime'>
                            Posted: {Date(deal.submittedOn)}
                        </div>
                        <div className = 'deal_Expiration'>
                            Expiration: {Date(deal.expiration)}
                        </div>
                    </div>
                    
                </div>
                
                <div className='column is-1 is-flex is-vcentered'>
                    <div className = "deal_UserInteractionContainter columns is-flex is-vcentered">
                        <div className = 'column is-full'>
                            {/* <button className = {saved === true ? 'button is-large is-full-width is-pulled-right has-background-warning' : 'button is-large is-full-width is-pulled-right has-background-white'} onClick= {() => SaveDeal(deal._id)}>
                                <div className = 'saveButon'>
                                    <i className={saved === true ? 'is-centered fas fa-solid fa-star icon' : 'is-centered fas fa-light fa-star icon'}></i>  
                                </div>
                            </button>
                            <div>Save</div>
                            <br></br> */}
                            <button className = {liked === true ? 'button is-large is-pulled-right is-full-width has-background-danger' : 'button is-full-width is-large is-pulled-right has-background-white'} onClick= {() => LikeDeal(deal._id)}>
                                <div className = 'likeButton'>
                                    <i className={liked === true ? 'is-centered fas fa-solid fa-heart icon' : 'is-centered fas fa-light fa-heart icon'}></i>  
                                    <span>{deal.likes}</span> 
                                </div>
                            </button>
                            <div>Like</div>
                        </div>
                    </div>
                </div>

                <div className='column is-2 is-flex is-vcentered'>
                    <div className='columns is-flex is-vcentered'>
                        {deal.tags.map((tag) => (
                            <div className='column'>
                                <div className="tags has-addons">
                                    <span className="tag">
                                        {tag.tagName}
                                    </span>
                                <button className="tag is-delete"></button>
                            </div><br></br>
                        </div>))}           
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default Deal;