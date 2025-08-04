'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PlayCircleIcon, AcademicCapIcon, ChatBubbleLeftRightIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { use } from 'react';

interface ProgramData {
  title: string;
  price: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
  overview: string;
  whatYoullLearn: string[];
  trainingIncludes: string[];
  forWhom: string;
  benefits: string[];
  sessionStructure: {
    warmUp: string;
    skillDevelopment: string;
    drills: string;
    coolDown: string;
  };
}

const programsData: Record<string, ProgramData> = {
  quarterback: {
    title: "Quarterback Training",
    price: "$50.00",
    icon: PlayCircleIcon,
    description: "Elite QB development focusing on footwork, accuracy, decision-making, and leadership skills.",
    overview: "Our Quarterback Training program is designed to develop complete quarterbacks who excel both physically and mentally. We focus on the fundamentals that separate good quarterbacks from great ones: precise footwork, accurate throwing mechanics, quick decision-making under pressure, and natural leadership abilities.",
    whatYoullLearn: [
      "Proper throwing mechanics and arm strength development",
      "Footwork techniques for different drop-back depths and rollouts",
      "Reading defenses and making quick decisions",
      "Pre-snap analysis and audible calling",
      "Pocket presence and pressure management",
      "Leadership skills and teammate communication",
      "Game management and clock awareness",
      "Red zone and goal line efficiency"
    ],
    trainingIncludes: [
      "One-on-one coaching with experienced QB coaches",
      "Video analysis of throwing mechanics and decision-making",
      "Pressure simulation drills",
      "Accuracy and timing exercises with targets and receivers",
      "Footwork ladder drills and agility training",
      "Mental preparation and visualization techniques",
      "Film study of professional and college quarterbacks",
      "Customized training plan based on individual strengths and weaknesses"
    ],
    forWhom: "This program is perfect for quarterbacks of all skill levels, from youth players just learning the position to high school athletes preparing for college recruitment. Whether you're looking to improve your mechanics, develop leadership skills, or prepare for the next level, our QB training will help you reach your goals.",
    benefits: [
      "Improved throwing accuracy and arm strength",
      "Enhanced decision-making speed and accuracy",
      "Greater confidence in the pocket under pressure",
      "Stronger leadership and communication skills",
      "Better understanding of defensive concepts",
      "Increased football IQ and game awareness",
      "Preparation for higher levels of competition",
      "Development of a winning mentality"
    ],
    sessionStructure: {
      warmUp: "Dynamic warm-up and arm care routine (10 minutes)",
      skillDevelopment: "Throwing mechanics and footwork training (25 minutes)",
      drills: "Pressure drills and decision-making exercises (20 minutes)",
      coolDown: "Review, feedback, and mental preparation (5 minutes)"
    }
  },
  "wide-receiver": {
    title: "Wide Receiver Training",
    price: "$50.00",
    icon: AcademicCapIcon,
    description: "Comprehensive WR development including route running, catching techniques, and game awareness.",
    overview: "Our Wide Receiver Training program develops elite pass catchers who excel in all aspects of the position. We focus on the technical skills and mental approach needed to consistently win battles against defenders and make crucial catches when your team needs them most.",
    whatYoullLearn: [
      "Precise route running and timing",
      "Advanced catching techniques for all situations",
      "Release moves and defeating press coverage",
      "Creating separation through cuts and body positioning",
      "Reading leverage and adjusting routes accordingly",
      "Ball tracking and hand-eye coordination",
      "Blocking techniques for running plays",
      "Mental toughness and focus under pressure"
    ],
    trainingIncludes: [
      "Individual route running instruction",
      "Catching drills with various ball trajectories",
      "Release and separation technique development",
      "Speed and agility training specific to WR position",
      "Contested catch situations and training",
      "Film study of elite NFL and college receivers",
      "Quarterback-receiver timing and chemistry work",
      "Position-specific conditioning and injury prevention"
    ],
    forWhom: "Ideal for wide receivers, slot receivers, and tight ends at all levels who want to improve their technical skills and game understanding. From youth players learning fundamentals to high school athletes preparing for college recruitment, our program develops complete pass catchers.",
    benefits: [
      "Improved route precision and consistency",
      "Enhanced catching ability in traffic",
      "Better release moves against press coverage",
      "Increased speed and agility for separation",
      "Greater understanding of defensive concepts",
      "Improved blocking technique for team success",
      "Enhanced focus and concentration",
      "Confidence to make plays in crucial moments"
    ],
    sessionStructure: {
      warmUp: "Dynamic warm-up and catching routine (10 minutes)",
      skillDevelopment: "Route running and separation techniques (25 minutes)",
      drills: "Catching drills and contested situations (20 minutes)",
      coolDown: "Review, feedback, and mental preparation (5 minutes)"
    }
  },
  "chalk-talk": {
    title: "Chalk Talk",
    price: "$40.00",
    icon: ChatBubbleLeftRightIcon,
    description: "Strategic film study and mental game development to enhance football IQ and decision-making.",
    overview: "Our Chalk Talk sessions develop the mental side of football that separates good players from great ones. Through film study, strategic analysis, and interactive learning, athletes develop the football IQ and decision-making skills needed to excel at higher levels of competition.",
    whatYoullLearn: [
      "Reading and identifying defensive formations",
      "Understanding offensive concepts and play design",
      "Recognizing coverage patterns and defensive intentions",
      "Pre-snap reads and post-snap adjustments",
      "Game situation awareness and clock management",
      "Film study techniques for self-improvement",
      "Mental preparation and visualization methods",
      "Leadership principles and team communication"
    ],
    trainingIncludes: [
      "Interactive film sessions with game footage",
      "Whiteboard instruction on concepts and strategy",
      "Scenario-based decision making exercises",
      "Position-specific responsibility breakdowns",
      "Discussion of professional and college strategies",
      "Mental conditioning and focus techniques",
      "Goal setting and performance tracking",
      "Character development and leadership training"
    ],
    forWhom: "Perfect for serious football players who want to develop their mental game and football IQ. Ideal for quarterbacks, captains, and any player who wants to understand the strategic aspects of football and become a more complete player and leader.",
    benefits: [
      "Enhanced football IQ and game understanding",
      "Faster recognition of defensive schemes",
      "Improved decision-making under pressure",
      "Better preparation and study habits",
      "Increased confidence through knowledge",
      "Leadership skills development",
      "Mental toughness and focus improvement",
      "Preparation for coaching and mentoring others"
    ],
    sessionStructure: {
      warmUp: "Review of previous concepts and goals (5 minutes)",
      skillDevelopment: "Film study and strategic analysis (35 minutes)",
      drills: "Interactive scenarios and decision-making (15 minutes)",
      coolDown: "Summary and homework assignment (5 minutes)"
    }
  }
};

