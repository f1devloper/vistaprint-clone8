// HeroSection component

export default function HeroSection() {
  return (
    <section className="py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Visiting Cards Banner */}
          <div className="relative overflow-hidden rounded-lg group">
            <div className="aspect-[4/3] md:aspect-[16/10]">
              <img
                src="/hero-visiting-cards.jpg"
                alt="Visiting Cards"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 sm:p-6 max-w-[280px]">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Visiting Cards</h2>
              <p className="text-sm text-gray-600 mb-3">100 Visiting Cards at Rs 200</p>
              <button className="bg-black text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-800 transition-colors">
                Shop Now
              </button>
            </div>
          </div>

          {/* Custom Clothing Banner */}
          <div className="relative overflow-hidden rounded-lg group">
            <div className="aspect-[4/3] md:aspect-[16/10]">
              <img
                src="/hero-clothing.jpg"
                alt="Custom Clothing"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 sm:p-6 max-w-[320px]">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Wear your brand with pride</h2>
              <p className="text-sm text-gray-600 mb-3">1 Starting at Rs. 320</p>
              <div className="flex flex-wrap gap-2">
                <button className="bg-black text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-800 transition-colors">
                  Custom Polo T-shirts
                </button>
                <button className="bg-black text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-800 transition-colors">
                  Custom T-shirts
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
