import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';


const adjustfieldWidth = { width: '250%' };
React.createElement("div", { style: adjustfieldWidth });
const adjustCardWidth = { width: '40%' };
React.createElement("div", { style: adjustCardWidth });

const Login = (props) => {
  const [formState, setFormState] = useState({ userName: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      userName: '',
      password: '',
    });
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
                            <span>Log In</span>
                        </span>
                    </p>
                </header>
                <section className="card-content">
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

export default Login;
