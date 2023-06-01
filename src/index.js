const express = require('express')
const mongoose = require('mongoose')

const route = require('./routes/routes')

const app = express()

app.use(express.json())


mongoose.connect('mongodb+srv://HarshJain:harsh321@cluster0.dwkz9.mongodb.net/MovieTheater-db').
then(()=>console.log('mongodb is connected')).
catch((err)=>console.log(err))


app.use("/",route)


app.listen(3000||process.env.PORT,function(){
     console.log("aap is running on PORT"||3000);
})



