import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { materials } from '../data/materials/materials';
import type { Material } from '../types';

const BookingPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const material: Material | undefined = materials.find((m) => m.id === id);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    quantity: 1,
    notes: '',
  });

  if (!material) {
    return <p className="text-center text-gray-500 mt-10">Material not found</p>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can send formData to your backend if needed
    navigate('/thank-you');
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 grid md:grid-cols-2 gap-8">
      {/* Left: Product Info */}
      <div className="flex flex-col items-center">
        <img
          src={material.image}
          alt={material.name}
          className="w-80 h-80 object-cover rounded-xl shadow-md"
        />
        <h2 className="mt-4 text-2xl font-bold">{material.name}</h2>
        <p className="text-gray-600 mt-2">{material.priceRange}</p>
      </div>

      {/* Right: Booking Form */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Booking Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700">Address</label>
            <textarea
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700">Quantity</label>
            <input
              type="number"
              name="quantity"
              min={1}
              value={formData.quantity}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700">Additional Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
