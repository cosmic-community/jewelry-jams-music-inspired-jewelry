import type { Variant } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function VariantList({ variants, basePrice }: { variants: Variant[]; basePrice: number }) {
  if (!variants || variants.length === 0) return null

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {variants.map((variant) => {
        const variantName = getMetafieldValue(variant.metadata?.variant_name) || variant.title
        const sku = getMetafieldValue(variant.metadata?.sku)
        const priceAdj = Number(variant.metadata?.price_adjustment) || 0
        const stock = variant.metadata?.stock_quantity
        const image = variant.metadata?.variant_image
        const finalPrice = basePrice + priceAdj

        return (
          <div key={variant.id} className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl hover:border-brand-400 transition-colors cursor-pointer">
            {image && (
              <img
                src={`${image.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
                alt={variantName}
                className="w-14 h-14 rounded-lg object-cover"
              />
            )}
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm truncate">{variantName}</p>
              {sku && <p className="text-xs text-gray-500 truncate">{sku}</p>}
              <div className="flex items-center justify-between mt-1">
                <span className="text-sm font-bold text-brand-700">${finalPrice.toFixed(2)}</span>
                {stock !== undefined && (
                  <span className={`text-xs ${Number(stock) > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {Number(stock) > 0 ? `${stock} left` : 'Out'}
                  </span>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}