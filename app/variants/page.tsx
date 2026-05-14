import { getAllVariants, getMetafieldValue } from '@/lib/cosmic'

export const metadata = {
  title: 'Variants - Jewelry Jams',
  description: 'Browse all product variants',
}

export default async function VariantsPage() {
  const variants = await getAllVariants()

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="font-serif text-5xl font-bold mb-4">
          Product <span className="gradient-text">Variants</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Explore all available product variations
        </p>
      </div>

      {variants.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">No variants available yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {variants.map((variant) => {
            const variantName = getMetafieldValue(variant.metadata?.variant_name) || variant.title
            const sku = getMetafieldValue(variant.metadata?.sku)
            const priceAdj = variant.metadata?.price_adjustment
            const stock = variant.metadata?.stock_quantity
            const image = variant.metadata?.variant_image

            return (
              <div key={variant.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden card-hover">
                {image && (
                  <div className="aspect-square overflow-hidden bg-gray-50">
                    <img
                      src={`${image.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
                      alt={variantName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-5">
                  <h3 className="font-serif text-xl font-semibold mb-2">{variantName}</h3>
                  {sku && <p className="text-sm text-gray-500 mb-2">SKU: {sku}</p>}
                  <div className="flex justify-between items-center pt-3 border-t">
                    {priceAdj !== undefined && (
                      <span className="text-brand-700 font-semibold">
                        {Number(priceAdj) >= 0 ? '+' : ''}${Number(priceAdj).toFixed(2)}
                      </span>
                    )}
                    {stock !== undefined && (
                      <span className={`text-sm ${Number(stock) > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {Number(stock) > 0 ? `${stock} in stock` : 'Out of stock'}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}