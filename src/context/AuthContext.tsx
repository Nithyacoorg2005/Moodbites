import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import axios from 'axios';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  error: string | null;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // For demo purposes, we're setting up mock authentication
  // In a real app, this would interact with the backend
  const checkAuth = () => {
    const storedUser = localStorage.getItem('moodbites_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Mock API call - in a real app, this would be a call to your backend
      // const response = await axios.post('/api/auth/login', { email, password });
      
      // Simulate successful login for demo
      const mockUser = {
        id: '1',
        name: 'Demo User',
        email,
      };
      
      localStorage.setItem('moodbites_user', JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (err) {
      setError('Invalid email or password');
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Mock API call - in a real app, this would be a call to your backend
      // const response = await axios.post('/api/auth/register', { name, email, password });
      
      // Simulate successful registration for demo
      const mockUser = {
        id: '1',
        name,
        email,
      };
      
      localStorage.setItem('moodbites_user', JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (err) {
      setError('Registration failed. Please try again.');
      console.error('Registration error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('moodbites_user');
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    logout,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};