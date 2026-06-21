import User from "../models/User.js";
import bcrypt from "bcryptjs";

import generateToken from "../utils/generateToken.js";

/*
  REGISTER USER
*/
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validation

    if (!name || !email || !password) {
  return res.status(400).json({
    success: false,
    message: "All fields are required",
  });
}

if (password.length < 6) {
  return res.status(400).json({
    success: false,
    message:
      "Password must be at least 6 characters",
  });
}

    // Check existing user

    const existingUser = await User.findOne({
      email,
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // Hash password

    const salt = await bcrypt.genSalt(10);

    const hashedPassword =
      await bcrypt.hash(password, salt);

    // Create user

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
  LOGIN USER
*/

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and Password required",
      });
    }

    // Find user

    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Compare password

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = generateToken(user._id);

res.status(200).json({
  success: true,
  message: "Login successful",
  token,
  user: {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  },
});
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};