import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, address1, address2, city, province, agree } = req.body;

    // 1️⃣ Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // 2️⃣ Create new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,   // password will be hashed automatically (from User model pre-save hook)
      address1,
      address2,
      city,
      province,
      agree
    });

    // 3️⃣ Save user to DB
    await newUser.save();

    // 4️⃣ Create JWT token
    const token = jwt.sign(
      { userId: newUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // 5️⃣ Response
    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: newUser._id,
        firstName: newUser.firstName,
        email: newUser.email
      }
    });

  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
