function ProductCard({

  name,
  category,
  current_price,
  predicted_price,
  stock,
  demand_score,
  trending_score,
  image_url

}) {

  return (

    <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition">

      <img
        src={image_url}
        alt={name}
        className="w-full h-60 object-cover rounded-xl"
      />

      <h2 className="text-xl font-semibold mt-4">
        {name}
      </h2>

      <p className="text-gray-500 mt-1">
        {category}
      </p>

      <div className="mt-4">

        <p className="text-2xl font-bold">
          ₹{current_price}
        </p>

        <p className="text-green-600 font-medium">
          Predicted Price:
          ₹{predicted_price}
        </p>

        <p className="text-sm mt-2">
          Demand Score:
          {demand_score}%
        </p>

        <p className="text-sm">
          Trending Score:
          {trending_score}%
        </p>

        {

          stock < 20 ? (

            <p className="text-red-500 font-bold mt-2">
              Low Stock Alert
            </p>

          ) : (

            <p className="text-green-500 font-bold mt-2">
              In Stock
            </p>

          )

        }

      </div>

    </div>

  )
}

export default ProductCard