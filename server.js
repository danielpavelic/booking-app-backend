const express = require("express")
const cors = require('cors')

require('dotenv').config()

const mongoose = require("mongoose")
const Router = require("./routes")

const app = express()

const PORT = process.env.PORT
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const CLUSTER = process.env.CLUSTER
const DB_NAME = process.env.DB_NAME

app.use(cors({
  origin: '*'
}))

app.use(express.json())
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${CLUSTER}/${DB_NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error: "))
db.once("open", function () {
  console.log("DB connected successfully")
})

app.use(Router)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});