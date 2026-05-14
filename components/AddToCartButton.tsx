'use client'

type AddToCartButtonProps = {
  productId: string
  productName: string
  price?: number
}

export default function AddToCartButton({ productId, productName, price }: AddToCartButtonProps) {
  function handleAddToCart() {
    if (typeof window !== 'undefined' && typeof (window as any).cosmicInsights === 'function') {
      ;(window as any).cosmicInsights('add_to_cart', {
        object_id: productId,
        object_type: 'products',
        product_name: productName,
        price_cents: price !== undefined ? Math.round(price * 100) : undefined,
      })
    }
  }

  return (
    <button
      onClick={handleAddToCart}
      className="w-full py-4 bg-brand-700 text-white rounded-full hover:bg-brand-800 transition-colors font-semibold text-lg shadow-lg"
    >
      Add to Cart
    </button>
  )
}
