import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($userName: String!, $email: String!, $password: String!, $avatar: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, avatar: $avatar) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($userName: String!, $email: String!, $password: String!, $avatar: String!) {
    updateUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, avatar: $avatar) {
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
  mutation postDeal($title: String!, $link: String!, $photoLink: String!, $description: String, $startingPrice: Float, $dealPrice: Float, $expiration: String, $merchant: ID!, $category: ID!, $tags: [ID], $productLink: String!) {
    postDeal(title: $title, link: $link, photoLink: $photoLink, description: $description, startingPrice: $startingPrice, dealPrice: $dealPrice, expiration: $expiration, merchant: $merchant, category: $category, tags: $tags, productLink: $productLink) {
      _id
      title
      description
    }
  }
`

export const UPDATE_DEAL = gql`
  mutation updateDeal($dealId: ID!, $title: String!, $description: String, $link: String, $photoLink: String, $productLink: String, $startingPrice: Float, $dealPrice: Float, $merchant: ID, $category: ID, $tags: [ID]) {
    updateDeal(dealId: $dealId, title: $title, description: $description, link: $link, photoLink: $photoLink, productLink: $productLink, startingPrice: $startingPrice, dealPrice: $dealPrice, merchant: $merchant, category: $category, tags: $tags) {
      _id
      title
      description
    }
  }
`

