const mongoose = require("mongoose");

const gamesSchema = new mongoose.Schema(
    {
        gameName:{
            type:String,
            required:true
        },
        gameDescription:{
            type:String,
            required:true
        },
        Price:{
            type:Number
        },
        thumbnail:[{
            type:String
        }],
        minimumRequirements:{
            type:String,
            required:true
        },
        maximumRequirement:{
            type:String,
            required:true
        },
        library:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"User"
        },
        ratingsAndReview:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"RatingAndReview"
        }],
        category:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Category"
        },
        createdAt:{
            type:Date,
            default:Date.now,
        }
    }
)

module.exports = mongoose.model("Games", gamesSchema)