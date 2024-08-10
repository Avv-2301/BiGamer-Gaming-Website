const Category = require('../models/CategoryModel');

exports.createCategory = async(req, res) =>{
    try{
        const {categoryName} = req.body;

        if(!categoryName){
            return res.status(401).json({
                success:false,
                message:'CategoryName is required'
            })
        }
        const category = await Category.create({
            name:categoryName
        })
        console.log(category);
        return res.status(200).json({
            success:true,
            message:'Category created successfully'
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message: error.message,
        })
    }
}


exports.showCategory = async(req, res) =>{
    try{
        console.log('INSIDE SHOW ALL CATEGORY');
        const allCategory = await Category.find({})
        return res.status(200).json({
            success:true,
            message:'All category fetched successflly',
            data: allCategory
        })
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}