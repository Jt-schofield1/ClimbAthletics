'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useFadeIn } from '@/hooks/useFadeIn';
import { CheckIcon, ChevronRightIcon, CalendarDaysIcon, ClockIcon, MapPinIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const campDetails = {
  dates: 'March 28 – April 5, 2026',
  duration: '1.5 Hours (90 Minutes)',
  focus: 'All Positions',
  pricing: [
    { label: 'Younger Athletes', grades: 'Grades 3–6', price: '$50' },
    { label: 'Older Athletes', grades: 'Grades 7–12', price: '$65' },
  ],
};

const whyAndMission = [
  'Inspire, empower, and pour knowledge into the next generation of athletes so they understand the game, the work, and the standard it takes to succeed.',
  'Develop athletes on and off the field by teaching proper training habits, football fundamentals, and a competitive mindset built on discipline, effort, and confidence.',
  'Every athlete deserves high-level coaching, clear expectations, and the tools to maximize their potential — regardless of background or level.',
  'Prepare athletes not just for the next game, but for the next level — by challenging them to train with purpose and lead the right way.',
];

const whatToExpect = [
  '90 minutes of non-stop high-tempo, movement-based training focused on speed, agility, and football development.',
  'Dynamic movement prep, explosive speed and agility work, and position-specific drills that demand focus, urgency, and attention to detail.',
  'Competitive, game-like drills built into every session to challenge athletes to apply technique, compete with confidence, and perform under pressure.',
  'The expectation: give 100% effort for all 90 minutes, sprint between drills, stay locked in, respond to coaching, and maximize every rep.',
];

const walkAway = [
  'Leave faster, more explosive, and more confident in movement, speed, and agility.',
  'Gain sharper position-specific skills, improved technique, and a better understanding of how to train with purpose.',
  'Develop a competitive mindset by being coached at game speed and challenged in high-energy, football-specific drills.',
  'Know what 100% effort feels like and how to carry that standard into practices, games, and offseason training.',
];

export default function SpringBreakCamps() {
  useFadeIn();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-16 pb-32 md:pt-20 md:pb-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Images/IMG_2262.jpg"
            alt="CLIMB Athletics Spring Break Camps"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center animate-[fadeInUp_0.8s_ease-out_both]">
          <span className="inline-block px-5 py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary font-semibold rounded-full text-xs uppercase tracking-widest mb-8">
            Spring Break 2026
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-6 leading-[1.1]">
            Spring Break <span className="text-primary">Camps</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/70 mb-4 max-w-3xl mx-auto">
            High-tempo, movement-based training focused on speed, agility, and football development for all positions
          </p>

          <p className="text-base text-white/50 mb-8">
            March 28 &ndash; April 5, 2026 &bull; 90-Minute Sessions &bull; All Positions
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/spring-break-camps/waiver"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-primary-dark transition-all duration-300 shadow-lg"
            >
              Register &amp; Sign Waiver
              <ChevronRightIcon className="w-5 h-5" />
            </Link>
            <a
              href="https://climb-athletics.square.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-accent transition-all duration-300"
            >
              Book on Square
            </a>
          </div>
        </div>
      </section>

      {/* Camp Details Overview */}
      <section className="py-20 sm:py-24 bg-neutral">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="fade-in text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold rounded-full text-xs uppercase tracking-wider mb-4">
              Camp Details
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-accent mb-3">
              When, Where &amp; How Much
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10">
              {[
                { icon: CalendarDaysIcon, label: 'Dates', value: 'Mar 28 – Apr 5' },
                { icon: ClockIcon, label: 'Duration', value: '90 Minutes' },
                { icon: UserGroupIcon, label: 'Positions', value: 'All Positions' },
                { icon: MapPinIcon, label: 'Area', value: 'Washington, DC' },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className={`fade-in stagger-${i + 1} bg-white rounded-xl p-5 text-center border border-gray-100 shadow-sm`}
                >
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-lg font-bold text-accent">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Pricing */}
            <div className="fade-in grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
              {campDetails.pricing.map((tier) => (
                <div
                  key={tier.label}
                  className="bg-white rounded-2xl p-6 sm:p-8 text-center border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                >
                  <h3 className="text-lg font-heading font-bold text-accent mb-1">{tier.label}</h3>
                  <p className="text-sm text-gray-400 mb-3">{tier.grades}</p>
                  <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">{tier.price}</div>
                  <p className="text-gray-400 text-xs">per camp session</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Why & Mission */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="fade-in">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold rounded-full text-xs uppercase tracking-wider mb-4">
                Our Why
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-accent mb-6">
                Why &amp; Mission
              </h2>
              <div className="space-y-4">
                {whyAndMission.map((item, i) => (
                  <div key={i} className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="fade-in relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/Images/IMG_2271.jpg"
                alt="CLIMB Athletics Camp Training"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Standard & Expectation */}
      <section className="py-20 sm:py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="fade-in text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary font-semibold rounded-full text-xs uppercase tracking-wider mb-4">
              What to Expect
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-3">
              The Standard &amp; Expectation
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {whatToExpect.map((item, i) => (
              <div
                key={i}
                className={`fade-in stagger-${i + 1} bg-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-white/5`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-primary/20 text-primary font-bold text-sm rounded-lg">
                    {i + 1}
                  </span>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Walk Away With */}
      <section className="py-20 sm:py-24 bg-neutral">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="fade-in text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold rounded-full text-xs uppercase tracking-wider mb-4">
              Results
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-accent mb-3">
              What You&apos;ll Walk Away With
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {walkAway.map((item, i) => (
              <div
                key={i}
                className={`fade-in stagger-${i + 1} bg-white rounded-xl p-5 sm:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Register CTA */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-accent mb-4">
              Ready to <span className="text-primary">Register</span>?
            </h2>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
              Spots are limited. Register and complete the required waiver form to secure your athlete&apos;s spot in camp.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/spring-break-camps/waiver"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-primary-dark transition-all duration-300 shadow-lg"
              >
                Register &amp; Sign Waiver
                <ChevronRightIcon className="w-5 h-5" />
              </Link>
              <a
                href="https://climb-athletics.square.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-accent px-8 py-4 rounded-xl text-lg font-bold hover:border-primary hover:text-primary transition-all duration-300"
              >
                Book on Square
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <p className="text-gray-400 text-sm mt-6">
              Questions? Email us at{' '}
              <a href="mailto:Climb1athletics@gmail.com" className="text-primary hover:text-red-400 transition-colors font-medium">
                Climb1athletics@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
