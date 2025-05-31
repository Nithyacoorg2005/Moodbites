import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, CloudMoon, Heart } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
  }`;

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-lg transition-colors ${
      isActive 
        ? 'text-primary-600 font-medium' 
        : 'text-neutral-600 hover:text-primary-500'
    }`;

  const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-3 rounded-lg transition-colors ${
      isActive 
        ? 'text-primary-600 font-medium bg-primary-50' 
        : 'text-neutral-700 hover:bg-neutral-50'
    }`;

  return (
    <nav className={navbarClasses}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-primary-500"
          >
            <CloudMoon size={28} />
            <span className="font-heading font-bold text-xl md:text-2xl">Moodbites</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/" className={navLinkClasses} end>
              Home
            </NavLink>
            {isAuthenticated ? (
              <>
                <NavLink to="/dashboard" className={navLinkClasses}>
                  Dashboard
                </NavLink>
                <NavLink to="/mood-log" className={navLinkClasses}>
                  Mood Log
                </NavLink>
                <NavLink to="/recipes" className={navLinkClasses}>
                  Recipes
                </NavLink>
                <NavLink to="/favorites" className={navLinkClasses}>
                  Favorites
                </NavLink>
              </>
            ) : null}
            <NavLink to="/about" className={navLinkClasses}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkClasses}>
              Contact
            </NavLink>
          </div>
          
          {/* Auth Buttons / User Menu (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-neutral-700">Hi, {user?.name}</span>
                <button
                  onClick={logout}
                  className="btn btn-outline"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline">
                  Log In
                </Link>
                <Link to="/register" className="btn btn-primary">
                  Sign Up
                </Link>
              </>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-neutral-600 hover:text-primary-500 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t border-neutral-100 mt-2"
        >
          <div className="container-custom py-4 space-y-2">
            <NavLink to="/" className={mobileNavLinkClasses} end>
              Home
            </NavLink>
            {isAuthenticated ? (
              <>
                <NavLink to="/dashboard" className={mobileNavLinkClasses}>
                  Dashboard
                </NavLink>
                <NavLink to="/mood-log" className={mobileNavLinkClasses}>
                  Mood Log
                </NavLink>
                <NavLink to="/recipes" className={mobileNavLinkClasses}>
                  Recipes
                </NavLink>
                <NavLink to="/favorites" className={mobileNavLinkClasses}>
                  Favorites
                </NavLink>
              </>
            ) : null}
            <NavLink to="/about" className={mobileNavLinkClasses}>
              About
            </NavLink>
            <NavLink to="/contact" className={mobileNavLinkClasses}>
              Contact
            </NavLink>
            
            {/* Auth Buttons (Mobile) */}
            <div className="pt-4 border-t border-neutral-100 mt-4">
              {isAuthenticated ? (
                <div className="space-y-3">
                  <p className="px-4 text-neutral-700">Logged in as: {user?.name}</p>
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-3 text-neutral-700 hover:bg-neutral-50 rounded-lg"
                  >
                    Log Out
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <Link 
                    to="/login" 
                    className="block px-4 py-3 text-neutral-700 hover:bg-neutral-50 rounded-lg"
                  >
                    Log In
                  </Link>
                  <Link 
                    to="/register" 
                    className="block px-4 py-3 bg-primary-500 text-white rounded-lg text-center"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;