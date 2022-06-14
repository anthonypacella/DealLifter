import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SVG from 'react-inlinesvg';
import { identicon } from 'minidenticons'

import { useQuery, useMutation } from '@apollo/client';

import { GET_USER_BY_EMAIL, GET_USER_BY_USERNAME } from '../utils/queries';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const adjustfieldWidth = { width: '250%' };
React.createElement("div", { style: adjustfieldWidth });

const adjustCardWidth = { width: '40%' };
React.createElement("div", { style: adjustCardWidth });


const initAvatar = '<svg viewBox="-1.5 -1.5 8 8" xmlns="http://www.w3.org/2000/svg" fill="hsl(51 84% 69%)"><rect x="0" y="3" width="1" height="1"></rect><rect x="1" y="0" width="1" height="1"></rect><rect x="1" y="4" width="1" height="1"></rect><rect x="4" y="3" width="1" height="1"></rect><rect x="3" y="4" width="1" height="1"></rect><rect x="3" y="0" width="1" height="1"></rect><rect x="2" y="4" width="1" height="1"></rect></svg>';

const Signup = () => {

  const [formState, setFormState] = useState({
    userName: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const [avatarState, setAvatarState] = useState(initAvatar);
  const {loading: userNameLoading, data: userNameData} = useQuery(GET_USER_BY_USERNAME, { variables: { userName: formState.userName }});
  const {loading: emailLoading, data: emailData} = useQuery(GET_USER_BY_EMAIL, { variables: { email: formState.email }});

  const userNameObj = userNameData?.getUserByUserName || [];
//   console.log("userNameObj",userNameObj);

  const emailObj = emailData?.getUserByUserEmail || [];
//   console.log("emailObj",emailObj);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });

    //render avatar based on userName input
    if (event.target.name==="userName") setAvatarState(identicon(event.target.value)) ;   

  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className='section'>    
        <div className="columns is-mobile is-centered">
            <div className="card" style={adjustCardWidth}>
                <header className="card-header">
                    <p className="card-header-title is-centered">
                        <span className="icon-text">
                            <span className="icon has-text-warning">
                                <i className="fas fa-info-circle"></i>
                            </span>
                            <span>Sign Up</span>
                        </span>
                    </p>
                </header>
                <section className="card-content" id="card">
                    <h3 className="label">Your Avatar</h3>
                    <div className="card-image has-text-centered">
                        <figure className="image is-128x128 is-inline-block">
                            <SVG src={avatarState} />
                        </figure>  
                    </div>

                    {data ? (
                        <p>
                            Success! You may now head{' '}
                            <Link to="/">back to the homepage.</Link>
                        </p>
                    ) : (
                    <form onSubmit={handleFormSubmit}>
                        <div className="field" style={adjustfieldWidth}>
                            <label className="label">Username</label>
                            <div className="control has-icons-left is-expanded">
                                <div> 
                                    <input 
                                    className="input is-warning"
                                    name="userName" 
                                    placeholder="Your username"
                                    type="text"  
                                    value={formState.userName}
                                    onChange={handleChange}
                                    />
                                </div>
                                <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                                </span>
                            </div>
                            {userNameObj._id ? (
                                    <p className="help is-warning">This username is taken. <Link to="/login">Log in?</Link></p>
                                ) : !userNameObj._id ? (
                                    <span></span>
                                ) : (
                                    <span></span>
                                )   
                            }
                        </div>
                        
                        <div className="field" style={adjustfieldWidth}>
                            <label className="label">Email</label>
                            <div className="control has-icons-left">
                                <div> 
                                    <input 
                                    className="input is-warning"
                                    name="email" 
                                    placeholder="Your email"
                                    type="text"  
                                    value={formState.email}
                                    onChange={handleChange}
                                    />
                                </div>
                                <span className="icon is-small is-left">
                                    <i className="fas fa-envelope"></i>
                                </span>
                            </div>
                            {emailObj._id ? (
                                <p className="help is-warning">This email is taken. <Link to="/login">Log in?</Link></p>
                                ) : !emailObj._id ? (
                                <span></span>
                                ) : (
                                <span></span>
                                )   
                            }
                        </div>

                        <div className="field" style={adjustfieldWidth}>
                            <label className="label">Password</label>
                            <div className="control has-icons-left">
                                <div> 
                                    <input 
                                    className="input is-warning" 
                                    placeholder="********"
                                    name="password"
                                    type="password"  
                                    value={formState.password}
                                    onChange={handleChange}
                                    />
                                </div>    
                                <span className="icon is-small is-left">
                                <i className="fas fa-key"></i>
                                </span>
                            </div>
                        </div>

                        { emailObj._id || userNameObj._id || !formState ? (
                            <div className="field" style={adjustfieldWidth}>
                                <div className="buttons is-centered my-2">
                                    <button className="button is-warning disabled">
                                        <span className="icon is-small">
                                            <i className="fas fa-check"></i>
                                        </span>
                                        <span>Submit</span>
                                    </button>
                                    <button className="button is-warning is-outlined is-link">
                                        <span>
                                            <Link to="/">
                                                Cancel
                                            </Link>
                                        </span>
                                        <span className="icon is-small">
                                            <i className="fas fa-times"></i>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="field" style={adjustfieldWidth}>
                                <div className="buttons is-centered my-2">
                                    <button className="button is-warning">
                                        <span className="icon is-small">
                                            <i className="fas fa-check"></i>
                                        </span>
                                        <span>Submit</span>
                                    </button>
                                    <button className="button is-warning is-outlined is-link">
                                        <span>
                                            <Link to="/">
                                                Cancel
                                            </Link>
                                        </span>
                                        <span className="icon is-small">
                                            <i className="fas fa-times"></i>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        )}  
                        
                    </form>
                    )}
                    {error && (
                    <div className="is-warning">
                        {error.message}
                        Something went wrong...
                    </div>
                    )}
                </section>
            </div>         
        </div>
    </section>
    
  );
};

export default Signup;
