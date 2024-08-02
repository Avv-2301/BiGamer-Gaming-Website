const jwt = require('jsonwebtoken');
const user = require('../models/User');
const User = require('../models/User');
require('dotenv').config();

exports.auth = async(req,res,next) =>{
    try{
        const token = 
        req.cookies.token ||
        req.body.token ||
        req.header("Authorization").replace("Bearer ", "")

        if (!token) {
			return res.status(401).json({ success: false, message: `Token Missing` });
		}

        try{
            const decode = await jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode)

            req.user = decode
        }
        catch(error){
            console.log(error)
            return res.status(401).json({
                success:false,
                message:"Token is invalid"
            })
        }
        next();
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:`Something Went Wrong While Validating the Token`
        })
    }
}


exports.isUser = async(req,res,next) =>{
    try{
        const userDetails = await User.findOne({email:req.user.email})

        if(userDetails.accountType !== 'User'){
            return res.status(401).json({
                success:false,
                message:'It is a protected route for User'
            })
        }
        next()
    }catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:`User role can't be verified`
        })
    }
}



exports.isAdmin = async(req,res,next) =>{
    try{
        const userDetails = await User.findOne({email:req.user.email})

    if(!userDetails.accountType !== 'Admin'){
        return res.status(401).json({
            success:false,
            message:'It is a protected route for Admin'
        })
    }
    next()
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:`User role can't be verified`
        })
    }
}