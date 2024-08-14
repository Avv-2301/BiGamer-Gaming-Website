const express = require('express');
const app = express();
const database = require('./config/database');
const cookieParser = require('cookie-parser');
const userRoute = require('./routes/userRoutes');  
const bodyParser = require('body-parser');
const cors = require('cors');
const adminRoutes = require('./routes/adminRoutes/adminRoute');
const gameRoute = require('./routes/gameRoutes');
const {cloudinaryConnect} = require('./config/cloudinary');
const fileUpload = require('express-fileupload');

require('dotenv').config()


const PORT = process.env.PORT || 4000

database.connect()

app.use(bodyParser.json());
app.use(cookieParser());
app.use(
	cors({
		origin:"http://localhost:4000",
		methods: ["GET", "POST", "PUT", "DELETE"],
    	allowedHeaders: ["Content-Type", "Authorization"],
		credentials:true,
	})
)

app.use(
	fileUpload({
		useTempFiles:true,
		tempFileDir:"/tmp",
	})
)
cloudinaryConnect();

app.use('/api/v1/userauth',userRoute)
app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/game', gameRoute);

app.get('/', (req,res) =>{
    return res.json({
        success:true,
        message:'Your server is up and running.....'
    })
})

app.listen(PORT,() =>{
    console.log(`Your server is running on ${PORT} Number`)
})