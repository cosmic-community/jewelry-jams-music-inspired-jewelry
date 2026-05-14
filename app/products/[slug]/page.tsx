// app/products/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProductBySlug, getReviewsByProduct, getMetafieldValue } from '@/lib/cosmic'
import ProductGallery from '@/components/ProductGallery'
import VariantList from '@/components/VariantList'
import ReviewCard from '@/components/ReviewCard'
import StarRating from '@/components/StarRating'

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const reviews = await getReviewsByProduct(product.id)
  const category = product.metadata?.category
  const inventoryStatus = getMetafieldValue(product.metadata?.inventory_status)
  const productName = getMetafieldValue(product.metadata?.product_name) || product.title
  const description = getMetafieldValue(product.metadata?.description)
  const sku = getMetafieldValue(product.metadata?.sku)
  const price = product.metadata?.price

  const avgRating = reviews.length > 0
    ? reviews.reduce((sum, r) => {
        const ratingVal = typeof r.metadata?.rating === 'object' && r.metadata?.rating !== null
          ? Number((r.metadata.rating as any).key) || 0
          : Number(r.metadata?.rating) || 0
        return sum + ratingVal
      }, 0) / reviews.length
    : 0

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-gray-500 hover:text-brand-700">Home</Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link href="/products" className="text-gray-500 hover:text-brand-700">Products</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-900">{productName}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <ProductGallery product={product} />

        <div>
          {category && (
            <Link
              href={`/categories/${category.slug}`}
              className="inline-block text-brand-700 text-sm font-medium uppercase tracking-wider mb-3 hover:text-brand-900"
            >
              {category.title}
            </Link>
          )}

          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">{productName}</h1>

          {reviews.length > 0 && (
            <div className="flex items-center gap-3 mb-6">
              <StarRating rating={avgRating} />
              <span className="text-gray-600">({reviews.length} review{reviews.length !== 1 ? 's' : ''})</span>
            </div>
          )}

          {price !== undefined && (
            <div className="text-4xl font-bold text-brand-800 mb-6">
              ${Number(price).toFixed(2)}
            </div>
          )}

          {inventoryStatus && (
            <div className="mb-6">
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                inventoryStatus.toLowerCase().includes('stock') && !inventoryStatus.toLowerCase().includes('out')
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {inventoryStatus}
              </span>
            </div>
          )}

          {description && (
            <div className="prose prose-lg mb-8">
              <p className="text-gray-700 leading-relaxed">{description}</p>
            </div>
          )}

          {sku && (
            <p className="text-sm text-gray-500 mb-6">SKU: {sku}</p>
          )}

          {product.metadata?.variants && product.metadata.variants.length > 0 && (
            <div className="mb-8">
              <h3 className="font-serif text-2xl font-semibold mb-4">Available Variants</h3>
              <VariantList variants={product.metadata.variants} basePrice={Number(price) || 0} />
            </div>
          )}

          <button className="w-full py-4 bg-brand-700 text-white rounded-full hover:bg-brand-800 transition-colors font-semibold text-lg shadow-lg">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      {reviews.length > 0 && (
        <section className="border-t pt-16">
          <h2 className="font-serif text-3xl font-bold mb-8">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}