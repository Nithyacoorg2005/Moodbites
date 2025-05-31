import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Smile, Utensils, BarChart, ChevronRight, Clock, Users } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const HomePage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  
  const features = [
    {
      icon: <Smile className="w-6 h-6 text-primary-500" />,
      title: 'Track Your Mood',
      description: 'Log your daily moods with easy-to-use emoji selectors and notes to keep track of your emotional wellbeing.'
    },
    {
      icon: <Utensils className="w-6 h-6 text-primary-500" />,
      title: 'Personalized Recipes',
      description: 'Discover recipes tailored to your current mood, designed to nourish both body and mind.'
    },
    {
      icon: <BarChart className="w-6 h-6 text-primary-500" />,
      title: 'Visualize Trends',
      description: 'See patterns in your mood over time with intuitive charts and insights.'
    }
  ];
  
  const testimonials = [
    {
      quote: "Moodbites has completely changed my relationship with food and emotions. Now I understand how different foods affect my mood throughout the day.",
      author: "Sarah M.",
      position: "Yoga Instructor"
    },
    {
      quote: "The recipe recommendations are spot on! When I'm feeling low, the suggested comfort foods really do help lift my spirits.",
      author: "Michael P.",
      position: "Software Engineer"
    },
    {
      quote: "As someone who struggles with stress-eating, this app has been a game-changer for making healthier choices based on how I feel.",
      author: "Jamie T.",
      position: "Healthcare Worker"
    }
  ];
  
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-pastel-lavender to-pastel-blue">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight text-neutral-900"
              >
                Track Your Mood, Nourish Your Body
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg md:text-xl text-neutral-700 mb-8"
              >
                Discover how your food choices affect your mood, and get personalized recipe recommendations based on how you feel.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <Link to={isAuthenticated ? "/dashboard" : "/register"} className="btn btn-primary px-6 py-3">
                  {isAuthenticated ? 'Go to Dashboard' : 'Get Started for Free'}
                </Link>
                <Link to="/about" className="btn btn-outline px-6 py-3">
                  Learn More
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:w-1/2"
            >
              <img 
                src="https://images.pexels.com/photos/5971874/pexels-photo-5971874.jpeg" 
                alt="Person enjoying healthy food" 
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">How Moodbites Works</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Our unique approach helps you understand the connection between your emotions and eating habits.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-card p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{feature.title}</h3>
                <p className="text-neutral-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Recipe Preview */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Mood-Based Recipes</h2>
            <Link to="/recipes" className="flex items-center text-primary-500 font-medium hover:text-primary-600 mt-4 md:mt-0">
              View All Recipes <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Recipe preview cards would go here - simplified for brevity */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="recipe-card"
            >
              <img 
                src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg" 
                alt="Energy Bowl" 
                className="recipe-card-img"
              />
              <div className="recipe-card-body">
                <h3 className="font-heading font-semibold text-lg mb-2">Energy-Boosting Quinoa Power Bowl</h3>
                <p className="text-neutral-600 text-sm mb-3">A nutrient-packed bowl full of complex carbs, protein, and healthy fats to fight fatigue.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block bg-pastel-blue bg-opacity-20 text-primary-700 text-xs px-2 py-1 rounded-full">lunch</span>
                  <span className="inline-block bg-pastel-blue bg-opacity-20 text-primary-700 text-xs px-2 py-1 rounded-full">high-protein</span>
                </div>
              </div>
              <div className="recipe-card-footer flex justify-between text-sm text-neutral-500">
                <div className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  <span>30 min</span>
                </div>
                <div className="flex items-center">
                  <Users size={14} className="mr-1" />
                  <span>2 servings</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="recipe-card"
            >
              <img 
                src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg" 
                alt="Berry Smoothie Bowl" 
                className="recipe-card-img"
              />
              <div className="recipe-card-body">
                <h3 className="font-heading font-semibold text-lg mb-2">Mood-Boosting Berry Smoothie Bowl</h3>
                <p className="text-neutral-600 text-sm mb-3">Start your day with this antioxidant-rich smoothie bowl that helps boost serotonin levels.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block bg-pastel-blue bg-opacity-20 text-primary-700 text-xs px-2 py-1 rounded-full">breakfast</span>
                  <span className="inline-block bg-pastel-blue bg-opacity-20 text-primary-700 text-xs px-2 py-1 rounded-full">quick</span>
                </div>
              </div>
              <div className="recipe-card-footer flex justify-between text-sm text-neutral-500">
                <div className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  <span>5 min</span>
                </div>
                <div className="flex items-center">
                  <Users size={14} className="mr-1" />
                  <span>1 serving</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="recipe-card"
            >
              <img 
                src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg" 
                alt="Calming Latte" 
                className="recipe-card-img"
              />
              <div className="recipe-card-body">
                <h3 className="font-heading font-semibold text-lg mb-2">Calming Chamomile Lavender Latte</h3>
                <p className="text-neutral-600 text-sm mb-3">A soothing, warm beverage perfect for reducing anxiety and promoting relaxation.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block bg-pastel-blue bg-opacity-20 text-primary-700 text-xs px-2 py-1 rounded-full">beverage</span>
                  <span className="inline-block bg-pastel-blue bg-opacity-20 text-primary-700 text-xs px-2 py-1 rounded-full">relaxation</span>
                </div>
              </div>
              <div className="recipe-card-footer flex justify-between text-sm text-neutral-500">
                <div className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  <span>10 min</span>
                </div>
                <div className="flex items-center">
                  <Users size={14} className="mr-1" />
                  <span>1 serving</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">What Our Users Say</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Join thousands who have improved their mood and eating habits with Moodbites.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-card p-6 border border-neutral-100"
              >
                <div className="text-primary-500 mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
                <p className="text-neutral-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-medium text-neutral-800">{testimonial.author}</p>
                  <p className="text-sm text-neutral-500">{testimonial.position}</p>
                </div>
              </motion.div>
            ))}
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
            Ready to transform your relationship with food and mood?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto"
          >
            Join Moodbites today and discover how the right foods can support your emotional wellbeing.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/register" className="btn bg-white text-primary-600 hover:bg-neutral-100 px-8 py-3 text-lg font-medium">
              Start Your Free Account
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;