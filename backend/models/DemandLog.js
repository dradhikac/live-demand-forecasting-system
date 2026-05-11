const mongoose = require("mongoose")

const demandLogSchema = new mongoose.Schema({

  product_name: String,

  predicted_sales: Number,

  created_at: {
    type: Date,
    default: Date.now
  }

})

module.exports =
mongoose.model("DemandLog", demandLogSchema)