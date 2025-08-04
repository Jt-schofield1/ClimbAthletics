'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Coaches', href: '/coaches' },
  { name: 'Training Programs', href: '/programs' },
  { name: 'Pricing Plans', href: '/pricing' },
  { name: 'Media', href: '/media' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md fixed w-full z-50 shadow-lg transition-all duration-300">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">C.L.I.M.B. Athletics</span>
            <Image
              src="/climb-logo.svg"
              alt="C.L.I.M.B. Athletics Logo"
              width={120}
              height={40}
              className="h-8 sm:h-10 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-accent"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">{mobileMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium leading-6 text-accent hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/pricing"
            className="bg-gradient-to-r from-primary to-red-600 text-white px-6 py-3 rounded-lg text-sm font-bold hover:from-red-600 hover:to-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Book Now
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu - Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden absolute top-full left-0 right-0 z-[60] bg-white shadow-2xl border-t border-gray-100"
          >
            <div className="px-6 py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-3 text-base font-medium text-accent hover:bg-gray-50 hover:text-primary rounded-lg transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <Link
                  href="/pricing"
                  className="bg-gradient-to-r from-primary to-red-600 text-white px-6 py-3 rounded-lg text-base font-bold hover:from-red-600 hover:to-primary transition-all duration-300 block text-center shadow-lg w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}