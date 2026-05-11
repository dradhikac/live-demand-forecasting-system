import CategoryCard from "./CategoryCard"

function CategoriesSection() {

  return (

    <section className="px-10 py-20">

      <h1 className="text-4xl font-bold mb-10">
        Shop By Category
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        <CategoryCard title="Electronics" />
        <CategoryCard title="Fashion" />
        <CategoryCard title="Shoes" />
        <CategoryCard title="Accessories" />

      </div>

    </section>

  )
}

export default CategoriesSection