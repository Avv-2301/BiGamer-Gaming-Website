const Games = require("../models/Games");
const User = require("../models/User");
const Category = require("../models/CategoryModel");
const { imageUploadToCloudinary } = require("../utils/imageUploader");

exports.createGame = async (req, res) => {
  try {
    const userId = req.user.id;

    let = {
      gameName,
      gameDescription,
      price,
      category,
      minimumRequirements,
      maximumRequirement,
      currentStatus,
    } = req.body;

    const thumbanil = req.files.thumbnailImage;
    const images = req.files.additionalImages;

    if (
      !gameName ||
      !gameDescription ||
      !price ||
      !category ||
      !minimumRequirements ||
      !maximumRequirement ||
      !thumbanil ||
      !images
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    if(!currentStatus || currentStatus === undefined){
        currentStatus = "Draft"
    }
    const adminDetails = await user.find(userId, {
        accountType: "Admin"
    })
    if(!adminDetails){
        return res.status(404).json({
            success:false,
            message:'Admin Not Found'
        })
    }
    
    const categoryDetails = await Category.find(category);
    if(!categoryDetails){
        return res.status(404).json({
            success:false,
            message:"Category not found"
        })
    }

    const thumbnailImage = await imageUploadToCloudinary(
        thumbnail,
        process.env.FOLDER_NAME
    )
    console.log(thumbnailImage,'thumbnail url')

    const Images = await imageUploadToCloudinary(
        additionalImages,
        process.env.FOLDER_NAME
    )
    console.log(Images,'Additional Images')

    const newGame = await Games.create({
        gameName,
        gameDescription,
        price,
        category,
        currentStatus:currentStatus,
        category: categoryDetails._id,
        thumbnail: thumbnailImage.secure_url,
        images: Images.secure_url,
        maximumRequirement,
        minimumRequirements
    })

    const categoryDetails2 = await Category.findByIdAndUpdate(
        {_id: category},
        {
            $push:{
                games: newGame._id
            }
        },
        {new: true}
    )

    console.log(categoryDetails2,'game is added to category')
    return res.status(200).json({
        success: true,
        data: newGame,
        message: 'Game created successfully'
    })

  } catch (error) {
    console.log(error, "Create game error");
    return res.status(500).json({
      success: false,
      error: error.message,
      message:'Game not created'
    });
  }
};
