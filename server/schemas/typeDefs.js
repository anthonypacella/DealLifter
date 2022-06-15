const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Tag {
    _id: ID!
    tagName: String!
    color: String
    createdAt: String
  }

  input tagInput {
    tagName: String!
    color: String
  }

  type Category {
    _id: ID!
    name: String!
    icon: String!
    link: String!
  }

  input categoryInput {
    name: String!
  }

  type Merchant {
    _id: ID!
    name: String!
    description: String
    logo: String
    homepage: String!
    categories: [Category]!
    deals: [Deal]  
  }

  input merchantInput {
    name: String!
    description: String
    logo: String
    homepage: String!
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
    avatar: String
    searchHistory: [String]
    totalFollowers: Int
    totalFollowing: Int
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
    photoLink: String!
    productLink: String!
    startingPrice: String
    dealPrice: String
    merchant: Merchant
    category: Category
    tags: [Tag]
    submittedBy: User
    submittedOn: String
    expiration: String
    isUsable: [Int]
    likes: Int
    comments: [Comment]
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
    
    getMe(userName: String!): User
    getUserById(userId: ID!): User
    getUserByUserName(userName: String!): User
    getUserByUserEmail(email: String!): User
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
    getDealsByKeyword(keyword: String!, merchantFilter: [ID], categoryFilter: [ID], tagFilter: [ID]) : [Deal]

    getSearchHistoryByUserId(userId: ID!): [Search]
  }

  type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    updateUser(userName: String, email: String, password: String, savedDeals: [ID], favoriteTags: [ID]): User
    login(userName: String!, password: String!): Auth
    
    createTag(tagName: String!, color: String): Tag
    updateTag(tagId: ID!, tagName: String, color: String): Tag

    createCategory(name: String!, icon: String!, link: String!): Category
    updateCategory(categoryId: ID!, name: String, icon: String, link: String): Category

    createMerchant(name: String!, description: String, logo: String, homepage: String!, categories: [ID]): Merchant
    updateMerchant(merchantId: ID!, name: String, description: String, logo: String, homepage: String, categories: [ID], deals: [ID]): Merchant

    postDeal(title: String!,
      description: String,
      photoLink: String!,
      productLink: String!,
      startingPrice: String,
      dealPrice: String,
      merchant: ID!,
      category: ID!,
      tags: [ID],
      submittedBy: ID,
      expiration: String
    ): Deal

    updateDeal(dealId: ID!,
      title: String,
      description: String,
      link: String,
      photoLink: String,
      productLink: String,
      startingPrice: String,
      dealPrice: String,
      merchant: ID,
      category: ID,
      tags: [ID],
      expiration: String
    ): Deal

    likeDeal(dealId: ID!): Deal

    removeTagFromDeal(tagId: ID!, dealId: ID!): Deal

    saveDealById(dealId: ID!): User
    favoriteTagById(tagId: ID!): User
    unfavoriteTagById(tagId: ID!): User

    addToFollowing(userId: ID!): User
    addToFollowers(userId: ID!): User

    createSearch(keyword: String!, merchantFilter: [ID], categoryFilter: [ID], tagFilter: [ID]): Search
    addToSearchHistory(keyword: String!): User
  }
`;

module.exports = typeDefs;
