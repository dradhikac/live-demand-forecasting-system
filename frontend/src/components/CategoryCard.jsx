function CategoryCard({ title }) {

  return (

    <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">

      <h2 className="text-2xl font-bold">
        {title}
      </h2>

    </div>

  )
}

export default CategoryCard