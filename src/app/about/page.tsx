'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useFadeIn } from '@/hooks/useFadeIn';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const coreValues = [
  {
    letter: 'C',
    name: 'Character',
    description: 'We believe in developing athletes who exemplify integrity, respect, and sportsmanship both on and off the field.',
  },
  {
    letter: 'L',
    name: 'Leadership',
    description: 'Every athlete has the potential to be a leader. We cultivate leadership skills that translate beyond sports.',
  },
  {
    letter: 'I',
    name: 'Intelligence',
    description: 'Football IQ is just as important as physical ability. We develop strategic thinking and game awareness.',
  },
  {
    letter: 'M',
    name: 'Mentorship',
    description: 'We provide guidance and support that extends beyond technical training to life skills and personal development.',
  },
  {
    letter: 'B',
    name: 'Balance',
    description: 'We emphasize a holistic approach, ensuring athletes achieve balance between training, academics, and personal life to prevent burnout.',
  },
];

export default function About() {
  useFadeIn();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-16 pb-32 md:pt-20 md:pb-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Images/IMG_2258.jpg"
            alt="About C.L.I.M.B. Athletics"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center animate-[fadeInUp_0.8s_ease-out_both]">
          <span className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full text-xs uppercase tracking-widest mb-8">
            Our Foundation
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-6 leading-[1.1]">
            THE <span className="text-primary">C.L.I.M.B.</span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-white/80 mb-4 max-w-3xl mx-auto">
            Our core values define our approach to athlete development and mentorship
          </p>
          <p className="text-base sm:text-lg text-white/50">
            Character &bull; Leadership &bull; Intelligence &bull; Mentorship &bull; Balance
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 sm:py-24 bg-neutral">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="fade-in text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold rounded-full text-xs uppercase tracking-wider mb-4">
              What We Stand For
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-accent">
              Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {coreValues.map((value, i) => (
              <div
                key={value.letter}
                className={`fade-in stagger-${i + 1} bg-white rounded-xl shadow-sm hover:shadow-lg p-6 transition-all duration-300 hover:-translate-y-1 border border-gray-100`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 bg-primary text-white font-bold text-lg rounded-lg">
                    {value.letter}
                  </span>
                  <h3 className="text-lg font-heading font-bold text-accent">{value.name}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship Section */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="fade-in">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold rounded-full text-xs uppercase tracking-wider mb-4">
                Beyond the Field
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-accent mb-6">
                Mentorship
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At C.L.I.M.B. Athletics, mentorship goes beyond just athletic training. We believe in
                  developing the whole person—building character, confidence, and life skills that will
                  serve our athletes long after their playing days are over.
                </p>
                <p>
                  Our coaches serve as role models and guides, helping young athletes navigate the
                  challenges of sports and life. We provide a supportive environment where athletes
                  can grow not just as players, but as leaders in their communities.
                </p>
                <p>
                  Through one-on-one mentoring sessions, goal setting, and personal development
                  discussions, we help each athlete reach their full potential both on and off the field.
                </p>
              </div>
            </div>

            <div className="fade-in relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/Images/IMG_2215.jpg"
                alt="Mentorship in action"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Balance Section */}
      <section className="py-20 sm:py-24 bg-neutral">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="fade-in relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
              <Image
                src="/Images/IMG_2220.jpg"
                alt="Balance in training and life"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="fade-in order-1 lg:order-2">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold rounded-full text-xs uppercase tracking-wider mb-4">
                Holistic Approach
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-accent mb-6">
                Balance
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We understand the importance of maintaining balance in a young athlete&apos;s life.
                  Football is important, but so are academics, family time, and personal interests.
                </p>
                <p>
                  Our training programs are designed to complement, not overwhelm, an athlete&apos;s
                  schedule. We work with families to ensure that our training enhances rather
                  than detracts from overall development.
                </p>
                <p>
                  By teaching time management, prioritization, and the value of rest and recovery,
                  we help athletes excel in all areas of their lives while pursuing their football goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Burnout Prevention */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="fade-in">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold rounded-full text-xs uppercase tracking-wider mb-4">
                Athlete Wellbeing
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-accent mb-6">
                Burnout Prevention
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Youth sports burnout is a real concern, and we take it seriously. Our approach
                  focuses on keeping training fun, engaging, and age-appropriate while still
                  maintaining high standards of excellence.
                </p>
                <p>
                  We monitor each athlete&apos;s physical and mental well-being, adjusting training
                  intensity and focus as needed. Our goal is to foster a lifelong love of the
                  game, not to exhaust young athletes.
                </p>
                <p>
                  Through varied training methods, positive reinforcement, and regular check-ins,
                  we ensure that athletes remain motivated and excited about their development
                  throughout their journey with us.
                </p>
              </div>
            </div>

            <div className="fade-in relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/Images/IMG_2225.jpg"
                alt="Burnout prevention through balanced training"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-accent">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
              Ready to <span className="text-primary">C.L.I.M.B.</span> with Us?
            </h2>
            <p className="text-lg sm:text-xl text-white/60 mb-10 max-w-3xl mx-auto">
              Join a community dedicated to developing complete athletes and exceptional individuals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-primary-dark transition-all duration-300 shadow-lg"
              >
                Contact Us
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
    </div>
  );
}
