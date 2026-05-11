import {

  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer

} from "recharts"

const data = [

  {
    month: "Jan",
    sales: 4000
  },

  {
    month: "Feb",
    sales: 6000
  },

  {
    month: "Mar",
    sales: 8000
  },

  {
    month: "Apr",
    sales: 10000
  }

]

function SalesChart() {

  return (

    <div className="bg-white p-6 rounded-2xl shadow mt-10">

      <h2 className="text-2xl font-bold mb-6">
        Sales Analytics
      </h2>

      <ResponsiveContainer width="100%" height={300}>

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="sales"
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  )
}

export default SalesChart