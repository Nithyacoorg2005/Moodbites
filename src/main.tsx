import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { MoodProvider } from './context/MoodContext';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <MoodProvider>
          <App />
        </MoodProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);