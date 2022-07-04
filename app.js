const express = require('express');
const app = express();
const { ApolloServer } = require('apollo-server');

const models = require('./models');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const server = new ApolloServer({
    typeDefs, 
    resolvers, 
    context: {
        models
    }
});

server
    .listen()
    .then(({ url }) => 
    console.log(`Server is running on ${url}`)
);