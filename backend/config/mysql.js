const mysql = require("mysql2")

const connection = mysql.createConnection({

  host: "localhost",

  user: "root",

  password: "Radhika11@2006",

  database: "smart_demand_system"

})

connection.connect((err) => {

  if (err) {

    console.log(err)

  } else {

    console.log("MySQL Connected")

  }

})

module.exports = connection