                                           Namh Siddham

# Theatre Ticket Booking Application

## Models
-screeModel
{name:{mandatory},showName:{mandatory},{seatsBooked},{TotalSeatsBooked},maxSeats:{mandatory}}


-bookingModel
{screenId:{ref:screen},seatNo:{mandatory},{TotalSeatsBooked},SlotsAvailable:['Morning','Afternoon','Evening'],BookingStatus:{mandatory}}



## Screen API's

### POST/createScreen

- Create Screen Document with required details 
- Screen Details should not be more than or less than 3
- Return an HTTP status 201 if created successfully with a   body.
  `Endpoint: BASE_URL/createScreen`


### GET/screenDetails

- Returns all 3  screen details of the theatre in a collection
 `Endpoint: BASE_URL/screenDetails`





### UPDATE/updateScreen
- Updates a screen by changing  its  showName. You cannot Update any Other Details inside the screen.
- If you update any other field it will throw a message that you can only update the ShowName.
- Check if the screenId exists. If it doesn't, return an HTTP status 404 with a response body.
- Return an HTTP status 200 if updated successfully with a body. 
- Also make sure in the response you return the updated blog document. 
`Endpoint: BASE_URL/updateScreen`


## TicketBooking API's

### POST/CreateBooking

- Create Booking Document with required details 
- Enter the  booking details from request body
- Return an HTTP status 201 if created successfully with a   body.
  `Endpoint: BASE_URL/CreateBooking/:screenId`


### UPDATE/cancelBooking
- update the Document  when booking is cancelled
- No seat should be seen in booking document after booking status is cancelled.
- update the total seat number to 0 after the booking cancellation
- total screen count shold also be updated from screen document so that 
  cancelled seats should be available for booking to other users
`Endpoint: BASE_URL/cancelBooking/:bookingId/:screenId`


### Procedure to clone the Project

- git clone 
- npm i

