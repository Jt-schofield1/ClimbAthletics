'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import PhotoGallery from '@/components/PhotoGallery';
import VideoPlayer from '@/components/VideoPlayer';

const samplePhotos = [
  { src: '/Images/IMG_2271.jpg', alt: 'Elite QB Training Session', title: 'Elite QB Training' },
  { src: '/Images/IMG_2233.jpg', alt: 'Advanced Wide Receiver Training', title: 'Advanced WR Training' },
  { src: '/Images/IMG_2219.jpg', alt: 'Precision Skill Development', title: 'Precision Training' },
  { src: '/Images/IMG_2227.jpg', alt: 'Athletic Excellence Program', title: 'Athletic Excellence' },
  { src: '/Images/IMG_2205.jpg', alt: 'Elite Coaching Session', title: 'Elite Coaching' },
  { src: '/Images/IMG_2273.jpg', alt: 'Leadership Development Training', title: 'Leadership Development' },
  { src: '/Images/IMG_2235.jpg', alt: 'Technique Mastery Session', title: 'Technique Mastery' },
  { src: '/Images/IMG_2217.jpg', alt: 'Dynamic Athletic Training', title: 'Dynamic Training' },
  { src: '/Images/IMG_2265.jpg', alt: 'Elite Development Program', title: 'Elite Development' },
  { src: '/Images/IMG_2221.jpg', alt: 'Advanced Football Skills', title: 'Advanced Skills' },
  { src: '/Images/IMG_2259.jpg', alt: 'Performance Enhancement', title: 'Performance Enhancement' },
  { src: '/Images/IMG_2212.jpg', alt: 'High-Level Athletic Performance', title: 'Athletic Performance' },
  { src: '/Images/IMG_2225.jpg', alt: 'Innovative Training Methods', title: 'Training Innovation' },
  { src: '/Images/IMG_2215.jpg', alt: 'Excellence in Training', title: 'Training Excellence' },
  { src: '/Images/IMG_2261.jpg', alt: 'Football Development Program', title: 'Football Development' },
  { src: '/Images/IMG_2253.jpg', alt: 'Elite Training Session', title: 'Elite Session' },
  { src: '/Images/IMG_2220.jpg', alt: 'Comprehensive Development', title: 'Comprehensive Development' },
  { src: '/Images/IMG_2210.jpg', alt: 'Coaching Excellence', title: 'Coaching Excellence' },
  { src: '/Images/IMG_2262.jpg', alt: 'Athletic Training Program', title: 'Athletic Training' },
  { src: '/Images/IMG_2208.jpg', alt: 'Professional Football Training', title: 'Professional Training' },
  { src: '/Images/IMG_2251.jpg', alt: 'Advanced Football Training', title: 'Advanced Football' },
  { src: '/Images/IMG_2232.jpg', alt: 'Strategic Coaching Session', title: 'Strategic Coaching' },
  { src: '/Images/IMG_2213.jpg', alt: 'Elite Training Methods', title: 'Elite Methods' },
  { src: '/Images/IMG_2234.jpg', alt: 'Elite Skills Development', title: 'Skills Development' },
  { src: '/Images/IMG_2218.jpg', alt: 'Development Session', title: 'Development Session' },
  { src: '/Images/IMG_2207.jpg', alt: 'Athlete Development Program', title: 'Athlete Development' },
  { src: '/Images/IMG_2252.jpg', alt: 'Skills Development Training', title: 'Skills Training' },
  { src: '/Images/IMG_2216.jpg', alt: 'Skill Training Excellence', title: 'Skill Excellence' },
  { src: '/Images/IMG_2214.jpg', alt: 'Football Development', title: 'Football Development' },
  { src: '/Images/IMG_2257.jpg', alt: 'Athletic Excellence', title: 'Athletic Excellence' },
  { src: '/Images/IMG_2209.jpg', alt: 'Skill Development Program', title: 'Skill Development' },
  { src: '/Images/IMG_2250.jpg', alt: 'Athletic Development', title: 'Athletic Development' },
  { src: '/Images/IMG_2258.jpg', alt: 'Development Session', title: 'Development Session' },
  { src: '/Images/IMG_2211.jpg', alt: 'Training Session Excellence', title: 'Training Session' },
  { src: '/Images/IMG_2256.jpg', alt: 'Training Program', title: 'Training Program' },
  { src: '/Images/IMG_2260.jpg', alt: 'Training Excellence', title: 'Training Excellence' },
  { src: '/Images/IMG_2204.jpg', alt: 'Position Training', title: 'Position Training' },
  { src: '/Images/IMG_2206.jpg', alt: 'Training Drills', title: 'Training Drills' },
  { src: '/Images/IMG_2263.jpg', alt: 'Skills Training', title: 'Skills Training' },
  { src: '/Images/IMG_2203.jpg', alt: 'Football Skills Training', title: 'Skills Training' },
  { src: '/Images/IMG_2202.jpg', alt: 'Athletic Development', title: 'Athletic Development' },
  { src: '/Images/IMG_2201.jpg', alt: 'Wide Receiver Training', title: 'WR Training' },
  { src: '/Images/IMG_2200.jpg', alt: 'Quarterback Development', title: 'QB Development' },
  { src: '/Images/IMG_2199.jpg', alt: 'C.L.I.M.B. Athletics Training Session', title: 'Elite Training Session' },
];

