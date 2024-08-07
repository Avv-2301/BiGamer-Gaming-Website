const bcrypt = require("bcrypt");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
require('dotenv').config()

exports.adminAuth = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(204).json({
        success: false,
        message: "All fields are required",
      });
    }

    const user = await User.findOne({ email });

    if (user) {
      if (user.accountType === "Admin") {
        await bcrypt.compare(password, user.password);
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
          http: true,
          expiresIn: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        };

        res.cookie("token", token, options).sttus(200).json({
          success: true,
          user,
          token,
          message: "Admin logged In Successfully",
        });
      } else {
        return res.status(400).json({
          success: false,
          message: "Password is incorrect",
        });
      }
    } else {
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
