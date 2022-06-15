import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($userName: String!, $email: String!, $password: String!) {
    addUser(userName: $userName, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($userName: String!, $email: String, $password: String, $savedDeals: [ID], $favoriteTags: [ID]) {
    updateUser(userName: $userName, email: $email, password: $password, savedDeals: $savedDeals, favoriteTags: $favoriteTags) {
      token
      user {
        _id
      }
    }
  }
`;

export const CREATE_TAG = gql`
  mutation createTag($tagName: String!, $color: String) {
    createTag(tagName: $tagName, color: $color) {
      _id
      tagName
      color
      createdAt
    }
  }
`

export const UPDATE_TAG = gql`
  mutation updateTag($tagId: ID!, $tagName: String!, $color: String) {
    updateTag(tagId: $tagId, tagName: $tagName, color: $color) {
      _id
      tagName
      color
      createdAt
    }
  }
`

export const REMOVE_TAG_FROM_DEAL = gql`
  mutation RemoveTagFromDeal($tagId: ID!, $dealId: ID!) {
    removeTagFromDeal(tagId: $tagId, dealId: $dealId) {
      tags {
        _id
      }
      _id
    }
  }
`
export const CREATE_CATEGORY = gql`
  mutation createCategory($name: String!, $icon: String!, $link: String!) {
    createCategory(name: $name, icon: $icon, link: $link) {
      name
      _id
    }
  }
`

export const UPDATE_CATEGORY = gql`
  mutation updateCategory($categoryId: ID!, $name: String!, $icon: String!, $link: String!) {
    updateCategory(categoryId: $categoryId, name: $name, icon: $icon, link: $link) {
      _id
      name
    }
  }
`

export const CREATE_MERCHANT = gql`
  mutation createMerchant($name: String!, $homepage: String!, $description: String, $logo: String, $categories: [ID]) {
    createMerchant(name: $name, homepage: $homepage, description: $description, logo: $logo, categories: $categories) {
      _id
      name
      description
    }
  }
`

export const UPDATE_MERCHANT = gql`
  mutation updateMerchant($merchantId: ID!, $name: String!, $description: String, $logo: String, $homepage: String) {
    updateMerchant(merchantId: $merchantId, name: $name, description: $description, logo: $logo, homepage: $homepage) {
      _id
      name
      description
      logo
      homepage
    }
  }
`

export const POST_DEAL = gql`
  mutation postDeal($title: String!, $productLink: String!, $photoLink: String!, $description: String, $startingPrice: String, $dealPrice: String, $merchant: ID!, $category: ID!, $tags: [ID], $submittedBy: ID, $expiration: String) {
    postDeal(title: $title, productLink: $productLink, photoLink: $photoLink, description: $description, startingPrice: $startingPrice, dealPrice: $dealPrice, merchant: $merchant, category: $category, tags: $tags, submittedBy: $submittedBy, expiration: $expiration) {
      _id
      title
      description
    }
  }
`

export const UPDATE_DEAL = gql`
  mutation updateDeal($dealId: ID!, $title: String!, $description: String, $link: String, $photoLink: String, $productLink: String, $startingPrice: String, $dealPrice: String, $merchant: ID, $category: ID, $tags: [ID]) {
    updateDeal(dealId: $dealId, title: $title, description: $description, link: $link, photoLink: $photoLink, productLink: $productLink, startingPrice: $startingPrice, dealPrice: $dealPrice, merchant: $merchant, category: $category, tags: $tags) {
      _id
      title
      description
    }
  }
`

export const LIKE_DEAL = gql`
  mutation likeDeal($dealId: ID!) {
  likeDeal(dealId: $dealId) {
    _id
    likes
  }
}
`

export const SAVE_DEAL_BY_ID = gql`
  mutation saveDealById($dealId: ID!) {
    saveDealById(dealId: $dealId) {
      _id
      userName
      savedDeals {
        _id
      }
    }
  }
`
export const FAVORITE_TAG_BY_ID = gql`
  mutation favoriteTagById($tagId: ID!) {
    favoriteTagById(tagId: $tagId) {
      _id
      userName
      favoriteTags {
        _id
      }
    }
  }
`
export const UNFAVORITE_TAG_BY_ID = gql`
  mutation unfavoriteTagById($tagId: ID!) {
    unfavoriteTagById(tagId: $tagId) {
      _id
      userName
      favoriteTags {
        _id
      }
    }
  }
`

export const ADD_TO_FOLLOWING = gql`
  mutation addToFollowing($userId: ID!) {
    addToFollowing(userId: $userId) {
      _id
      userName
      following {
        _id
      }
      followers {
        _id
      }
    }
  }
`

export const ADD_TO_FOLLOWERS = gql`
  mutation addToFollowers($userId: ID!) {
    addToFollowers(userId: $userId) {
      _id
      userName
      following {
        _id
      }
      followers {
        _id
      }
    }
  }
`

export const CREATE_SEARCH = gql`
  mutation createSearch($keyword: String!, $categoryFilter: [ID], $merchantFilter: [ID], $tagFilter: [ID]) {
    createSearch(keyword: $keyword, categoryFilter: $categoryFilter, merchantFilter: $merchantFilter, tagFilter: $tagFilter) {
      _id
      keyword
    }
  }
`

export const ADD_TO_SEARCH_HISTORY = gql`
  mutation addToSearchHistory($keyword: String!) {
    addToSearchHistory(keyword: $keyword) {
      _id
      userName
      searchHistory
    }
  }
`
