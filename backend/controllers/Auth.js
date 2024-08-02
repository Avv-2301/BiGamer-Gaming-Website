const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signUp = async (req, res) => {
  try {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      return res.status(204).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (password == confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password and confirm password not matched",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exist",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      accountType: User,
      image: "https://api.dicebear.com/5.x/initials/svg?seed",
    });

    return res.status(200).json({
      success: true,
      message: "User created succesfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.atatus(400).json({
        success: false,
        message: "User not present Please register first",
      });
    }

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        {
          email: user.email,
          id: user._id,
          role: user.role,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "24h",
        }
      );

      user.token = token
      user.password = undefined

      const options = {
        expires:new Date(Date.now()+ 3 * 24 * 60 * 60 * 1000),
        httpOnly:true
      } 

      res.cookie('token', token, options).status(200).json({
        success:true,
        token,
        user,
        message:'Login successfull'
      })
    }
    else{
        return res.status(400).json({
            success:false,
            message:'Password is incorrect'
        })
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({
        success:false,
        message:error.message
    })
  }
};
