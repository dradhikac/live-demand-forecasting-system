function PredictionCard({

  demand,
  alert

}) {

  return (

    <div className="bg-white p-6 rounded-2xl shadow mt-10">

      <h2 className="text-2xl font-bold">
        AI Demand Forecast
      </h2>

      <p className="mt-4 text-xl">

        Predicted Demand:
        <span className="font-bold">
          {" "}
          {demand}
        </span>

      </p>

      <p className="mt-2 text-lg text-red-500">

        {alert}

      </p>

    </div>

  )
}

export default PredictionCard