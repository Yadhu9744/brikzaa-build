import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { workers } from '../data/services/workers';
import { services } from '../data/services/servics';
import { WorkerCard } from '../components/Cards';
import type { Service, Worker } from '../types';
import NotFoundPage from './NotFoundPage';

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();

  const service: Service | undefined = services.find(s => s.id === serviceId);
  const serviceWorkers: Worker[] = workers.filter(w => w.serviceId === serviceId);

  if (!service) {
    return <NotFoundPage />;
  }

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="mb-10">
        <Link 
          to="/services" 
          className="text-blue-600 dark:text-blue-400 hover:underline mb-3 inline-block text-sm font-medium"
        >
          ← Back to Services
        </Link>

        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Available {service.name}s
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {service.description}
          </p>
        </div>
      </div>
      
      {serviceWorkers.length > 0 ? (
        <div className="space-y-6 sm:space-y-8">
          {serviceWorkers.map(worker => (
            <WorkerCard key={worker.id} worker={worker} />
          ))}
        </div>
      ) : (
        <div className="text-center py-14 bg-slate-100 dark:bg-slate-800 rounded-xl">
          <p className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 font-medium">
            No {service.name}s found at the moment.
          </p>
          <p className="mt-2 text-slate-400 text-sm">Please check back later.</p>
        </div>
      )}
    </div>
  );
};

export default ServiceDetailPage;
