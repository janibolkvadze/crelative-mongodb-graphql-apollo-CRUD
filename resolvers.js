const Post = require("./models/Post.model");

const resolvers = {
  Query: {
    hello: () => {
      return "Hello world!";
    },
    getAllPosts: async () => {
      return await Post.find();
    },
    getPost: async (parent, args, context, info) => {
      const { id } = args;

      return Post.findById(id);
    },
  },
  Mutation: {
    createPost: async (parent, args, context, info) => {
      const { title, description } = args.post;
      const post = new Post({ title, description });

      await post.save();

      return post;
    },
    deletePost: async (parent, args, context, info) => {
      const { id } = args;

      await Post.findByIdAndDelete(id);
      return `Post ${id} deleted`;
    },
    updatePost: async (parent, args, context, info) => {
      const { id } = args;
      const { title, description } = args.post;
      const updates = {};

      if (title !== undefined) {
        updates.title = title;
      }
      if (description !== undefined) {
        updates.description = description;
      }
      const post = await Post.findByIdAndUpdate(id, updates, { new: true }); // { new: true } <-- return the new object

      return post;
    }
  },
};

module.exports = resolvers;