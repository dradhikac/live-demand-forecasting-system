require("dotenv").config()

const express = require("express")
const cors = require("cors")

require("./config/mysql")
require("./config/mongodb")


const productRoutes = require("./routes/productRoutes")
const analyticsRoutes =
require("./routes/analyticsRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api", productRoutes)
app.use("/api", analyticsRoutes)

app.get("/", (req, res) => {
  res.send("Backend Server Running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

const mlRoutes =
require("./routes/mlRoutes")
app.use("/api", mlRoutes)