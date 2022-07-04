const { gql } = require('apollo-server');

module.exports = gql`
    type Query {
        _: Boolean
    }

    type Mutation {
        _: Boolean
    }
`;