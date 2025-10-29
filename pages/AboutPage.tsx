
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary tracking-wide uppercase">About Us</h2>
          <p className="mt-1 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Building a Better Network
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-slate-500 dark:text-slate-400">
            Construction Connect was born from a simple idea: to bridge the gap in the construction industry.
          </p>
        </div>
        <div className="mt-12 prose prose-lg dark:prose-invert mx-auto text-slate-600 dark:text-slate-300">
          <p>
            In the fast-paced world of construction, finding the right people, materials, and services quickly is crucial. 
            We noticed that workers, suppliers, and service providers were often disconnected, relying on word-of-mouth or outdated listings. 
            This inefficiency leads to delays, increased costs, and missed opportunities.
          </p>
          <p>
            Our mission is to create a centralized, easy-to-use platform where everyone in the construction field can connect. 
            Whether you're a contractor looking for a reliable electrician, a supplier showcasing your materials, or a plumber seeking new projects, 
            Construction Connect is here to help you build strong, professional relationships.
          </p>
          <p>
            This hackathon project is our first step towards realizing that vision. We've built a frontend-only prototype to demonstrate the core functionality and user experience we aim to provide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
