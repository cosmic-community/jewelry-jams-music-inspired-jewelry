'use client'

import { useState } from 'react'
import type { Product } from '@/types'

export default function ProductGallery({ product }: { product: Product }) {
  const featuredImage = product.metadata?.featured_image
  const gallery = product.metadata?.image_gallery || []

  const allImages = [
    ...(featuredImage ? [featuredImage] : []),
    ...gallery,
  ]

  const [activeIdx, setActiveIdx] = useState(0)
  const activeImage = allImages[activeIdx] || featuredImage

  if (!activeImage) {
    return (
      <div className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center text-9xl">
        💎
      </div>
    )
  }

  return (
    <div>
      <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden mb-4">
        <img
          src={`${activeImage.imgix_url}?w=1200&h=1200&fit=crop&auto=format,compress`}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>

      {allImages.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {allImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                idx === activeIdx ? 'border-brand-700' : 'border-transparent hover:border-gray-300'
              }`}
            >
              <img
                src={`${img.imgix_url}?w=300&h=300&fit=crop&auto=format,compress`}
                alt={`${product.title} ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}