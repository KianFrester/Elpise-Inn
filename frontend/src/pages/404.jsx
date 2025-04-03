import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
const NotFound = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-auto bg-gray-100 flex flex-col py-12">
      <div className="text-center">
        
        <svg className="w-40 h-40 mx-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        
        <h1 className="mt-5 text-6xl font-bold text-gray-800">404</h1>
        <h2 className="mt-3 text-2xl font-semibold text-gray-700">Page Not Found</h2>
        <p className="mt-4 text-gray-500 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        
        <Link to="/" className="inline-block mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md
                    transition duration-300 transform hover:scale-105 hover:shadow-lg">
            Return to Homepage
          </button>
        </Link>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default NotFound;
