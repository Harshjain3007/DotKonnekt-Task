const screenModel = require('../Models/screenModel')
const mongoose = require('mongoose')



const showDetails = async function(req,res){
    try{
        let screenData = req.body
   let {name,showName,seatsBooked,MaxSeats}   = screenData
     const savedData = await screenModel.create(screenData)
     return res.status(201).json(savedData)
    }catch(error){
        res.status(500).send({status:false,msg:error.msg})
    }
}




const getScreenDetails = async function(req,res){
    try{
    let screendetails = await screenModel.find()
    return res.status(200).json(screendetails)
    }catch(error){
        res.status(500).send({status:false,msg:error.msg})
    }
}




const updateScreenDetails = async function(req,res){
    try{
    let screenId = req.params.screenId
    const screenIdExist = await screenModel.find({_id:screenId})
    if(!screenIdExist){return res.status(400).send('No such screen Exist')}
     let updateScreenData= req.body
     let {showName,...otherFields} = updateScreenData

     if(Object.keys(otherFields).length>0){
       return res.status(400).send({message:'you can only update show name  in the document'})
     }
  let updatedScreenData= await screenModel.findOneAndUpdate({_id:screenId},{...updateScreenData},{new:true})
     return res.status(201).json(updatedScreenData)
    }catch(error){
        res.status(500).send({status:false,msg:error.message})
    }
}





















module.exports = {showDetails,getScreenDetails,updateScreenDetails}

