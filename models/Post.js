import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const PostSchema = new Schema({
  user: {
    name: String,
    email: String
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    unique: true,
    required: true
  }
});

export default mongoose.model("Post", PostSchema);