import React from 'react';

function Toast({ message, type = 'success' }) {
  const bgColor = type === 'success' ? 'bg-green-600' : 'bg-red-600';
  return (
    <div className={`${bgColor} text-white px-4 py-2 rounded shadow fixed bottom-4 right-4`}>
      {message}
    </div>
  );
}

export default Toast;
