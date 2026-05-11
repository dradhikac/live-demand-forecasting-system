import {

  useEffect,
  useState

} from "react"

import ProductCard from "./ProductCard"

import ProductModal from "./ProductModal"

function ProductsSection() {

  const [products, setProducts] =
  useState([])

  const [filteredProducts,
  setFilteredProducts] =
  useState([])

  const [selectedProduct,
  setSelectedProduct] =
  useState(null)

  const [selectedCategory,
  setSelectedCategory] =
  useState("All")

  const [searchTerm,
  setSearchTerm] =
  useState("")

  const [sortOption,
  setSortOption] =
  useState("default")

  useEffect(() => {

    fetch("http://localhost:5000/api/products")

      .then((response) => response.json())

      .then((data) => {

        setProducts(data)

        setFilteredProducts(data)

      })

      .catch((error) => {

        console.log(error)

      })

  }, [])

  useEffect(() => {

    let updatedProducts = [...products]

    // Category filtering
    if (selectedCategory !== "All") {

      updatedProducts =
      updatedProducts.filter(

        (product) =>

          product.category ===
          selectedCategory

      )

    }

    // Search filtering
    updatedProducts =
    updatedProducts.filter(

      (product) =>

        product.name
        .toLowerCase()

        .includes(
          searchTerm.toLowerCase()
        )

    )

    // Sorting
    if (sortOption === "price-low") {

      updatedProducts.sort(

        (a, b) =>

          a.current_price -
          b.current_price

      )

    }

    else if (
      sortOption === "price-high"
    ) {

      updatedProducts.sort(

        (a, b) =>

          b.current_price -
          a.current_price

      )

    }

    else if (
      sortOption === "demand"
    ) {

      updatedProducts.sort(

        (a, b) =>

          b.demand_score -
          a.demand_score

      )

    }

    else if (
      sortOption === "trending"
    ) {

      updatedProducts.sort(

        (a, b) =>

          b.trending_score -
          a.trending_score

      )

    }

    setFilteredProducts(
      updatedProducts
    )

  }, [

    selectedCategory,
    searchTerm,
    sortOption,
    products

  ])

  const categories = [

    "All",

    "Electronics",

    "Shoes",

    "Fashion",

    "Accessories",

    "Gaming",

    "Fitness"

  ]

  return (

    <section className="px-10 py-20 bg-gray-100">

      <h1 className="text-4xl font-bold mb-10">

        Smart AI Products

      </h1>

      {/* SEARCH + SORT */}

      <div className="flex flex-col lg:flex-row gap-4 justify-between mb-8">

        <input

          type="text"

          placeholder="Search products..."

          value={searchTerm}

          onChange={(e) =>
            setSearchTerm(e.target.value)
          }

          className="p-3 rounded-xl border w-full lg:w-1/3"

        />

        <select

          value={sortOption}

          onChange={(e) =>
            setSortOption(e.target.value)
          }

          className="p-3 rounded-xl border"

        >

          <option value="default">
            Sort Products
          </option>

          <option value="price-low">
            Price: Low to High
          </option>

          <option value="price-high">
            Price: High to Low
          </option>

          <option value="demand">
            Highest Demand
          </option>

          <option value="trending">
            Trending Products
          </option>

        </select>

      </div>

      {/* CATEGORY TABS */}

      <div className="flex flex-wrap gap-4 mb-10">

        {

          categories.map((category) => (

            <button

              key={category}

              onClick={() =>
                setSelectedCategory(category)
              }

              className={`

                px-6 py-2 rounded-full font-medium transition

                ${selectedCategory === category

                  ? "bg-black text-white"

                  : "bg-white text-black"}

              `}

            >

              {category}

            </button>

          ))

        }

      </div>

      {/* PRODUCTS GRID */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {

          filteredProducts.map((product) => (

            <div

              key={product.id}

              onClick={() =>
                setSelectedProduct(product)
              }

              className="cursor-pointer"

            >

              <ProductCard

                name={product.name}

                category={product.category}

                current_price={product.current_price}

                predicted_price={product.predicted_price}

                stock={product.stock}

                demand_score={product.demand_score}

                trending_score={product.trending_score}

                image_url={product.image_url}

              />

            </div>

          ))

        }

      </div>

      {

        selectedProduct && (

          <ProductModal

            product={selectedProduct}

            onClose={() =>
              setSelectedProduct(null)
            }

          />

        )

      }

    </section>

  )
}

export default ProductsSection