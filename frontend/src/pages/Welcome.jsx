import React, { useState, useEffect } from 'react';
import { motion } from "motion/react";
import { FaArrowRight } from "react-icons/fa";

const Typewriter = ({ 
  children, 
  speed = 100, 
  delay = 0, 
  className = "",
  onComplete = () => {},
  cursor = true,
  cursorChar = "|"
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(-1); // Start at -1 to handle delay
  const [showCursor, setShowCursor] = useState(true);
  const [isStarted, setIsStarted] = useState(false);
  const text = typeof children === 'string' ? children : '';

  // Handle initial delay
  useEffect(() => {
    if (delay > 0) {
      const startTimeout = setTimeout(() => {
        setIsStarted(true);
        setCurrentIndex(0);
      }, delay);
      return () => clearTimeout(startTimeout);
    } else {
      setIsStarted(true);
      setCurrentIndex(0);
    }
  }, [delay]);

  // Handle typing animation
  useEffect(() => {
    if (!isStarted || currentIndex < 0) return;
    
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (currentIndex === text.length) {
      onComplete();
      if (!cursor) {
        setShowCursor(false);
      }
    }
  }, [currentIndex, text, speed, onComplete, cursor, isStarted]);

  // Handle cursor blinking
  useEffect(() => {
    if (!cursor) return;
    
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, [cursor]);

  return (
    <span className={className}>
      {displayedText}
      {cursor && (
        <motion.span
          animate={{ opacity: showCursor ? 1 : 0 }}
          transition={{ duration: 0.1 }}
          className="inline-block ml-1"
        >
          {cursorChar}
        </motion.span>
      )}
    </span>
  );
};

function WelcomeScreen({ onGetStarted }) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="text-center space-y-8 p-8">
                <motion.h1 
          className="text-6xl font-extrabold "
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Typewriter speed={80} delay={500} className=' text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse'>Inboxly – Messenger Platform</Typewriter>
        </motion.h1>
 <motion.button
          onClick={onGetStarted}
          className="px-8 py-4 bg-blue-600 text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
          whileHover={{ scale: 1.05, cursor: "pointer" }}
          whileTap={{ scale: 0.95 }}
        >
          <span className='flex items-center mr-2'>Get Started  <FaArrowRight className='ml-2' /></span>
        </motion.button>
            </div>
        </div>
    );
}

export default WelcomeScreen;