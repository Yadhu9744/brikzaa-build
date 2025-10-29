
import React from 'react';
import { Link } from 'react-router-dom';
import type { Material, Service, Worker } from '../types';
import { useAuth } from '../hooks';
import { BriefcaseIcon, LocationIcon, PhoneIcon } from './Icons';

export const MaterialCard: React.FC<{ material: Material }> = ({ material }) => (
  <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
    <img className="w-full h-48 object-cover" src={material.image} alt={material.name} />
    <div className="p-6">
      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{material.name}</h3>
      <p className="text-slate-600 dark:text-slate-300 mb-4">{material.description}</p>
      <div className="text-sm font-semibold text-primary">{material.priceRange}</div>
    </div>
  </div>
);

export const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-1 transition-transform duration-300 flex flex-col items-center">
    <div className="bg-primary/10 p-4 rounded-full mb-4">
       <service.icon className="h-10 w-10 text-primary" />
    </div>
    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{service.name}</h3>
    <p className="text-slate-600 dark:text-slate-300 mb-4 flex-grow">{service.description}</p>
    <Link to={`/services/${service.id}`} className="mt-auto px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-md text-sm font-medium transition-colors w-full">
      View Details
    </Link>
  </div>
);

export const WorkerCard: React.FC<{ worker: Worker }> = ({ worker }) => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 flex flex-col sm:flex-row items-center gap-6 transform hover:shadow-xl transition-shadow duration-300">
      <img className="w-24 h-24 rounded-full object-cover border-4 border-primary/50" src={worker.avatar} alt={worker.name} />
      <div className="flex-grow text-center sm:text-left">
        <h3 className="text-2xl font-bold text-slate-800 dark:text-white">{worker.name}</h3>
        <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-500 dark:text-slate-400 mt-1">
            <BriefcaseIcon className="h-5 w-5" />
            <span>{worker.experience} years of experience</span>
        </div>
        <div className={`mt-2 flex items-center justify-center sm:justify-start gap-2 ${isLoggedIn ? '' : 'blur-sm'}`}>
            <LocationIcon className="h-5 w-5 text-slate-500 dark:text-slate-400" />
            <span className="text-slate-600 dark:text-slate-300">{worker.location}</span>
        </div>
        <div className={`mt-1 flex items-center justify-center sm:justify-start gap-2 ${isLoggedIn ? '' : 'blur-sm'}`}>
            <PhoneIcon className="h-5 w-5 text-slate-500 dark:text-slate-400" />
            <span className="text-slate-600 dark:text-slate-300">{worker.phone}</span>
        </div>
      </div>
      <Link to={`/worker/${worker.id}`} className="mt-4 sm:mt-0 ml-auto px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-md text-sm font-medium transition-colors">
        View Details
      </Link>
    </div>
  );
};
