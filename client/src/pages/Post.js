import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import SVG from 'react-inlinesvg';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { GET_ALL_CATEGORIES, GET_ALL_TAGS, GET_ALL_MERCHANTS } from '../utils/queries';
import { POST_DEAL } from '../utils/mutations';


const adjustfieldWidth = { width: '250%' };
React.createElement("div", { style: adjustfieldWidth });

const adjustCardWidth = { width: '60%' };
React.createElement("div", { style: adjustCardWidth });

const PostDealPage = () => {

    const [merchantId, setMerchantId] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [tagIds, setTagIds] = useState([]);
    const [postDeal, { error, data }] = useMutation(POST_DEAL);

    function GetAllMerchants() {
        const { loading, data } = useQuery(GET_ALL_MERCHANTS);
        const allMerchants = data?.getAllMerchants || [];
        return allMerchants;
    }

    const merchantList = GetAllMerchants();
    console.log(merchantList);

    function GetAllCategories() {
        const { loading, data } = useQuery(GET_ALL_CATEGORIES);
        const allCategories = data?.getAllCategories || [];
        return allCategories;
    }

    const categoryList = GetAllCategories();


    function GetAllTags() {
        const { loading, data } = useQuery(GET_ALL_TAGS);
        const allTags = data?.getAllTags || [];
        console.log("allTagsBelow");
        console.log(allTags);
        return allTags;
    }

    const [formState, setFormState] = useState({
        title: '',
        description: '',
        productLink: '',
        photoLink: '',
        startingPrice: 0,
        dealPrice: 0,
        // merchant: '62a7e883682632424d7b732e',
        // category: '62a7e883682632424d7b7334',
        // tags: [],
        submittedBy: Auth.getProfile().data._id,
        submittedOn: Date.now
    });





    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });


    };

    const handleMultiSelectChange = (event) => {
        // const { name, value } = event.target;
        const updatedOptions = [...event.target.options]
        .filter(option=>option.selected)
        .map (x=>x.value);
        setTagIds(updatedOptions)
        


    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        if (merchantId === '' || categoryId === '') {
            return alert('Please fill in all fields');
        }


        try {
            const { data } = await postDeal({
                // variables: { startingPrice: parseFloat(formState.startingPrice,2), dealPrice: parseFloat(formState.dealPrice,2),...formState },
                variables: { ...formState, merchant: merchantId, category: categoryId, tags: tagIds },
            });

            window.alert('Deal posted successfully!')

            window.location.assign('/');
        }

        catch (e) {
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
                                    <div className='select'>
                                        <select value={merchantId}
                                            onChange={(e) => setMerchantId(e.target.value)}>
                                            <option value=''>Select Merchant</option>
                                            {GetAllMerchants().map((merch) =>
                                                <option
                                                    className="input is-warning"
                                                    name="category"
                                                    placeholder="Best Buy"
                                                    type="text"
                                                    value={merch._id}
                                                >{merch.name}</option>
                                            )}
                                        </select>
                                    </div>
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-store"></i>
                                    </span>
                                </div>
                            </div>

                            <div className="field" style={adjustfieldWidth}>
                                <label className="label">Category</label>
                                <div className="control has-icons-left">
                                    <div className='select'>
                                        <select value={categoryId}
                                            onChange={(e) => setCategoryId(e.target.value)}>
                                            <option value=''>Select Category</option>
                                            {GetAllCategories().map((cat) =>
                                                <option
                                                    className="input is-warning"
                                                    name="category"
                                                    placeholder="Best Buy"
                                                    type="text"
                                                    value={cat._id}
                                                    onChange={handleChange}>{cat.name}</option>
                                            )}
                                        </select>
                                    </div>
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-layer-group"></i>
                                    </span>
                                </div>
                            </div>

                            <div className="field" style={adjustfieldWidth}>
                                <label className="label">Tags</label>
                                <div className="control has-icons-left">
                                    <div className='select is-multiple'>
                                        <select className = 'is-flex' multiple size="5"
                                        value={tagIds}
                                        onChange={handleMultiSelectChange}
                                        options={GetAllTags()}>
                                            {GetAllTags().map((t) =>
                                                <option
                                                    className="input is-warning"
                                                    name="tags"
                                                    placeholder="Best Buy"
                                                    type="text"
                                                    value={t._id}
                                                   >{t.tagName}</option>
                                            )}
                                        </select>
                                    </div>
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-tag"></i>
                                    </span>
                                </div>
                            </div>

                            <div className="field" style={adjustfieldWidth}>
                                <div className="buttons is-centered my-2">
                                    <button className="button is-warning" type='submit'>
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

export default PostDealPage;
