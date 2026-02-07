'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PlayCircleIcon, AcademicCapIcon, ChatBubbleLeftRightIcon, ChevronRightIcon, CheckIcon } from '@heroicons/react/24/outline';
import { use } from 'react';

interface ProgramData {
  title: string;
  price: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
  overview: string;
  image: string;
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
    title: 'Quarterback Training',
    price: '$50.00',
    icon: PlayCircleIcon,
    description: 'Elite QB development focusing on footwork, accuracy, decision-making, and leadership skills.',
    image: '/Images/IMG_2271.jpg',
    overview: 'Our Quarterback Training program is designed to develop complete quarterbacks who excel both physically and mentally. We focus on the fundamentals that separate good quarterbacks from great ones: precise footwork, accurate throwing mechanics, quick decision-making under pressure, and natural leadership abilities.',
    whatYoullLearn: [
      'Proper throwing mechanics and arm strength development',
      'Footwork techniques for different drop-back depths and rollouts',
      'Reading defenses and making quick decisions',
      'Pre-snap analysis and audible calling',
      'Pocket presence and pressure management',
      'Leadership skills and teammate communication',
      'Game management and clock awareness',
      'Red zone and goal line efficiency',
    ],
    trainingIncludes: [
      'One-on-one coaching with experienced QB coaches',
      'Video analysis of throwing mechanics and decision-making',
      'Pressure simulation drills',
      'Accuracy and timing exercises with targets and receivers',
      'Footwork ladder drills and agility training',
      'Mental preparation and visualization techniques',
      'Film study of professional and college quarterbacks',
      'Customized training plan based on individual strengths and weaknesses',
    ],
    forWhom: 'This program is perfect for quarterbacks of all skill levels, from youth players just learning the position to high school athletes preparing for college recruitment. Whether you\'re looking to improve your mechanics, develop leadership skills, or prepare for the next level, our QB training will help you reach your goals.',
    benefits: [
      'Improved throwing accuracy and arm strength',
      'Enhanced decision-making speed and accuracy',
      'Greater confidence in the pocket under pressure',
      'Stronger leadership and communication skills',
      'Better understanding of defensive concepts',
      'Increased football IQ and game awareness',
      'Preparation for higher levels of competition',
      'Development of a winning mentality',
    ],
    sessionStructure: {
      warmUp: 'Dynamic warm-up and arm care routine (10 minutes)',
      skillDevelopment: 'Throwing mechanics and footwork training (25 minutes)',
      drills: 'Pressure drills and decision-making exercises (20 minutes)',
      coolDown: 'Review, feedback, and mental preparation (5 minutes)',
    },
  },
  'wide-receiver': {
    title: 'Wide Receiver Training',
    price: '$50.00',
    icon: AcademicCapIcon,
    description: 'Comprehensive WR development including route running, catching techniques, and game awareness.',
    image: '/Images/IMG_2235.jpg',
    overview: 'Our Wide Receiver Training program develops elite pass catchers who excel in all aspects of the position. We focus on the technical skills and mental approach needed to consistently win battles against defenders and make crucial catches when your team needs them most.',
    whatYoullLearn: [
      'Precise route running and timing',
      'Advanced catching techniques for all situations',
      'Release moves and defeating press coverage',
      'Creating separation through cuts and body positioning',
      'Reading leverage and adjusting routes accordingly',
      'Ball tracking and hand-eye coordination',
      'Blocking techniques for running plays',
      'Mental toughness and focus under pressure',
    ],
    trainingIncludes: [
      'Individual route running instruction',
      'Catching drills with various ball trajectories',
      'Release and separation technique development',
      'Speed and agility training specific to WR position',
      'Contested catch situations and training',
      'Film study of elite NFL and college receivers',
      'Quarterback-receiver timing and chemistry work',
      'Position-specific conditioning and injury prevention',
    ],
    forWhom: 'Ideal for wide receivers, slot receivers, and tight ends at all levels who want to improve their technical skills and game understanding. From youth players learning fundamentals to high school athletes preparing for college recruitment, our program develops complete pass catchers.',
    benefits: [
      'Improved route precision and consistency',
      'Enhanced catching ability in traffic',
      'Better release moves against press coverage',
      'Increased speed and agility for separation',
      'Greater understanding of defensive concepts',
      'Improved blocking technique for team success',
      'Enhanced focus and concentration',
      'Confidence to make plays in crucial moments',
    ],
    sessionStructure: {
      warmUp: 'Dynamic warm-up and catching routine (10 minutes)',
      skillDevelopment: 'Route running and separation techniques (25 minutes)',
      drills: 'Catching drills and contested situations (20 minutes)',
      coolDown: 'Review, feedback, and mental preparation (5 minutes)',
    },
  },
  'chalk-talk': {
    title: 'Chalk Talk',
    price: '$40.00',
    icon: ChatBubbleLeftRightIcon,
    description: 'Strategic film study and mental game development to enhance football IQ and decision-making.',
    image: '/Images/IMG_2250.jpg',
    overview: 'Our Chalk Talk sessions develop the mental side of football that separates good players from great ones. Through film study, strategic analysis, and interactive learning, athletes develop the football IQ and decision-making skills needed to excel at higher levels of competition.',
    whatYoullLearn: [
      'Reading and identifying defensive formations',
      'Understanding offensive concepts and play design',
      'Recognizing coverage patterns and defensive intentions',
      'Pre-snap reads and post-snap adjustments',
      'Game situation awareness and clock management',
      'Film study techniques for self-improvement',
      'Mental preparation and visualization methods',
      'Leadership principles and team communication',
    ],
    trainingIncludes: [
      'Interactive film sessions with game footage',
      'Whiteboard instruction on concepts and strategy',
      'Scenario-based decision making exercises',
      'Position-specific responsibility breakdowns',
      'Discussion of professional and college strategies',
      'Mental conditioning and focus techniques',
      'Goal setting and performance tracking',
      'Character development and leadership training',
    ],
    forWhom: 'Perfect for serious football players who want to develop their mental game and football IQ. Ideal for quarterbacks, captains, and any player who wants to understand the strategic aspects of football and become a more complete player and leader.',
    benefits: [
      'Enhanced football IQ and game understanding',
      'Faster recognition of defensive schemes',
      'Improved decision-making under pressure',
      'Better preparation and study habits',
      'Increased confidence through knowledge',
      'Leadership skills development',
      'Mental toughness and focus improvement',
      'Preparation for coaching and mentoring others',
    ],
    sessionStructure: {
      warmUp: 'Review of previous concepts and goals (5 minutes)',
      skillDevelopment: 'Film study and strategic analysis (35 minutes)',
      drills: 'Interactive scenarios and decision-making (15 minutes)',
      coolDown: 'Summary and homework assignment (5 minutes)',
    },
  },
};

