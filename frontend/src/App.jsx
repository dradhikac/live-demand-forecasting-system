import {

  Routes,
  Route

} from "react-router-dom"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import CategoriesSection from "./components/CategoriesSection"
import ProductsSection from "./components/ProductsSection"
import Footer from "./components/Footer"

import Dashboard from "./pages/Dashboard"

function HomePage() {

  return (

    <>

      <Hero />

      <CategoriesSection />

      <ProductsSection />

    </>

  )
}

function App() {

  return (

    <div>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

      </Routes>

      <Footer />

    </div>

  )
}

export default App