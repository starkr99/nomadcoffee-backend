import { gql } from "apollo-server-core";

export default gql`
  type SingleUserReturnType {
    ok: Boolean!
    error: String
    user: User
  }
  type MultiUserReturnType {
    ok: Boolean!
    error: String
    users: [User]
  }
  type User {
    id: Int!
    username: String!
    email: String!
    name: String!
    location: String
    avatarURL: String
    githubUsername: String
    createdAt: String!
    updatedAt: String!
  }
`;
