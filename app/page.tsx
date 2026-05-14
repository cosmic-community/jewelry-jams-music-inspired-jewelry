import Link from 'next/link'
import { getFeaturedProducts, getAllCategories, getAllReviews } from '@/lib/cosmic'
import ProductCard from '@/components/ProductCard'
import CategoryCard from '@/components/CategoryCard'
import ReviewCard from '@/components/ReviewCard'
import Hero from '@/components/Hero'

export default async function HomePage() {
  const [featuredProducts, categories, reviews] = await Promise.all([
    getFeaturedProducts(),
    getAllCategories(),
    getAllReviews(),
  ])

  const topReviews = reviews.slice(0, 3)

  return (
    <div>
      <Hero />

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Pieces</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our most loved music-inspired jewelry, handcrafted with passion
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* Categories */}
      {categories.length > 0 && (
        <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                Shop by <span className="gradient-text">Collection</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Explore our curated collections inspired by musical genres and instruments
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Reviews */}
      {topReviews.length > 0 && (
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              What Our <span className="gradient-text">Customers Say</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Real stories from music lovers wearing our pieces
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/reviews"
              className="inline-block px-8 py-3 bg-brand-700 text-white rounded-full hover:bg-brand-800 transition-colors font-medium"
            >
              Read All Reviews
            </Link>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="hero-gradient py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Wear Your Music
          </h2>
          <p className="text-brand-100 text-lg mb-8 max-w-2xl mx-auto">
            Every piece tells a story. Find the one that sings to your soul.
          </p>
          <Link
            href="/products"
            className="inline-block px-10 py-4 bg-gold-500 text-white rounded-full hover:bg-gold-600 transition-colors font-semibold text-lg"
          >
            Shop All Jewelry
          </Link>
        </div>
      </section>
    </div>
  )
}