import Link from 'next/link'
import type { Review } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import StarRating from '@/components/StarRating'

export default function ReviewCard({ review, showProduct = false }: { review: Review; showProduct?: boolean }) {
  const title = getMetafieldValue(review.metadata?.review_title) || review.title
  const customerName = getMetafieldValue(review.metadata?.customer_name)
  const content = getMetafieldValue(review.metadata?.review_content)
  const verified = review.metadata?.verified_purchase
  const product = review.metadata?.product

  const ratingVal = typeof review.metadata?.rating === 'object' && review.metadata?.rating !== null
    ? Number((review.metadata.rating as any).key) || 0
    : Number(review.metadata?.rating) || 0

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 card-hover h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <StarRating rating={ratingVal} />
        {verified && (
          <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-700 rounded-full">
            ✓ Verified
          </span>
        )}
      </div>

      <h4 className="font-serif text-xl font-semibold mb-2">{title}</h4>

      {content && (
        <p className="text-gray-600 leading-relaxed mb-4 flex-1">"{content}"</p>
      )}

      <div className="pt-4 border-t border-gray-100">
        {customerName && (
          <p className="font-semibold text-gray-900">{customerName}</p>
        )}
        {showProduct && product && (
          <Link href={`/products/${product.slug}`} className="text-sm text-brand-700 hover:text-brand-900 mt-1 block">
            Reviewed: {product.title} →
          </Link>
        )}
      </div>
    </div>
  )
}