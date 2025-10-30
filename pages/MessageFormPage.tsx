import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { workers } from '../data/services/workers';

const MessageFormPage: React.FC = () => {
  const { workerId } = useParams<{ workerId: string }>();
  const worker = workers.find(w => w.id === workerId);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  if (!worker) {
    return (
      <div className="bg-slate-50 dark:bg-slate-950 text-center py-20">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Profile not found</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">The professional you are looking for does not exist.</p>
        <Link to="/services" className="mt-8 inline-block px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition-colors">
          Back to Services
        </Link>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here (e.g., API call)
    console.log({
        workerId: worker.id,
        name,
        email,
        message
    });
    setIsSent(true);
    setTimeout(() => {
        navigate(`/worker/${worker.id}`);
    }, 3000);
  };
  
  if (isSent) {
      return (
        <div className="bg-slate-50 dark:bg-slate-950 flex items-center justify-center min-h-[60vh] text-center">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mt-4">Message Sent!</h1>
                <p className="mt-2 text-slate-600 dark:text-slate-400">{worker.name} will get back to you shortly.</p>
                <p className="mt-4 text-sm text-slate-500">Redirecting you back to the profile...</p>
            </div>
        </div>
      )
  }

  return (
    <div className="bg-slate-100 dark:bg-slate-950 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Contact {worker.name}</h1>
            <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">Describe your project and get a quote.</p>
        </div>
        <div className="mt-12 bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Your Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                    />
                </div>
                 <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Your Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                    />
                </div>
                 <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Your Message</label>
                    <textarea
                        name="message"
                        id="message"
                        rows={6}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={`Hi ${worker.name.split(' ')[0]}, I'd like to discuss a project...`}
                        className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                    />
                </div>
                <div>
                    <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                        Send Message
                    </button>
                </div>
            </form>
        </div>

        {/* --- New Sections Start Here --- */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pro Tips Section */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.375 3.375 0 0112 18.375v-1.5a5.375 5.375 0 015.375-5.375M12 12.75a3.375 3.375 0 01-3.375-3.375A3.375 3.375 0 0112 6.002V12.75z" />
                    </svg>
                    Pro Tips for a Quick Response
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        <span><strong className="font-semibold text-slate-700 dark:text-slate-300">Be Specific:</strong> Clearly describe the work you need done. The more details, the better.</span>
                    </li>
                    <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        <span><strong className="font-semibold text-slate-700 dark:text-slate-300">Include Timelines:</strong> Mention your ideal start date and any deadlines.</span>
                    </li>
                     <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        <span><strong className="font-semibold text-slate-700 dark:text-slate-300">Attach Photos:</strong> If possible, mention that you can provide photos of the project area.</span>
                    </li>
                </ul>
            </div>
            {/* What to Expect Section */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    What to Expect Next
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">
                     <li className="flex items-start">
                        <span className="font-bold text-primary mr-2">1.</span>
                        <span>Your message is sent directly to {worker.name}. No middlemen.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="font-bold text-primary mr-2">2.</span>
                        <span>Most professionals respond within <strong className="font-semibold text-slate-700 dark:text-slate-300">24-48 hours</strong> on business days.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="font-bold text-primary mr-2">3.</span>
                        <span>You'll receive their reply via the email you provided. Be sure to check your spam folder.</span>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MessageFormPage;