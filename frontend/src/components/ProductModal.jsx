import {

  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer

} from "recharts"

function ProductModal({

  product,
  onClose

}) {

  if (!product) return null

  const priceData = [

    {
      month: "Jan",
      price: product.current_price - 5000
    },

    {
      month: "Feb",
      price: product.current_price - 4000
    },

    {
      month: "Mar",
      price: product.current_price - 3000
    },

    {
      month: "Apr",
      price: product.current_price - 2000
    },

    {
      month: "May",
      price: product.current_price - 1000
    },

    {
      month: "Jun",
      price: product.current_price
    },

    {
      month: "Future AI Price",
      price: product.predicted_price
    }

  ]

  return (

    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">

      <div className="bg-white w-[90%] max-w-5xl rounded-2xl p-8 relative overflow-y-auto max-h-[90vh]">

        <button

          onClick={onClose}

          className="absolute top-4 right-4 text-2xl font-bold"

        >

          ×

        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div>

            <img

              src={product.image_url}

              alt={product.name}

              className="w-full h-96 object-cover rounded-2xl"

            />

          </div>

          <div>

            <h1 className="text-4xl font-bold">

              {product.name}

            </h1>

            <p className="text-gray-500 mt-2">

              {product.category}

            </p>

            <p className="text-3xl font-bold mt-6">

              ₹{product.current_price}

            </p>

            <p className="text-green-600 text-xl mt-2">

              AI Predicted Price:
              ₹{product.predicted_price}

            </p>

            <p className="mt-4 text-lg">

              Demand Score:
              {product.demand_score}%

            </p>

            <p className="mt-2 text-lg">

              Trending Score:
              {product.trending_score}%

            </p>

            <p className="mt-6 text-gray-700">

              {product.description}

            </p>

          </div>

        </div>

        <div className="mt-12">

          <h2 className="text-3xl font-bold mb-6">

            Price Trend Analytics

          </h2>

          <ResponsiveContainer
            width="100%"
            height={350}
          >

            <LineChart data={priceData}>

              <CartesianGrid
                strokeDasharray="3 3"
              />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Line

                type="monotone"

                dataKey="price"

              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>

  )
}

export default ProductModal