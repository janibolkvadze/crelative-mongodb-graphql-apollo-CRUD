const Quote = require("./models/Quote.model");
const AcademySignUpForm = require("./models/AcademySignUpForm.model");

const resolvers = {
  Query: {
    getAllQuotes: async () => {
      return await Quote.find();
    },
    getQuote: async (parent, args, context, info) => {
      const { id } = args;

      return Quote.findById(id);
    },
    getAllAcademySignUpForms: async () => {
      return await AcademySignUpForm.find();
    },
  },
  Mutation: {
    createQuote: async (parent, args, context, info) => {
      const { name, email, phone, project, services, nda, head, sub_head, utm_source, utm_campaign, utm_medium, utm_content } = args.quote;
      const quote = new Quote({ name, email, phone, project, services, nda, head, sub_head, utm_source, utm_campaign, utm_medium, utm_content });

      await quote.save();

      return quote;
    },
    createAcademySignUpForm: async (parent, args, context, info) => {
      const { name, email, phone, stack } = args.form;
      const form = new AcademySignUpForm({ name, email, phone, stack });

      await form.save();

      return form;
    },
    deleteQuote: async (parent, args, context, info) => {
      const { id } = args;

      await Quote.findByIdAndDelete(id);
      return `Quote ${id} deleted`;
    },
    updateQuote: async (parent, args, context, info) => {
      const { id } = args;

      const { name, email, phone, project, services, nda, head, sub_head, utm_source, utm_campaign, utm_medium, utm_content } = args.quote;
      const updates = {};

      if (name !== undefined) {
        updates.name = name;
      }
      if (email !== undefined) {
        updates.email = email;
      }
      if (phone !== undefined) {
        updates.phone = phone;
      }
      if (project !== undefined) {
        updates.project = project;
      }
      if (services !== undefined) {
        updates.services = services;
      }
      if (nda !== undefined) {
        updates.nda = nda;
      }
      if (head !== undefined) {
        updates.head = head;
      }
      if (sub_head !== undefined) {
        updates.sub_head = sub_head;
      }
      if (utm_source !== undefined) {
        updates.utm_source = utm_source;
      }
      if (utm_campaign !== undefined) {
        updates.utm_campaign = utm_campaign;
      }
      if (utm_medium !== undefined) {
        updates.utm_medium = utm_medium;
      }
      if (utm_content !== undefined) {
        updates.utm_content = utm_content;
      }
      const quote = await Quote.findByIdAndUpdate(id, updates, { new: true }); // { new: true } <-- return the new object

      return quote;
    }
  },
};

module.exports = resolvers;
