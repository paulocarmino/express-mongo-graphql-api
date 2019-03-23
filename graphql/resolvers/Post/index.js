// The User schema.
import Post from "../../../models/Post";

export default {
  Query: {
    post: (root, args) => {
      return new Promise((resolve, reject) => {
        Post.findOne(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    posts: () => {
      return new Promise((resolve, reject) => {
        Post.find({})
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    }
  },
  Mutation: {
    addPost: (root, { user, title, body }) => {
      const newPost = new Post({ user, title, body });

      return new Promise((resolve, reject) => {
        newPost.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    editUser: (root, { _id, name, email }) => {
      // return new Promise((resolve, reject) => {
      //   User.findOneAndUpdate({ _id }, { $set: { name, email } }).exec(
      //     (err, res) => {
      //       err ? reject(err) : resolve(res);
      //     }
      //   );
      // });
    },
    deleteUser: (root, args) => {
      // return new Promise((resolve, reject) => {
      //   User.findOneAndRemove(args).exec((err, res) => {
      //     err ? reject(err) : resolve(res);
      //   });
      // });
    }
  }
};