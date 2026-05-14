import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">💎</span>
            <h3 className="font-serif text-xl font-bold text-white">Jewelry Jams</h3>
          </div>
          <p className="text-sm text-gray-400">
            Music-inspired jewelry for the modern soul. Wear your music with pride.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/products" className="hover:text-white transition-colors">All Products</Link></li>
            <li><Link href="/categories" className="hover:text-white transition-colors">Categories</Link></li>
            <li><Link href="/variants" className="hover:text-white transition-colors">Variants</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">About</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/reviews" className="hover:text-white transition-colors">Customer Reviews</Link></li>
            <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Follow Us</h4>
          <p className="text-sm text-gray-400 mb-3">Stay tuned for new collections</p>
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-700 transition-colors">📷</a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-700 transition-colors">🐦</a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-700 transition-colors">📘</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Jewelry Jams. All rights reserved.</p>
      </div>
    </footer>
  )
}