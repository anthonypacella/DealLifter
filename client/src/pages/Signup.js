import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SVG from 'react-inlinesvg';
import { identicon } from 'minidenticons'

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

//sample data
const userObjectExample = {
    userName: "banbanleelee",
    email: "sallyhoney96@gmail.com",
};

const adjustWidth = { width: '250%' };
React.createElement("div", { style: adjustWidth });

const initAvatar = '<svg viewBox="-1.5 -1.5 8 8" xmlns="http://www.w3.org/2000/svg" fill="hsl(51 84% 69%)"><rect x="0" y="3" width="1" height="1"></rect><rect x="1" y="0" width="1" height="1"></rect><rect x="1" y="4" width="1" height="1"></rect><rect x="4" y="3" width="1" height="1"></rect><rect x="3" y="4" width="1" height="1"></rect><rect x="3" y="0" width="1" height="1"></rect><rect x="2" y="4" width="1" height="1"></rect></svg>';

const Signup = () => {
  const [formState, setFormState] = useState({
    userName: '',
    email: '',
    password: '',
  });

  const [avatarState, setAvatarState] = useState(initAvatar);
  const [ExistState, setExistState] = useState(null); //false if userName/email input not taken

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });

    setAvatarState(identicon(event.target.value));

    //check if username and email have been registered
    console.log(Object.values(userObjectExample).includes(event.target.value));
    Object.values(userObjectExample).includes(event.target.value) ? setExistState(true) : setExistState(false);
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
            <div className="card ">
                <header className="card-header">
                    <p className="card-header-title is-centered">
                        <span className="icon-text">
                            <span className="icon has-text-info">
                                <i className="fas fa-info-circle"></i>
                            </span>
                            <span>Sign Up</span>
                        </span>
                    </p>
                </header>
                <section className="card-content" id="card">
                    <h3 className="label">Your Avatar</h3>
                    <div className="card-image">
                        <figure className="image">
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
                        
                        
                        <div className="field ">
                            <label className="label">Username</label>
                            <div className="control has-icons-left is-expanded">
                                <div style={adjustWidth}> 
                                    <input 
                                    className="input is-info"
                                    name="userName" 
                                    placeholder="Your username"
                                    type="text"  
                                    value={formState.name}
                                    onChange={handleChange}
                                    />
                                </div>
                                <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                                </span>
                            </div>
                            {ExistState === true ? (
                                <p class="help is-danger">This username is taken</p>
                                ) : ExistState === false ? (
                                <p class="help is-success">This username is available</p>
                                ) : (
                                <span></span>
                                )   
                            }
                        </div>
                        
                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control has-icons-left">
                                <div style={adjustWidth}> 
                                    <input 
                                    className="input is-info"
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
                            {ExistState} ? (
                                <p class="help is-danger">This email is taken</p>
                                ) : (
                                <p class="help is-success">This email is available</p>)
                        </div>

                        <div className="field">
                            <label className="label">Password</label>
                            <div className="control has-icons-left">
                                <div style={adjustWidth}> 
                                    <input 
                                    className="input is-info" 
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

                        <div className="field is-grouped">
                            <div className="control">
                                <button className="button is-link is-info" type="submit">Submit</button>
                            </div>
                            <div className="control">
                                <button className="button is-link is-light">
                                    <Link to="/">
                                    Cancel
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </form>
                    )}
                    {error && (
                    <div className="is-warning">
                        {error.message}
                    </div>
                    )}
                </section>
            </div>         
        </div>
    </section>
    
  );
};

export default Signup;
