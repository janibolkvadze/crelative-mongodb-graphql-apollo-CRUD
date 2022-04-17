const {gql} = require("apollo-server-express");
const typeDefs = gql`
  type Quote {
    id: ID
    name: String
    email: String
    phone: String
    project: String
    services: [String]
    nda: Boolean
    agreeToPrivacyPolicy: Boolean
  }

  type Query {
    getAllQuotes: [Quote]
    getQuote(id: ID): Quote
  }

  input QuoteInput {
    name: String
    email: String
    phone: String
    project: String
    services: [String]
    nda: Boolean
    agreeToPrivacyPolicy: Boolean
  }

  type Mutation {
    createQuote(quote: QuoteInput): Quote
    deleteQuote(id: ID): String
    updateQuote(id: ID, quote: QuoteInput): Quote
  }
`;

module.exports = typeDefs;