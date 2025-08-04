'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { XMarkIcon, PlayIcon } from '@heroicons/react/24/outline';

export default function Coaches() {
  const [showMikeVideo, setShowMikeVideo] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Enhanced */}
      <section className="relative pt-16 pb-32 md:pt-20 md:pb-40 bg-gradient-to-br from-gray-900 via-accent to-gray-800 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/Images/IMG_2261.jpg"
            alt="Meet Our Coaches"
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
              Expert Coaching Staff
            </span>
            
            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-white mb-8 leading-tight">
              Meet Our <span className="text-primary">Elite</span> Team
            </h1>
            
            {/* Subtitle */}
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-6 leading-relaxed">
                Our dedicated coaches are committed to your success on and off the field
              </p>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                Expert mentors with proven track records in developing elite athletes and leaders
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

      {/* Coaches Section */}
      <section className="py-20 bg-neutral">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Mike Lowery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-96 sm:h-[400px] md:h-[450px]">
                <Image
                  src="/Images/Mike Headshot.PNG"
                  alt="Mike Lowery - Head Coach"
                  fill
                  className="object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-3xl font-heading font-bold text-white mb-1">
                    Mike Lowery
                  </h3>
                  <p className="text-white font-semibold text-lg">Head Coach & Founder</p>
                </div>
              </div>
              
              <div className="p-8">
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-heading font-bold text-accent text-lg mb-2">Background & Experience:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Former collegiate quarterback with 10+ years of playing experience
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        5+ years of professional coaching and athlete development
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Specialized in quarterback mechanics and leadership development
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Certified in sports psychology and youth athlete development
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-heading font-bold text-accent text-lg mb-2">Coaching Philosophy:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Focus on fundamentals and progressive skill development
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Emphasis on mental game and decision-making under pressure
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Building confidence through positive reinforcement and challenge
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Developing leadership skills both on and off the field
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-heading font-bold text-accent text-lg mb-2">Specializations:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Quarterback training (all levels: youth through college prep)
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Film study and game strategy (Chalk Talk sessions)
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Leadership development and mentorship
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        College recruitment preparation and guidance
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-primary/10 rounded-lg p-4 mb-6">
                  <h4 className="font-heading font-bold text-accent mb-2">Mike's Passion:</h4>
                  <p className="text-gray-700 italic">
                    "My passion is developing young athletes into not just better football players, but better people. 
                    I believe that the lessons learned on the football field—discipline, teamwork, perseverance, and 
                    leadership—are the same qualities that lead to success in life. Every athlete I work with has the 
                    potential for greatness, and my job is to help them discover and develop that potential."
                  </p>
                </div>

                              <button
                onClick={() => setShowMikeVideo(true)}
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <PlayIcon className="w-5 h-5" />
                Watch Mike's Introduction Video
              </button>
              </div>
            </motion.div>

            {/* Tony Lowery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-96 sm:h-[400px] md:h-[450px]">
                <Image
                  src="/Images/TonyHeadshot.png"
                  alt="Tony Lowery - Assistant Coach"
                  fill
                  className="object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-3xl font-heading font-bold text-white mb-1">
                    Tony Lowery
                  </h3>
                  <p className="text-white font-semibold text-lg">Assistant Coach & Wide Receiver Specialist</p>
                </div>
              </div>
              
              <div className="p-8">
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-heading font-bold text-accent text-lg mb-2">Background & Experience:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Former high school and collegiate wide receiver
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        3+ years of coaching experience with youth and high school athletes
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Specialized in route running techniques and catching mechanics
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Expert in speed and agility training for skill position players
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-heading font-bold text-accent text-lg mb-2">Coaching Philosophy:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Precision and attention to detail in every movement
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Building explosive speed and agility through proven techniques
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Developing game awareness and route-running intelligence
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Creating reliable hands and catching confidence
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-heading font-bold text-accent text-lg mb-2">Specializations:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Wide receiver training and development
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Route running technique and timing
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Catching mechanics and hand-eye coordination
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Speed and agility training for skill positions
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-primary/10 rounded-lg p-4">
                  <h4 className="font-heading font-bold text-accent mb-2">Tony's Passion:</h4>
                  <p className="text-gray-600 italic">
                    "I love working with wide receivers because the position requires such a unique combination of 
                    speed, precision, and mental toughness. Every route is an opportunity to perfect your craft, 
                    and every catch builds confidence. My goal is to help athletes develop the technical skills 
                    and mental resilience needed to excel at the next level while fostering a love for the game 
                    that will last a lifetime."
                  </p>
                </div>
              </div>
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
              Elite Training Awaits
            </span>
            
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Ready to Elevate Your Game?
            </h2>
            
            {/* Description */}
            <p className="text-xl sm:text-2xl text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed">
              Join our elite training programs and experience the difference that expert coaching makes.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/pricing"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-red-600 text-white px-10 py-5 rounded-xl text-xl font-bold hover:from-red-600 hover:to-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/30"
              >
                <span>Book a Session</span>
              </a>
              <a
                href="/programs"
                className="inline-flex items-center justify-center gap-3 bg-transparent border-3 border-white text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-white hover:text-black transition-all duration-300 shadow-lg"
              >
                <span>View Programs</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mike's Video Modal */}
      {showMikeVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowMikeVideo(false)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowMikeVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors duration-300 z-10"
            >
              <XMarkIcon className="w-8 h-8" />
            </button>
            
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              {/* Placeholder for Mike's intro video */}
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                <div className="text-center text-white">
                  <PlayIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Mike's Introduction Video</p>
                  <p className="text-sm text-gray-400 mt-2">Video will be loaded from /Videos folder</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <h3 className="text-white text-lg font-heading font-medium">Meet Coach Mike Lowery</h3>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}