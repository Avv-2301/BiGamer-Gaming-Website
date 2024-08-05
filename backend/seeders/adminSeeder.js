const User = require('../models/User')
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
require('dotenv').config();



const createAdmin = async(req,res) =>{
    await mongoose.connect(process.env.MONGODB_URL)
    .then(() =>console.log('CONNECTED TO DATABASE'))
    .catch((error) =>{
        console.log(error)
        console.log('DB CONNECTION FAILED')
        process.exit(1);
    })

    const existingAdmin = await User.findOne({role:'Admin'})

    if(!existingAdmin){
        const adminCredentials = {
            firstName:process.env.ADMIN_FIRSTNAME,
            lastName:process.env.ADMIN_LASTNAME,
            email:process.env.ADMIN_EMAIL,
            password:process.env.ADMIN__PASSWORD,
            role:'Admin'
        }

        const hashedPassword = await bcrypt.hash(adminCredentials.password, 10);
        adminCredentials.password = hashedPassword;

        await User.create(adminCredentials);
        console.log('ADMIN CREATED SUCCESSFULLY');
    }
    else{
        console.log('ADMIN NOT CREATED');
    }
}

createAdmin.then(() =>{
    console.log('ADMIN SEEDING COMPLETED');
    process.exit(0);
}).catch((error) =>{
  console.error("Error seeding admin:", err);
  process.exit(1);
})