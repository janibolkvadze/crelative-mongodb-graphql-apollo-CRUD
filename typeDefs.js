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
    head: String
    sub_head: String
    utm_source: String
    utm_campaign: String
    utm_medium: String
    utm_content: String
  }

  type AcademySignUpForm {
    id: ID
    name: String
    email: String
    phone: String
    stack: [String]
  }

  type Query {
    getAllQuotes: [Quote]
    getQuote(id: ID): Quote
    getAllAcademySignUpForms: [AcademySignUpForm]
  }

  input QuoteInput {
    name: String
    email: String
    phone: String
    project: String
    services: [String]
    nda: Boolean
    head: String
    sub_head: String
    utm_source: String
    utm_campaign: String
    utm_medium: String
    utm_content: String
  }

  input AcademySignUpFormInput {
    name: String
    email: String
    phone: String
    stack: [String]
  }

  type Mutation {
    createQuote(quote: QuoteInput): Quote
    createAcademySignUpForm(form: AcademySignUpFormInput): AcademySignUpForm
    deleteQuote(id: ID): String
    updateQuote(id: ID, quote: QuoteInput): Quote
  }
`;

module.exports = typeDefs;