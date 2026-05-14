// app/categories/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCategoryBySlug, getProductsByCategory, getMetafieldValue } from '@/lib/cosmic'
import ProductCard from '@/components/ProductCard'

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  const products = await getProductsByCategory(category.id)
  const categoryName = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)
  const image = category.metadata?.category_image

  return (
    <div>
      {/* Category Hero */}
      <div className="relative h-80 overflow-hidden">
        {image && (
          <img
            src={`${image.imgix_url}?w=2400&h=800&fit=crop&auto=format,compress`}
            alt={categoryName}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center text-white">
          <nav className="mb-4 text-sm">
            <Link href="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/categories" className="text-white/80 hover:text-white">Categories</Link>
            <span className="mx-2">/</span>
            <span>{categoryName}</span>
          </nav>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">{categoryName}</h1>
          {description && (
            <p className="text-white/90 text-lg max-w-2xl">{description}</p>
          )}
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="font-serif text-3xl font-bold mb-8">
          {products.length} {products.length === 1 ? 'Product' : 'Products'}
        </h2>

        {products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No products in this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}