import { useState } from 'react'
import { Search, HelpCircle, FolderHeart, Heart, User, ShoppingCart, Menu, X } from 'lucide-react'

const navItems = [
  'View All',
  'Visiting Cards',
  'Stationery, Letterheads & Notebooks',
  'Stamps and Ink',
  'Signs, Posters & Marketing Materials',
  'Labels, Stickers & Packaging',
  'Clothing, Caps & Bags',
  'Mugs, Albums & Gifts',
  'Bulk Orders',
  'Drinkware',
  'Custom Polo T-shirts',
  'Custom T-Shirts',
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Top Bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center flex-shrink-0">
              <div className="flex items-center">
                <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-[#0078D4] mr-1"></div>
                <span className="text-2xl font-bold text-[#0078D4]">vistaprint</span>
                <span className="text-2xl font-bold text-black">.</span>
              </div>
            </a>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:border-[#0078D4] focus:ring-1 focus:ring-[#0078D4]"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2">
                  <Search className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4 lg:space-x-6">
              {/* Help */}
              <a href="#" className="hidden lg:flex items-center text-sm text-gray-700 hover:text-[#0078D4] transition-colors">
                <HelpCircle className="w-5 h-5 mr-1" />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500">Help is here</span>
                  <span className="font-medium">02522-669393</span>
                </div>
              </a>

              {/* My Projects */}
              <a href="#" className="hidden md:flex items-center text-sm text-gray-700 hover:text-[#0078D4] transition-colors">
                <FolderHeart className="w-5 h-5 mr-1" />
                <span>My Projects</span>
              </a>

              {/* My Favorites */}
              <a href="#" className="hidden md:flex items-center text-sm text-gray-700 hover:text-[#0078D4] transition-colors">
                <Heart className="w-5 h-5 mr-1" />
                <span>My Favorites</span>
              </a>

              {/* Sign In */}
              <button className="flex items-center text-sm text-gray-700 hover:text-[#0078D4] transition-colors">
                <User className="w-5 h-5 mr-1" />
                <span className="hidden sm:inline">Sign in</span>
              </button>

              {/* Cart */}
              <a href="#" className="flex items-center text-sm text-gray-700 hover:text-[#0078D4] transition-colors">
                <div className="relative">
                  <ShoppingCart className="w-5 h-5" />
                </div>
                <span className="hidden sm:inline ml-1">Cart</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar - Desktop */}
      <nav className="hidden md:block border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-6 overflow-x-auto py-3 scrollbar-hide">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="whitespace-nowrap text-sm text-gray-700 hover:text-[#0078D4] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          {/* Mobile Search */}
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:border-[#0078D4]"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                <Search className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Mobile Nav Items */}
          <div className="py-2">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0078D4] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Actions */}
          <div className="border-t border-gray-200 py-2">
            <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
              <FolderHeart className="w-5 h-5 mr-3" />
              My Projects
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
              <Heart className="w-5 h-5 mr-3" />
              My Favorites
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
              <HelpCircle className="w-5 h-5 mr-3" />
              Help: 02522-669393
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
