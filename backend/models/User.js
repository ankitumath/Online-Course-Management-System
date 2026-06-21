import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },

    email: {
  type: String,
  required: [true, "Email is required"],
  unique: true,
  trim: true,
  lowercase: true,
  match: [
    /^\S+@\S+\.\S+$/,
    "Please enter a valid email address"
  ]
},

    password: {
      type: String,
      required: [true, "Password is required"],
    },

    role: {
      type: String,
      enum: ["student", "admin"],
      default: "student",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;