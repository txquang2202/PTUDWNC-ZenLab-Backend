import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  role: Number,
  img: String,
  fullname: String,
  birthdate: Date,
  phone: String,
  gender: String,
  street: String,
  city: String,
});

// Tạo một Model từ Schema
const User = mongoose.model("users", userSchema);

export default User;
