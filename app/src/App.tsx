// App component
import './App.css'
import Header from './sections/Header'
import PromoBanner from './sections/PromoBanner'
import HeroSection from './sections/HeroSection'
import CategoriesSection from './sections/CategoriesSection'
import ProductCarousel from './sections/ProductCarousel'
import PromoBannersSection from './sections/PromoBannersSection'
import EmailSubscription from './sections/EmailSubscription'
import AboutSection from './sections/AboutSection'
import Footer from './sections/Footer'

// Product data
const popularProducts = [
  { id: 1, name: 'Standard Visiting Cards', price: 'BUY 100 @ Rs.200', image: '/product-standard-cards.jpg' },
  { id: 2, name: 'Rounded Corner Visiting Cards', price: 'BUY 100 @ Rs.250', image: '/product-rounded-cards.jpg' },
  { id: 3, name: 'Letterheads', price: 'BUY 10 @ Rs.230', image: '/product-letterheads.jpg' },
  { id: 4, name: 'Photo Albums', price: 'BUY 1 @ Rs.715', image: '/product-photo-albums.jpg' },
  { id: 5, name: 'Stickers', price: 'BUY 10 @ Rs.150', image: '/product-stickers.jpg' },
  { id: 6, name: "Men's Polo T-Shirts", price: 'BUY 1 @ Rs.570', image: '/product-polo-red.jpg' },
  { id: 7, name: 'Classic Visiting Cards', price: 'BUY 100 @ Rs.230', image: '/product-classic-cards.jpg' },
  { id: 8, name: 'Spot UV Visiting Cards', price: 'BUY 100 @ Rs.580', image: '/product-spotuv-cards.jpg' },
]

const trendingProducts = [
  { id: 1, name: 'Classic Visiting Cards', price: 'BUY 100 @ Rs.230', image: '/product-classic-cards.jpg' },
  { id: 2, name: 'Spot UV Visiting Cards', price: 'BUY 100 @ Rs.580', image: '/product-spotuv-cards.jpg' },
  { id: 3, name: 'Envelopes', price: 'BUY 10 @ Rs.150', image: '/product-envelopes.jpg' },
  { id: 4, name: 'Diary With Pen Holder', price: 'BUY 1 @ Rs.465', image: '/product-diary-penholder.jpg' },
  { id: 5, name: 'Personalised Notebooks', price: 'BUY 1 @ Rs.310', image: '/product-notebook.jpg' },
  { id: 6, name: 'Personalised A5 Diary', price: 'BUY 1 @ Rs.415', image: '/product-diary-a5.jpg' },
]

const labelsProducts = [
  { id: 1, name: 'Custom Stickers', price: 'BUY 24 @ Rs.160', image: '/product-custom-stickers.jpg' },
  { id: 2, name: 'Product & Packaging Labels', price: 'BUY 10 @ Rs.190', image: '/product-packaging-labels.jpg' },
  { id: 3, name: 'Custom Shape Stickers', price: 'BUY 50 @ Rs.245', image: '/product-custom-stickers.jpg' },
  { id: 4, name: 'Sticker Singles', price: 'BUY 6 @ Rs.6600', image: '/product-stickers.jpg' },
  { id: 5, name: 'Self Adhesive Tapes', price: 'BUY 40 @ Rs.400', image: '/product-adhesive-tapes.jpg' },
  { id: 6, name: 'Transparent Labels', price: 'BUY 140 @ Rs.340', image: '/product-transparent-labels.jpg' },
]

const exploreMoreProducts = [
  { id: 1, name: 'Personalised Diary with Magnetic Lock', price: 'BUY 1 @ Rs.570', image: '/product-diary-magnetic.jpg' },
  { id: 2, name: 'Embroidered Laptop Bags', price: 'BUY 1 @ Rs.1050', image: '/product-laptop-bag.jpg' },
  { id: 3, name: 'Presentation Folders', price: 'BUY 10 @ Rs.530', image: '/product-presentation-folders.jpg' },
  { id: 4, name: 'Brochures', price: 'BUY 25 @ Rs.370', image: '/product-brochures.jpg' },
  { id: 5, name: 'Canvas Prints', price: 'BUY 1 @ Rs.790', image: '/product-canvas-prints.jpg' },
  { id: 6, name: 'Keychain with Light', price: 'BUY 1 @ Rs.250', image: '/product-keychain.jpg' },
]

const newArrivals = [
  { id: 1, name: 'Classic Executive Diary', price: 'BUY 1 @ Rs.575', image: '/product-executive-diary.jpg' },
  { id: 2, name: 'Leather Edge Executive Diary', price: 'BUY 1 @ Rs.750', image: '/product-diary-magnetic.jpg' },
  { id: 3, name: 'Executive Daily Planner with Pen Holder', price: 'BUY 30 @ Rs.13500', image: '/product-diary-penholder.jpg' },
  { id: 4, name: 'Grand Opaque Ballpoint Pen', price: 'BUY 100 @ Rs.2300', image: '/product-pens.jpg' },
  { id: 5, name: 'Getz Opaque Push Type Ballpoint Pen', price: 'BUY 100 @ Rs.2000', image: '/product-pens.jpg' },
  { id: 6, name: 'Customized Daily Journal LED Lamp', price: 'BUY 1 @ Rs.775', image: '/product-led-lamp.jpg' },
]

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PromoBanner />
      <main>
        <HeroSection />
        <CategoriesSection />
        <ProductCarousel title="Our Most Popular Products" products={popularProducts} />
        <ProductCarousel title="Trending" products={trendingProducts} />
        <ProductCarousel title="Labels, Stickers and Packaging" products={labelsProducts} />
        <PromoBannersSection />
        <ProductCarousel title="Explore More" products={exploreMoreProducts} />
        <ProductCarousel title="New Arrivals" products={newArrivals} />
        <EmailSubscription />
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
