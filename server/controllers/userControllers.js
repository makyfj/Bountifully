import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  // get email and password with body parser
  const { email, password } = req.body;

  // find user
  const user = await User.findOne({ email });

  // match plain text password against encrypted password
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: null,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

export { authUser };
