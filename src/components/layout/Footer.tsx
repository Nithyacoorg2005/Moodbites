import React from 'react';
import { Link } from 'react-router-dom';
import { CloudMoon, Heart, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-neutral-100 pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 text-primary-500 mb-4">
              <CloudMoon size={24} />
              <span className="font-heading font-bold text-xl">Moodbites</span>
            </Link>
            <p className="text-neutral-600 mb-4">
              Track your moods and discover recipes that nourish both body and mind.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary-500 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="font-heading text-base font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/recipes" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  Recipes
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="col-span-1">
            <h4 className="font-heading text-base font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  Mood Tracking Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  Nutrition Basics
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  Food & Mood Journal
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h4 className="font-heading text-base font-semibold mb-4">Contact Us</h4>
            <p className="flex items-center text-neutral-600 mb-2">
              <Mail size={16} className="mr-2" />
              <a href="mailto:hello@moodbites.com" className="hover:text-primary-500 transition-colors">
                hello@moodbites.com
              </a>
            </p>
            <p className="text-neutral-600 mb-4">
              123 Wellness Street<br />
              Healthville, CA 90210
            </p>
            <Link to="/contact" className="text-primary-500 hover:text-primary-600 transition-colors font-medium">
              Send us a message →
            </Link>
          </div>
        </div>
        
        <div className="border-t border-neutral-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Moodbites. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-sm text-neutral-500 hover:text-primary-500 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-neutral-500 hover:text-primary-500 transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-sm text-neutral-500 hover:text-primary-500 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;