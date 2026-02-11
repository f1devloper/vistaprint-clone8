import { useRef } from 'react'
import { ChevronRight } from 'lucide-react'

const categories = [
  { name: 'Visiting Cards', image: '/category-visiting-cards.png' },
  { name: 'Custom Polo T-shirts', image: '/category-polo.png' },
  { name: 'Custom Dress Shirts', image: '/category-dress-shirt.png' },
  { name: 'Custom T-shirts', image: '/category-tshirt.png' },
  { name: 'Calendars, Notebooks and Diaries', image: '/category-calendars.png' },
  { name: 'Custom Stamps & Ink', image: '/category-stamps.png' },
  { name: 'Photo Gifts', image: '/category-photo-gifts.png' },
  { name: 'Labels, Stickers & Packaging', image: '/category-labels.png' },
  { name: 'Custom Stationery', image: '/category-stationery.png' },
  { name: 'Signs, Posters & Marketing Materials', image: '/category-signs.png' },
  { name: 'Custom Caps', image: '/category-caps.png' },
  { name: 'Custom Drinkware', image: '/category-drinkware.png' },
]

export default function CategoriesSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Explore all categories</h2>
        
        <div className="relative">
          {/* Categories Scroll Container */}
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category, index) => (
              <a
                key={index}
                href="#"
                className="flex-shrink-0 group"
              >
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-gray-100 mb-3 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs sm:text-sm text-center text-gray-700 max-w-[120px] mx-auto line-clamp-2 group-hover:text-[#0078D4] transition-colors">
                  {category.name}
                </p>
              </a>
            ))}
          </div>

          {/* Scroll Right Button */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/3 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  )
}
