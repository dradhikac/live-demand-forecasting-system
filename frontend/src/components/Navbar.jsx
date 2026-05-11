import { Link } from "react-router-dom"

function Navbar() {

  return (

    <nav className="bg-black text-white px-8 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold">
        SmartDemand
      </h1>

      <div className="flex gap-6">

        <Link to="/">
          Home
        </Link>

        <Link to="/">
          Products
        </Link>

        <Link to="/">
          Categories
        </Link>

        <Link to="/dashboard">
          Dashboard
        </Link>

      </div>

    </nav>

  )
}

export default Navbar