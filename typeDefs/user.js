const { gql } = require('apollo-server');

module.exports = gql`
    extend type Query {
        users: [User]
        user(id: Int!): User
    }

    extend type Mutation {
        makeUser(id: Int!, name: String!): User!
        removeUser(id: Int!): Boolean
    }

    type User {
        id: ID!
        name: String!
        car: [Car]
    }
`;