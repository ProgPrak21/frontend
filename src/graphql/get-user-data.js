import { gql } from "@apollo/client";

export const GET_USER_ANALYSED_DATA = gql`
  query UserDataAnalyzed($userId: String, $secret: String) {
    UserDataAnalyzed(userId: $userId, secret: $secret) {
      topic
      percentage
    }
  }
`;

export const GET_USER_ANALYSED_COORDS = gql`
  query UserCoordsAnalyzed($userId: String, $secret: String) {
    UserCoordsAnalyzed(userId: $userId, secret: $secret) {
      latitude
      longitude
      anzahl
      company
    }
  }
`;
