const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const mongoose = require("mongoose");
const https = require("https");
const http = require("http");
const fs = require('fs');

const startServer = async () => {
  const configurations = {
    production: { ssl: true, port: 8000, hostname: 'api.crelative.com' },
    development: { ssl: false, port: 8000, hostname: 'localhost' },
  };

  const environment = process.env.NODE_ENV || 'development';
  const config = configurations[environment];
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true
  });

  await server.start();
  server.applyMiddleware({ app: app }); // Add  path: '/' to customize the path

  app.use((req, res) => {
    res.send("Hello from espress server");
  });

  await mongoose.connect('mongodb://localhost:27017/quotes_db', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log('Mongoose connected...');

  let httpServer;
  if (config.ssl) {
    // Assumes certificates are in a .ssl folder off of the package root.
    // Make sure these files are secured.
    httpServer = https.createServer(
      {
        key: fs.readFileSync('/etc/letsencrypt/live/api.crelative.com/privkey.pem'),
        cert: fs.readFileSync('/etc/letsencrypt/live/api.crelative.com/cert.pem')
      },

      app,
    );
  } else {
    httpServer = http.createServer(app);
  }

  await new Promise(resolve =>
    httpServer.listen({ port: config.port }, resolve)
  );

  console.log(
    '🚀 Server ready at',
    `http${config.ssl ? 's' : ''}://${config.hostname}:${config.port}${
      server.graphqlPath
    }`
  );

  return { server, app };
};

startServer();
