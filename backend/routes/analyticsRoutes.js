const express = require("express")
const router = express.Router()

const ProductView =
require("../models/ProductView")

router.post("/view-product", async (req, res) => {

  try {

    const newView = new ProductView({

      product_name: req.body.product_name,

      device: req.body.device

    })

    await newView.save()

    res.json({
      message: "View Logged"
    })

  } catch (error) {

    console.log(error)

    res.status(500).send("Error")

  }

})

module.exports = router