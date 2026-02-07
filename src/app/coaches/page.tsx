'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useFadeIn } from '@/hooks/useFadeIn';
import { XMarkIcon, PlayIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const coaches = [
  {
    name: 'Mike Lowery',
    role: 'Head Coach & Founder',
    image: '/Images/Mike Headshot.PNG',
    hasVideo: true,
    background: [
      'Former collegiate quarterback with 10+ years of playing experience',
      '5+ years of professional coaching and athlete development',
      'Specialized in quarterback mechanics and leadership development',
      'Certified in sports psychology and youth athlete development',
    ],
    philosophy: [
      'Focus on fundamentals and progressive skill development',
      'Emphasis on mental game and decision-making under pressure',
      'Building confidence through positive reinforcement and challenge',
      'Developing leadership skills both on and off the field',
    ],
    specializations: [
      'Quarterback training (all levels: youth through college prep)',
      'Film study and game strategy (Chalk Talk sessions)',
      'Leadership development and mentorship',
      'College recruitment preparation and guidance',
    ],
    quote: "My passion is developing young athletes into not just better football players, but better people. I believe that the lessons learned on the football field—discipline, teamwork, perseverance, and leadership—are the same qualities that lead to success in life.",
  },
  {
    name: 'Tony Lowery',
    role: 'Assistant Coach & Wide Receiver Specialist',
    image: '/Images/TonyHeadshot.png',
    hasVideo: false,
    background: [
      'Former high school and collegiate wide receiver',
      '3+ years of coaching experience with youth and high school athletes',
      'Specialized in route running techniques and catching mechanics',
      'Expert in speed and agility training for skill position players',
    ],
    philosophy: [
      'Precision and attention to detail in every movement',
      'Building explosive speed and agility through proven techniques',
      'Developing game awareness and route-running intelligence',
      'Creating reliable hands and catching confidence',
    ],
    specializations: [
      'Wide receiver training and development',
      'Route running technique and timing',
      'Catching mechanics and hand-eye coordination',
      'Speed and agility training for skill positions',
    ],
    quote: "I love working with wide receivers because the position requires such a unique combination of speed, precision, and mental toughness. Every route is an opportunity to perfect your craft, and every catch builds confidence.",
  },
];

export default function Coaches() {
  const [showMikeVideo, setShowMikeVideo] = useState(false);
  useFadeIn();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-16 pb-32 md:pt-20 md:pb-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Images/IMG_2261.jpg"
            alt="Meet Our Coaches"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center animate-[fadeInUp_0.8s_ease-out_both]">
          <span className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full text-xs uppercase tracking-widest mb-8">
            Expert Coaching Staff
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-6 leading-[1.1]">
            Meet Our <span className="text-primary">Elite</span> Team
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
            Expert mentors with proven track records in developing elite athletes and leaders
          </p>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="py-20 sm:py-24 bg-neutral">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {coaches.map((coach, i) => (
              <div
                key={coach.name}
                className={`fade-in stagger-${i + 1} bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100`}
              >
                {/* Headshot */}
                <div className="relative h-80 sm:h-96">
                  <Image
                    src={coach.image}
                    alt={`${coach.name} - ${coach.role}`}
                    fill
                    className="object-contain bg-gray-50"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                      {coach.name}
                    </h3>
                    <p className="text-white/80 font-medium">{coach.role}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-6">
                  {[
                    { label: 'Background & Experience', items: coach.background },
                    { label: 'Coaching Philosophy', items: coach.philosophy },
                    { label: 'Specializations', items: coach.specializations },
                  ].map((section) => (
                    <div key={section.label}>
                      <h4 className="font-heading font-bold text-accent text-sm uppercase tracking-wider mb-2">
                        {section.label}
                      </h4>
                      <ul className="space-y-1.5">
                        {section.items.map((item, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <span className="text-primary mr-2 mt-0.5 text-xs">&#9679;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {/* Quote */}
                  <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-4">
                    <p className="text-gray-600 italic text-sm leading-relaxed">
                      &ldquo;{coach.quote}&rdquo;
                    </p>
                  </div>

                  {/* Video button for Mike */}
                  {coach.hasVideo && (
                    <button
                      onClick={() => setShowMikeVideo(true)}
                      className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      <PlayIcon className="w-5 h-5" />
                      Watch Introduction Video
                    </button>
                  )}
                </div>
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
              Ready to Elevate Your Game?
            </h2>
            <p className="text-lg sm:text-xl text-white/60 mb-10 max-w-3xl mx-auto">
              Join our elite training programs and experience the difference that expert coaching makes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-primary-dark transition-all duration-300 shadow-lg"
              >
                Book a Session
                <ChevronRightIcon className="w-5 h-5" />
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-accent transition-all duration-300"
              >
                View Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mike's Video Modal */}
      {showMikeVideo && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowMikeVideo(false)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowMikeVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors duration-300 z-10"
              aria-label="Close video"
            >
              <XMarkIcon className="w-8 h-8" />
            </button>

            <div className="aspect-video bg-black rounded-xl overflow-hidden">
              <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <PlayIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium">Mike&apos;s Introduction Video</p>
                  <p className="text-sm text-gray-400 mt-2">Coming soon</p>
                </div>
              </div>
            </div>

            <p className="mt-4 text-center text-white font-heading font-medium">
              Meet Coach Mike Lowery
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
