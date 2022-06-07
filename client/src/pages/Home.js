import React from 'react';
import Deal from '../components/Deal'

const dealObject = {
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
}

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Deal deal = {dealObject}></Deal>
    </div>
  );
}
