import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-3xl">💎</span>
          <div>
            <h1 className="font-serif text-2xl font-bold gradient-text leading-none">Jewelry Jams</h1>
            <p className="text-xs text-gray-500 leading-none mt-1">Music Inspired Jewelry</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-brand-700 font-medium transition-colors">
            Home
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-brand-700 font-medium transition-colors">
            Products
          </Link>
          <Link href="/categories" className="text-gray-700 hover:text-brand-700 font-medium transition-colors">
            Categories
          </Link>
          <Link href="/variants" className="text-gray-700 hover:text-brand-700 font-medium transition-colors">
            Variants
          </Link>
          <Link href="/reviews" className="text-gray-700 hover:text-brand-700 font-medium transition-colors">
            Reviews
          </Link>
        </nav>

        <Link
          href="/products"
          className="px-5 py-2 bg-brand-700 text-white rounded-full hover:bg-brand-800 transition-colors font-medium text-sm"
        >
          Shop Now
        </Link>
      </div>
    </header>
  )
}