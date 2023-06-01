const express = require('express')

const router = express.Router()

const screenController = require('../controller/screenController')

const bookingController = require('../controller/BookingController')


router.post('/createScreen',screenController.showDetails)
router.get('/screenDetails',screenController.getScreenDetails)
router.put('/updateScreen/:screenId',screenController.updateScreenDetails)
router.post('/createBooking',bookingController.ticketBooking)
router.put('/cancelBooking/:bookingId/:screenId',bookingController.cancelTicket)

module.exports = router


