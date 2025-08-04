'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRightIcon, PlayCircleIcon, AcademicCapIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

export default function Programs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Enhanced */}
      <section className="relative py-32 md:py-40 bg-gradient-to-br from-gray-900 via-accent to-gray-800 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/Images/IMG_2260.jpg"
            alt="Training Programs"
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
              Elite Training Services
            </span>
            
            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-white mb-8 leading-tight">
              Our <span className="text-primary">Training</span> Programs
            </h1>
            
            {/* Subtitle */}
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-6 leading-relaxed">
                Comprehensive training programs designed for elite Quarterbacks and Wide Receivers
              </p>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                Quarterback Training • Wide Receiver Training • Chalk Talk Sessions • Mentorship
              </p>
            </div>
            
            {/* Visual Elements */}
            <div className="flex justify-center items-center gap-4 mt-12">
              <div className="w-16 h-0.5 bg-primary"></div>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="w-16 h-0.5 bg-primary"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-neutral">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Quarterback Training */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <PlayCircleIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-accent mb-4">
                Quarterback Training
              </h3>
              <p className="text-gray-600 mb-6">
                Elite QB development focusing on footwork, accuracy, decision-making, and leadership skills.
              </p>
              <div className="text-3xl font-bold text-primary mb-4">$50.00</div>
              <p className="text-sm text-gray-500 mb-6">Per 1-hour session</p>
              <Link
                href="/pricing"
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 inline-flex items-center gap-2 w-full justify-center"
              >
                View Pricing
                <ChevronRightIcon className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Wide Receiver Training */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <AcademicCapIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-accent mb-4">
                Wide Receiver Training
              </h3>
              <p className="text-gray-600 mb-6">
                Comprehensive WR development including route running, catching techniques, and game awareness.
              </p>
              <div className="text-3xl font-bold text-primary mb-4">$50.00</div>
              <p className="text-sm text-gray-500 mb-6">Per 1-hour session</p>
              <Link
                href="/pricing"
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 inline-flex items-center gap-2 w-full justify-center"
              >
                View Pricing
                <ChevronRightIcon className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Chalk Talk */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <ChatBubbleLeftRightIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-accent mb-4">
                Chalk Talk
              </h3>
              <p className="text-gray-600 mb-6">
                Strategic film study and mental game development to enhance football IQ and decision-making.
              </p>
              <div className="text-3xl font-bold text-primary mb-4">$40.00</div>
              <p className="text-sm text-gray-500 mb-6">Per 1-hour session</p>
              <Link
                href="/pricing"
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 inline-flex items-center gap-2 w-full justify-center"
              >
                View Pricing
                <ChevronRightIcon className="w-4 h-4" />
              </Link>
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Save money with our comprehensive training packages
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 3 Field Training Sessions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-primary/30"
            >
              <h3 className="text-2xl font-heading font-bold text-accent mb-4 group-hover:text-primary transition-colors duration-300">
                3 Field Training Sessions
              </h3>
              <div className="text-4xl font-bold text-primary mb-2">$150.00</div>
              <p className="text-gray-600 mb-6">Save $30 compared to individual sessions</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  3 one-hour field training sessions
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Choice of QB or WR training
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Personalized skill development plan
                </li>
              </ul>
              <a
                href="https://climb-athletics.square.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary text-white py-4 sm:py-5 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 inline-flex items-center justify-center gap-2 mt-6 sm:mt-8 text-base sm:text-lg"
              >
                Book Package
                <ChevronRightIcon className="w-4 h-4" />
              </a>
            </motion.div>

            {/* 5 Field Training Sessions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-primary/30"
            >
              <h3 className="text-2xl font-heading font-bold text-accent mb-4 group-hover:text-primary transition-colors duration-300">
                5 Field Training Sessions
              </h3>
              <div className="text-4xl font-bold text-primary mb-2">$200.00</div>
              <p className="text-gray-600 mb-6">Save $50 compared to individual sessions</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  5 one-hour field training sessions
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Choice of QB or WR training
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Progress tracking and assessment
                </li>
              </ul>
              <a
                href="https://climb-athletics.square.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary text-white py-4 sm:py-5 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 inline-flex items-center justify-center gap-2 mt-6 sm:mt-8 text-base sm:text-lg"
              >
                Book Package
                <ChevronRightIcon className="w-4 h-4" />
              </a>
            </motion.div>

            {/* 3 Field Training & 3 Chalk Talk - MOST POPULAR */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative bg-gradient-to-br from-primary/5 to-white rounded-xl shadow-lg p-8 hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border-2 border-primary/20 hover:border-primary/50"
            >
              <div className="bg-gradient-to-r from-primary to-red-600 text-white text-sm font-bold px-4 py-2 rounded-full inline-block mb-4 shadow-lg">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-heading font-bold text-accent mb-4 group-hover:text-primary transition-colors duration-300">
                3 Field Training & 3 Chalk Talk
              </h3>
              <div className="text-4xl font-bold text-primary mb-2">$250.00</div>
              <p className="text-gray-600 mb-6">Save $40 - Complete development package</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  3 one-hour field training sessions
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  3 one-hour Chalk Talk sessions
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Complete athlete development
                </li>
              </ul>
              <a
                href="https://climb-athletics.square.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-primary to-red-600 text-white py-4 sm:py-5 rounded-lg font-bold hover:from-red-600 hover:to-primary transition-all duration-300 inline-flex items-center justify-center gap-2 mt-6 sm:mt-8 transform hover:scale-105 shadow-lg hover:shadow-xl text-base sm:text-lg"
              >
                Book Popular Package
                <ChevronRightIcon className="w-4 h-4" />
              </a>
            </motion.div>

            {/* 5 Field Training & 5 Chalk Talk */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-primary/30 md:col-span-2 lg:col-span-1"
            >
              <h3 className="text-2xl font-heading font-bold text-accent mb-4 group-hover:text-primary transition-colors duration-300">
                5 Field Training & 5 Chalk Talk
              </h3>
              <div className="text-4xl font-bold text-primary mb-2">$400.00</div>
              <p className="text-gray-600 mb-6">Save $50 - Ultimate training package</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  5 one-hour field training sessions
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  5 one-hour Chalk Talk sessions
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Comprehensive skill and mental development
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Long-term progress tracking
                </li>
              </ul>
              <a
                href="https://climb-athletics.square.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary text-white py-4 sm:py-5 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 inline-flex items-center justify-center gap-2 mt-6 sm:mt-8 text-base sm:text-lg"
              >
                Book Ultimate Package
                <ChevronRightIcon className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-accent to-gray-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#E63946_1px,_transparent_1px)] bg-[length:40px_40px]" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 text-white font-semibold rounded-full text-sm uppercase tracking-wide mb-6 shadow-lg">
              Start Your Journey
            </span>
            
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Ready to Start <span className="text-primary">Training</span>?
            </h2>
            
            {/* Description */}
            <p className="text-xl sm:text-2xl text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed">
              Every session is 1 hour in length and designed to maximize your potential
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://climb-athletics.square.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-red-600 text-white px-10 py-5 rounded-xl text-xl font-bold hover:from-red-600 hover:to-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/30"
              >
                <span>Book Now</span>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-transparent border-3 border-white text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-white hover:text-black transition-all duration-300 shadow-lg"
              >
                <span>Questions?</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}