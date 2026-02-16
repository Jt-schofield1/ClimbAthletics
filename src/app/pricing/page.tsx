'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useFadeIn } from '@/hooks/useFadeIn';
import { XMarkIcon, CheckIcon } from '@heroicons/react/24/outline';

const individualSessions = [
  {
    name: 'Quarterback Training',
    price: '$65.00',
    features: [
      'Elite QB development and mechanics',
      'Footwork and accuracy training',
      'Decision-making under pressure',
      'Leadership development',
    ],
  },
  {
    name: 'Wide Receiver Training',
    price: '$65.00',
    features: [
      'Route running and timing',
      'Catching techniques and hands',
      'Release moves and separation',
      'Speed and agility development',
    ],
  },
  {
    name: 'Chalk Talk',
    price: '$40.00',
    features: [
      'Film study and analysis',
      'Strategic game planning',
      'Mental game development',
      'Football IQ enhancement',
    ],
  },
];

const packages = [
  {
    name: '5 Field Training & 5 Chalk Talk',
    price: '$500.00',
    savings: 'Save $25',
    desc: 'Complete development package combining on-field training with strategic mental game development.',
    badge: 'BEST VALUE',
    featured: true,
  },
  {
    name: '5 Field Training Sessions',
    price: '$300.00',
    savings: 'Save $25',
    desc: 'Focused on-field training to develop technical skills and physical abilities.',
    featured: false,
  },
  {
    name: '3 Field Training & 3 Chalk Talk',
    price: '$300.00',
    savings: 'Save $15',
    desc: 'Perfect introduction package for new athletes to experience both training styles.',
    featured: false,
  },
  {
    name: '3 Field Training Sessions',
    price: '$175.00',
    savings: 'Save $20',
    desc: 'Great starter package for athletes new to position-specific training.',
    featured: false,
  },
];

const paymentMethods = [
  { name: 'Venmo', handle: 'Climbathletics' },
  { name: 'Cash App', handle: 'Climbathletics' },
  { name: 'Zelle', handle: '614-824-8445' },
  { name: 'Apple Pay', handle: '614-824-8445' },
];

