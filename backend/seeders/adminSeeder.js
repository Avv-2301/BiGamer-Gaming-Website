const User = require('../models/User')
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
require('dotenv').config();



const createAdmin = async(req,res) =>{
    await mongoose.connect("mongodb+srv://akshatvijayvergiya64:NA09rgAFQbJqSdY0@cluster0.ds0fsxj.mongodb.net/BiGamerDatabase")
    .then(() =>console.log('CONNECTED TO DATABASE'))
    .catch((error) =>{
        console.log(error)
        console.log('DB CONNECTION FAILED')
        process.exit(1);
    })

    const existingAdmin = await User.findOne({role:'Admin'})

    if(!existingAdmin){
        const user = await User.create({
            firstName: process.env.ADMIN_FIRSTNAME,
            lastName: process.env.ADMIN_LASTNAME,
            email: process.env.ADMIN_EMAIL,
            password: process.env.ADMIN_PASSWORD,
            accountType: 'Admin'
        })

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(adminCredentials.password, salt);
        user.password = hashedPassword;

        console.log('ADMIN CREATED SUCCESSFULLY');
    }
    else{
        console.log('ADMIN NOT CREATED');
    }
    await mongoose.disconnect();
}

createAdmin().then(() =>{
    console.log('ADMIN SEEDING COMPLETED');
    process.exit(0);
}).catch((error) =>{
  console.error("Error seeding admin:", error);
  process.exit(1);
});