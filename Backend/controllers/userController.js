
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
// Register
export const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, address1, address2, city, province, agree } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const user = new User({
      firstName,
      lastName,
      email,
      password,   
      address1,
      address2,
      city,
      province,
      agree
    });

    await user.save();

    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(201).json({ message: "User registered successfully!", token, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error registering user" });
  }
};

// Login
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "Invalid email or password" });

 const isMatch = await user.comparePassword(password);
if (!isMatch) return res.status(404).json({ message: "Invalid email or password" });


    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ message: "Logged in successfully!", token, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error logging in" });
  }
};


// Get profile
export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Update profile
export const updateProfile = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.user.id, req.body, { new: true });
    res.json({ message: "Profile updated", user: updatedUser });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Delete profile
export const deleteProfile = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user.id);
    res.json({ message: "Profile deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};