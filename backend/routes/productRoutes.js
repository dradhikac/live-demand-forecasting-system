const express = require("express")

const router = express.Router()

const connection = require("../config/mysql")

router.get("/products", (req, res) => {

  const query = `
  
    SELECT * FROM products
  
  `

  console.log("Products API called")

  connection.query(query, (err, results) => {

    if (err) {

      console.log("MYSQL ERROR:")
      console.log(err)

      return res.status(500).json({
        error: err.message
      })

    }

    console.log("Products fetched:")
    console.log(results)

    res.json(results)

  })

})

module.exports = router