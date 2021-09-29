import { gql } from "apollo-server-core";

export default gql`
  type Query {
    Users: MultiUserReturnType
    User(id: Int!): SingleUserReturnType
  }
  type Mutation {
    createUser(
      username: String!
      password: String!
      name: String!
      email: String!
      location: String
      avatarURL: String
      githubUsername: String
    ): SingleUserReturnType
  }
`;
