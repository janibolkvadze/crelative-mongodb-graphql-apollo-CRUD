const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: false,
  },
  project: {
    type: String,
    required: false,
  },
  services: {
    type: [String],
    required: false,
  },
  nda: {
    type: Boolean,
    required: false,
  },
  head: {
    type: String,
    required: false,
  },
  sub_head: {
    type: String,
    required: false,
  },
  utm_source: {
    type: String,
    required: false,
  },
  utm_campaign: {
    type: String,
    required: false,
  },
  utm_medium: {
    type: String,
    required: false,
  },
  utm_content: {
    type: String,
    required: false,
  },
});

const Quote = mongoose.model('quote', QuoteSchema);

module.exports = Quote;
