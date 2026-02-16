'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { useFadeIn } from '@/hooks/useFadeIn';
import { ChevronRightIcon, PlayCircleIcon, AcademicCapIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useFadeIn();

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-preview');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Clean video autoplay approach
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = async () => {
      try {
        await video.play();
      } catch {
        const resume = () => {
          video.play().catch(() => {});
          document.removeEventListener('touchstart', resume);
          document.removeEventListener('click', resume);
        };
        document.addEventListener('touchstart', resume, { once: true, passive: true });
        document.addEventListener('click', resume, { once: true, passive: true });
      }
    };

    tryPlay();
  }, []);

  return (
    <div className="min-h-screen">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="bg-video w-full h-full object-cover pointer-events-none"
            onContextMenu={(e) => e.preventDefault()}
            poster="/Images/IMG_2271.jpg"
          >
            <source src="/Videos/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-6 animate-[fadeInUp_0.8s_ease-out_both]">
            {/* Badge */}
            <div className="animate-[fadeInUp_0.5s_ease-out_0.3s_both]">
              <span className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full text-xs sm:text-sm uppercase tracking-widest">
                Elite Training Program
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-white leading-[1.1] animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
              Welcome to{' '}
              <span className="text-primary">C.L.I.M.B.</span>
              <br className="hidden sm:block" />
              <span className="block sm:inline"> Athletics</span>
            </h1>

            {/* Subtitle */}
            <div className="max-w-4xl mx-auto space-y-3 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 font-medium">
                Elite Quarterback & Wide Receiver Training
              </p>
              <p className="text-base sm:text-lg text-white/70 max-w-3xl mx-auto">
                Developing skilled athletes and strong leaders through expert coaching,
                mentorship, and personalized training programs
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 sm:gap-12 pt-4 animate-[fadeInUp_0.8s_ease-out_0.8s_both]">
              {[
                { value: '10+', label: 'Years Experience' },
                { value: '1:1', label: 'Personal Training' },
                { value: '100%', label: 'Dedicated' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/60 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 animate-[fadeInUp_0.8s_ease-out_1s_both]">
              <button
                onClick={scrollToPricing}
                className="group inline-flex items-center gap-3 bg-primary text-white px-8 py-4 sm:px-10 sm:py-5 rounded-xl text-lg sm:text-xl font-bold hover:bg-primary-dark transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <span>Start Your Journey</span>
                <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="fade-in text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold rounded-full text-xs uppercase tracking-wider mb-4">
              Elite Training Programs
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-accent mb-4">
              Transform Your Game
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Elite level training designed to develop complete athletes and leaders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: PlayCircleIcon,
                tag: 'QUARTERBACK',
                title: 'Elite QB Training',
                price: '$65.00',
                desc: 'Master footwork, accuracy, decision-making, and leadership skills with personalized QB development.',
                color: 'from-red-50 to-white',
                borderColor: 'border-red-100',
                cta: 'Start Training',
              },
              {
                icon: AcademicCapIcon,
                tag: 'WIDE RECEIVER',
                title: 'Elite WR Training',
                price: '$65.00',
                desc: 'Perfect route running, catching techniques, and game awareness with comprehensive WR development.',
                color: 'from-blue-50 to-white',
                borderColor: 'border-blue-100',
                cta: 'Start Training',
              },
              {
                icon: ChatBubbleLeftRightIcon,
                tag: 'MENTAL GAME',
                title: 'Chalk Talk Sessions',
                price: '$40.00',
                desc: 'Enhance football IQ through strategic film study and mental game development sessions.',
                color: 'from-emerald-50 to-white',
                borderColor: 'border-emerald-100',
                cta: 'Start Learning',
              },
            ].map((service, i) => (
              <div
                key={service.tag}
                className={`fade-in stagger-${i + 1} group relative bg-gradient-to-br ${service.color} border ${service.borderColor} rounded-2xl p-6 sm:p-8 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300`}
              >
                <div className="relative z-10">
                  <div className="bg-primary rounded-xl w-14 h-14 flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  <span className="inline-block px-2.5 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-3 tracking-wide">
                    {service.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-accent mb-1">
                    {service.title}
                  </h3>
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-3">
                    {service.price}
                    <span className="text-sm text-gray-400 font-normal">/session</span>
                  </div>

                  <p className="text-gray-500 mb-6 leading-relaxed text-sm sm:text-base">
                    {service.desc}
                  </p>

                  <Link
                    href="/programs"
                    className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary-dark transition-colors duration-300"
                  >
                    {service.cta}
                    <ChevronRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIAL ===== */}
      <section className="py-20 sm:py-24 bg-accent">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="fade-in">
            <div className="text-5xl sm:text-6xl text-primary/30 font-serif mb-6">&ldquo;</div>

            <blockquote className="text-lg sm:text-xl lg:text-2xl text-white/90 font-medium italic leading-relaxed mb-8 max-w-3xl mx-auto">
              CLIMB Athletics has truly transformed my kid&apos;s game. Coach Lowery has taught my son
              that it doesn&apos;t matter how far down field you can throw—being a great quarterback
              includes footwork, balance, pace, and strategy. It has transformed the way my son
              approaches training and playing.
            </blockquote>

            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-px bg-primary" />
              <cite className="text-white font-bold text-lg not-italic tracking-wide">MAUREEN P</cite>
              <div className="w-10 h-px bg-primary" />
            </div>
            <p className="text-white/50 text-sm mt-2">Parent of Elite Athlete</p>
          </div>
        </div>
      </section>

      {/* ===== MEDIA PREVIEW ===== */}
      <section className="py-20 sm:py-24 bg-neutral">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="fade-in text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold rounded-full text-xs uppercase tracking-wider mb-4">
              Gallery
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-accent mb-4">
              Our Athletes in Action
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              See our training methods and athlete development in action
            </p>
          </div>

          <div className="fade-in grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
            {[
              { src: '/Images/IMG_2219.jpg', alt: 'Elite Quarterback Training' },
              { src: '/Images/IMG_2225.jpg', alt: 'Wide Receiver Development' },
              { src: '/Images/IMG_2233.jpg', alt: 'Skills & Technique Training' },
              { src: '/Images/IMG_2271.jpg', alt: 'Athletic Performance' },
              { src: '/Images/IMG_2227.jpg', alt: 'Athletic Excellence Training' },
              { src: '/Images/IMG_2235.jpg', alt: 'Technique Development' },
            ].map((photo) => (
              <div
                key={photo.src}
                className="aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 relative"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ objectPosition: 'center 35%' }}
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs sm:text-sm font-medium drop-shadow-lg">
                    {photo.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/media"
              className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-xl text-base font-bold hover:bg-primary-dark transition-colors duration-300 shadow-md"
            >
              View Full Gallery
              <ChevronRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PRICING PREVIEW ===== */}
      <section id="pricing-preview" className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="fade-in">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold rounded-full text-xs uppercase tracking-wider mb-4">
              Pricing
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-accent mb-4">
              Ready to Elevate Your <span className="text-primary">Game</span>?
            </h2>
            <p className="text-lg sm:text-xl text-gray-500 mb-12 max-w-3xl mx-auto">
              Every session is 1 hour in length and designed to maximize your potential
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mb-12">
              {[
                { emoji: '🏈', name: 'Quarterback Training', price: '$65.00' },
                { emoji: '⚡', name: 'Wide Receiver Training', price: '$65.00' },
                { emoji: '🧠', name: 'Chalk Talk', price: '$40.00' },
              ].map((item) => (
                <div
                  key={item.name}
                  className="bg-neutral rounded-xl p-6 sm:p-8 text-center border border-gray-100 hover:border-primary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-3xl mb-3">{item.emoji}</div>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-accent mb-2">{item.name}</h3>
                  <p className="text-3xl sm:text-4xl font-bold text-primary mb-1">{item.price}</p>
                  <p className="text-gray-400 text-sm">per session</p>
                </div>
              ))}
            </div>

            <Link
              href="/pricing"
              className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 sm:px-10 sm:py-5 rounded-xl text-lg sm:text-xl font-bold hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Pricing & Book Now
              <ChevronRightIcon className="w-5 h-5" />
            </Link>

            <p className="text-gray-400 text-sm mt-6 max-w-xl mx-auto">
              Training in the Washington, DC metro area with flexible scheduling
            </p>
          </div>
        </div>
      </section>

      {/* ===== CONTACT CTA ===== */}
      <section className="py-20 sm:py-24 bg-accent">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="fade-in">
            <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary font-semibold rounded-full text-xs uppercase tracking-wider mb-6">
              Ready to Start?
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
              Questions? Get in touch
            </h2>

            <p className="text-lg sm:text-xl text-white/60 mb-10 max-w-3xl mx-auto">
              Ready to start your journey with C.L.I.M.B. Athletics? We&apos;re here to help
              you reach your full potential.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 sm:px-10 sm:py-5 rounded-xl text-lg sm:text-xl font-bold hover:bg-primary-dark transition-all duration-300 shadow-lg"
            >
              Contact Us Today
              <ChevronRightIcon className="w-5 h-5" />
            </Link>

            <div className="mt-8 text-white/40">
              <p className="text-sm">
                Email us at{' '}
                <a
                  href="mailto:Climb1athletics@gmail.com"
                  className="text-primary hover:text-red-400 transition-colors duration-200 font-medium"
                >
                  Climb1athletics@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
