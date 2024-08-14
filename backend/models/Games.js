const mongoose = require("mongoose");

const gamesSchema = new mongoose.Schema({
  gameName: {
    type: String,
    required: true,
  },
  gameDescription: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required:true
  },
  thumbnail: {
    type: String,
    required:true
  },
  images: [
    {
      type: String,
      required:true
    },
  ],
  minimumRequirements: {
    type: String,
    required: true,
  },
  maximumRequirement: {
    type: String,
    required: true,
  },
  usersEnrolled:{
    type: mongoose.Schema.Types.ObjectId,
    required:true,
    ref:'User'
  },
  currentStatus: {
    type: String,
    enum: ["Draft", "Published", "Coming Soon"],
  },
  library: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  ratingsAndReview: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RatingAndReview",
    },
  ],
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required:true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Games", gamesSchema);
