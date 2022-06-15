const mongoose = require("mongoose");

const AcademySignUpFormSchema = new mongoose.Schema({
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
  stack: [
    {
      type: String,
      required: true,
    },
  ],
});

const AcademySignUpForm = mongoose.model(
  "AcademySignUpForm",
  AcademySignUpFormSchema
);

module.exports = AcademySignUpForm;
