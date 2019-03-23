export default `
  type Post {
    _id: String!
    user: User
    title: String!
    body: String!
  }
  type Query {
    post(id: String!): Post
    posts: [Post]
  }
  type Mutation {
    addPost(user: String!, title: String!, body: String!): Post
    editPost(_id: String, title: String!, body: String!): Post
    deletePost(_id: String): Post
  }
`;