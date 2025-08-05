// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import router components

// import ProductDetailPage from './pages/ProductDetailPage'; // You'd create this later

import './App.css'; // Your main app CSS
import HomePage from './pages/HomePage.jsx';
import ShopPage from './pages/ShopPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
// Importing the Contact page
import ContactPage from './pages/ContactPage.jsx'
// Importing components for header and footer
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import SheepCard from './components/SheepCard.jsx';
import './index.css'; // Ensure Tailwind CSS is imported

function App() {
  return (
    <Router> {/* BrowserRouter enables client-side routing */}
      <div className="flex flex-col min-h-screen"> {/* Tailwind for full height layout */}
        <Header />
        <div className="flex-grow"> {/* This makes content grow to push footer down */}
          <Routes> {/* Routes defines different paths */}
            <Route path="/" element={<HomePage />} /> {/* Home page at root path */}
            <Route path="/shop" element={<ShopPage />} /> {/* Shop page */}
            <Route path="/contact" element={<ContactPage />} /> {/* Contact page */}
            <Route path="/about" element={<AboutPage />} /> {/* About page */}
            {/* Example: Route for a detailed product page (e.g., /shop/s1) */}
            {/* <Route path="/shop/:sheepId" element={<ProductDetailPage />} /> */}
            {/* You could add an AboutPage and other pages here */}
            {/* Fallback for 404 Not Found (optional) */}
            <Route path="*" element={<h1 className="text-center text-4xl mt-20">404 - Page Not Found</h1>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;