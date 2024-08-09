const bcrypt = require("bcrypt");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const user = await User.findOne({ accountType:'Admin' });

    if(user){
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      console.log(isPasswordCorrect)

      if (isPasswordCorrect) {
        const token = jwt.sign(
          { email: user.email, id: user._id, accountType: user.accountType },
          process.env.JWT_SECRET,
          {
            expiresIn: "24h",
          }
        )

        user.token = token;
        user.password = undefined;

        const options = {
          expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
          httpOnly: true,
        };

        res.cookie("token", token, options).status(200).json({
          success: true,
          token,
          user,
          message: "Login successful",
        });
      } else {
        return res.status(400).json({
          success: false,
          message: "Password is incorrect",
        });
      }
    }else{
      return res.status(401).json({
        success:false,
        message:'User is not Admin'
      })
    }
      
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Login failure",
    });
  }
};
