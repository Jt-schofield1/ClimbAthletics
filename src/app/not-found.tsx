'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 404 Number */}
          <div className="text-8xl sm:text-9xl font-heading font-bold text-primary mb-8">
            404
          </div>
          
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-accent mb-6">
            Page Not Found
          </h1>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-lg mx-auto">
            Sorry, we couldn't find the page you're looking for. Let's get you back to training!
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              <HomeIcon className="w-5 h-5" />
              Go Home
            </Link>
            
            <Link
              href="/programs"
              className="bg-white text-primary border-2 border-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-primary hover:text-white transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              View Programs
              <ChevronRightIcon className="w-5 h-5" />
            </Link>
          </div>
          
          {/* Additional Help */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-500 mb-4">
              Need help finding something specific?
            </p>
            <Link
              href="/contact"
              className="text-primary hover:text-red-700 font-medium underline transition-colors duration-300"
            >
              Contact us for assistance
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}