const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const bookingSchema = new mongoose.Schema({
    screenId:{
        type:ObjectId,
        required:true,
        ref:'screen',
        trim:true
     },

    seatNo:[],
    
    TotalSeatsBooked:{
        type:Number
    },

    Slot:{
         type:String,
         required:true,
         enum:['Morning','Afternoon','Evening']
    },

    movieName:{
        type:String,
    },
    
    bookingStatus:{
        type:String,
        required:true,
        enum:['Confirmed','Cancelled']
    }

},{timestamps:true})


module.exports = mongoose.model('booking',bookingSchema)