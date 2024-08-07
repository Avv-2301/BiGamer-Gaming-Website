const bcrypt = require("bcrypt");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
require('dotenv').config()

exports.adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const user = await User.findOne({ email });

    if (user) {
      if (user.accountType === "Admin") {
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
          return res.status(400).json({
            success: false,
            message: "Password is incorrect",
          });
        }

        const token = jwt.sign(
          {
            email: user.email,
            id: user._id,
            role: user.accountType,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "12h",
          }
        );

        user.token = token;
        user.password = undefined;

        const options = {
          httpOnly: true,
          expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        };

        // Debugging: log the token and cookie options
        console.log("Token created:", token);
        console.log("Cookie options:", options);

        return res.cookie("token", token, options).status(200).json({
          success: true,
          user,
          token,
          message: "Admin logged In Successfully",
        });
      } else {
        return res.status(400).json({
          success: false,
          message: "User is not an admin",
        });
      }
    } else {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while validating the token",
    });
  }
};
