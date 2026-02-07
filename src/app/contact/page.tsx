'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useFadeIn } from '@/hooks/useFadeIn';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const GoogleMap = dynamic(() => import('@/components/GoogleMap'), { ssr: false });

const faqs = [
  {
    q: 'What should my athlete bring to training sessions?',
    a: 'Athletes should bring comfortable athletic clothing, cleats (if outdoor), water bottle, and any personal equipment they typically use. We provide training equipment and footballs.',
  },
  {
    q: 'What age groups do you work with?',
    a: 'We work with athletes from youth level through college preparation. Our coaching methods are adapted to each athlete\'s age, skill level, and development goals.',
  },
  {
    q: 'How do I schedule training sessions?',
    a: 'You can book sessions through our Square booking system or contact us directly. We\'ll work with your schedule to find convenient training times.',
  },
  {
    q: 'Do you offer group training sessions?',
    a: 'Currently, we focus on individual training to provide personalized attention and development. This ensures each athlete receives coaching tailored to their specific needs.',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useFadeIn();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/mgvzzkrj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '', honeypot: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-16 pb-32 md:pt-20 md:pb-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Images/IMG_2265.jpg"
            alt="Contact C.L.I.M.B. Athletics"
            fill
            className="object-cover"
            style={{ objectPosition: 'center 60%' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center animate-[fadeInUp_0.8s_ease-out_both]">
          <span className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full text-xs uppercase tracking-widest mb-8">
            Get In Touch
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-6 leading-[1.1]">
            Contact <span className="text-primary">Us</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
            Ready to start your journey? Get in touch to schedule your session or ask questions.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 sm:py-24 bg-neutral">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="fade-in lg:col-span-3">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-accent mb-6">
                Send Us a Message
              </h2>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6 text-sm">
                  <strong>Success!</strong> Your message has been sent. We&apos;ll get back to you soon!
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">
                  <strong>Error:</strong> There was a problem sending your message. Please try again.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 text-base"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 text-base"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 text-base resize-vertical"
                    placeholder="Tell us about your training goals..."
                  />
                </div>

                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-3.5 rounded-lg font-bold hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 text-base"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="fade-in lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-accent mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: MapPinIcon,
                    title: 'Location',
                    content: 'Washington, DC',
                    sub: 'Training locations provided upon booking',
                  },
                  {
                    icon: EnvelopeIcon,
                    title: 'Email',
                    content: 'Climb1athletics@gmail.com',
                    href: 'mailto:Climb1athletics@gmail.com',
                  },
                  {
                    icon: PhoneIcon,
                    title: 'Response Time',
                    content: 'Within 24 hours on business days',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-primary/10 rounded-lg p-2.5">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-accent text-sm">{item.title}</h3>
                      {item.href ? (
                        <a href={item.href} className="text-primary hover:text-primary-dark transition-colors text-sm">
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-gray-600 text-sm">{item.content}</p>
                      )}
                      {item.sub && <p className="text-gray-400 text-xs mt-0.5">{item.sub}</p>}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-heading font-semibold text-accent text-sm mb-3">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/climb_athletics/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-primary hover:text-white rounded-lg transition-all duration-200 group"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5 text-gray-500 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/michael-lowery-448892221"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-primary hover:text-white rounded-lg transition-all duration-200 group"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5 text-gray-500 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="fade-in text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-accent mb-3">
              Our Location
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Based in Washington, DC — Training locations vary based on program and weather
            </p>
          </div>

          <div className="fade-in">
            <GoogleMap
              center={{ lat: 38.907192, lng: -77.036871 }}
              markers={[
                {
                  position: { lat: 38.907192, lng: -77.036871 },
                  title: 'C.L.I.M.B. Athletics',
                  info: 'Elite QB & WR Training in Washington, DC.',
                },
              ]}
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-24 bg-neutral">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="fade-in text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold rounded-full text-xs uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-accent">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="fade-in bg-white rounded-xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <h3 className="font-heading font-bold text-accent text-sm sm:text-base pr-4">
                    {faq.q}
                  </h3>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
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
              Ready to Get <span className="text-primary">Started</span>?
            </h2>
            <p className="text-lg sm:text-xl text-white/60 mb-10 max-w-3xl mx-auto">
              Take the first step toward elite performance and character development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-primary-dark transition-all duration-300 shadow-lg"
              >
                Book Your First Session
                <ChevronRightIcon className="w-5 h-5" />
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-accent transition-all duration-300"
              >
                Explore Programs
              </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-white/40 text-sm">
                Email us at{' '}
                <a
                  href="mailto:Climb1athletics@gmail.com"
                  className="text-primary hover:text-red-400 transition-colors font-medium"
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
