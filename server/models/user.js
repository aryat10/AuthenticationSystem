const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true, min: 4 },
  password: { type: String, required: true },
  email: { type: String, unique: true }, 
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }] 
}, { timestamps: true });


const UserModel = model("User", userSchema);

module.exports = UserModel;