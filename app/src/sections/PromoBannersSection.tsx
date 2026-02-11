export default function PromoBannersSection() {
  return (
    <section className="py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Special Gifts Banner */}
          <div className="relative overflow-hidden rounded-lg group">
            <div className="aspect-[4/3] md:aspect-[16/10]">
              <img
                src="/banner-special-gifts.jpg"
                alt="Special Gifts"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 sm:p-6 max-w-[280px]">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Special Gifts for your favourite people</h2>
              <p className="text-sm text-gray-600 mb-3">Start at Rs 140</p>
              <button className="bg-black text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-800 transition-colors">
                Shop Now
              </button>
            </div>
          </div>

          {/* Custom Winter Wear Banner */}
          <div className="relative overflow-hidden rounded-lg group">
            <div className="aspect-[4/3] md:aspect-[16/10]">
              <img
                src="/banner-winter-wear.jpg"
                alt="Custom Winter Wear"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 sm:p-6 max-w-[280px]">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Custom Winter Wear</h2>
              <p className="text-sm text-gray-600 mb-3">1 Starting at Rs.850</p>
              <button className="bg-black text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-800 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
