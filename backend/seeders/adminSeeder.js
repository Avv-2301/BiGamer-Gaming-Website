const User = require('../models/User');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
require('dotenv').config({path: '../.env'});


const createAdmin = async() =>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('Connected to database');

        const existingUser = await User.findOne({accountType:'Admin'});
        const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

        if(!existingUser){
        const adminCredentials = {
            firstName:process.env.ADMIN_FIRSTNAME,
            lastName:process.env.ADMIN_LASTNAME,
            email:process.env.ADMIN_EMAIL,
            password: hashedPassword,
            accountType: 'Admin',
            image: "https://api.dicebear.com/5.x/initials/svg?seed"
        }

        await User.create(adminCredentials);
        console.log('Admin Created Successfully')
    }
    else{
        console.log('Admin already exists');
    }
    await mongoose.disconnect();
    }
    catch(error){
        console.log(error)
        console.log('error in database connection');
        process.exit(1)
    }
}

createAdmin().then(() =>{
    console.log('Admin seeding Completed');
    process.exit(0)
})
.catch((error) =>{
    console.log('Admin seeding not completed', error)
    process.exit(1)
})