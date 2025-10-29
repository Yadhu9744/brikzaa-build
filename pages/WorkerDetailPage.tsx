
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { workers, services } from '../data';
import type { Worker } from '../types';
import { BriefcaseIcon, LocationIcon, PhoneIcon, UserIcon } from '../components/Icons';
import NotFoundPage from './NotFoundPage';

const WorkerDetailPage: React.FC = () => {
  const { workerId } = useParams<{ workerId: string }>();

  const worker: Worker | undefined = workers.find(w => w.id === workerId);
  const service = services.find(s => s.id === worker?.serviceId);

  if (!worker || !service) {
    return <NotFoundPage />;
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
       <Link to={`/services/${worker.serviceId}`} className="text-primary hover:underline mb-6 inline-block">&larr; Back to {service.name}s</Link>
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl overflow-hidden">
        <div className="p-8">
          <div className="md:flex md:items-start md:gap-8">
            <div className="text-center md:text-left md:flex-shrink-0">
              <img className="w-40 h-40 rounded-full object-cover mx-auto border-4 border-primary" src={worker.avatar} alt={worker.name} />
            </div>
            <div className="mt-6 md:mt-0 flex-grow">
              <h1 className="text-4xl font-bold text-slate-900 dark:text-white">{worker.name}</h1>
              <p className="text-xl font-semibold text-primary mt-1">{service.name}</p>
              
              <div className="mt-6 space-y-4 text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-3">
                      <BriefcaseIcon className="h-6 w-6 text-slate-400"/>
                      <span>{worker.experience} years of professional experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                      <LocationIcon className="h-6 w-6 text-slate-400"/>
                      <span>{worker.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                      <PhoneIcon className="h-6 w-6 text-slate-400"/>
                      <span>{worker.phone}</span>
                  </div>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-200 dark:border-slate-700 pt-8">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Specialties</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                  {worker.specialties.map((specialty, index) => (
                      <li key={index} className="bg-primary/10 text-primary-dark dark:text-primary-light font-medium py-1 px-3 rounded-full text-sm">
                          {specialty}
                      </li>
                  ))}
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerDetailPage;
