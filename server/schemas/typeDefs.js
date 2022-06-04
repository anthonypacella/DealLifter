const { gql } = require('apollo-server-express');

const typeDefs = gql`


type Tag {
  _id: ID!
  tagName: String!
  color: String
  createdAt: String
}  

type Category {
    _id: ID!
    name: String!
  }

type Merchant {
  _id: ID!
  name: String!
  description: String
  logo: String
  link: String!
  categories: [Category]!
  deals: [Deal]  
}

type User {
  _id: ID!
  userName: String!
  email: String!
  password: String!
  savedDeals: [Deal]
  favoriteTags: [Tag]
  following: [User]
  followers: [User]
  avatar: String!
  searchHistory: [Search]
}


type Search {
  _id: ID!
  keyword: String!
  searchMerchant:  Boolean
  searchCategory: Boolean
  searchTags: Boolean
  searchTitle: Boolean
  searchDescription: Boolean
}

type Comment {
  _id: ID
  commentText: String
  createdAt: String
}

type Deal {
  _id: ID!
  title: String!
  description: String
  link: String!
  startingPrice: Float
  dealPrice: Float
  merchant: Merchant
  category: Category
  tags: [Tag]
  submittedBy: User
  submittedOn: String
  expiration: String
  isUsable: [Int]
  // likes: Int
  comments: [Comment]

}

  type Auth {
    token: ID
    user: User
  }


  // Tag, Category, Merchant, User, Search, Comment, Deal
  type Query {
    getCategoryById(_id: ID!) : Category
    getAllCategories: [Category]
    getTagById(_id:ID!): Tag
    getAllTags: [Tag]
    getMerchantById(_id: ID!): Merchant
    getAllMerchants: [Merchant]
    
    // getAllUers: [User]
    getUserById(_id:ID!): User
    // getFollowers(_id: ID!):[User]
    // getFollowing(_id: ID!):[User]
    // getSavedDealsByUserId(_id: ID!):[Deal]

    // Regular Feed, sort by sumbitted on
    getAllDeals: [Deal]
    // For a Deal detail page or modal
    getDealById(_id: ID!): Deal
    //Get top 10 deals sort by number of saves
    getHotDeals:[Deal]
    //Passing in user ID to get deals personalized to User
    getPersonalizedDeals(_id: ID!): [Deal]
    // Get deals that is expiring in a day, order
    getExpiringDeals: [Deal]



    
    personaldeals(): [Deal]
    deal

    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
