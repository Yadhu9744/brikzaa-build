import React from "react";
import { Link } from "react-router-dom";
import type { Material, Service, Worker } from "../types";
import { useAuth } from "../hooks";
import { BoltIcon, BriefcaseIcon, HammerIcon, LocationIcon, PaletteIcon, PhoneIcon, PlumberIcon } from "./Icons";

export const MaterialCard: React.FC<{ material: Material }> = ({
  material,
}) => (
  
    <Link
    to={`/materials/${material.id}`} className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
      <img
        className="w-full h-48 object-cover"
        src={material.image}
        alt={material.name}
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
          {material.name}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          {material.description}
        </p>
        <div className="text-sm font-semibold text-primary">
          {material.priceRange}
        </div>
      </div>
  </Link>
);

export const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center h-full w-full">
    
    {/* Image Section */}
    <div className="w-24 h-24 mb-5 rounded-full bg-gray-100 dark:bg-slate-700 flex items-center justify-center overflow-hidden shadow-inner">
      {service.imageUrl ? (
        <img
          src={service.imageUrl}
          alt={service.name}
          className="w-30 h-25 object-contain"
        />
      ) : (
        <div className="text-slate-400 text-sm">No Image</div>
      )}
    </div>

    {/* Title */}
    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-2">
      {service.name}
    </h3>

    {/* Description */}
    <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 px-2 flex-grow">
      {service.description.length > 80
        ? `${service.description.slice(0, 80)}...`
        : service.description}
    </p>

    {/* Button */}
    <div className="mt-auto">
      <Link
        to={`/services/${service.id}`}
        className="inline-block px-5 py-2 bg-slate-900 text-white text-sm font-medium rounded-md hover:bg-slate-700 transition-colors"
      >
        View
      </Link>
    </div>
  </div>
);


const getServiceIcon = (serviceId: string) => {
  switch (serviceId) {
    case "plumber":
      return PlumberIcon;
    case "electrician":
      return BoltIcon;
    case "painter":
      return PaletteIcon;
    case "mason":
    case "carpenter":
      return HammerIcon;
    default:
      return BriefcaseIcon;
  }
};

export const WorkerCard: React.FC<{ worker: Worker }> = ({ worker }) => {
  const { isLoggedIn } = useAuth();
  const Icon = getServiceIcon(worker.serviceId);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 flex flex-col sm:flex-row items-center gap-6 transform hover:shadow-xl transition-shadow duration-300">
      <div className="w-24 h-24 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 border-4 border-primary/50">
        <Icon className="w-10 h-10 text-primary" />
      </div>

      <div className="flex-grow text-center sm:text-left">
        <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
          {worker.name}
        </h3>

        <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-500 dark:text-slate-400 mt-1">
          <BriefcaseIcon className="h-5 w-5" />
          <span>{worker.experience} years of experience</span>
        </div>

        <div
          className={`mt-2 flex items-center justify-center sm:justify-start gap-2 ${
            isLoggedIn ? "" : "blur-sm"
          }`}
        >
          <LocationIcon className="h-5 w-5 text-slate-500 dark:text-slate-400" />
          <span className="text-slate-600 dark:text-slate-300">
            {worker.location}
          </span>
        </div>

        <div
          className={`mt-1 flex items-center justify-center sm:justify-start gap-2 ${
            isLoggedIn ? "" : "blur-sm"
          }`}
        >
          <PhoneIcon className="h-5 w-5 text-slate-500 dark:text-slate-400" />
          <span className="text-slate-600 dark:text-slate-300">
            {worker.phone}
          </span>
        </div>
      </div>

      <Link
        to={`/worker/${worker.id}`}
        className="mt-4 sm:mt-0 ml-auto px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-md text-sm font-medium transition-colors"
      >
        View Details
      </Link>
    </div>
  );
};
