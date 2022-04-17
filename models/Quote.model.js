const mongoose = require("mongoose");

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
    nda: {
        type: Boolean,
        required: false,
    },
    agreeToPrivacyPolicy: {
        type: Boolean,
        required: true,
    },
});

const Quote = mongoose.model('quote', QuoteSchema);

module.exports = Quote;