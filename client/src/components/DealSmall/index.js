import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../DealSmall/style.css'
import { useQuery, useMutation } from '@apollo/client';
import { UPDATE_USER, SAVE_DEAL_BY_ID, LIKE_DEAL } from "../../utils/mutations";
import { GET_USER_BY_USERNAME, GET_USER_BY_ID } from '../../utils/queries';
import auth from '../../utils/auth';

const DealSmall = ({ deal }) => {
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

    const saveDealToUserProfile = (userId, {deal}) => {
        //talk to backend to save the deal to the user profile with matching userID

        //call Mutation from back end
    }

    return (
        <div className = "dealSmall_Container card p-4 m-4 rows">
            <div className = "row media-content">
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


            <div className = 'image_containter '>
                <a
                    href = {deal.productLink}
                    target = '_blank'
                >
                     <img className = "card-img-top image is-centered" src = {deal.photoLink} alt = {`photo of ${deal.title}`}></img>
                 </a>
            </div>

            <div className = "dealSmall_InfoContainer rowSmall">
                <div className = "is-size-5 dealSmall_StartingPrice"><del>${deal.startingPrice}</del></div>
                <div className = "is-size-5 DealSmall_DealPrice"><strong>${deal.dealPrice}</strong></div>
                <br></br>
            </div>

            <div className = "dealSmall_UserInfo rowSmall">
                    <div className = 'dealSmall_UserUsername'>Posted by: 
                        <Link to = {`/profile/${deal.submittedBy.userName}`}>
                            {deal.submittedBy.userName}
                        </Link>
                    </div>
                <div className = 'dealSmall_UserPostTime'>Posted: {Date(deal.submittedOn)}</div>
            </div>
            
            <br></br>
{auth.loggedIn()?(<div className = "dealSmall_UserInteractionContainter has-text-centered is-pulled-left">
                <button className = {saved === true ? 'button is-small is-pulled-right box has-background-warning' : 'button is-pulled-right is-small box has-background-white'} onClick= {() => SaveDeal(deal._id)}>
                    <div className = 'saveButon'>
                        <i className={saved === true ? 'fas fa-solid fa-star' : 'fas fa-light fa-star'}></i>            
                    </div>
                </button>
            </div>):(
                <>
                </>
            )}
            

            <div className = "dealSmall_UserInteractionContainter has-text-centered is-pulled-right">
                <button className = {liked === true ? 'button is-small is-pulled-right box has-background-danger' : 'button is-pulled-right is-small box has-background-white'} onClick= {() => LikeDeal(deal._id)}>
                    <div className = 'saveButon'>
                        <i className={liked === true ? 'fas fa-solid fa-heart' : 'fas fa-light fa-heart'}></i>
                        <span>{deal.likes}</span>            
                    </div>
                </button>
                
            </div>


        </div>
    )
}

export default DealSmall;