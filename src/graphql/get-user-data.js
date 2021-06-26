import { gql } from "@apollo/client";

export const GET_USER_DATA = gql`
  query UserData($secret: String, $userId: String) {
    UserData(secret: $secret, userId: $userId) {
      userId
      company
      topic
      weight
    }
  }
`;
