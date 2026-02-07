'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-md mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 404 */}
          <div className="text-8xl sm:text-9xl font-heading font-bold text-primary/20 mb-2 select-none">
            404
          </div>

          <h1 className="text-2xl sm:text-3xl font-heading font-bold text-accent mb-3">
            Page Not Found
          </h1>

          <p className="text-gray-500 mb-8 max-w-sm mx-auto">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. Let&apos;s get you back to training!
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              <HomeIcon className="w-5 h-5" />
              Go Home
            </Link>

            <Link
              href="/programs"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              View Programs
              <ChevronRightIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-100">
            <p className="text-gray-400 text-sm mb-2">Need help?</p>
            <Link
              href="/contact"
              className="text-primary hover:text-primary-dark font-medium text-sm underline transition-colors"
            >
              Contact us for assistance
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