export default function Pricing() {
  const [showBookingModal, setShowBookingModal] = useState(false);
  useFadeIn();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-16 pb-32 md:pt-20 md:pb-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Images/IMG_2262.jpg"
            alt="Training Pricing and Packages"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center animate-[fadeInUp_0.8s_ease-out_both]">
          <span className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full text-xs uppercase tracking-widest mb-8">
            Training Packages
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-6 leading-[1.1]">
            Pricing <span className="text-primary">Menu</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/70 mb-8 max-w-3xl mx-auto">
            Every session is 1 hour in length &bull; Individual Sessions &bull; Package Deals
          </p>

          <button
            onClick={() => setShowBookingModal(true)}
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-primary-dark transition-all duration-300 shadow-lg"
          >
            Book Your Session
          </button>
        </div>
      </section>

      {/* Individual Sessions */}
      <section className="py-20 sm:py-24 bg-neutral">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="fade-in text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold rounded-full text-xs uppercase tracking-wider mb-4">
              Per Session
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-accent mb-3">
              Individual Sessions
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Elite training designed for your specific position and goals
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
            {individualSessions.map((session, i) => (
              <div
                key={session.name}
                className={`fade-in stagger-${i + 1} group bg-white rounded-xl shadow-sm hover:shadow-lg p-6 sm:p-8 text-center transition-all duration-300 border border-gray-100 hover:border-primary/20`}
              >
                <h3 className="text-lg sm:text-xl font-heading font-bold text-accent mb-3 group-hover:text-primary transition-colors">
                  {session.name}
                </h3>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">{session.price}</div>
                <p className="text-gray-400 text-sm mb-6">Per 1-hour session</p>

                <ul className="text-left space-y-2.5 mb-6">
                  {session.features.map((feature) => (
                    <li key={feature} className="flex items-start text-sm text-gray-600">
                      <CheckIcon className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setShowBookingModal(true)}
                  className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary-dark transition-colors duration-300 text-sm"
                >
                  Book Session
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Deals */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="fade-in text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold rounded-full text-xs uppercase tracking-wider mb-4">
              Save More
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-accent mb-3">
              Package Deals
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Save money with our comprehensive training packages
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {packages.map((pkg, i) => (
              <div
                key={pkg.name}
                className={`fade-in stagger-${i + 1} group rounded-xl p-6 sm:p-8 transition-all duration-300 ${
                  pkg.featured
                    ? 'bg-primary/5 border-2 border-primary/30 hover:border-primary/50 shadow-md hover:shadow-xl'
                    : 'bg-white border border-gray-100 hover:border-primary/20 shadow-sm hover:shadow-lg'
                }`}
              >
                {pkg.badge && (
                  <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-4 shadow-sm">
                    {pkg.badge}
                  </span>
                )}
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-accent mb-2 group-hover:text-primary transition-colors">
                  {pkg.name}
                </h3>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">{pkg.price}</div>
                <p className="text-sm text-primary/70 font-medium mb-3">{pkg.savings}</p>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">{pkg.desc}</p>

                <button
                  onClick={() => setShowBookingModal(true)}
                  className="w-full py-3 rounded-lg font-bold transition-colors duration-300 text-sm bg-primary text-white hover:bg-primary-dark"
                >
                  Book Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Training */}
      <section className="py-20 sm:py-24 bg-neutral">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="fade-in text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold rounded-full text-xs uppercase tracking-wider mb-4">
              New
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-accent mb-3">
              Group Training
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              High-energy group sessions for QB &amp; WR &mdash; 15 spots per session, 1 hour 15 minutes
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Price Card */}
            <div className="fade-in bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden mb-10">
              <div className="bg-primary/5 border-b border-primary/10 px-6 sm:px-8 py-6 text-center">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-1">$50</div>
                <p className="text-gray-500 text-sm">Flat rate per athlete &bull; QB &amp; WR</p>
              </div>
              <div className="px-6 sm:px-8 py-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mb-6">
                  <div className="bg-neutral rounded-xl p-4">
                    <p className="text-2xl font-bold text-accent">15</p>
                    <p className="text-gray-400 text-xs font-medium">Spots Per Session</p>
                  </div>
                  <div className="bg-neutral rounded-xl p-4">
                    <p className="text-2xl font-bold text-accent">1h 15m</p>
                    <p className="text-gray-400 text-xs font-medium">Session Duration</p>
                  </div>
                  <div className="bg-neutral rounded-xl p-4">
                    <p className="text-2xl font-bold text-accent">5 Weeks</p>
                    <p className="text-gray-400 text-xs font-medium">Program Length</p>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    onClick={() => setShowBookingModal(true)}
                    className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-xl font-bold hover:bg-primary-dark transition-colors duration-300 shadow-md text-sm"
                  >
                    Book Group Training
                  </button>
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div className="fade-in">
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-accent text-center mb-6">
                Weekly Schedule
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                {[
                  {
                    day: 'Friday',
                    time: '5:00 PM',
                    location: 'Sandburg Middle School',
                    area: 'Alexandria, VA',
                  },
                  {
                    day: 'Saturday',
                    time: '10:00 AM',
                    location: 'RFK Campus',
                    area: 'Washington, DC',
                  },
                  {
                    day: 'Sunday',
                    time: '1:00 PM',
                    location: 'Deal Middle School',
                    area: 'Washington, DC',
                  },
                ].map((session, i) => (
                  <div
                    key={session.day}
                    className={`fade-in stagger-${i + 1} bg-white rounded-xl p-5 sm:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center`}
                  >
                    <div className="text-sm font-bold text-primary uppercase tracking-wider mb-2">{session.day}</div>
                    <div className="text-2xl font-bold text-accent mb-1">{session.time}</div>
                    <p className="text-gray-600 text-sm font-medium">{session.location}</p>
                    <p className="text-gray-400 text-xs">{session.area}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-400 text-sm mt-6">
                Running every Friday, Saturday &amp; Sunday for the next 5 weeks &bull; Feb 14 &ndash; Mar 16, 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Payment */}
      <section className="py-20 sm:py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="fade-in">
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4">
                Training Location
              </h3>
              <div className="text-white/60 space-y-3 text-sm leading-relaxed">
                <p>
                  All training sessions take place in the Washington, DC metropolitan area.
                  Specific locations are provided upon booking and may vary based on
                  availability and weather conditions.
                </p>
                <p>
                  We utilize high-quality field facilities that provide the optimal
                  environment for elite-level training and skill development.
                </p>
              </div>
            </div>

            <div className="fade-in">
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4">
                Payment Methods
              </h3>
              <div className="space-y-3">
                {paymentMethods.map((pm) => (
                  <div
                    key={pm.name}
                    className="bg-white/10 backdrop-blur-sm rounded-lg px-5 py-3.5 flex justify-between items-center border border-white/5 hover:bg-white/15 transition-colors duration-200"
                  >
                    <span className="text-white font-medium text-sm">{pm.name}</span>
                    <span className="text-primary font-bold text-sm">{pm.handle}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-10 sm:py-12 bg-neutral">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-lg font-heading font-bold text-accent mb-4">Follow Us</h3>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/climb_athletics/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors text-sm font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/michael-lowery-448892221"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors text-sm font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {showBookingModal && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setShowBookingModal(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-xl font-heading font-bold text-accent">
                Book Your Session
              </h2>
              <button
                onClick={() => setShowBookingModal(false)}
                className="text-gray-400 hover:text-accent transition-colors"
                aria-label="Close modal"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              <p className="text-gray-600 text-sm">
                Click below to access our Square booking system where you can schedule
                sessions and make secure payments.
              </p>

              <a
                href="https://climb-athletics.square.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-primary-dark transition-all duration-300 shadow-md w-full"
              >
                Open Square Booking
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              <div className="bg-neutral rounded-xl p-5">
                <h3 className="font-heading font-bold text-accent text-sm mb-3">
                  What to expect:
                </h3>
                <ol className="space-y-2 text-sm text-gray-600">
                  {[
                    'Select your training type and package',
                    'Choose available dates and times',
                    'Complete secure payment through Square',
                    'Receive confirmation and location details',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary font-bold mr-2">{i + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
