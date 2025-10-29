
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary tracking-wide uppercase">Contact Us</h2>
          <p className="mt-1 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Get in Touch
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-slate-500 dark:text-slate-400">
            We'd love to hear from you. Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
          </p>
        </div>

        <div className="mt-12 bg-white dark:bg-slate-800 shadow-xl rounded-lg overflow-hidden">
          <div className="p-8">
            <h3 className="text-lg font-medium text-slate-900 dark:text-white">Send us a message</h3>
            <form action="#" method="POST" className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">First name</label>
                <div className="mt-1">
                  <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700" />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Last name</label>
                <div className="mt-1">
                  <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                <div className="mt-1">
                  <input id="email" name="email" type="email" autoComplete="email" className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                <div className="mt-1">
                  <textarea id="message" name="message" rows={4} className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700"></textarea>
                </div>
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                  Let's talk
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
