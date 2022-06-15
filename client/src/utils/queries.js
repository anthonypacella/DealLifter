import { gql } from '@apollo/client';

// starting here
export const GET_ALL_CATEGORIES = gql`
  query getAllCategories {
    getAllCategories {
      _id
      name
      icon
      link
    }
  }
`;

export const GET_CATEGORY_BY_ID = gql`
  query getCategoryById($categoryId: ID!) {
    getCategoryById(categoryId: $categoryId) {
      _id
      name
      icon
      link
    }
  }
`;

export const GET_ALL_TAGS = gql`
  query getAllTags {
    getAllTags {
      _id
      tagName
      color
      createdAt
    }
  }
`;

export const GET_TAG_BY_ID = gql`
  query getTagById($tagId: ID!) {
    getTagById(tagId: $tagId) {
      _id
      tagName
      color
      createdAt
    }
  }
`;

export const GET_ALL_MERCHANTS = gql`
  query getAllMerchants {
    getAllMerchants {
      _id
      name
      description
      logo
      homepage
      categories {
        _id
        name
        icon
        link
      }
      deals {
        _id
        title
        productLink
      }
    }
  }
`;

export const GET_MERCHANT_BY_ID = gql`
  query getMerchantById($merchantId: ID!) {
    getMerchantById(merchantId: $merchantId) {
      _id
      name
      description
      logo
      homepage
      categories {
        _id
        name
        icon
        link
      }
      deals {
        _id
        title
        productLink
      }
    }
  }
`;

// question on querying merchants, do we want to return more data on the deals objects? 
// especially when querying a single merchant, like viewing that merchant page, we might want more deal properties
export const GET_MERCHANT_BY_NAME = gql`
  query getMerchantByName($name: String!) {
    getMerchantByName(name: $name) {
      _id
      name
      description
      logo
      homepage
      categories {
        _id
        name
        icon
        link
      }
      deals {
        _id
        title
        productLink
      }
    }
  }
`;

// also maybe change to getMerchantsByCategory? and what about getMerchantsByName

export const GET_MERCHANT_BY_CATEGORY = gql`
  query getMerchantByCategory($categoryId: ID!) {
    getMerchantByCategory(categoryId: $categoryId) {
      _id
      name
      description
      logo
      homepage
      categories {
        _id
        name
        icon
        link
      }
      deals {
        _id
        title
        productLink
      }
    }
  }
`;

export const QUERY_ME = gql`
  query getMe($userName: String!) {
    getMe(userName: $userName) {
      _id
      userName
      email
      password
      savedDeals {
        _id
        title
        description
        
      }
      favoriteTags {
        _id
      }
      following {
        _id
      }
      followers {
        _id
      }
      avatar
      searchHistory
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query getUserById($userId: ID!) {
    getUserById(userId: $userId) {
      _id
      userName
      email
      password
      savedDeals {
        _id
        title
        description
        photoLink
        productLink
        startingPrice
        dealPrice
        merchant {
          _id
          name
        }
        category {
          _id
          name
          icon
          link
        }
        tags {
          _id
          tagName
          color
          createdAt
        }
        submittedBy {
          _id
          userName
        }
        submittedOn
        expiration
        isUsable
        likes
      }
      favoriteTags {
        _id
        tagName
        color
        createdAt
      }
      following {
        _id
        userName
      }
      followers {
        _id
        userName
      }
      avatar
      searchHistory
      totalFollowing
      totalFollowers
    }
  }
`;

export const GET_USER_BY_USERNAME = gql`
query getUserByUserName($userName: String!) {
  getUserByUserName(userName: $userName) {
    _id
    userName
    email
    password
    savedDeals {
      _id
      title
      description
      photoLink
      productLink
      startingPrice
      dealPrice
    }
    favoriteTags {
      _id
      tagName
      color
    }
    following {
      _id
      userName
    }
    followers {
      _id
      userName
    }
    avatar
    searchHistory
    totalFollowing
    totalFollowers
  }
}
`;

export const GET_USER_BY_EMAIL = gql`
  query getUserByUserEmail($email: String!) {
    getUserByUserEmail(email: $email) {
      _id
    }
  }
`;

// maybe add more properties of each followering that we get back?
export const GET_FOLLOWERS_BY_USER_ID = gql`
  query getFollowersByUserId($userId: ID!) {
    getFollowersByUserId(userId: $userId) {
      followers {
        _id
        userName
      }
    }
  }
`;

export const GET_FOLLOWING_BY_USER_ID = gql`
  query getFollowingByUserId($userId: ID!) {
    getFollowingByUserId(userId: $userId) {
      following {
        _id
        userName
      }
    }
  }
`;

export const GET_ALL_DEALS = gql`
  query getAllDeals {
    getAllDeals {
      _id
      title
      description
      photoLink
      productLink
      startingPrice
      dealPrice
      merchant {
        _id
        name
      }
      category {
        _id
        name
      }
      tags {
        _id
        tagName
        color
      }
      submittedBy {
        _id
        userName
      }
      submittedOn
      expiration
      isUsable
      likes
    }
  }
`;