const sessionSteps = [
  { label: 'Warm-Up', key: 'warmUp' as const },
  { label: 'Skill Development', key: 'skillDevelopment' as const },
  { label: 'Drills & Application', key: 'drills' as const },
  { label: 'Cool-Down & Review', key: 'coolDown' as const },
];

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
      <section className="relative pt-16 pb-28 md:pt-20 md:pb-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={program.image}
            alt={program.title}
            fill
            className="object-cover"
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
            <div className="bg-primary/20 backdrop-blur-sm rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Icon className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
              {program.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-6">
              {program.description}
            </p>
            <div className="text-3xl sm:text-4xl font-bold text-primary">{program.price}</div>
            <p className="text-white/50 text-sm mt-1">Per 1-hour session</p>
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 sm:py-24 bg-neutral">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold rounded-full text-xs uppercase tracking-wider mb-4">
                Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-accent mb-6">
                Program Overview
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {program.overview}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src={program.image}
                alt={`${program.title} in action`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-accent">
              What You&apos;ll Learn
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {program.whatYoullLearn.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start bg-neutral p-4 sm:p-5 rounded-xl"
              >
                <CheckIcon className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 text-sm font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Includes */}
      <section className="py-20 sm:py-24 bg-neutral">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-accent">
              Training Includes
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {program.trainingIncludes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-gray-100"
              >
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                <p className="text-gray-600 text-sm">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For Whom & Benefits */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-accent mb-4">
                Who Is This For?
              </h3>
              <p className="text-gray-600 leading-relaxed">{program.forWhom}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-accent mb-4">
                Key Benefits
              </h3>
              <div className="space-y-2.5">
                {program.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckIcon className="w-4 h-4 text-primary mr-2.5 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 text-sm">{benefit}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Session Structure */}
      <section className="py-20 sm:py-24 bg-neutral">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-accent mb-3">
              Session Structure
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Every 1-hour session is carefully structured for maximum development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sessionSteps.map((step, i) => (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-primary/10 text-primary font-bold text-sm rounded-lg">
                    {i + 1}
                  </span>
                  <h4 className="font-heading font-bold text-accent text-sm">{step.label}</h4>
                </div>
                <p className="text-gray-500 text-sm pl-11">{program.sessionStructure[step.key]}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
              Book your {program.title.toLowerCase()} session today and take the first step toward reaching your potential.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-primary-dark transition-all duration-300 shadow-lg"
              >
                Book Now - {program.price}
                <ChevronRightIcon className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-accent transition-all duration-300"
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
