// const db = require('./connection');
// const { Category, Deal, Merchant, Search, Tag, User } = require('../models');

// // work on this later after models

// db.once('open', async () => {
//   await Category.deleteMany();

//   const categories = await Category.insertMany([
//     {   name: 'Clothing',
//         icon: '',
//         link: ''},
//     {   name: 'Food & Drink',
//         icon: '',
//         link: ''},
//     {   name: 'Health & Fitness',
//         icon: '',
//         link: ''},
//     {   name: 'Beauty & Spa',
//         icon: '',
//         link: '' },
//     {   name: 'Shoes',
//         icon: '',
//         link: '' },
//     {   name: 'Electronics',
//         icon: '',
//         link: ''}
//   ]);

//   console.log('categories seeded');

//   await Deal.deleteMany();

//   const deals = await Deal.insertMany([
//     {
//       title: 'Adidas Ultraboost Size 11',
//       description: 'Adidas Ultraboost Size 11, Mens, Running Shoe',
//       productLink: 'https://www.adidas.com/us/ultraboost-4.0-dna-shoes/FY9123.html',
//       photoLink: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e8e6bdc1d82a489198bbac550091d249_9366/Ultraboost_4.0_DNA_Shoes_Black_FY9123_01_standard.jpg',
//       startingPrice: 189.99,
//       dealPrice: 149.49,
//       merchant: {
//         name: 'Adidas',
//         homepage: 'https://www.adidas.com/'
//       },
//       category: 'Shoes',
//       tags: ['shoes', 'adidas', 'ultraboost', 'mens'],
//       submittedBy: {
//         userName: 'apacella'
//       },
//       submittedOn: 06/03/2022,
//       expiration: 09/03/2022,
//       isUsable: [1],
//       likes: 0,
//       comments: [{commentText: '', createdAt: ''}]
//     },
//     {
//       title: 'Adidas Ultraboost Size 11',
//       description: 'Adidas Ultraboost Size 11, Mens, Running Shoe',
//       productLink: 'https://www.adidas.com/us/ultraboost-4.0-dna-shoes/FY9123.html',
//       photoLink: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e8e6bdc1d82a489198bbac550091d249_9366/Ultraboost_4.0_DNA_Shoes_Black_FY9123_01_standard.jpg',
//       startingPrice: 189.99,
//       dealPrice: 149.49,
//       merchant: {
//         name: 'Adidas',
//         homepage: 'https://www.adidas.com/'
//       },
//       category: 'Shoes',
//       tags: ['shoes', 'adidas', 'ultraboost', 'mens'],
//       submittedBy: {
//         userName: 'apacella'
//       },
//       submittedOn: 06/03/2022,
//       expiration: 09/03/2022,
//       isUsable: [1],
//       likes: 0,
//       comments: [{commentText: '', createdAt: ''}]
//     },
//     {
//       title: 'Adidas Ultraboost Size 10',
//       description: 'Adidas Ultraboost Size 10, Mens, Running Shoe',
//       productLink: 'https://www.adidas.com/us/ultraboost-4.0-dna-shoes/FY9123.html',
//       photoLink: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e8e6bdc1d82a489198bbac550091d249_9366/Ultraboost_4.0_DNA_Shoes_Black_FY9123_01_standard.jpg',
//       startingPrice: 189.99,
//       dealPrice: 149.49,
//       merchant: {
//         name: 'Adidas',
//         homepage: 'https://www.adidas.com/'
//       },
//       category: 'Shoes',
//       tags: ['shoes', 'adidas', 'ultraboost', 'mens'],
//       submittedBy: {
//         userName: 'apacella'
//       },
//       submittedOn: 06/03/2022,
//       expiration: 09/03/2022,
//       isUsable: [1],
//       likes: 0,
//       comments: [{commentText: '', createdAt: ''}]
//     },
//     {
//       title: 'Adidas Ultraboost Size 9',
//       description: 'Adidas Ultraboost Size 9, Mens, Running Shoe',
//       productLink: 'https://www.adidas.com/us/ultraboost-4.0-dna-shoes/FY9123.html',
//       photoLink: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e8e6bdc1d82a489198bbac550091d249_9366/Ultraboost_4.0_DNA_Shoes_Black_FY9123_01_standard.jpg',
//       startingPrice: 189.99,
//       dealPrice: 149.49,
//       merchant: {
//         name: 'Adidas',
//         homepage: 'https://www.adidas.com/'
//       },
//       category: 'Shoes',
//       tags: ['shoes', 'adidas', 'ultraboost', 'mens'],
//       submittedBy: {
//         userName: 'apacella'
//       },
//       submittedOn: 06/03/2022,
//       expiration: 09/03/2022,
//       isUsable: [1],
//       likes: 0,
//       comments: [{commentText: '', createdAt: ''}]
//     },
//     {
//       title: 'Adidas Ultraboost Size 8',
//       description: 'Adidas Ultraboost Size 11, Mens, Running Shoe',
//       productLink: 'https://www.adidas.com/us/ultraboost-4.0-dna-shoes/FY9123.html',
//       photoLink: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e8e6bdc1d82a489198bbac550091d249_9366/Ultraboost_4.0_DNA_Shoes_Black_FY9123_01_standard.jpg',
//       startingPrice: 189.99,
//       dealPrice: 149.49,
//       merchant: {
//         name: 'Adidas',
//         homepage: 'https://www.adidas.com/'
//       },
//       category: 'Shoes',
//       tags: ['shoes', 'adidas', 'ultraboost', 'mens'],
//       submittedBy: {
//         userName: 'apacella'
//       },
//       submittedOn: 06/03/2022,
//       expiration: 09/03/2022,
//       isUsable: [1],
//       likes: 0,
//       comments: [{commentText: '', createdAt: ''}]
//     },
//     {
//       title: 'Adidas Ultraboost Size 8',
//       description: 'Adidas Ultraboost Size 11, Mens, Running Shoe',
//       productLink: 'https://www.adidas.com/us/ultraboost-4.0-dna-shoes/FY9123.html',
//       photoLink: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e8e6bdc1d82a489198bbac550091d249_9366/Ultraboost_4.0_DNA_Shoes_Black_FY9123_01_standard.jpg',
//       startingPrice: 189.99,
//       dealPrice: 149.49,
//       merchant: {
//         name: 'Adidas',
//         homepage: 'https://www.adidas.com/'
//       },
//       category: 'Shoes',
//       tags: ['shoes', 'adidas', 'ultraboost', 'mens'],
//       submittedBy: {
//         userName: 'apacella'
//       },
//       submittedOn: 06/03/2022,
//       expiration: 09/03/2022,
//       isUsable: [1],
//       likes: 0,
//       comments: [{commentText: '', createdAt: ''}]
//     },
//     {
//       title: 'Adidas Ultraboost Size 7',
//       description: 'Adidas Ultraboost Size 7, Mens, Running Shoe',
//       productLink: 'https://www.adidas.com/us/ultraboost-4.0-dna-shoes/FY9123.html',
//       photoLink: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e8e6bdc1d82a489198bbac550091d249_9366/Ultraboost_4.0_DNA_Shoes_Black_FY9123_01_standard.jpg',
//       startingPrice: 189.99,
//       dealPrice: 149.49,
//       merchant: {
//         name: 'Adidas',
//         homepage: 'https://www.adidas.com/'
//       },
//       category: 'Shoes',
//       tags: ['shoes', 'adidas', 'ultraboost', 'mens'],
//       submittedBy: {
//         userName: 'apacella'
//       },
//       submittedOn: 06/03/2022,
//       expiration: 09/03/2022,
//       isUsable: [1],
//       likes: 0,
//       comments: [{commentText: '', createdAt: ''}]
//     },
//     {
//       title: 'Adidas Ultraboost Size 6',
//       description: 'Adidas Ultraboost Size 6, Mens, Running Shoe',
//       productLink: 'https://www.adidas.com/us/ultraboost-4.0-dna-shoes/FY9123.html',
//       photoLink: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e8e6bdc1d82a489198bbac550091d249_9366/Ultraboost_4.0_DNA_Shoes_Black_FY9123_01_standard.jpg',
//       startingPrice: 189.99,
//       dealPrice: 149.49,
//       merchant: {
//         name: 'Adidas',
//         homepage: 'https://www.adidas.com/'
//       },
//       category: 'Shoes',
//       tags: ['shoes', 'adidas', 'ultraboost', 'mens'],
//       submittedBy: {
//         userName: 'apacella'
//       },
//       submittedOn: 06/03/2022,
//       expiration: 09/03/2022,
//       isUsable: [1],
//       likes: 0,
//       comments: [{commentText: '', createdAt: ''}]
//     },
//     {
//       title: 'Adidas Ultraboost Size 5',
//       description: 'Adidas Ultraboost Size 5, Mens, Running Shoe',
//       productLink: 'https://www.adidas.com/us/ultraboost-4.0-dna-shoes/FY9123.html',
//       photoLink: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e8e6bdc1d82a489198bbac550091d249_9366/Ultraboost_4.0_DNA_Shoes_Black_FY9123_01_standard.jpg',
//       startingPrice: 189.99,
//       dealPrice: 149.49,
//       merchant: {
//         name: 'Adidas',
//         homepage: 'https://www.adidas.com/'
//       },
//       category: 'Shoes',
//       tags: ['shoes', 'adidas', 'ultraboost', 'mens'],
//       submittedBy: {
//         userName: 'apacella'
//       },
//       submittedOn: 06/03/2022,
//       expiration: 09/03/2022,
//       isUsable: [1],
//       likes: 0,
//       comments: [{commentText: '', createdAt: ''}]
//     },
//     {
//       title: 'Adidas Ultraboost Size 4',
//       description: 'Adidas Ultraboost Size 4, Mens, Running Shoe',
//       productLink: 'https://www.adidas.com/us/ultraboost-4.0-dna-shoes/FY9123.html',
//       photoLink: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e8e6bdc1d82a489198bbac550091d249_9366/Ultraboost_4.0_DNA_Shoes_Black_FY9123_01_standard.jpg',
//       startingPrice: 189.99,
//       dealPrice: 149.49,
//       merchant: {
//         name: 'Adidas',
//         homepage: 'https://www.adidas.com/'
//       },
//       category: 'Shoes',
//       tags: ['shoes', 'adidas', 'ultraboost', 'mens'],
//       submittedBy: {
//         userName: 'apacella'
//       },
//       submittedOn: 06/03/2022,
//       expiration: 09/03/2022,
//       isUsable: [1],
//       likes: 0,
//       comments: [{commentText: '', createdAt: ''}]
//     },
//     {
//       title: 'Adidas Ultraboost Size 3',
//       description: 'Adidas Ultraboost Size 3, Mens, Running Shoe',
//       productLink: 'https://www.adidas.com/us/ultraboost-4.0-dna-shoes/FY9123.html',
//       photoLink: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e8e6bdc1d82a489198bbac550091d249_9366/Ultraboost_4.0_DNA_Shoes_Black_FY9123_01_standard.jpg',
//       startingPrice: 189.99,
//       dealPrice: 149.49,
//       merchant: {
//         name: 'Adidas',
//         homepage: 'https://www.adidas.com/'
//       },
//       category: 'Shoes',
//       tags: ['shoes', 'adidas', 'ultraboost', 'mens'],
//       submittedBy: {
//         userName: 'apacella'
//       },
//       submittedOn: 06/03/2022,
//       expiration: 09/03/2022,
//       isUsable: [1],
//       likes: 0,
//       comments: [{commentText: '', createdAt: ''}]
//     },
//     {
//       title: 'Adidas Ultraboost Size 2',
//       description: 'Adidas Ultraboost Size 2, Mens, Running Shoe',
//       productLink: 'https://www.adidas.com/us/ultraboost-4.0-dna-shoes/FY9123.html',
//       photoLink: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e8e6bdc1d82a489198bbac550091d249_9366/Ultraboost_4.0_DNA_Shoes_Black_FY9123_01_standard.jpg',
//       startingPrice: 189.99,
//       dealPrice: 149.49,
//       merchant: {
//         name: 'Adidas',
//         homepage: 'https://www.adidas.com/'
//       },
//       category: 'Shoes',
//       tags: ['shoes', 'adidas', 'ultraboost', 'mens'],
//       submittedBy: {
//         userName: 'apacella'
//       },
//       submittedOn: 06/03/2022,
//       expiration: 09/03/2022,
//       isUsable: [1],
//       likes: 0,
//       comments: [{commentText: '', createdAt: ''}]
//     },
//     {
//       title: 'Adidas Ultraboost Size 1',
//       description: 'Adidas Ultraboost Size 1, Mens, Running Shoe',
//       productLink: 'https://www.adidas.com/us/ultraboost-4.0-dna-shoes/FY9123.html',
//       photoLink: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e8e6bdc1d82a489198bbac550091d249_9366/Ultraboost_4.0_DNA_Shoes_Black_FY9123_01_standard.jpg',
//       startingPrice: 189.99,
//       dealPrice: 149.49,
//       merchant: {
//         name: 'Adidas',
//         homepage: 'https://www.adidas.com/'
//       },
//       category: 'Shoes',
//       tags: ['shoes', 'adidas', 'ultraboost', 'mens'],
//       submittedBy: {
//         userName: 'apacella'
//       },
//       submittedOn: 06/03/2022,
//       expiration: 09/03/2022,
//       isUsable: [1],
//       likes: 0,
//       comments: [{commentText: '', createdAt: ''}]
//     },
//     {
//       title: 'Adidas Ultraboost Size 12',
//       description: 'Adidas Ultraboost Size 12, Mens, Running Shoe',
//       productLink: 'https://www.adidas.com/us/ultraboost-4.0-dna-shoes/FY9123.html',
//       photoLink: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e8e6bdc1d82a489198bbac550091d249_9366/Ultraboost_4.0_DNA_Shoes_Black_FY9123_01_standard.jpg',
//       startingPrice: 189.99,
//       dealPrice: 149.49,
//       merchant: {
//         name: 'Adidas',
//         homepage: 'https://www.adidas.com/'
//       },
//       category: 'Shoes',
//       tags: ['shoes', 'adidas', 'ultraboost', 'mens'],
//       submittedBy: {
//         userName: 'apacella'
//       },
//       submittedOn: 06/03/2022,
//       expiration: 09/03/2022,
//       isUsable: [1],
//       likes: 0,
//       comments: [{commentText: '', createdAt: ''}]
//     },
//     {
//       title: 'Adidas Ultraboost Size 13',
//       description: 'Adidas Ultraboost Size 13, Mens, Running Shoe',
//       productLink: 'https://www.adidas.com/us/ultraboost-4.0-dna-shoes/FY9123.html',
//       photoLink: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e8e6bdc1d82a489198bbac550091d249_9366/Ultraboost_4.0_DNA_Shoes_Black_FY9123_01_standard.jpg',
//       startingPrice: 189.99,
//       dealPrice: 149.49,
//       merchant: {
//         name: 'Adidas',
//         homepage: 'https://www.adidas.com/'
//       },
//       category: 'Shoes',
//       tags: ['shoes', 'adidas', 'ultraboost', 'mens'],
//       submittedBy: {
//         userName: 'apacella'
//       },
//       submittedOn: 06/03/2022,
//       expiration: 09/03/2022,
//       isUsable: [1],
//       likes: 0,
//       comments: [{commentText: '', createdAt: ''}]
//     }
//   ]);
// });