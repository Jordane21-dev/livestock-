// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'your_service_id',     // <-- replace with your actual Service ID
        'your_template_id',    // <-- replace with your actual Template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        'your_public_key'      // <-- replace with your actual Public Key
      )
      .then(
        (response) => {
          setStatus({ type: 'success', message: 'Thank you! Your message has been sent.' });
          setForm({ name: '', email: '', message: '' });
          setLoading(false);
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
          setLoading(false);
        }
      );
  };

  return (
    <main className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Get in Touch</h2>

      <div className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
        {status.message && (
          <div
            className={`mb-6 px-4 py-3 rounded text-sm font-medium ${
              status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}
          >
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your full name"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 text-white font-bold rounded-lg transition duration-300 ${
              loading ? 'bg-green-400' : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </main>
  );
}

export default ContactPage;
