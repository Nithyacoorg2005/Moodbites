import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { User, Mail, Lock, AlertCircle } from 'lucide-react';

type RegisterFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterForm: React.FC = () => {
  const { register, error } = useAuth();
  const navigate = useNavigate();
  const { 
    register: registerField, 
    handleSubmit, 
    watch,
    formState: { errors, isSubmitting } 
  } = useForm<RegisterFormData>();
  const [showPassword, setShowPassword] = useState(false);

  const password = watch('password');

  const onSubmit = async (data: RegisterFormData) => {
    await register(data.name, data.email, data.password);
    navigate('/dashboard');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="bg-white rounded-xl shadow-card p-8">
        <h2 className="text-2xl font-heading font-semibold text-center mb-6">Create Your Account</h2>
        
        {error && (
          <div className="mb-6 p-3 bg-error-50 text-error-700 rounded-lg flex items-start">
            <AlertCircle size={18} className="mr-2 mt-0.5 flex-shrink-0" />
            <p>{error}</p>
          </div>
        )}
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User size={18} className="text-neutral-400" />
              </div>
              <input
                id="name"
                type="text"
                className={`input-field pl-10 ${errors.name ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}`}
                placeholder="John Doe"
                {...registerField('name', { 
                  required: 'Name is required',
                  minLength: {
                    value: 2,
                    message: 'Name must be at least 2 characters'
                  }
                })}
              />
            </div>
            {errors.name && (
              <p className="mt-1 text-sm text-error-600">{errors.name.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail size={18} className="text-neutral-400" />
              </div>
              <input
                id="email"
                type="email"
                className={`input-field pl-10 ${errors.email ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}`}
                placeholder="you@example.com"
                {...registerField('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-error-600">{errors.email.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-1">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock size={18} className="text-neutral-400" />
              </div>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                className={`input-field pl-10 ${errors.password ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}`}
                placeholder="••••••••"
                {...registerField('password', { 
                  required: 'Password is required',
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters'
                  }
                })}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-neutral-400 hover:text-neutral-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-error-600">{errors.password.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-neutral-700 mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock size={18} className="text-neutral-400" />
              </div>
              <input
                id="confirmPassword"
                type={showPassword ? 'text' : 'password'}
                className={`input-field pl-10 ${errors.confirmPassword ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}`}
                placeholder="••••••••"
                {...registerField('confirmPassword', { 
                  required: 'Please confirm your password',
                  validate: value => value === password || 'The passwords do not match'
                })}
              />
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-error-600">{errors.confirmPassword.message}</p>
            )}
          </div>
          
          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-neutral-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-neutral-700">
              I agree to the{' '}
              <a href="#" className="font-medium text-primary-600 hover:text-primary-500">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="font-medium text-primary-600 hover:text-primary-500">
                Privacy Policy
              </a>
            </label>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn btn-primary py-2.5"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                  <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating Account...
              </span>
            ) : 'Create Account'}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-neutral-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-primary-600 hover:text-primary-500">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default RegisterForm;