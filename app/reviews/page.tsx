import { getAllReviews } from '@/lib/cosmic'
import ReviewCard from '@/components/ReviewCard'

export const metadata = {
  title: 'Customer Reviews - Jewelry Jams',
  description: 'Read reviews from our happy customers',
}

export default async function ReviewsPage() {
  const reviews = await getAllReviews()

  const avgRating = reviews.length > 0
    ? reviews.reduce((sum, r) => {
        const ratingVal = typeof r.metadata?.rating === 'object' && r.metadata?.rating !== null
          ? Number((r.metadata.rating as any).key) || 0
          : Number(r.metadata?.rating) || 0
        return sum + ratingVal
      }, 0) / reviews.length
    : 0

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="font-serif text-5xl font-bold mb-4">
          Customer <span className="gradient-text">Reviews</span>
        </h1>
        <p className="text-gray-600 text-lg mb-4">
          {reviews.length} review{reviews.length !== 1 ? 's' : ''} from our happy customers
        </p>
        {reviews.length > 0 && (
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 text-white rounded-full font-semibold">
            <span className="text-2xl">⭐</span>
            <span className="text-xl">{avgRating.toFixed(1)} / 5.0</span>
          </div>
        )}
      </div>

      {reviews.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">No reviews yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} showProduct />
          ))}
        </div>
      )}
    </div>
  )
}