export default function AboutSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Company Info */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              VistaPrint India : The leader in customisation
            </h2>
            <p className="text-gray-600 leading-relaxed">
              For more than 20 years, VistaPrint has helped business owners, entrepreneurs 
              and individuals create their identities with custom designs and professional 
              marketing. Our online printing services are intended to help you find high 
              quality customised products you need – visiting cards, personalized clothing, 
              gifting products, and much more.
            </p>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Even Low Quantities @ Best Prices
              </h3>
              <p className="text-gray-600">
                We offer low/ single product quantities at affordable prices.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                High quality products and Easy design
              </h3>
              <p className="text-gray-600">
                Our wide selection of high-quality products and online design tools make it 
                easy for you to customize and order your favourite products.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Free replacement or Full Refund
              </h3>
              <p className="text-gray-600">
                We stand by everything we sell. So if you're not satisfied, we'll make it right.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
