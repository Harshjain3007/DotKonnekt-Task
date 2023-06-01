const screenModel = require('../Models/screenModel')

const bookingModel = require('../Models/bookingModel')

const screenController = require('../controller/screenController')
const mongoose = require('mongoose')

 

const  ticketBooking = async function(req,res){
  try{
    let data = req.body
    let {screenId,seatNo,Slot,bookingStatus} =data
    const screenIdExist = await screenModel.findOne({_id:screenId}).populate('showName')
    if(!screenIdExist){return res.status(400).send({status:false,message:"No such screen found"})}
     let totalbookings = screenIdExist.TotalSeatsBooked
    let  maxCapacity = screenIdExist.MaxSeats
     if(totalbookings==maxCapacity){
      return res.status(400).send('Housefull for this slot.Please book next Slot')
    } 
    
      const totalseatsBooked = seatNo.length
      for(let i=0;i<seatNo.length;i++){
    if (screenIdExist.seatsBooked.includes(seatNo[i])) {
          return res.status(400).send(`Seat ${seatNo[i]} is already booked.`);
         }
  }
   const booking = new bookingModel({
    screenId: screenId,
    seatNo: seatNo,
    TotalSeatsBooked: totalseatsBooked,
    Slot: Slot,
    bookingStatus: bookingStatus,
    movieName:screenIdExist.showName
  })
    
     await booking.save();
     
    screenIdExist.seatsBooked.push(...seatNo.flat())
     //screenIdExist.seatsBooked.concat(seatNo)

       screenIdExist.TotalSeatsBooked+=totalseatsBooked
      await screenIdExist.save()

     return res.status(201).json(booking)
}catch(error){
  return res.status(500).send({message:error.message})
}
 
}




const cancelTicket = async function(req,res){
     try{
      let bookingId = req.params.bookingId
      let screenId = req.params.screenId
      let screenIdExist = await screenModel.findById({_id:screenId})


      let findBookingId = await bookingModel.findById({_id:bookingId})
      if (!findBookingId) {
        return res.status(404).json({ message: "Booking not found" });
      }

       if(findBookingId.bookingStatus==='Cancelled'){
        return res.status(400).send({message:'booking already cancelled'})
       }
          
       findBookingId.bookingStatus = 'Cancelled'
        findBookingId.seatNo =[]
        findBookingId.TotalSeatsBooked = 0
         await findBookingId.save()
    let VacantCancelledSeats =  screenIdExist.seatsBooked
     for(let i=0;i<VacantCancelledSeats.length;i++){
      findBookingId.seatNo.includes(VacantCancelledSeats[i])
      VacantCancelledSeats.splice(i,1)
     }
         screenIdExist.TotalSeatsBooked= screenIdExist.seatsBooked.length
          await screenIdExist.save()
         return res.status(400).send({message:'booking cancelled'})
     }catch(error){
      return res.status(500).send({message:error.message})
     }
}



module.exports= {ticketBooking,cancelTicket}