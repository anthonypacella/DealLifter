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
    merchantFilter: [Merchant]
    categoryFilter: [Category]
    tagFilter: [Tag]
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
    photoLink: String!
    startingPrice: Float
    dealPrice: Float
    merchant: Merchant
    category: Category
    tags: [Tag]
    submittedBy: User
    submittedOn: String
    expiration: String
    isUsable: [Int]
    comments: [Comment]
  }

  input dealInput {
    title: String!
    description: String
    link: String!
    photoLink: String!
    startingPrice: Float
    dealPrice: Float
    merchant: Merchant
    category: Category
    tags: [Tag]
    expiration: String
  }


  type Auth {
    token: ID
    user: User
  }

  type Query {
    getAllCategories: [Category]
    getCategoryById(categoryId: ID!) : Category

    getAllTags: [Tag]
    getTagById(tagId:ID!): Tag

    getAllMerchants: [Merchant]
    getMerchantById(merchantId: ID!): Merchant
    getMerchantByName(name: String!): [Merchant]
    getMerchantByCategory(categoryId: ID!): [Merchant]
    
    getUserById(userId: ID!): User
    getFollowersByUserId(userId: ID!):[User]
    getFollowingByUserId(userId: ID!):[User]

    getAllDeals: [Deal]
    getDealById(dealId: ID!): Deal
    getHotDeals: [Deal]
    getPersonalizedDealsByUserId(userId: ID!): [Deal]
    getExpiringDeals: [Deal]
    getPostedDealsByUserId(userId: ID!): [Deal]
    getDealsByMerchantId(merchantId: ID!): [Deal]
    getSavedDealsByUserId(userId: ID!):[Deal]
    getDealsByTagId(tagId: ID!): [Deal]
    getDealsByKeyword(keyword: String!) : [Deal]

    getSearchHistoryByUserId(userId: ID!): [Search]
  }

  type Mutation {
    addUser(userName: String!, email: String!, password: String!, avatar: String!): Auth
    updateUser(userName: String, email: String, password: String, avatar: String!): User
    login(email: String!, password: String!): Auth
    
    createTag(tagName: String!, color: String): Tag
    updateTag(tagId: ID!, tagName: String!, color: String): Tag

    createCategory(name: String!): Category
    updateCategory(categoryId: ID!, name: String!): Category

    createMerchant(name: String!, description: String, logo: String, homepage: String!, categories: [ID]): Merchant
    updateMerchant(merchantId: ID!, name: String!, description: String, logo: String, homepage: String!, categories: [ID], deals: [ID]): Merchant

    postDeal(input: dealInput): Deal
    updateDeal(input: dealInput): Deal
    removeTagFromDeal(tagId: ID!, dealId: ID!): Deal

    saveDealById(dealId: ID!): User
    favoriteTagById(tagId: ID!): User
    followUserById(userId: ID!): User

    createSearch(keyword: String!, merchantFilter: ID, categoryFilter: ID, tagFilter: ID)
    addToSearchHistory(searchId: ID!): User
  }
`;

module.exports = typeDefs;
