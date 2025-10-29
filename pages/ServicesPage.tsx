
import React from 'react';
import { services } from '../data/services/servics';
import { ServiceCard } from '../components/Cards';

const ServicesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">Professional Services</h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Connect with skilled professionals for any job.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
