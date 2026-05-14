import { getAllProducts } from '@/lib/cosmic'
import ProductCard from '@/components/ProductCard'

export const metadata = {
  title: 'All Products - Jewelry Jams',
  description: 'Browse our complete collection of music-inspired jewelry',
}

export default async function ProductsPage() {
  const products = await getAllProducts()

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="font-serif text-5xl font-bold mb-4">
          All <span className="gradient-text">Products</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Discover {products.length} beautiful music-inspired pieces
        </p>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">No products available yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}