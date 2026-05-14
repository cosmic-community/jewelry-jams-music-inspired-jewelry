import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-9xl">🎵</div>
        <div className="absolute bottom-10 right-10 text-9xl">🎸</div>
        <div className="absolute top-1/2 left-1/2 text-9xl">🎹</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32 text-center">
        <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-brand-100 text-sm font-medium mb-6">
          ✨ Handcrafted with Passion
        </div>
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Music You Can
          <span className="block bg-gradient-to-r from-gold-400 to-gold-500 bg-clip-text text-transparent">
            Wear
          </span>
        </h1>
        <p className="text-xl text-brand-100 max-w-2xl mx-auto mb-10">
          Discover beautifully crafted jewelry inspired by the rhythm of life.
          Each piece tells a story, every detail strikes a chord.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="px-8 py-4 bg-gold-500 text-white rounded-full hover:bg-gold-600 transition-colors font-semibold text-lg shadow-lg"
          >
            Shop Collection
          </Link>
          <Link
            href="/categories"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-colors font-semibold text-lg border border-white/30"
          >
            Browse Categories
          </Link>
        </div>
      </div>
    </section>
  )
}