
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="relative text-center bg-slate-200 dark:bg-slate-800 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{backgroundImage: "url('https://t3.ftcdn.net/jpg/01/88/67/32/360_F_188673280_69cCvYgLg03JsTWTEuKq1duuNHn3amWW.jpg')", opacity: 0.2}}
      ></div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
          <span className="block">Your One-Stop Hub for</span>
          <span className="block text-primary">Construction Needs</span>
        </h1>
        <p className="mt-6 max-w-lg mx-auto text-xl text-slate-700 dark:text-slate-300 sm:max-w-3xl">
          Connecting skilled labor, quality materials, and professional services. Build your next project with confidence.
        </p>
        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
          <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
            <Link to="/services" className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark sm:px-8">
              Find a Pro
            </Link>
            <Link to="/materials" className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-primary bg-white dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600 hover:bg-primary/10 sm:px-8">
              Browse Materials
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
