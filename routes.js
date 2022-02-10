const express = require("express")
const { UserModel, BookingModel, RoomModel } = require("./models")
const mongoose = require('mongoose')
const app = express()

// Get all users
app.get("/user", async (request, response) => {
    const users = await UserModel.find({})
  
    try {
      response.status(200).send(users)
    } catch (error) {
      response.status(500).send(error)
    }
  })

// Get single user
app.get("/user/:userId", async (request, response) => {

  if(!request.params.userId) return response.status(500).send(error)

  const user = await UserModel.findOne({ _id: request.params.userId })

  try {
    response.status(200).send(user)
  } catch (error) {
    response.status(500).send(error)
  }
})

// Create a user
app.post("/user", async (request, response) => {
    const user = new UserModel(request.body)
  
    try {
      await user.save()
      response.status(200).send(user)
    } catch (error) {
      response.status(500).send(error)
    }
})

// Get all Bookings
app.get("/booking", async (request, response) => {
  const booking = await BookingModel.find({}).sort([['start', 'ascending']])

  try {
    response.status(200).send(booking)
  } catch (error) {
    response.status(500).send(error)
  }
})

// Create a booking
app.post("/booking", async (request, response) => {
  const booking = new BookingModel(request.body)

  try {
    await booking.save()
    response.status(200).send(booking)
  } catch (error) {
    response.status(500).send(error)
  }
})

// Get bookings by room ID
app.get("/booking/room/:roomId", async (request, response) => {

  if(!request.params.roomId) return response.status(500).send(error)

  const roomId = mongoose.Types.ObjectId(request.params.roomId)
  
  const booking = await BookingModel.find({ 'room._id': roomId })

  // Mapping for Calendar view
  let bookings = booking.map((booking) => {
    return { 
      IsReadonly: true,
      IsAllDay: false,
      IsBlock: false,
      ...booking._doc }
  })

  try {
    response.status(200).send(bookings)
  } catch (error) {
    response.status(500).send(error)
  }
})

// Get bookings by user ID
app.get("/mybooking/:userId", async (request, response) => {

  if(!request.params.userId) return response.status(500).send(error)

  const userId = mongoose.Types.ObjectId(request.params.userId)
  
  const booking = await BookingModel.find({ 'user._id': userId })

  try {
    response.status(200).send(booking)
  } catch (error) {
    response.status(500).send(error)
  }
})

// Delete a booking by ID
app.delete("/mybooking/:id", async (request, response) => {

  if(!request.params.id && !request.headers.authorization) return response.status(500).send(error)

  await BookingModel.findOneAndDelete({ 
    'user._id': request.headers.authorization,
    _id: mongoose.Types.ObjectId(request.params.id)
  })

  try {
    response.status(200).send({})
  } catch (error) {
    response.status(500).send(error)
  }
})


// Get all rooms
app.get("/rooms", async (request, response) => {
  const users = await RoomModel.find({})

  try {
    response.status(200).send(users)
  } catch (error) {
    response.status(500).send(error)
  }
})

// Get room by id
app.get("/room/:id", async (request, response) => {

  if(!request.params.id) return response.status(500).send(error)

  const roomId = mongoose.Types.ObjectId(request.params.id)
  
  const room = await RoomModel.findOne({ '_id': roomId })

  try {
    response.status(200).send(room)
  } catch (error) {
    response.status(500).send(error)
  }
})


module.exports = app