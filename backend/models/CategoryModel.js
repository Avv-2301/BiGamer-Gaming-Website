const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    categoryName:{
        type:String,
        required:true
    },
    games:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Games'
        },
    ]
    
})