const mongoose = require("mongoose")

const productViewSchema = new mongoose.Schema({

  product_name: String,

  viewed_at: {
    type: Date,
    default: Date.now
  },

  device: String

})

module.exports =
mongoose.model("ProductView", productViewSchema)