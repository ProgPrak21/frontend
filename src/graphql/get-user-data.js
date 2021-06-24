import { gql } from "@apollo/client";

export const GET_USER_DATA = gql`
  query UserData {
    UserData {
      userId
      company
      topic
      weight
    }
  }
`;
