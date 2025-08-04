'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function Pricing() {
  const [showBookingModal, setShowBookingModal] = useState(false);

  const openBookingModal = () => {
    setShowBookingModal(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Enhanced */}
      <section className="relative pt-12 pb-32 md:pt-16 md:pb-40 bg-gradient-to-br from-gray-900 via-accent to-gray-800 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/Images/IMG_2262.jpg"
            alt="Training Pricing and Packages"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/60" />
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#E63946_1px,_transparent_1px)] bg-[length:50px_50px]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 text-white font-semibold rounded-full text-sm uppercase tracking-wide mb-8 shadow-lg">
              Training Packages
            </span>
            
            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-white mb-8 leading-tight">
              Pricing <span className="text-primary">Menu</span>
            </h1>
            
            {/* Subtitle */}
            <div className="max-w-4xl mx-auto mb-10">
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-6 leading-relaxed">
                Flexible pricing plans designed to maximize your potential
              </p>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                Every session is 1 hour in length • Individual Sessions • Package Deals • Best Value Options
              </p>
            </div>
            
            {/* CTA Button */}
            <button
              onClick={openBookingModal}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-red-600 text-white px-10 py-5 rounded-xl text-xl font-bold hover:from-red-600 hover:to-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/30"
            >
              <span>Book Your Session</span>
            </button>
            
            {/* Visual Elements */}
            <div className="flex justify-center items-center gap-4 mt-12">
              <div className="w-16 h-0.5 bg-primary"></div>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="w-16 h-0.5 bg-primary"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Individual Sessions */}
      <section className="py-20 bg-neutral">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-accent mb-4">
              Individual Sessions
            </h2>
            <p className="text-xl text-gray-600">
              Elite training designed for your specific position and goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
            {/* Quarterback Training */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-primary/30"
            >
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-accent mb-4 group-hover:text-primary transition-colors duration-300">
                Quarterback Training
              </h3>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">$50.00</div>
              <p className="text-gray-600 mb-6">Per 1-hour session</p>
              <ul className="text-left space-y-2 text-gray-700 mb-8">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Elite QB development and mechanics
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Footwork and accuracy training
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Decision-making under pressure
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Leadership development
                </li>
              </ul>
              <button
                onClick={openBookingModal}
                className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-base"
              >
                Book Session
              </button>
            </motion.div>

            {/* Wide Receiver Training */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-primary/30"
            >
              <h3 className="text-2xl font-heading font-bold text-accent mb-4 group-hover:text-primary transition-colors duration-300">
                Wide Receiver Training
              </h3>
              <div className="text-5xl font-bold text-primary mb-4">$50.00</div>
              <p className="text-gray-600 mb-6">Per 1-hour session</p>
              <ul className="text-left space-y-2 text-gray-700 mb-8">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Route running and timing
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Catching techniques and hands
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Release moves and separation
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Speed and agility development
                </li>
              </ul>
              <button
                onClick={openBookingModal}
                className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-base"
              >
                Book Session
              </button>
            </motion.div>

            {/* Chalk Talk */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-primary/30"
            >
              <h3 className="text-2xl font-heading font-bold text-accent mb-4 group-hover:text-primary transition-colors duration-300">
                Chalk Talk
              </h3>
              <div className="text-5xl font-bold text-primary mb-4">$40.00</div>
              <p className="text-gray-600 mb-6">Per 1-hour session</p>
              <ul className="text-left space-y-2 text-gray-700 mb-8">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Film study and analysis
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Strategic game planning
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Mental game development
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Football IQ enhancement
                </li>
              </ul>
              <button
                onClick={openBookingModal}
                className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-base"
              >
                Book Session
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Package Deals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-accent mb-4">
              Package Deals
            </h2>
            <p className="text-xl text-gray-600">
              Save money with our comprehensive training packages
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-0">
            {/* 5 field training & 5 Chalk Talk sessions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative bg-gradient-to-br from-primary/5 to-white rounded-xl shadow-lg p-8 hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border-2 border-primary/30 hover:border-primary/60"
            >
              <div className="bg-gradient-to-r from-primary to-red-600 text-white text-sm font-bold px-4 py-2 rounded-full inline-block mb-4 shadow-lg">
                BEST VALUE
              </div>
              <h3 className="text-2xl font-heading font-bold text-accent mb-4 group-hover:text-primary transition-colors duration-300">
                5 field training & 5 Chalk Talk sessions
              </h3>
              <div className="text-5xl font-bold text-primary mb-2">$400.00</div>
              <p className="text-gray-600 mb-4">Save $50 compared to individual sessions</p>
              <p className="text-gray-700 mb-6">
                Complete development package combining on-field training with strategic mental game development.
              </p>
              <button
                onClick={openBookingModal}
                className="w-full bg-gradient-to-r from-primary to-red-600 text-white py-4 rounded-lg font-bold hover:from-red-600 hover:to-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl text-base"
              >
                Book Best Value Package
              </button>
            </motion.div>

            {/* 5 field training sessions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-primary/30"
            >
              <h3 className="text-2xl font-heading font-bold text-accent mb-4 group-hover:text-primary transition-colors duration-300">
                5 field training sessions
              </h3>
              <div className="text-5xl font-bold text-primary mb-2">$200.00</div>
              <p className="text-gray-600 mb-4">Save $50 compared to individual sessions</p>
              <p className="text-gray-700 mb-6">
                Focused on-field training to develop technical skills and physical abilities.
              </p>
              <button
                onClick={openBookingModal}
                className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-base"
              >
                Book Training Package
              </button>
            </motion.div>

            {/* 3 field training & 3 Chalk Talk sessions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-primary/30"
            >
              <h3 className="text-2xl font-heading font-bold text-accent mb-4 group-hover:text-primary transition-colors duration-300">
                3 field training & 3 Chalk Talk sessions
              </h3>
              <div className="text-5xl font-bold text-primary mb-2">$250.00</div>
              <p className="text-gray-600 mb-4">Save $40 compared to individual sessions</p>
              <p className="text-gray-700 mb-6">
                Perfect introduction package for new athletes to experience both training styles.
              </p>
              <button
                onClick={openBookingModal}
                className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-base"
              >
                Book Combo Package
              </button>
            </motion.div>

            {/* 3 field training sessions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-primary/30"
            >
              <h3 className="text-2xl font-heading font-bold text-accent mb-4 group-hover:text-primary transition-colors duration-300">
                3 field training sessions
              </h3>
              <div className="text-5xl font-bold text-primary mb-2">$150.00</div>
              <p className="text-gray-600 mb-4">Save $30 compared to individual sessions</p>
              <p className="text-gray-700 mb-6">
                Great starter package for athletes new to position-specific training.
              </p>
              <button
                onClick={openBookingModal}
                className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-base"
              >
                Book Starter Package
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location & Payment - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-accent to-gray-800 relative overflow-hidden border-t-4 border-primary">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#E63946_1px,_transparent_1px)] bg-[length:40px_40px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-heading font-bold text-white mb-6">
                Training Location
              </h3>
              <div className="text-gray-200 space-y-4">
                <p className="text-lg leading-relaxed">
                  All training sessions take place in the Washington, DC metropolitan area. 
                  Specific locations are provided upon booking and may vary based on 
                  availability and weather conditions.
                </p>
                <p className="leading-relaxed">
                  We utilize high-quality field facilities that provide the optimal 
                  environment for elite-level training and skill development.
                </p>
              </div>
            </motion.div>

            {/* Payment Methods */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-heading font-bold text-white mb-6">
                Payment Methods
              </h3>
              <div className="space-y-4">
                <div className="bg-white/20 rounded-lg p-4 flex justify-between items-center hover:bg-white/30 transition-colors duration-300 border border-white/10">
                  <span className="text-white font-medium text-lg">Venmo</span>
                  <span className="text-primary font-bold">Climbathletics</span>
                </div>
                <div className="bg-white/20 rounded-lg p-4 flex justify-between items-center hover:bg-white/30 transition-colors duration-300 border border-white/10">
                  <span className="text-white font-medium text-lg">Cash App</span>
                  <span className="text-primary font-bold">Climbathletics</span>
                </div>
                <div className="bg-white/20 rounded-lg p-4 flex justify-between items-center hover:bg-white/30 transition-colors duration-300 border border-white/10">
                  <span className="text-white font-medium text-lg">Zelle</span>
                  <span className="text-primary font-bold">614-824-8445</span>
                </div>
                <div className="bg-white/20 rounded-lg p-4 flex justify-between items-center hover:bg-white/30 transition-colors duration-300 border border-white/10">
                  <span className="text-white font-medium text-lg">Apple Pay</span>
                  <span className="text-primary font-bold">614-824-8445</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-12 bg-neutral">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-heading font-bold text-accent mb-6">
              Follow Us
            </h3>
            <div className="flex justify-center space-x-8">
              <a
                href="https://www.instagram.com/climb_athletics/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-primary transition-colors duration-300 text-lg"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/michael-lowery-448892221"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-primary transition-colors duration-300 text-lg"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Modal */}
      {showBookingModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowBookingModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-heading font-bold text-accent">
                Book Your Training Session
              </h2>
              <button
                onClick={() => setShowBookingModal(false)}
                className="text-gray-500 hover:text-accent transition-colors duration-300"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="text-center mb-6">
                <p className="text-lg text-gray-700 mb-4">
                  Click the button below to access our Square booking system where you can 
                  schedule your training sessions and make secure payments.
                </p>
                <a
                  href="https://climb-athletics.square.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-red-600 text-white px-10 py-5 rounded-xl text-xl font-bold hover:from-red-600 hover:to-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/30 min-h-[60px]"
                >
                  <span>Open Square Booking System</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              
              <div className="bg-neutral rounded-lg p-6">
                <h3 className="font-heading font-bold text-accent text-lg mb-4">
                  What to expect when booking:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">1.</span>
                    Select your preferred training type and package
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">2.</span>
                    Choose available dates and times that work for you
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">3.</span>
                    Complete secure payment through Square
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">4.</span>
                    Receive confirmation and location details via email
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">5.</span>
                    Prepare for your elite training experience!
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}