import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import '../Deal/style.css'
import { useQuery, useMutation } from '@apollo/client';
import { UPDATE_USER, SAVE_DEAL_BY_ID, LIKE_DEAL } from "../../utils/mutations";
import { GET_USER_BY_USERNAME, GET_USER_BY_ID } from '../../utils/queries';
import Auth from '../../utils/auth';
import { format } from 'date-fns';

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
        <div className = "box has-background-white-bis px-6 py-3">
            <header className='has-background-white-bis is-flex is-vcentered is-justify-content-end pt-3'>
                    {deal.tags.map((tag) => (
                        <div className="tag is-large is-fullwidth " style={{backgroundColor: `${tag.color}`}}>
                            {tag.tagName}
                        </div>
                    ))}           
            </header>

            <div className='columns is-flex is-align-items-center'>
                <div className = 'column is-3'> 
                    <div className = 'media-content card-image is-flex is-vcentered m-1'>
                        <a  href = {deal.productLink} target = '_blank'>
                            <img className = "deal_Image image" src = {deal.photoLink} alt = {`photo of ${deal.title}`}></img>
                        </a>
                    </div>
                </div>
               
                <div className = "column is-5 ">
                    <a className = "is-size-3 deal_Title" href = {deal.productLink} target = '_blank'>
                        {deal.title}
                    </a>
                    <br></br>
                    <a className = "deal_Merchant is-size-5" href = {deal.merchant.homepage} target = '_blank'>
                        {deal.merchant.name}
                    </a>
                    <div className = "deal_Description">{deal.description}</div>
                    <br></br>
                    <div className = "deal_StartingPrice">Original Price: <del>${deal.startingPrice}</del></div>
                    <div className = "deal_DealPrice has-text-warning-dark is-size-4">Price Now: ${deal.dealPrice}</div>
                    <br></br>
                </div>

                <div className = "deal_UserInfo column is-2 is-flex is-vcentered">
                    <div>
                        <div className = 'deal_UserUsername'>
                            <div>
                                <p><b>Posted by</b></p>
                            </div>
                            <div>
                                <p>
                                    <Link to = {`/profile/${deal.submittedBy.userName}`}>
                                        {deal.submittedBy.userName}
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <br></br>
                        <div className = 'deal_UserPostTime'>
                            <div>
                                <p><b>Posted on</b></p>
                            </div> 
                            <div>
                                <p>{format(new Date(), 'yyyy/MM/dd kk:mm')}</p>
                            </div>
                        </div>
                        <br></br>
                        <div className = 'deal_Expiration'>
                            <div>
                                <p><b>Expires on</b></p>
                            </div> 
                            <div>
                                <p>{format(new Date().setDate(new Date().getDate() + 7), 'yyyy/MM/dd')}</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                <div className='column is-2 is-flex is-vcentered is-pulled-right'>
                    <div className = "deal_UserInteractionContainter columns">
                        <div className = 'column'>
                            {Auth.loggedIn() ? 
                                (<div className = "dealSmall_UserInteractionContainter is-pulled-right">
                                    <button className = {saved === true ? 'button is-large is-pulled-right box has-background-warning is-fullwidth' : 'button is-large is-pulled-right box has-background-white is-fullwidth'} onClick= {() => SaveDeal(deal._id)}>
                                        <div className = 'saveButon'>
                                            <i className={saved === true ? 'fas fa-solid fa-star' : 'fas fa-light fa-star'}></i>            
                                        </div>
                                    </button>
                                    <button className = {liked === true ? 'button is-large is-pulled-rightbox has-background-danger-light is-fullwidth' : 'button is-large is-pulled-right is-pulled-right box has-background-white is-fullwidth'} onClick= {() => LikeDeal(deal._id)}>
                                        <div className = 'likeButton'>
                                            <i className={liked === true ? 'fas fa-solid fa-heart icon' : 'fas fa-light fa-heart icon'}></i>  
                                        </div>
                                    </button>
                                    <div> {deal.likes} Likes</div>
                                </div> )
                                : (
                                <div>
                                    <button className = {liked === true ? 'button is-large is-pulled-right box has-background-danger-light is-fullwidth' : 'button is-large is-pulled-right box has-background-white is-fullwidth'} onClick= {() => LikeDeal(deal._id)}>
                                        <div className = 'likeButton'>
                                            <i className={liked === true ? 'fas fa-solid fa-heart icon' : 'fas fa-light fa-heart icon'}></i>  
                                        </div>
                                    </button>
                                    <div> {deal.likes} Likes</div>
                                </div>
                                )}
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default Deal;