export const GET_DEAL_BY_ID = gql`
  query getDealById($dealId: ID!) {
    getDealById(dealId: $dealId) {
      _id
      title
      description
      photoLink
      productLink
      startingPrice
      dealPrice
      merchant {
        _id
        name
      }
      category {
        _id
        name
      }
      tags {
        _id
        tagName
        color
      }
      submittedBy {
        _id
        userName
      }
      submittedOn
      expiration
      isUsable
      likes
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

export const GET_HOT_DEALS = gql`
  query getHotDeals {
    getHotDeals {
      _id
      title
      description
      photoLink
      productLink
      startingPrice
      dealPrice
      merchant {
        _id
        name
      }
      category {
        _id
        name
      }
      tags {
        _id
        tagName
        color
      }
      submittedBy {
        _id
        userName
      }
      submittedOn
      expiration
      isUsable
      likes
    }
  }
`;

export const GET_PERSONALIZED_DEALS_BY_USER_ID = gql`
  query getPersonalizedDealsByUserId($userId: ID!) {
    getPersonalizedDealsByUserId(userId: $userId) {
      _id
      title
      description
      photoLink
      productLink
      startingPrice
      dealPrice
      merchant {
        _id
        name
      }
      category {
        _id
        name
      }
      tags {
        _id
        tagName
        color
      }
      submittedBy {
        _id
        userName
      }
      submittedOn
      expiration
      isUsable
      likes
    }
  }
`;

export const GET_EXPIRING_DEALS = gql`
  query getExpiringDeals {
    getExpiringDeals {
      _id
      title
      description
      photoLink
      productLink
      startingPrice
      dealPrice
      merchant {
        _id
        name
      }
      category {
        _id
        name
      }
      tags {
        _id
        tagName
        color
      }
      submittedBy {
        _id
        userName
      }
      submittedOn
      expiration
      isUsable
      likes
    }
  }
`;

export const GET_POSTED_DEALS_BY_USER_ID = gql`
  query getPostedDealsByUserId($userId: ID!) {
    getPostedDealsByUserId(userId: $userId) {
      _id
      title
      description
      photoLink
      productLink
      startingPrice
      dealPrice
      merchant {
        _id
        name
      }
      category {
        _id
        name
      }
      tags {
        _id
        tagName
        color
      }
      submittedBy {
        _id
        userName
      }
      submittedOn
      expiration
      isUsable
      likes
    }
  }
`;

export const GET_DEALS_BY_MERCHANT_ID = gql`
  query getDealsByMerchantId($merchantId: ID!) {
    getDealsByMerchantId(merchantId: $merchantId) {
      _id
      title
      description
      photoLink
      productLink
      startingPrice
      dealPrice
      merchant {
        _id
        name
      }
      category {
        _id
        name
      }
      tags {
        _id
        tagName
        color
      }
      submittedBy {
        _id
        userName
      }
      submittedOn
      expiration
      isUsable
      likes
    }
  }
`;

export const GET_SAVED_DEALS_BY_USER_ID = gql`
  query getSavedDealsByUserId($userId: ID!) {
    getSavedDealsByUserId(userId: $userId) {
      _id
      title
      description
      photoLink
      productLink
      startingPrice
      dealPrice
      merchant {
        _id
        name
      }
      category {
        _id
        name
      }
      tags {
        _id
        tagName
        color
      }
      submittedBy {
        _id
        userName
      }
      submittedOn
      expiration
      isUsable
      likes
    }
  }
`;

export const GET_DEALS_BY_TAG_ID = gql`
  query getDealsByTagId($tagId: ID!) {
    getDealsByTagId(tagId: $tagId) {
      _id
      title
      description
      photoLink
      productLink
      startingPrice
      dealPrice
      merchant {
        _id
        name
      }
      category {
        _id
        name
      }
      tags {
        _id
        tagName
        color
      }
      submittedBy {
        _id
        userName
      }
      submittedOn
      expiration
      isUsable
      likes
    }
  }
`;

export const GET_DEALS_BY_KEYWORD = gql`
  query getDealsByKeyword($keyword: String!) {
    getDealsByKeyword(keyword: $keyword) {
      _id
      title
      description
      photoLink
      productLink
      startingPrice
      dealPrice
      merchant {
        _id
        name
      }
      category {
        _id
        name
      }
      tags {
        _id
        tagName
      }
      submittedBy {
        _id
        userName
      }
      submittedOn
      expiration
      isUsable
      likes
    }
  }
`;

export const GET_SEARCH_HISTORY_BY_USER_ID = gql`
  query getSearchHistoryByUserId($userId: ID!) {
  getSearchHistoryByUserId(userId: $userId) {
    _id
    keyword
    categoryFilter {
      _id
    }
    tagFilter {
      _id
    }
    merchantFilter {
      _id
    }
  }
}`