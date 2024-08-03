const express = require('express');
const app = express();
const database = require('./config/database');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/userRoutes');  
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config()


const PORT = process.env.PORT || 4000

database.connect()

app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin:"http://localhost:4000",
		methods: ["GET", "POST", "PUT", "DELETE"],
    	allowedHeaders: ["Content-Type", "Authorization"],
		credentials:true,
	})
)

app.use('/api/v1/userauth',userRoutes)

app.get('/', (req,res) =>{
    return res.json({
        success:true,
        message:'Your server is up and running.....'
    })
})

app.listen(PORT,() =>{
    console.log(`Your server is running on ${PORT} Number`)
})