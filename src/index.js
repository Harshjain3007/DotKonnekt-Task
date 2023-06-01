const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const route = require('./routes/routes')

const app = express()

app.use(express.json())

dotenv.config();

mongoose.connect(process.env.DB_URL, ).then(() => console.log('MongoDB is connected')).catch((err) => console.log(err));

app.use("/",route)

app.listen(3000||process.env.PORT,function(){
     console.log("aap is running on PORT"||3000);
})



