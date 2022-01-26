// gql is a tag used to pass queries to apollo client
import { gql } from "@apollo/client";

// QUERY_USER to be used to get user data including the users' orders, which also returns the orders' products
export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;

// QUERY_ALL_PRODUCTS can be used to get all products and their fields
export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query getProducts($name: String) {
    products(name: $name) {
      _id
      name
      description
      price
      quantity
      image
    }
  }
`;

// QUERY_CHECKOUT sets up checkout by grabbing the ID of products
export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;
