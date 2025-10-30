import React from 'react';
import { Link } from 'react-router-dom';

const ThankYouPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold text-green-600 mb-4">
        🎉 Thanks for your order!
      </h1>
      <p className="text-gray-600 mb-6">
        Your booking has been received. We’ll contact you shortly.
      </p>
      <Link
        to="/materials"
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Back to Materials
      </Link>
    </div>
  );
};

export default ThankYouPage;
