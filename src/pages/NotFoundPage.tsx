import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-neutral-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full text-center"
      >
        <div className="mb-8">
          <span className="text-8xl font-heading font-bold text-primary-500">404</span>
        </div>
        <h1 className="text-3xl font-heading font-bold mb-4">Page Not Found</h1>
        <p className="text-neutral-600 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="btn btn-primary inline-flex items-center"
        >
          <Home size={18} className="mr-2" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;