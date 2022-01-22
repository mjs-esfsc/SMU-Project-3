// gql is a tag used to pass queries to apollo client
import { gql } from "@apollo/client";

// LOGIN mutation requires email and password AND pass a token
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

// ADD_USER will execute the addUser mutation and will also pass a token
export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $address: String!
    $phone: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      address: $address
      phone: $phone
    ) {
      token
      user {
        _id
      }
    }
  }
`;

// ADD_ORDER mutation runs addOrder which will takes products ID
export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
      }
    }
  }
`;
