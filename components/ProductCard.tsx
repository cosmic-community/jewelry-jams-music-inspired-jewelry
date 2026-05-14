import Link from 'next/link'
import type { Product } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ProductCard({ product }: { product: Product }) {
  const productName = getMetafieldValue(product.metadata?.product_name) || product.title
  const price = product.metadata?.price
  const inventoryStatus = getMetafieldValue(product.metadata?.inventory_status)
  const image = product.metadata?.featured_image
  const category = product.metadata?.category

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="bg-white rounded-2xl overflow-hidden card-hover border border-gray-100">
        <div className="aspect-square overflow-hidden bg-gray-50 relative">
          {image ? (
            <img
              src={`${image.imgix_url}?w=800&h=800&fit=crop&auto=format,compress`}
              alt={productName}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-6xl">💎</div>
          )}
          {product.metadata?.featured_product && (
            <div className="absolute top-3 left-3 px-3 py-1 bg-gold-500 text-white text-xs font-semibold rounded-full">
              ⭐ Featured
            </div>
          )}
        </div>
        <div className="p-5">
          {category && (
            <p className="text-xs text-brand-700 font-medium uppercase tracking-wider mb-2">
              {category.title}
            </p>
          )}
          <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-brand-700 transition-colors">
            {productName}
          </h3>
          <div className="flex justify-between items-center mt-3">
            {price !== undefined && (
              <span className="text-2xl font-bold text-brand-800">
                ${Number(price).toFixed(2)}
              </span>
            )}
            {inventoryStatus && (
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                inventoryStatus.toLowerCase().includes('stock') && !inventoryStatus.toLowerCase().includes('out')
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
              }`}>
                {inventoryStatus}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}