const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const mongoose = require("mongoose");

const startServer = async () => {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app: app }); // Add  to customize the path
  app.use((req, res) => {
    res.send("Hello from espress server");
  });
  await mongoose.connect('mongodb://localhost:27017/post_db', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log('Mongoose connected...');
  app.listen(4000, () => {
    console.log("Server is running");
  });
};

startServer();