export default function ProgramDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const program = programsData[slug];

  if (!program) {
    notFound();
  }

  const Icon = program.icon;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-accent to-gray-800">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-primary/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <Icon className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              {program.title}
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              {program.description}
            </p>
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">{program.price}</div>
                <p className="text-gray-300">Per 1-hour session</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-neutral">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold text-accent mb-8">
                Program Overview
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {program.overview}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-300 rounded-xl h-96 overflow-hidden"
            >
              <img
                src={
                  program.title === 'Quarterback Training' ? '/Images/IMG_2230.jpg' :
                  program.title === 'Wide Receiver Training' ? '/Images/IMG_2235.jpg' :
                  '/Images/IMG_2250.jpg'
                }
                alt={`${program.title} in action`}
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-accent mb-4">
              What You&apos;ll Learn
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {program.whatYoullLearn.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start bg-neutral p-6 rounded-lg"
              >
                <span className="text-primary mr-3 mt-1">✓</span>
                <p className="text-gray-700 font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Includes */}
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
              Training Includes
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {program.trainingIncludes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start bg-white p-6 rounded-lg shadow-md"
              >
                <span className="text-primary mr-3 mt-1">•</span>
                <p className="text-gray-700">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For Whom & Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* For Whom */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-heading font-bold text-accent mb-6">
                Who Is This For?
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {program.forWhom}
              </p>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-heading font-bold text-accent mb-6">
                Key Benefits
              </h3>
              <div className="space-y-3">
                {program.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-primary mr-3 mt-1">✓</span>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Session Structure */}
      <section className="py-20 bg-neutral">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-accent mb-4">
              Session Structure
            </h2>
            <p className="text-xl text-gray-600">
              Every 1-hour session is carefully structured for maximum development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h4 className="font-heading font-bold text-accent text-lg mb-3">Warm-Up</h4>
              <p className="text-gray-700">{program.sessionStructure.warmUp}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h4 className="font-heading font-bold text-accent text-lg mb-3">Skill Development</h4>
              <p className="text-gray-700">{program.sessionStructure.skillDevelopment}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h4 className="font-heading font-bold text-accent text-lg mb-3">Drills & Application</h4>
              <p className="text-gray-700">{program.sessionStructure.drills}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h4 className="font-heading font-bold text-accent text-lg mb-3">Cool-Down & Review</h4>
              <p className="text-gray-700">{program.sessionStructure.coolDown}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Book your {program.title.toLowerCase()} session today and take the first step toward reaching your potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Book Now - {program.price}
                <ChevronRightIcon className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
              >
                Have Questions?
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}