'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useFadeIn } from '@/hooks/useFadeIn';
import { ChevronRightIcon, PlayCircleIcon, AcademicCapIcon, ChatBubbleLeftRightIcon, CheckIcon } from '@heroicons/react/24/outline';

const programs = [
  {
    icon: PlayCircleIcon,
    title: 'Quarterback Training',
    desc: 'Elite QB development focusing on footwork, accuracy, decision-making, and leadership skills.',
    price: '$50.00',
    slug: 'quarterback',
  },
  {
    icon: AcademicCapIcon,
    title: 'Wide Receiver Training',
    desc: 'Comprehensive WR development including route running, catching techniques, and game awareness.',
    price: '$50.00',
    slug: 'wide-receiver',
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Chalk Talk',
    desc: 'Strategic film study and mental game development to enhance football IQ and decision-making.',
    price: '$40.00',
    slug: 'chalk-talk',
  },
];

const packages = [
  {
    name: '3 Field Training Sessions',
    price: '$150.00',
    savings: 'Save $30',
    features: ['3 one-hour field training sessions', 'Choice of QB or WR training', 'Personalized skill development plan'],
  },
  {
    name: '5 Field Training Sessions',
    price: '$200.00',
    savings: 'Save $50',
    features: ['5 one-hour field training sessions', 'Choice of QB or WR training', 'Progress tracking and assessment'],
  },
  {
    name: '3 Field Training & 3 Chalk Talk',
    price: '$250.00',
    savings: 'Save $40',
    badge: 'MOST POPULAR',
    features: ['3 one-hour field training sessions', '3 one-hour Chalk Talk sessions', 'Complete athlete development'],
  },
  {
    name: '5 Field Training & 5 Chalk Talk',
    price: '$400.00',
    savings: 'Save $50',
    features: ['5 one-hour field training sessions', '5 one-hour Chalk Talk sessions', 'Comprehensive skill and mental development', 'Long-term progress tracking'],
  },
];

export default function Programs() {
  useFadeIn();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-16 pb-32 md:pt-20 md:pb-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Images/IMG_2260.jpg"
            alt="Training Programs"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center animate-[fadeInUp_0.8s_ease-out_both]">
          <span className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full text-xs uppercase tracking-widest mb-8">
            Elite Training Services
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-6 leading-[1.1]">
            Our <span className="text-primary">Training</span> Programs
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
            Comprehensive programs designed for elite Quarterbacks and Wide Receivers
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 sm:py-24 bg-neutral">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="fade-in text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold rounded-full text-xs uppercase tracking-wider mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-accent">
              Training Programs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {programs.map((program, i) => (
              <div
                key={program.slug}
                className={`fade-in stagger-${i + 1} bg-white rounded-xl shadow-sm hover:shadow-lg p-6 sm:p-8 transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-1`}
              >
                <div className="bg-primary/10 rounded-xl w-14 h-14 flex items-center justify-center mb-5">
                  <program.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-accent mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{program.desc}</p>
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">{program.price}</div>
                <p className="text-gray-400 text-xs mb-6">Per 1-hour session</p>

                <div className="flex gap-2">
                  <Link
                    href={`/programs/${program.slug}`}
                    className="flex-1 bg-primary text-white py-2.5 rounded-lg font-semibold hover:bg-primary-dark transition-colors text-center text-sm"
                  >
                    Learn More
                  </Link>
                  <Link
                    href="/pricing"
                    className="flex-1 border border-primary text-primary py-2.5 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors text-center text-sm"
                  >
                    View Pricing
                  </Link>
                </div>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {packages.map((pkg, i) => (
              <div
                key={pkg.name}
                className={`fade-in stagger-${i + 1} group rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                  pkg.badge
                    ? 'bg-primary/5 border-2 border-primary/20 hover:border-primary/40 shadow-md hover:shadow-xl'
                    : 'bg-white border border-gray-100 hover:border-primary/20 shadow-sm hover:shadow-lg'
                }`}
              >
                {pkg.badge && (
                  <span className="inline-block bg-primary text-white text-[10px] font-bold px-2.5 py-1 rounded-full mb-3 shadow-sm">
                    {pkg.badge}
                  </span>
                )}
                <h3 className="text-lg font-heading font-bold text-accent mb-2 group-hover:text-primary transition-colors leading-tight">
                  {pkg.name}
                </h3>
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">{pkg.price}</div>
                <p className="text-sm text-primary/70 font-medium mb-4">{pkg.savings}</p>

                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start text-xs text-gray-600">
                      <CheckIcon className="w-3.5 h-3.5 text-primary mr-1.5 mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://climb-athletics.square.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-lg font-semibold transition-colors text-sm inline-flex items-center justify-center gap-1.5 bg-primary text-white hover:bg-primary-dark"
                >
                  Book Package
                  <ChevronRightIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-accent">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
              Ready to Start <span className="text-primary">Training</span>?
            </h2>
            <p className="text-lg sm:text-xl text-white/60 mb-10 max-w-3xl mx-auto">
              Every session is 1 hour in length and designed to maximize your potential
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://climb-athletics.square.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-primary-dark transition-all duration-300 shadow-lg"
              >
                Book Now
                <ChevronRightIcon className="w-5 h-5" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-accent transition-all duration-300"
              >
                Questions?
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
