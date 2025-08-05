import React from 'react';

function Button({ children, onClick, type = 'button' }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition duration-300"
    >
      {children}
    </button>
  );
}

export default Button;
