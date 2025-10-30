import React from 'react';
import { services } from '../data/services/servics';
import { ServiceCard } from '../components/Cards';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Professional Services
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Connect with our network of skilled professionals for any job, big or small.
          </p>
        </div>

        {/* Animated Cards */}
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-stretch">
  {services.map((service, index) => (
    <div
      key={service.id}
      className="opacity-0 animate-slideIn h-full"
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      <div className="transform transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl rounded-2xl h-full">
        <ServiceCard service={service} />
      </div>
    </div>
  ))}
</div>
      </div>
    </div>
  );
};

export default ServicesPage;
