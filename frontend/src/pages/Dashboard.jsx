import { useEffect, useState } from "react"

import SalesChart from "../components/SalesChart"
import PredictionCard from "../components/PredictionCard"

function Dashboard() {

  const [prediction, setPrediction] = useState(null)

  useEffect(() => {

    fetch("http://localhost:5000/api/predict-demand")

      .then((response) => response.json())

      .then((data) => {

        setPrediction(data)

      })

  }, [])

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold mb-10">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        <div className="bg-white p-6 rounded-2xl shadow">

          <h2 className="text-gray-500">
            AI Demand Status
          </h2>

          <p className="text-3xl font-bold mt-4">
            Active
          </p>

        </div>

      </div>

      <SalesChart />

      {

        prediction && (

          <PredictionCard

            demand={prediction.predicted_demand}

            alert={prediction.alert}

          />

        )

      }

    </div>

  )
}

export default Dashboard