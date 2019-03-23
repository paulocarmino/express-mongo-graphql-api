import { mergeTypes } from "merge-graphql-schemas";
import User from "./User/";
import Post from "./Post/";


const typeDefs = [User, Post];

export default mergeTypes(typeDefs, { all: true });