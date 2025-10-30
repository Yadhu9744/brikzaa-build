import React, { useState } from 'react';

const ContactPageFinalWorking: React.FC = () => {
  const officeLocation = {
    name: 'Kannur Headquarters',
    address: 'Second Floor, KMS Building, Thavakkara, Kannur, Kerala, 670002',
    phone: '09895348082',
    hours: 'Mon - Fri: 9:00 AM - 5:00 PM',
  };
  

  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Correct Google Maps Embed URL (only the URL string)
  const mapEmbedUrl ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4199.318510144879!2d75.36951017537469!3d11.873644188349873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba43fb1ee97011b%3A0x136ebf6d776a9b47!2sUpcode%20Software%20Labs%20-%20AI%20Software%20Development%20Training%20-%20Kannur!5e1!3m2!1sen!2sin!4v1761731944044!5m2!1sen!2sin" ,width="600" ,height="450" ,style="border:0;" ,allowfullscreen="" ,loading="lazy" ,referrerpolicy="no-referrer-when-downgrade"; 

  // Image path for your local file: public/Images/contactpage.png (or .jpg as previously used)
  // Note: I'm reverting to the last confirmed link as the local file path was causing issues,
  // but if you have the file 'contactpage.png' in public/Images, the path '/Images/contactpage.png' is correct.
  // Using the successful link from the previous step for demonstration:
  const backgroundImageURL = "/Public/Images/contactpage.jpg"; 

  // --- Form Submission Logic ---
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    setTimeout(() => {
      setSubmissionStatus('success');
    }, 1500); // Simulate network delay
  };
  
  // --- Conditional Form Rendering ---
  const renderFormContent = () => {
    if (submissionStatus === 'success') {
      return (
        <div className="flex flex-col items-center justify-center h-full text-center py-20 bg-green-50/60 dark:bg-green-900/60 rounded-lg border border-green-300 dark:border-green-700">
          <svg className="w-16 h-16 text-green-600 dark:text-green-400 mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <h3 className="text-2xl font-bold text-green-800 dark:text-green-300">Enquiry Sent Successfully!</h3>
          <p className="mt-2 text-gray-800 dark:text-gray-200">Thank you for reaching out. We will be in touch soon.</p>
          <button 
            onClick={() => setSubmissionStatus('idle')}
            className="mt-6 text-sm font-medium text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 transition-colors"
          >
            Send another enquiry
          </button>
        </div>
      );
    }

    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white">Name</label>
          <div className="mt-1">
            <input type="text" name="name" id="name" autoComplete="name" required placeholder="Your Name" className="w-full border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 text-gray-900 dark:text-white dark:bg-gray-700/80 focus:ring-orange-500 focus:border-orange-500"/>
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <div className="mt-1">
            <input id="email" name="email" type="email" autoComplete="email" required placeholder="name@example.com" className="w-full border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 text-gray-900 dark:text-white dark:bg-gray-700/80 focus:ring-orange-500 focus:border-orange-500"/>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white">Message</label>
          <div className="mt-1">
            <textarea id="message" name="message" rows={6} required placeholder="Tell us about your project..." className="w-full border border-orange-500 dark:border-orange-500 rounded-md py-2 px-3 text-gray-900 dark:text-white dark:bg-gray-700/80 focus:ring-orange-500 focus:border-orange-500"></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button 
            type="submit" 
            className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-150 ease-in-out"
          >
            Send Inquiry
          </button>
        </div>
      </form>
    );
  };

  return (
    // Outer container with inline background style
    <div 
      className="relative flex items-center justify-center min-h-screen p-8 sm:p-12"
      style={{
        backgroundImage: `url(${backgroundImageURL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      
      {/* Semi-transparent dark overlay for readability (opacity-70 is still dark). */}
      <div className="absolute inset-0 bg-black opacity-30"></div> 

      {/* Main Card Container: Opacity reduced to /60 to show more background. */}
      <div className="max-w-6xl w-full flex flex-col lg:flex-row rounded-3xl shadow-2xl overflow-hidden z-10
                  bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm"> 
        
        {/* === LEFT COLUMN: Office Location & Map Embed === */}
        {/* Opacity reduced to /60 here as well. */}
        <div className="w-full lg:w-1/2 flex flex-col p-8 md:p-12 bg-gray-50/60 dark:bg-gray-700/60">
          
          {/* 1. LIVE MAP EMBED using iframe */}
          <div className="h-64 sm:h-80 w-full mb-8 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
            >
              <p>Map could not be loaded. Please check the embed URL.</p>
            </iframe>
          </div>
          
          {/* 2. Location Info Card */}
          <div className="text-gray-900 dark:text-white">
            <h3 className="text-xl font-bold mb-3">Our {officeLocation.name}</h3>
            <div className="space-y-3 text-sm text-gray-800 dark:text-gray-200">
              
              {/* Address */}
              <div className="flex items-start">
                <svg className="flex-shrink-0 w-5 h-5 mr-3 text-orange-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Address: {officeLocation.address}</span>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <svg className="flex-shrink-0 w-5 h-5 mr-3 text-orange-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 3.318a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l3.318.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.823 18 2 12.177 2 5V3z" />
                </svg>
                <span>Phone: {officeLocation.phone}</span>
              </div>

              {/* Hours */}
              <div className="flex items-start">
                <svg className="flex-shrink-0 w-5 h-5 mr-3 text-orange-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>Hours: {officeLocation.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* === RIGHT COLUMN: Clean Contact Form or Success Message === */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12 md:p-16">
          
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Get In Touch for Your Queries
          </h2>
          <p className="text-sm text-gray-800 dark:text-gray-200 mb-8">
            Please fill out the form below and we'll connect with you shortly.
          </p>

          {renderFormContent()}
          
        </div>
        
      </div>
    </div>
  );
};

export default ContactPageFinalWorking;