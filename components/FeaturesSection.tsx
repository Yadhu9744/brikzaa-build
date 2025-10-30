import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, imageUrl }) => (
  <div className="relative rounded-2xl overflow-hidden shadow-lg group h-80 transform hover:-translate-y-2 transition-all duration-500">
    {/* Background Image */}
    <img
      src={imageUrl}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />

    {/* Glassy Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent backdrop-blur-0 group-hover:backdrop-blur-sm transition-all duration-500"></div>

    {/* Content */}
    <div className="relative p-6 flex flex-col justify-end h-full text-white">
      <div className="mb-4 text-orange-400 drop-shadow-md">{icon}</div>
      <h3 className="text-2xl font-bold tracking-wide mb-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
        {title}
      </h3>
      <p className="text-slate-200/90 text-base font-medium leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
        {description}
      </p>
    </div>
  </div>
);

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      ),
      title: 'Find Professionals',
      description: 'Access trusted electricians, plumbers, and architects to build your dream project right.',
      imageUrl: '/Images/home/find.jfif',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 18v-5h2v5h1v2H1v-2h1v-5h2v5h14zM10 4h4v2h-4zM4 6h16v2H4zm1 9h14v-5H5z" />
        </svg>
      ),
      title: 'Source Materials',
      description: 'Find top-quality materials from verified suppliers at the best prices.',
      imageUrl: '/Images/home/source.jfif',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83L19.5 9.5l1.21-1.21zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z" />
        </svg>
      ),
      title: 'Manage Projects',
      description: 'Track progress, manage workers, and handle tasks seamlessly in one place.',
      imageUrl: '/Images/home/manage.jfif',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zM4 8V6h16v2H4z" />
        </svg>
      ),
      title: 'Secure Payments',
      description: 'Pay safely and quickly — ensuring trust between clients and professionals.',
      imageUrl: '/Images/home/secure.jfif',
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-orange-50 via-white to-orange-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl drop-shadow-[0_3px_8px_rgba(0,0,0,0.3)]">
            Everything You Need to Build
          </h2>
          <p className="mt-4 text-lg font-medium text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From foundation to finish, we’ve got you covered — connect, manage, and build smarter.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
