const express = require("express")

const router = express.Router()

const { PythonShell } =
require("python-shell")

const path = require("path")

router.get(

"/predict-price/:month/:demand",

async (req, res) => {

  const month =
  req.params.month

  const demand =
  req.params.demand

  let options = {

    mode: "text",

    pythonOptions: ["-u"],

    scriptPath: path.join(
      __dirname,
      "../../ml"
    ),

    args: [month, demand]

  }

  try {

    const results =
    await PythonShell.run(

      "predict_price.py",

      options

    )

    console.log(results)

    const parsedResult =
    JSON.parse(results[0])

    res.json(parsedResult)

  } catch (error) {

  console.log("FULL ML ERROR:")
  console.log(error)

  if (error.traceback) {
    console.log(error.traceback)
  }

  res.status(500).send("ML Error")

}

})

module.exports = router