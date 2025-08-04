'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { ChevronRightIcon, PlayCircleIcon, AcademicCapIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-preview');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Aggressive video autoplay on component mount
  React.useEffect(() => {
    const video = document.querySelector('video') as HTMLVideoElement;
    if (video) {
      let hasStarted = false;
      
      // Multiple attempts to start video
      const startVideo = async () => {
        if (video.paused && !hasStarted) {
          try {
            video.currentTime = 0;
            await video.play();
            hasStarted = true;
            console.log('Video started successfully');
          } catch {
            console.log('Autoplay prevented, waiting for user interaction');
          }
        }
      };
      
      // Immediate aggressive attempts
      startVideo();
      setTimeout(startVideo, 50);
      setTimeout(startVideo, 100);
      setTimeout(startVideo, 200);
      setTimeout(startVideo, 500);
      setTimeout(startVideo, 1000);
      
      // Try on any user interaction - this is crucial for mobile
      const handleInteraction = () => {
        if (!hasStarted) {
          startVideo();
          // Remove listeners after first successful start
          events.forEach(event => {
            document.removeEventListener(event, handleInteraction);
          });
        }
      };
      
      // Listen for any minimal user interaction
      const events = ['touchstart', 'touchend', 'mousedown', 'keydown', 'scroll', 'click', 'pointerdown'];
      events.forEach(event => {
        document.addEventListener(event, handleInteraction, { passive: true });
      });
      
      // Also try when window loads completely
      if (document.readyState === 'loading') {
        window.addEventListener('load', () => {
          setTimeout(startVideo, 100);
        });
      } else {
        setTimeout(startVideo, 100);
      }
      
      // Try when video comes into view
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasStarted) {
            setTimeout(startVideo, 100);
          }
        });
      }, { threshold: 0.1 });
      
      observer.observe(video);
      
      // Try when page becomes visible
      const handleVisibilityChange = () => {
        if (!document.hidden && !hasStarted) {
          setTimeout(startVideo, 100);
        }
      };
      
      document.addEventListener('visibilitychange', handleVisibilityChange);
      
      // Cleanup
      return () => {
        observer.disconnect();
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        events.forEach(event => {
          document.removeEventListener(event, handleInteraction);
        });
      };
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Enhanced */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            controls={false}
            disablePictureInPicture
            disableRemotePlayback
            className="w-full h-full object-cover"
            style={{ 
              pointerEvents: 'none',
              objectFit: 'cover'
            }}
            webkit-playsinline="true"
            x5-playsinline="true"
            x5-video-player-type="h5"
            x5-video-player-fullscreen="true"
            x-webkit-airplay="deny"
            data-wf-ignore="true"
            data-object-fit="cover"
            onLoadedData={(e) => {
              const video = e.target as HTMLVideoElement;
              // Hide any browser controls completely
              video.setAttribute('controls', 'false');
              video.removeAttribute('controls');
              video.style.setProperty('pointer-events', 'none');
              
              // Add CSS to hide webkit controls
              const style = document.createElement('style');
              style.textContent = `
                video::-webkit-media-controls,
                video::-webkit-media-controls-panel,
                video::-webkit-media-controls-play-button,
                video::-webkit-media-controls-start-playback-button,
                video::-webkit-media-controls-overlay-play-button {
                  display: none !important;
                  -webkit-appearance: none;
                }
              `;
              if (!document.querySelector('#video-controls-hide')) {
                style.id = 'video-controls-hide';
                document.head.appendChild(style);
              }
              
              // Force play immediately
              video.currentTime = 0;
              video.play().catch(() => {
                console.log('LoadedData autoplay prevented');
              });
            }}
            onCanPlay={(e) => {
              const video = e.target as HTMLVideoElement;
              // Force play when ready
              video.play().catch(() => {
                console.log('CanPlay autoplay prevented');
              });
            }}
            onCanPlayThrough={(e) => {
              const video = e.target as HTMLVideoElement;
              // Another opportunity to start
              video.play().catch(() => {
                console.log('CanPlayThrough autoplay prevented');
              });
            }}
            onLoadedMetadata={(e) => {
              const video = e.target as HTMLVideoElement;
              // Try immediately when metadata loads
              video.play().catch(() => {
                console.log('Metadata autoplay prevented');
              });
            }}
            onLoadStart={(e) => {
              const video = e.target as HTMLVideoElement;
              // Try as soon as loading starts
              setTimeout(() => {
                video.play().catch(() => {
                  console.log('LoadStart autoplay prevented');
                });
              }, 100);
            }}
            onContextMenu={(e) => e.preventDefault()}
          >
            <source src="/Videos/IMG_2781.MOV" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Enhanced overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40" />
        </div>

        {/* Background Pattern Overlay */}
        <div className="absolute inset-0 z-5 opacity-5">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#E63946_2px,_transparent_2px)] bg-[length:60px_60px]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Elite Training Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <span className="inline-block px-5 py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 text-white font-bold rounded-full text-xs sm:text-sm uppercase tracking-wide mb-6 shadow-lg">
                🏈 Elite Training Program
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-heading font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Welcome to{' '}
              <span className="text-primary drop-shadow-lg">C.L.I.M.B.</span>{' '}
              <br className="hidden sm:block" />
              Athletics
            </motion.h1>

            {/* Subtitle */}
            <motion.div 
              className="max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-100 mb-6 font-medium leading-relaxed">
                Elite Quarterback & Wide Receiver Training
              </p>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                Developing skilled athletes and strong leaders through expert coaching, mentorship, and personalized training programs
              </p>
            </motion.div>

            {/* Key Stats */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold mb-2" style={{ 
                  background: 'linear-gradient(90deg, #ffffff 0%, #E63946 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: 'none'
                }}>10+</div>
                <div className="text-sm sm:text-base font-medium drop-shadow-lg" style={{ color: '#ffffff', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold mb-2" style={{ 
                  background: 'linear-gradient(90deg, #ffffff 0%, #E63946 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: 'none'
                }}>1:1</div>
                <div className="text-sm sm:text-base font-medium drop-shadow-lg" style={{ color: '#ffffff', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Personal Training</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold mb-2" style={{ 
                  background: 'linear-gradient(90deg, #ffffff 0%, #E63946 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: 'none'
                }}>100%</div>
                <div className="text-sm sm:text-base font-medium drop-shadow-lg" style={{ color: '#ffffff', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Dedicated to Excellence</div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <button
                onClick={scrollToPricing}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary to-red-600 text-white px-10 py-5 rounded-xl text-xl font-bold hover:from-red-600 hover:to-primary transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-primary/50 backdrop-blur-sm border border-primary/30"
              >
                <span>Start Your Journey</span>
                <ChevronRightIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>

            {/* Visual Separators */}
            <motion.div 
              className="flex justify-center items-center gap-4 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-primary"></div>
              <div className="w-4 h-4 bg-primary rounded-full shadow-lg"></div>
              <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-primary"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview - Enhanced */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--primary)_1px,_transparent_1px)] bg-[length:40px_40px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm uppercase tracking-wide mb-4">
              Elite Training Programs
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-accent mb-6">
              Transform Your Game
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elite level training designed to develop complete athletes and leaders
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-0">
            {/* Quarterback Training - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-2xl p-8 hover:shadow-2xl hover:shadow-red-500/20 transform hover:-translate-y-3 transition-all duration-500 overflow-hidden"
            >
              {/* Floating Background Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <PlayCircleIcon className="w-24 h-24 text-primary" />
              </div>
              
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-primary to-red-600 rounded-2xl w-20 h-20 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <PlayCircleIcon className="w-10 h-10 text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-2">
                    QUARTERBACK
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-accent mb-2">
                    Elite QB Training
                  </h3>
                  <div className="text-3xl font-bold text-primary mb-2">$50.00<span className="text-lg text-gray-500">/session</span></div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Master footwork, accuracy, decision-making, and leadership skills with personalized QB development.
                </p>
                
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-red-600"
                >
                  Start Training
                  <ChevronRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Wide Receiver Training - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-3 transition-all duration-500 overflow-hidden"
            >
              {/* Floating Background Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <AcademicCapIcon className="w-24 h-24 text-primary" />
              </div>
              
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-primary to-red-600 rounded-2xl w-20 h-20 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <AcademicCapIcon className="w-10 h-10 text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-2">
                    WIDE RECEIVER
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-accent mb-2">
                    Elite WR Training
                  </h3>
                  <div className="text-3xl font-bold text-primary mb-2">$50.00<span className="text-lg text-gray-500">/session</span></div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Perfect route running, catching techniques, and game awareness with comprehensive WR development.
                </p>
                
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-red-600"
                >
                  Start Training
                  <ChevronRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Chalk Talk - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-2xl p-8 hover:shadow-2xl hover:shadow-green-500/20 transform hover:-translate-y-3 transition-all duration-500 overflow-hidden"
            >
              {/* Floating Background Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <ChatBubbleLeftRightIcon className="w-24 h-24 text-primary" />
              </div>
              
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-primary to-red-600 rounded-2xl w-20 h-20 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <ChatBubbleLeftRightIcon className="w-10 h-10 text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-2">
                    MENTAL GAME
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-accent mb-2">
                    Chalk Talk Sessions
                  </h3>
                  <div className="text-3xl font-bold text-primary mb-2">$40.00<span className="text-lg text-gray-500">/session</span></div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Enhance football IQ through strategic film study and mental game development sessions.
                </p>
                
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-red-600"
                >
                  Start Learning
                  <ChevronRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-accent to-gray-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#E63946_1px,_transparent_1px)] bg-[length:30px_30px]" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Quote Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-8">
              <div className="text-6xl font-serif text-white">"</div>
            </div>
            
            {/* Quote Text */}
            <blockquote 
              style={{ 
                color: '#FFFFFF',
                fontSize: 'clamp(1.25rem, 4vw, 2rem)',
                fontWeight: '500',
                fontStyle: 'italic',
                lineHeight: '1.6',
                marginBottom: '2rem',
                paddingLeft: '1rem',
                paddingRight: '1rem',
                maxWidth: '56rem',
                marginLeft: 'auto',
                marginRight: 'auto',
                textShadow: '3px 3px 6px rgba(0,0,0,0.9)',
                WebkitTextFillColor: '#FFFFFF',
                textAlign: 'center'
              }}
            >
              CLIMB Athletics has truly transformed my kid's game. Coach Lowery has taught my son that 
              it doesn't matter how far down field you can throw—being a great quarterback includes 
              footwork, balance, pace, and strategy. It has transformed the way my son approaches 
              training and playing.
            </blockquote>
            
            {/* Attribution */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-0.5 bg-primary"></div>
              <cite className="text-white text-xl font-bold tracking-wide drop-shadow-lg">MAUREEN P</cite>
              <div className="w-12 h-0.5 bg-primary"></div>
            </div>
            
            {/* Parent Label */}
            <p className="text-gray-200 text-lg mt-2">Parent of Elite Athlete</p>
          </motion.div>
        </div>
      </section>

      {/* Media Preview */}
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
            Our Athletes in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See our training methods and athlete development in action
          </p>
        </motion.div>

        {/* Featured training photos - Bigger layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0"
        >
          {[
            { src: '/Images/IMG_2219.jpg', alt: 'Elite Quarterback Training' },
            { src: '/Images/IMG_2225.jpg', alt: 'Wide Receiver Development' },
            { src: '/Images/IMG_2233.jpg', alt: 'Skills & Technique Training' },
            { src: '/Images/IMG_2271.jpg', alt: 'Athletic Performance' },
            { src: '/Images/IMG_2227.jpg', alt: 'Athletic Excellence Training' },
            { src: '/Images/IMG_2235.jpg', alt: 'Technique Development' }
          ].map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300 touch-manipulation shadow-lg hover:shadow-xl relative"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                style={{ objectPosition: 'center 35%' }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-semibold text-sm sm:text-base drop-shadow-lg">
                  {photo.alt}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

          <div className="text-center mt-12">
            <Link
              href="/media"
              className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              View Full Gallery
              <ChevronRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Preview - Enhanced */}
      <section id="pricing-preview" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#E63946_1px,_transparent_1px)] bg-[length:40px_40px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Elite Pricing Badge */}
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm uppercase tracking-wide mb-6">
              Elite Training Packages
            </span>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-accent mb-6">
              Ready to Elevate Your <span className="text-primary">Game</span>?
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Every session is 1 hour in length and designed to maximize your potential with elite-level training
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 px-4 sm:px-0">
              <motion.div 
                className="bg-white rounded-xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏈</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-accent mb-3">Quarterback Training</h3>
                <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">$50.00</p>
                <p className="text-gray-500 text-sm">per session</p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-accent mb-3">Wide Receiver Training</h3>
                <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">$50.00</p>
                <p className="text-gray-500 text-sm">per session</p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-accent mb-3">Chalk Talk</h3>
                <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">$40.00</p>
                <p className="text-gray-500 text-sm">per session</p>
              </motion.div>
            </div>

            {/* Enhanced CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/pricing"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-red-600 text-white px-10 py-5 rounded-xl text-xl font-bold hover:from-red-600 hover:to-primary transform transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/30"
              >
                <span>View All Pricing & Book Now</span>
                <ChevronRightIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
            
            {/* Additional Info */}
            <p className="text-gray-500 text-sm mt-6 max-w-2xl mx-auto">
              All training sessions are held in the Washington, DC metropolitan area with flexible scheduling options
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA - Enhanced */}
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
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary font-semibold rounded-full text-sm uppercase tracking-wide mb-6">
              Ready to Start?
            </span>
            
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Questions? Get in touch
            </h2>
            
            {/* Description */}
            <p className="text-xl sm:text-2xl text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed">
              Ready to start your journey with C.L.I.M.B. Athletics? We're here to help you reach your full potential.
            </p>
            
            {/* Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-red-600 text-white px-10 py-5 rounded-xl text-xl font-bold hover:from-red-600 hover:to-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/30"
            >
              <span>Contact Us Today</span>
              <ChevronRightIcon className="w-6 h-6" />
            </Link>
            
            {/* Contact Info */}
            <div className="mt-8 text-gray-300">
              <p className="text-lg">
                Email us at{' '}
                <a 
                  href="mailto:Climb1athletics@gmail.com" 
                  className="text-primary hover:text-red-400 transition-colors duration-300 font-semibold"
                >
                  Climb1athletics@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}