const sampleVideos = [
  { src: '/Videos/IMG_2781.MOV', title: 'Elite Training Session' },
  { src: '/Videos/IMG_2785.MOV', title: 'Quarterback Development' },
  { src: '/Videos/IMG_2802.MOV', title: 'Wide Receiver Training' },
  { src: '/Videos/IMG_6867.MOV', title: 'Advanced Training Techniques' },
  { src: '/Videos/IMG_6871.MOV', title: 'Skills Development' },
  { src: '/Videos/IMG_8991.MOV', title: 'Athletic Performance Training' },
  { src: '/Videos/IMG_8993.MOV', title: 'Elite Coaching Methods' },
  { src: '/Videos/IMG_8995.MOV', title: 'Complete Training Session' },
];

export default function Media() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-16 pb-32 md:pt-20 md:pb-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Images/IMG_2263.jpg"
            alt="Training Media Gallery"
            fill
            className="object-cover"
            style={{ objectPosition: 'center 60%' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full text-xs uppercase tracking-widest mb-8">
              Media Gallery
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-6 leading-[1.1]">
              Training in <span className="text-primary">Action</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
              Explore our training methods and athlete development through photos and videos
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 sm:py-24 bg-neutral">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold rounded-full text-xs uppercase tracking-wider mb-4">
              Photos
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-accent mb-3">
              Photo Gallery
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Behind-the-scenes looks at our training sessions and athlete development
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <PhotoGallery photos={samplePhotos} columns={3} />
          </motion.div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold rounded-full text-xs uppercase tracking-wider mb-4">
              Videos
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-accent mb-3">
              Training Videos
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Watch our coaching methods and see the C.L.I.M.B. difference in action
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            {sampleVideos.map((video, index) => (
              <VideoPlayer
                key={index}
                src={video.src}
                title={video.title}
                className="aspect-video"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Training Categories */}
      <section className="py-20 sm:py-24 bg-neutral">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-accent mb-3">
              What You&apos;ll See
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our media library covers all aspects of elite football training
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9 4h10a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v9a2 2 0 002 2z" />
                ),
                title: 'Technical Training',
                desc: 'Detailed breakdowns of throwing mechanics, footwork, route running, and position-specific skills.',
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                ),
                title: 'Chalk Talk Sessions',
                desc: 'Strategic analysis, film study sessions, and mental game development.',
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                ),
                title: 'Athlete Development',
                desc: 'Real training sessions showing athlete progression, mentorship moments, and character building.',
              },
            ].map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg p-6 sm:p-8 text-center transition-all duration-300 border border-gray-100"
              >
                <div className="bg-primary/10 rounded-xl w-14 h-14 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {cat.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-heading font-bold text-accent mb-3">{cat.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#E63946_1px,_transparent_1px)] bg-[length:40px_40px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
              Ready to Experience This <span className="text-primary">Training</span>?
            </h2>
            <p className="text-lg sm:text-xl text-white/60 mb-10 max-w-3xl mx-auto">
              Join the athletes featured in our gallery and start your journey to elite performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-primary-dark transition-all duration-300 shadow-lg"
              >
                Book Your Session
                <ChevronRightIcon className="w-5 h-5" />
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-accent transition-all duration-300"
              >
                View Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
