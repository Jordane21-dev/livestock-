// Removed duplicate default export About component
import React from 'react';
function AboutPage() {
  return (
    <main>
      {/* Header Section */}
      <section className="bg-green-900 text-white py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-5xl font-extrabold mb-4">About Jennifer Livestock</h1>
          <p className="text-lg opacity-90">
            Ethical. Sustainable. Farmer-Focused. We're redefining livestock sourcing — one sheep at a time.
          </p>
        </div>
      </section>

      {/* Company Mission */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Jennifer Livestock was born from a simple belief: sourcing premium, ethically raised sheep should be easy,
            trustworthy, and transparent. We partner with a select network of farms nationwide to offer livestock that meets
            the highest standards of health, genetics, and temperament.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-green-800">Animal Welfare</h3>
              <p className="text-gray-600">We only work with farms that treat their livestock with care, dignity, and compassion.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-green-800">Transparency</h3>
              <p className="text-gray-600">From genetics to delivery, we provide full traceability and honest info about every sheep.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-green-800">Sustainability</h3>
              <p className="text-gray-600">We believe in farming that protects the environment, preserves heritage breeds, and serves future generations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded by agricultural professionals and animal lovers, Jennifer Livestock is more than a marketplace — it’s a
                mission. We noticed a gap in the market for reliable sheep sourcing, especially for smaller farms and
                family-run operations. Today, we bridge that gap with integrity and care.
              </p>
              <p className="text-gray-700">
                Whether you're starting your flock or scaling a breeding program, we're here with curated options and expert
                support.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1602526218859-d3a43b8127b5"
              alt="Farm sheep"
              className="rounded-lg shadow-lg object-cover w-full h-72 md:h-full"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-100 py-12 px-4 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Growing Community</h2>
          <p className="text-gray-700 mb-6">Thousands of satisfied farmers and breeders trust Jennifer Livestock. You can too.</p>
          <a
            href="/shop"
            className="bg-green-800 text-white font-semibold py-3 px-6 rounded-full hover:bg-green-700 transition"
          >
            Browse Livestock
          </a>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
