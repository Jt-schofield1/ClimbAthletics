'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Enhanced */}
      <section className="relative py-32 md:py-40 bg-gradient-to-br from-gray-900 via-accent to-gray-800 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/Images/IMG_2258.jpg"
            alt="About C.L.I.M.B. Athletics"
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
              Our Foundation
            </span>
            
            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-white mb-8 leading-tight">
              THE <span className="text-primary">C.L.I.M.B.</span>
            </h1>
            
            {/* Subtitle */}
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-6 leading-relaxed">
                Our core values define our approach to athlete development and mentorship
              </p>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                Character • Leadership • Intelligence • Mentorship • Balance
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

      {/* Core Values Section */}
      <section className="py-20 bg-neutral">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-accent mb-8">
              Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">C - Character</h3>
                <p className="text-gray-700 leading-relaxed">
                  We believe in developing athletes who exemplify integrity, respect, and sportsmanship both on and off the field.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">L - Leadership</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every athlete has the potential to be a leader. We cultivate leadership skills that translate beyond sports.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">I - Intelligence</h3>
                <p className="text-gray-700 leading-relaxed">
                  Football IQ is just as important as physical ability. We develop strategic thinking and game awareness.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">M - Mentorship</h3>
                <p className="text-gray-700 leading-relaxed">
                  We provide guidance and support that extends beyond technical training to life skills and personal development.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">B - Balance</h3>
                <p className="text-gray-700 leading-relaxed">
                  We emphasize a holistic approach, ensuring athletes achieve balance between training, academics, and personal life to prevent burnout.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mentorship Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-accent mb-8">
                Mentorship
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-300 rounded-xl h-96 overflow-hidden"
            >
              <img
                src="/Images/IMG_2215.jpg"
                alt="Mentorship in action - Coach and athlete development"
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Balance Section */}
      <section className="py-20 bg-neutral">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-300 rounded-xl h-96 overflow-hidden lg:order-1"
            >
              <img
                src="/Images/IMG_2220.jpg"
                alt="Balance in training and life"
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:order-2"
            >
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-accent mb-8">
                Balance
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  We understand the importance of maintaining balance in a young athlete's life. 
                  Football is important, but so are academics, family time, and personal interests.
                </p>
                <p>
                  Our training programs are designed to complement, not overwhelm, an athlete's 
                  schedule. We work with families to ensure that our training enhances rather 
                  than detracts from overall development.
                </p>
                <p>
                  By teaching time management, prioritization, and the value of rest and recovery, 
                  we help athletes excel in all areas of their lives while pursuing their football goals.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Burnout Prevention Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-accent mb-8">
                Burnout Prevention
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Youth sports burnout is a real concern, and we take it seriously. Our approach 
                  focuses on keeping training fun, engaging, and age-appropriate while still 
                  maintaining high standards of excellence.
                </p>
                <p>
                  We monitor each athlete's physical and mental well-being, adjusting training 
                  intensity and focus as needed. Our goal is to foster a lifelong love of the 
                  game, not to exhaust young athletes.
                </p>
                <p>
                  Through varied training methods, positive reinforcement, and regular check-ins, 
                  we ensure that athletes remain motivated and excited about their development 
                  throughout their journey with us.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-300 rounded-xl h-96 overflow-hidden"
            >
              <img
                src="/Images/IMG_2225.jpg"
                alt="Burnout prevention through balanced training"
                className="w-full h-full object-cover rounded-xl"
              />
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
              Join Our Community
            </span>
            
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Ready to <span className="text-primary">C.L.I.M.B.</span> with Us?
            </h2>
            
            {/* Description */}
            <p className="text-xl sm:text-2xl text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed">
              Join a community dedicated to developing complete athletes and exceptional individuals.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-red-600 text-white px-10 py-5 rounded-xl text-xl font-bold hover:from-red-600 hover:to-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/30"
              >
                <span>Contact Us</span>
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
    </div>
  );
}