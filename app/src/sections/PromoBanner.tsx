import { Copy } from 'lucide-react'

export default function PromoBanner() {
  return (
    <div className="bg-black text-white py-3">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <p className="text-sm sm:text-base text-center">
            Buy More, Save More! Flat 5% OFF on Orders ₹10,000+ | Code: SAVE5
          </p>
          <button 
            className="ml-3 p-1 hover:bg-white/10 rounded transition-colors"
            title="Copy code"
          >
            <Copy className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
