import { getAllCategories } from '@/lib/cosmic'
import CategoryCard from '@/components/CategoryCard'

export const metadata = {
  title: 'Categories - Jewelry Jams',
  description: 'Browse our jewelry collections',
}

export default async function CategoriesPage() {
  const categories = await getAllCategories()

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="font-serif text-5xl font-bold mb-4">
          Our <span className="gradient-text">Collections</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Explore curated collections of music-inspired jewelry
        </p>
      </div>

      {categories.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">No categories available yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      )}
    </div>
  )
}