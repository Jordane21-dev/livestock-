import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-green-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Jennifer Livestock</Link>
        <nav className="flex space-x-8">
          <Link to="/" className="transition duration-200 hover:text-yellow-300">Home</Link>
           <Link to="/shop" className="transition duration-200 hover:text-yellow-300">Shop</Link>
          <Link to="/contact" className="transition duration-200 hover:text-yellow-300">Contact</Link>
          <Link to="/about" className="transition duration-200 hover:text-yellow-300">About</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
