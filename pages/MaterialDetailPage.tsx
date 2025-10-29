import React, { useState, useEffect } from 'react';
import { useParams, Link , useNavigate } from 'react-router-dom';
import { materials } from '../data/materials/materials';
import { companies } from '../data/materials/companies';
import type { Material } from '../types';
import { CompanyCarousel } from '../components/CompanyCarousel';
import { useDispatch } from 'react-redux';
import { addToCart } from '../src/store/cartSlice';
import type { AppDispatch } from '../src/store/store';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MaterialDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const material: Material | undefined = materials.find((m) => m.id === id);
  const [selectedImage, setSelectedImage] = useState<string | undefined>(material?.image);
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    setSelectedImage(material?.image);
  }, [material]);

  if (!material) {
    return (
      <div className="text-center py-20">
        <p className="text-lg text-slate-500">Material not found.</p>
        <Link to="/materials" className="text-primary underline">
          Back to Materials
        </Link>
      </div>
    );
  }

  const relatedCompanies = companies.filter((c) =>
    c.materialsSupplied?.includes(material.id)
  );

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: material.id,
        name: material.name,
        price: parseFloat(material.priceRange.replace(/[^0-9.]/g, '')) || 0,
        quantity: 1,
        image: material.image,
      })
    );

    toast.success(`${material.name} added to cart!`, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleBooking = () => {
  navigate(`/booking/${material.id}`);
};

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer />

      <Link to="/materials" className="text-primary underline mb-4 inline-block">
        ← Back
      </Link>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* 🖼 Left: main image + thumbnails */}
        <div>
          <img
            src={selectedImage || material.image}
            alt={material.name}
            className="rounded-xl shadow-lg w-full h-96 object-cover transition-transform duration-300 hover:scale-105"
          />
          {material.gallery && (
            <div className="flex gap-3 mt-4">
              {material.gallery.map((img) => (
                <img
                  key={img}
                  src={img}
                  alt="Gallery thumbnail"
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 rounded-md cursor-pointer object-cover border-2 transition-all duration-200 ${
                    selectedImage === img
                      ? 'border-blue-500 scale-105'
                      : 'border-transparent'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* 📋 Right: Material details */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            {material.name}
          </h1>
          <p className="mt-4 text-slate-700 dark:text-slate-300">
            {material.description}
          </p>
          <p className="mt-4 font-semibold text-primary">
            Price Range: {material.priceRange}
          </p>

          <div className="mt-6 space-y-2 text-slate-600 dark:text-slate-300">
            <p>
              <strong>Category:</strong> {material.category}
            </p>
            <p>
              <strong>Unit:</strong> {material.unit}
            </p>
            <p>
              <strong>Ratings:</strong> {material.ratings} ⭐
            </p>
            <p>
              <strong>Availability:</strong> {material.availability}
            </p>
          </div>

          {material.technicalSpecs && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">
                Technical Specifications
              </h2>
              <ul className="list-disc ml-6 text-slate-600 dark:text-slate-400">
                {Object.entries(material.technicalSpecs).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {material.usageTips && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">Usage Tips</h2>
              <p className="text-slate-700 dark:text-slate-300">
                {material.usageTips}
              </p>
            </div>
          )}

          {material.contactInfo && (
            <div className="mt-8 border-t border-slate-300 dark:border-slate-700 pt-4">
              <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
              <p>
                <strong>Phone:</strong> {material.contactInfo.phone}
              </p>
              <p>
                <strong>Email:</strong> {material.contactInfo.email}
              </p>
              <p>
                <strong>Address:</strong> {material.contactInfo.address}
              </p>
            </div>
          )}

          <div className="mt-8 flex gap-4">
            <button
              onClick={handleAddToCart}
              className="px-5 py-2 rounded-md bg-primary text-white font-medium hover:bg-primary/80"
            >
              🛒 Add to Cart
            </button>
            <button
            
              onClick={handleBooking}
              className="px-5 py-2 rounded-md bg-green-600 text-white font-medium hover:bg-green-700"
            >
              📅 Book Now
            </button>
          </div>
        </div>
      </div>

      {/* 🏢 Related Companies Carousel */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Suppliers & Companies</h2>
        {relatedCompanies.length > 0 ? (
          <CompanyCarousel
            companies={relatedCompanies}
            visibleCards={3}
            autoPlayInterval={4000}
          />
        ) : (
          <p className="text-sm text-slate-500">
            No suppliers found for this material.
          </p>
        )}
      </div>
    </div>
  );
};

export default MaterialDetailPage;
