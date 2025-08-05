// src/components/SheepCard.jsx
import React from 'react';

function SheepCard({ sheep, isOpen, onToggle }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition hover:shadow-lg">
      <div className="flex flex-col md:flex-row">
        {/* Image Side */}
        <div className="md:w-1/2 w-full h-60 md:h-auto">
          <img
            src={sheep.imageUrl}
            alt={sheep.breed}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Information Side */}
        <div className="md:w-1/2 w-full p-6 flex flex-col justify-between text-gray-800 dark:text-gray-100">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">
              {sheep.breed} <span className="text-sm font-normal text-gray-500 dark:text-gray-400">(ID: {sheep.id})</span>
            </h2>
            <p className="text-xl font-bold text-green-600">${sheep.price}</p>

            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-300 mt-2">
              <p><strong>Age:</strong> {sheep.age}</p>
              <p><strong>Sex:</strong> {sheep.sex}</p>
              <p><strong>Fertility:</strong> {sheep.fertility}</p>
              <p><strong>Temperament:</strong> {sheep.temperament}</p>
              <p><strong>Date of Birth:</strong> {sheep.dob}</p>
            </div>
          </div>

          <div className="mt-4">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              onClick={onToggle}
            >
              {isOpen ? 'Hide Details' : 'View Details'}
            </button>

            {isOpen && (
              <div className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                <p>
                  <em>More detailed sheep information could go here.</em>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SheepCard;
