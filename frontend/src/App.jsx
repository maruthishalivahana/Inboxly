import React, { useState } from 'react';
import WelcomeScreen from './pages/Welcome.jsx';
import LandingPage from './pages/Landing.jsx';

export default function App() {
  const [currentView, setCurrentView] = useState('welcome');

  const handleGetStarted = () => {
    setCurrentView('landing');
  };

  if (currentView === 'welcome') {
    return <WelcomeScreen onGetStarted={handleGetStarted} />;
  }

  return <LandingPage />;
}