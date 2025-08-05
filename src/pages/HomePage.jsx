import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function HomePage() {
  const testimonials = [
    {
      name: 'Grace W.',
      photo: 'https://randomuser.me/api/portraits/women/45.jpg',
      quote: 'The Merino sheep I bought exceeded my expectations. Healthy, calm, and delivered right on schedule!',
    },
    {
      name: 'Elijah T.',
      photo: 'https://randomuser.me/api/portraits/men/33.jpg',
      quote: 'Jennifer Livestock is my go-to source for breeding stock. Transparent, ethical, and highly reliable.',
    },
    {
      name: 'Farmhouse Co-op',
      photo: 'https://randomuser.me/api/portraits/men/55.jpg',
      quote: 'Our small farm needed trustworthy suppliers — Jennifer Livestock delivered in every sense.',
    },
    {
      name: 'Leah F.',
      photo: 'https://randomuser.me/api/portraits/women/68.jpg',
      quote: 'Prompt delivery, responsive service, and great genetics in their rams. Highly recommend them.',
    },
  ];
  return (
    <main>
      {/* Hero Section */}
<section className="relative h-[80vh] overflow-hidden">
  <img
    src="/suffolk sheep.jpeg"
    alt="Jennifer Livestock"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

        <div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-center text-center px-4">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-extrabold mb-4">Jennifer Livestock</h1>
            <p className="text-xl mb-6">Premium Sheep. Ethical Farms. Delivered Nationwide.</p>
            <a
              href="/shop"
              className="bg-white text-green-800 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition duration-300"
            >
              Browse Livestock
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-green-600 py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Why Choose Jennifer Livestock?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">Certified Health & Genetics</h3>
              <p className="text-green-100">All our sheep are health-checked and bred from high-quality stock, ensuring great productivity and long-term value.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">Trusted Farm Network</h3>
              <p className="text-green-100">We work only with verified ethical farms to maintain animal welfare and customer confidence.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">Nationwide Delivery</h3>
              <p className="text-green-100">Get livestock delivered safely to your doorstep, with flexible delivery options and expert handling.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Livestock Categories */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Browse by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Breeding Sheep</h3>
              <p className="text-gray-600 mb-4">Top-quality ewes and rams for expanding your flock.</p>
              <a href="/shop?category=breeding" className="text-green-700 font-bold hover:underline">Shop Now &rarr;</a>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Meat Sheep</h3>
              <p className="text-gray-600 mb-4">Well-fed sheep raised for meat production with optimal feed conversion.</p>
              <a href="/shop?category=meat" className="text-green-700 font-bold hover:underline">Explore &rarr;</a>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Wool Sheep</h3>
              <p className="text-gray-600 mb-4">Soft, dense fleece sheep ideal for wool production businesses.</p>
              <a href="/shop?category=wool" className="text-green-700 font-bold hover:underline">See More &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">What Our Customers Say</h2>
          <p className="text-gray-600 mb-10">We’re proud to serve farms, breeders, and families across the country.</p>

          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="max-w-6xl mx-auto"
          >
{testimonials.map((t, index) => (
 <SwiperSlide key={index}>
  <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 h-full flex flex-col items-center text-center">
    <div className="relative mb-4">
      <img
        src={t.photo}
        alt={t.name}
        className="w-20 h-20 rounded-full object-cover border-4 border-green-200 shadow-sm transition-transform duration-300 hover:scale-105"
      />
      {/* Removed the strange character here */}
    </div>
    <p className="italic text-gray-700 mb-4">"{t.quote}"</p>
    <p className="text-green-800 font-bold">{t.name}</p>
    <p className="text-gray-500 text-sm">Happy Customer</p>
  </div>
</SwiperSlide>
          ))}
          </Swiper>
        </div>
      </section>

      {/* About Snippet */}
      <section className="bg-green-50 py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Jennifer Livestock</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Jennifer Livestock is committed to connecting farmers and breeders with premium livestock. With years of experience and a strong ethical foundation, we ensure the quality, health, and traceability of every animal sold through our platform.
          </p>
          <a href="/about" className="text-green-700 hover:underline mt-4 inline-block">Learn More &rarr;</a>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
