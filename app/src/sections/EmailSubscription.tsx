import { useState } from 'react'

export default function EmailSubscription() {
  const [email, setEmail] = useState('')
  const [agreed, setAgreed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle subscription logic
    console.log('Subscribing:', email)
  }

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="rounded-lg overflow-hidden">
            <img
              src="/banner-email-subscription.jpg"
              alt="Business Cards Collection"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Form */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              It's good to be on the list.
            </h2>
            <p className="text-gray-600 mb-6">
              Get 15% off* your first order when you sign up for our emails
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Subscription email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#0078D4] focus:ring-1 focus:ring-[#0078D4]"
                  required
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="consent"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 mr-2"
                />
                <label htmlFor="consent" className="text-sm text-gray-600 text-left">
                  Yes, I'd like to receive special offer emails from VistaPrint, as well as news about products, services and my designs in progress. Read our{' '}
                  <a href="#" className="text-[#0078D4] hover:underline">
                    Privacy and Cookie policy
                  </a>
                  .
                </label>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-gray-300 text-gray-600 rounded-md font-medium hover:bg-gray-400 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
