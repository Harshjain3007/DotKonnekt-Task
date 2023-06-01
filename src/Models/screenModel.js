const mongoose = require('mongoose')


const screenSchema = new mongoose.Schema({
        name:{
            type:String,
            unique:true,
           required:true
        },
      
        showName:{
            type:String,
            required:true,
            unique:true
        },
        seatsBooked:[],
        TotalSeatsBooked:{
            type:Number,
            default:0
        },
        MaxSeats:{
           type:Number,
          required:true,
        },
  
},{timestamps:true})




module.exports = mongoose.model('screen',screenSchema)