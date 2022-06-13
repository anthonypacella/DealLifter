import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SVG from 'react-inlinesvg';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';

const adjustfieldWidth = { width: '250%' };
React.createElement("div", { style: adjustfieldWidth });

const adjustCardWidth = { width: '40%' };
React.createElement("div", { style: adjustCardWidth });

const PostDeal = () => {
  const [formState, setFormState] = useState({
    title: '',
    description: '',
    productLink: '',
    photoLink: '',
    startingPrice: '',
    dealPrice: '',
    merchant: '',
    category: '',
    tags: '',
    submittedBy: 'UserID here',
    submittedOn: Date.now
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
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
                            <span>Post Your Deal!</span>
                        </span>
                    </p>
                </header>
                <section className="card-content" id="card">
                    <form onSubmit={handleFormSubmit}>
                        <div className="field" style={adjustfieldWidth}>
                            <label className="label">Title</label>
                            <div className="control has-icons-left is-expanded">
                                <div> 
                                    <input 
                                    className="input is-warning"
                                    name="title" 
                                    placeholder="Product title"
                                    type="text"  
                                    value={formState.title}
                                    onChange={handleChange}
                                    />
                                </div>
                                <span className="icon is-small is-left">
                                <i className="fas fa-solid fa-barcode"></i>
                                </span>
                            </div>
                        </div>
                        
                        <div className="field" style={adjustfieldWidth}>
                            <label className="label">Description</label>
                            <div className="control has-icons-left">
                                <div> 
                                    <input 
                                    className="input is-warning"
                                    name="description" 
                                    placeholder="Product description"
                                    type="text"  
                                    value={formState.description}
                                    onChange={handleChange}
                                    />
                                </div>
                                <span className="icon is-small is-left">
                                    <i className="fas fa-scroll"></i>
                                </span>
                            </div>
                        </div> 

                        <div className="field" style={adjustfieldWidth}>
                            <label className="label">Deal URL</label>
                            <div className="control has-icons-left">
                                <div> 
                                    <input 
                                    className="input is-warning"
                                    name="productLink" 
                                    placeholder="URL to the deal"
                                    type="text"  
                                    value={formState.productLink}
                                    onChange={handleChange}
                                    />
                                </div>
                                <span className="icon is-small is-left">
                                    <i className="fas fa-window-maximize"></i>
                                </span>
                            </div>
                        </div> 

                        <div className="field" style={adjustfieldWidth}>
                            <label className="label">Photo URL</label>
                            <div className="control has-icons-left">
                                <div> 
                                    <input 
                                    className="input is-warning"
                                    name="photoLink" 
                                    placeholder="URL to a photo of the product"
                                    type="text"  
                                    value={formState.photoLink}
                                    onChange={handleChange}
                                    />
                                </div>
                                <span className="icon is-small is-left">
                                    <i className="fas fa-camera"></i>
                                </span>
                            </div>
                        </div> 

                        <div className="field" style={adjustfieldWidth}>
                            <label className="label">Original Price</label>
                            <div className="control has-icons-left">
                                <div> 
                                    <input 
                                    className="input is-warning"
                                    name="startingPrice" 
                                    placeholder="$19.99"
                                    type="text"  
                                    value={formState.startingPrice}
                                    onChange={handleChange}
                                    />
                                </div>
                                <span className="icon is-small is-left">
                                    <i className="fas fa-solid fa-dollar-sign"></i>
                                </span>
                            </div>
                        </div> 

                        <div className="field" style={adjustfieldWidth}>
                            <label className="label">New Price</label>
                            <div className="control has-icons-left">
                                <div> 
                                    <input 
                                    className="input is-warning"
                                    name="dealPrice" 
                                    placeholder="$14.99"
                                    type="text"  
                                    value={formState.dealPrice}
                                    onChange={handleChange}
                                    />
                                </div>
                                <span className="icon is-small is-left">
                                  <i className="fas fa-solid fa-dollar-sign"></i>
                                </span>
                            </div>
                        </div> 

                        <div className="field" style={adjustfieldWidth}>
                            <label className="label">Merchant</label>
                            <div className="control has-icons-left">
                                <div> 
                                    <input 
                                    className="input is-warning"
                                    name="merchant" 
                                    placeholder="Best Buy"
                                    type="text"  
                                    value={formState.merchant}
                                    onChange={handleChange}
                                    />
                                </div>
                                <span className="icon is-small is-left">
                                    <i className="fas fa-store"></i>
                                </span>
                            </div>
                        </div> 

                        <div className="field" style={adjustfieldWidth}>
                            <label className="label">Category</label>
                            <div className="control has-icons-left">
                                <div> 
                                    <input 
                                    className="input is-warning"
                                    name="category" 
                                    placeholder="Clothing"
                                    type="text"  
                                    value={formState.category}
                                    onChange={handleChange}
                                    />
                                </div>
                                <span className="icon is-small is-left">
                                    <i className="fas fa-layer-group"></i>
                                </span>
                            </div>
                        </div> 

                        <div className="field" style={adjustfieldWidth}>
                            <label className="label">Tags</label>
                            <div className="control has-icons-left">
                                <div> 
                                    <input 
                                    className="input is-warning"
                                    name="tags" 
                                    placeholder="mens sunglasses accessory brown"
                                    type="text"  
                                    value={formState.tags}
                                    onChange={handleChange}
                                    />
                                </div>
                                <span className="icon is-small is-left">
                                    <i className="fas fa-tag"></i>
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
                </section>
            </div>         
        </div>
    </section>
    
  );
};

export default PostDeal;
