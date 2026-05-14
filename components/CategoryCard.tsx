import Link from 'next/link'
import type { Category } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function CategoryCard({ category }: { category: Category }) {
  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)
  const image = category.metadata?.category_image

  return (
    <Link href={`/categories/${category.slug}`} className="group block">
      <div className="relative rounded-2xl overflow-hidden h-80 card-hover">
        {image ? (
          <img
            src={`${image.imgix_url}?w=1200&h=800&fit=crop&auto=format,compress`}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="absolute inset-0 hero-gradient" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
          <h3 className="font-serif text-3xl font-bold mb-2">{name}</h3>
          {description && (
            <p className="text-white/90 text-sm line-clamp-2">{description}</p>
          )}
          <div className="mt-3 inline-flex items-center gap-2 text-gold-400 font-medium text-sm">
            Explore Collection
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </div>
    </Link>
  )
}