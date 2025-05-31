import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Apple, Heart, BarChart3, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Brain className="h-8 w-8 text-primary-500" />,
      title: 'Mind-Body Connection',
      description: 'We believe in the powerful connection between what you eat and how you feel.'
    },
    {
      icon: <Apple className="h-8 w-8 text-primary-500" />,
      title: 'Nutritional Science',
      description: 'Our recommendations are based on research in nutritional psychiatry and food science.'
    },
    {
      icon: <Heart className="h-8 w-8 text-primary-500" />,
      title: 'Holistic Wellness',
      description: 'We support overall wellbeing through mindful eating and emotional awareness.'
    }
  ];
  
  const team = [
    {
      name: 'Dr. Emily Chen',
      role: 'Founder & Nutritional Psychiatrist',
      bio: 'With over 15 years of experience in nutritional psychiatry, Dr. Chen founded Moodbites to make mood-food connections accessible to everyone.',
      image: 'https://images.pexels.com/photos/5325840/pexels-photo-5325840.jpeg'
    },
    {
      name: 'Marcus Johnson',
      role: 'Head Chef & Recipe Developer',
      bio: 'A culinary expert specializing in functional foods, Marcus creates delicious recipes that support emotional wellbeing without sacrificing flavor.',
      image: 'https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg'
    },
    {
      name: 'Sophia Martinez',
      role: 'Wellness Coach & Content Director',
      bio: 'Certified in psychology and nutrition, Sophia leads our content team and ensures all advice is practical, science-based, and user-friendly.',
      image: 'https://images.pexels.com/photos/3772512/pexels-photo-3772512.jpeg'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 pt-28 md:py-24 md:pt-36 bg-gradient-to-br from-pastel-mint to-pastel-blue">
        <div className="container-custom text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            About Moodbites
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl max-w-3xl mx-auto text-neutral-700 mb-8"
          >
            We're on a mission to help people understand the powerful connection between food and mood, transforming eating habits to support emotional wellbeing.
          </motion.p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg" 
                alt="The Moodbites team" 
                className="rounded-2xl shadow-lg w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  Moodbites began in 2023 when Dr. Emily Chen, a nutritional psychiatrist, recognized that many of her patients struggled to make the connection between their diet and emotional health.
                </p>
                <p>
                  After years of clinical research on the gut-brain connection, she assembled a team of chefs, nutritionists, and mental health professionals to create an accessible platform that could help people make better food choices based on their emotional needs.
                </p>
                <p>
                  Today, Moodbites serves thousands of users worldwide, helping them track their moods and discover foods that can help them feel their best every day.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-heading font-bold mb-4"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-neutral-600 max-w-2xl mx-auto"
            >
              The principles that guide everything we do at Moodbites.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-card p-8 text-center"
              >
                <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-heading font-bold mb-4"
            >
              How It Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-neutral-600 max-w-2xl mx-auto"
            >
              The science behind our mood-food connection approach.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-heading font-semibold mb-4">The Food-Mood Connection</h3>
              <div className="space-y-4 text-neutral-700">
                <p>
                  Research increasingly shows that what we eat directly affects our brain chemistry and emotional states. Certain foods can boost serotonin, dopamine, and other neurotransmitters that regulate mood.
                </p>
                <p>
                  At Moodbites, we've mapped hundreds of recipes to specific emotional states, based on their nutritional profiles and the brain chemicals they help produce.
                </p>
                <p>
                  By tracking your moods over time and correlating them with your diet, we can help you discover patterns and make informed choices that support your emotional wellbeing.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-primary-100 rounded-full opacity-30 animate-pulse-slow"></div>
                <img 
                  src="https://images.pexels.com/photos/7511798/pexels-photo-7511798.jpeg" 
                  alt="Brain and food connection" 
                  className="rounded-2xl relative z-10 max-w-md w-full"
                />
              </div>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 md:order-1 flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-pastel-lavender rounded-full opacity-30 animate-pulse-slow"></div>
                <img 
                  src="https://images.pexels.com/photos/4200825/pexels-photo-4200825.jpeg" 
                  alt="Data-driven insights" 
                  className="rounded-2xl relative z-10 max-w-md w-full"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-1 md:order-2"
            >
              <h3 className="text-2xl font-heading font-semibold mb-4">Data-Driven Personalization</h3>
              <div className="space-y-4 text-neutral-700">
                <p>
                  Our recommendation engine analyzes your mood patterns and dietary preferences to suggest recipes that might help you feel better.
                </p>
                <p>
                  We use sophisticated algorithms to match foods with emotional states, taking into account factors like macronutrients, micronutrients, and bioactive compounds.
                </p>
                <p>
                  As you continue to log your moods and interact with recipes, our system learns more about your personal patterns, making increasingly tailored recommendations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Meet the Team */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-heading font-bold mb-4"
            >
              Meet Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-neutral-600 max-w-2xl mx-auto"
            >
              The experts behind Moodbites' approach to food and mood.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-card overflow-hidden"
              >
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold">{person.name}</h3>
                  <p className="text-primary-500 mb-3">{person.role}</p>
                  <p className="text-neutral-600">{person.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6"
            >
              <div className="flex justify-center mb-4">
                <Users size={40} className="text-primary-500" />
              </div>
              <p className="text-4xl font-heading font-bold text-neutral-800 mb-2">10,000+</p>
              <p className="text-neutral-600">Active Users</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6"
            >
              <div className="flex justify-center mb-4">
                <Apple size={40} className="text-primary-500" />
              </div>
              <p className="text-4xl font-heading font-bold text-neutral-800 mb-2">500+</p>
              <p className="text-neutral-600">Mood-Boosting Recipes</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6"
            >
              <div className="flex justify-center mb-4">
                <BarChart3 size={40} className="text-primary-500" />
              </div>
              <p className="text-4xl font-heading font-bold text-neutral-800 mb-2">1M+</p>
              <p className="text-neutral-600">Mood Entries Logged</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="container-custom text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-heading font-bold mb-6"
          >
            Join us on our mission
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto"
          >
            Start your journey toward better mood through mindful eating today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/register" className="btn bg-white text-primary-600 hover:bg-neutral-100 px-8 py-3 text-lg font-medium">
              Create Your Account
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;