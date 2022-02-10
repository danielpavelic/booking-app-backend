const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

const BookingSchema = new mongoose.Schema({
  room: {
      _id: {
        type: mongoose.Types.ObjectId,
        required: true,
      },
      ref: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      }
    },
    start: {
      type: Date,
      required: true,
    },
    end: {
      type: Date,
      required: true,
    },
    user: {
      _id: {
        type: mongoose.Types.ObjectId,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
    },
  })

const RoomSchema = new mongoose.Schema({
  ref: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
})


const UserModel = mongoose.model("users", UserSchema, "users")
const BookingModel = mongoose.model("bookings", BookingSchema, "bookings")
const RoomModel = mongoose.model("rooms", RoomSchema, "rooms")
  
module.exports = {
  BookingModel, 
  UserModel,
  RoomModel
}