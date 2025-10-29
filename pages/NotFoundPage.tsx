
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl font-extrabold text-primary">404</h1>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Page Not Found</h2>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Link to="/" className="mt-8 inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-dark transition-colors duration-300">
            Go back home
        </Link>
    </div>
  );
};

export default NotFoundPage;
