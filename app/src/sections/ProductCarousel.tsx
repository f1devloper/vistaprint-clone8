import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Product {
  id: number
  name: string
  price: string
  image: string
}

interface ProductCarouselProps {
  title: string
  products: Product[]
}

export default function ProductCarousel({ title, products }: ProductCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{title}</h2>
        
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors z-10 hidden md:flex"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          {/* Products Scroll Container */}
          <div
            ref={scrollRef}
            className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product) => (
              <a
                key={product.id}
                href="#"
                className="flex-shrink-0 w-[160px] sm:w-[200px] group"
              >
                <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-3 aspect-square">
                  {/* Price Badge */}
                  <div className="absolute top-2 left-2 bg-[#7FDBFF] text-gray-900 text-[10px] sm:text-xs font-semibold px-2 py-1 rounded uppercase z-10">
                    {product.price}
                  </div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-sm text-gray-900 line-clamp-2 group-hover:text-[#0078D4] transition-colors">
                  {product.name}
                </h3>
              </a>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors z-10 hidden md:flex"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  )
}
