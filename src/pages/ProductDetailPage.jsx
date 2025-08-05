import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetailPage() {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">Sheep ID: {id}</h1>
      {/* Replace with dynamic data based on ID */}
      <p>More details about the sheep will appear here.</p>
    </div>
  );
}

export default ProductDetailPage;