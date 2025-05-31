import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>();
  
  const onSubmit = (data: ContactFormData) => {
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', data);
      setIsSubmitted(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };
  
  return (
    <div className="py-12 pt-28 bg-neutral-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-neutral-800 mb-4">
            Get in Touch
          </h1>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Have a question, feedback, or just want to say hello? We'd love to hear from you!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-xl shadow-card p-8">
              <h2 className="text-2xl font-heading font-semibold mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-success-50 text-success-700 p-6 rounded-lg text-center"
                >
                  <CheckCircle size={48} className="mx-auto mb-4" />
                  <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
                  <p>
                    Thank you for contacting us. We'll get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className={`input-field ${errors.name ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}`}
                        placeholder="John Doe"
                        {...register('name', { required: 'Name is required' })}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-error-600">{errors.name.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        className={`input-field ${errors.email ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}`}
                        placeholder="you@example.com"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-error-600">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className={`input-field ${errors.subject ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}`}
                      placeholder="How can we help?"
                      {...register('subject', { required: 'Subject is required' })}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-error-600">{errors.subject.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className={`input-field ${errors.message ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}`}
                      placeholder="Tell us what's on your mind..."
                      {...register('message', { 
                        required: 'Message is required',
                        minLength: {
                          value: 10,
                          message: 'Message must be at least 10 characters'
                        }
                      })}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-error-600">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary px-6 py-3 flex items-center"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                            <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send size={16} className="ml-2" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-card p-8">
              <h2 className="text-2xl font-heading font-semibold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="h-6 w-6 text-primary-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-neutral-800">Email Us</h3>
                    <p className="text-neutral-600">
                      <a href="mailto:hello@moodbites.com" className="hover:text-primary-500 transition-colors">
                        hello@moodbites.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="h-6 w-6 text-primary-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-neutral-800">Call Us</h3>
                    <p className="text-neutral-600">
                      <a href="tel:+11234567890" className="hover:text-primary-500 transition-colors">
                        +1 (123) 456-7890
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <MessageSquare className="h-6 w-6 text-primary-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-neutral-800">Support Hours</h3>
                    <p className="text-neutral-600">Monday - Friday<br />9:00 AM - 6:00 PM EST</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="h-6 w-6 text-primary-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-neutral-800">Location</h3>
                    <p className="text-neutral-600">
                      123 Wellness Street<br />
                      Healthville, CA 90210<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-neutral-100">
                <h3 className="text-lg font-medium text-neutral-800 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-primary-100 hover:text-primary-500 transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-primary-100 hover:text-primary-500 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-primary-100 hover:text-primary-500 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-card p-8 mb-12"
        >
          <h2 className="text-2xl font-heading font-semibold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-neutral-800 mb-2">Is Moodbites a replacement for professional mental health care?</h3>
              <p className="text-neutral-600">
                No, Moodbites is not a substitute for professional mental health treatment. While nutrition can support emotional wellbeing, we always recommend consulting with healthcare providers for mental health concerns.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-neutral-800 mb-2">How do you determine which foods affect different moods?</h3>
              <p className="text-neutral-600">
                Our recommendations are based on peer-reviewed research in nutritional psychiatry, which examines how nutrients affect brain chemistry and mood. We analyze foods for their content of mood-influencing compounds like tryptophan, omega-3s, antioxidants, and more.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-neutral-800 mb-2">Can I use Moodbites if I have dietary restrictions?</h3>
              <p className="text-neutral-600">
                Yes! We offer recipe filtering for common dietary needs including vegetarian, vegan, gluten-free, dairy-free, and more. We're constantly expanding our recipe database to be inclusive of diverse dietary requirements.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-neutral-800 mb-2">How is my mood data used and protected?</h3>
              <p className="text-neutral-600">
                Your privacy is our priority. Your mood data is securely stored and used only to provide personalized recipe recommendations. We never share individual user data with third parties. You can review our full privacy policy for more details.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;