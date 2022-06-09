import React from 'react';
import { Link } from 'react-router-dom';
import './tabs';
import tabs from './tabs';
import {useState} from 'react';
import PostedDeals from '../PostedDeals/index'

const postedDealExample = [
  {
    submittedBy: {
      userName: 'apacella'
    },
    submittedOn: 'Jun 5, 2022',
    title: 'Adidas Ultraboost Size 11',
    description: 'Adidas Ultraboost Size 11, Mens, Running Shoe',
    photoLink: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e8e6bdc1d82a489198bbac550091d249_9366/Ultraboost_4.0_DNA_Shoes_Black_FY9123_01_standard.jpg',
    productLink: 'https://www.adidas.com/us/ultraboost-4.0-dna-shoes/FY9123.html',
    merchant: {
      name: 'Adidas',
      homepage: 'https://www.adidas.com/'
    },
    startingPrice: 189.99,
    dealPrice: 149.49
  },
  {
    submittedBy: {
      userName: 'apacella'
    },
    submittedOn: 'Jun 5, 2022',
    title: 'Adidas Ultraboost Size 6.5',
    description: 'Adidas Ultraboost Size 11, Mens, Running Shoe',
    photoLink: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7f6d911db8fa461a866aadc900fca0ae_9366/Ultraboost_4_DNA_Shoes_Pink_GY0286_01_standard.jpg',
    productLink: 'https://www.adidas.com/us/ultraboost-4.0-dna-shoes/FY9123.html',
    merchant: {
      name: 'Adidas',
      homepage: 'https://www.adidas.com/'
    },
    startingPrice: 189.99,
    dealPrice: 149.49
  },
  {
    submittedBy: {
      userName: 'apacella'
    },
    submittedOn: 'Jun 5, 2022',
    title: 'Adidas Ultraboost Size 11',
    description: 'Adidas Ultraboost Size 11, Mens, Running Shoe',
    photoLink: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e8e6bdc1d82a489198bbac550091d249_9366/Ultraboost_4.0_DNA_Shoes_Black_FY9123_01_standard.jpg',
    productLink: 'https://www.adidas.com/us/ultraboost-4.0-dna-shoes/FY9123.html',
    merchant: {
      name: 'Adidas',
      homepage: 'https://www.adidas.com/'
    },
    startingPrice: 189.99,
    dealPrice: 149.49
  },
  {
    submittedBy: {
      userName: 'apacella'
    },
    submittedOn: 'Jun 5, 2022',
    title: 'Adidas Ultraboost Size 6.5',
    description: 'Adidas Ultraboost Size 11, Mens, Running Shoe',
    photoLink: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7f6d911db8fa461a866aadc900fca0ae_9366/Ultraboost_4_DNA_Shoes_Pink_GY0286_01_standard.jpg',
    productLink: 'https://www.adidas.com/us/ultraboost-4.0-dna-shoes/FY9123.html',
    merchant: {
      name: 'Adidas',
      homepage: 'https://www.adidas.com/'
    },
    startingPrice: 189.99,
    dealPrice: 149.49
  },
  {
    submittedBy: {
      userName: 'apacella'
    },
    submittedOn: 'Jun 5, 2022',
    title: 'Adidas Ultraboost Size 11',
    description: 'Adidas Ultraboost Size 11, Mens, Running Shoe',
    photoLink: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e8e6bdc1d82a489198bbac550091d249_9366/Ultraboost_4.0_DNA_Shoes_Black_FY9123_01_standard.jpg',
    productLink: 'https://www.adidas.com/us/ultraboost-4.0-dna-shoes/FY9123.html',
    merchant: {
      name: 'Adidas',
      homepage: 'https://www.adidas.com/'
    },
    startingPrice: 189.99,
    dealPrice: 149.49
  },
  {
    submittedBy: {
      userName: 'apacella'
    },
    submittedOn: 'Jun 5, 2022',
    title: 'Adidas Ultraboost Size 6.5',
    description: 'Adidas Ultraboost Size 11, Mens, Running Shoe',
    photoLink: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7f6d911db8fa461a866aadc900fca0ae_9366/Ultraboost_4_DNA_Shoes_Pink_GY0286_01_standard.jpg',
    productLink: 'https://www.adidas.com/us/ultraboost-4.0-dna-shoes/FY9123.html',
    merchant: {
      name: 'Adidas',
      homepage: 'https://www.adidas.com/'
    },
    startingPrice: 189.99,
    dealPrice: 149.49
  },
]

const InfoBar = () => {
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        setIsShown(current => !current);
      };

    return (
        <div className="columns">
          <div className="column is-one-fifth">
            <nav className="panel">
              {tabs.map((tab) => (
                <a className="panel-block is-active" id={tab.id} onClick={handleClick}>
                  <span className="panel-icon">
                  <i className="fas fa-arrow-right" aria-hidden="true"></i>
                  </span>
                  {tab.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="column is-four-fifths">
              {isShown && <PostedDeals postedDeals = {postedDealExample} />}
          </div>
        </div>
      );
    };

export default InfoBar;
