import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedButton from '../components/AnimatedButton';
import './Host.css';

const Host = () => {
  const [quizCode, setQuizCode] = useState('');

  const generateQuiz = () => {
    const code = `QUIZ${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    setQuizCode(code);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: '100vw' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '-100vw' }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="host-container"
    >
      <div className="host-card">
        <h2 className="host-title">Host a Quiz</h2>
        <div className="host-form">
          <div className="input-group">
            <label className="host-label">
              Simulate File Upload
            </label>
            <div className="file-upload-area">
              <label className="file-upload-label">
                <div className="file-upload-content">
                  <svg xmlns="http://www.w3.org/2000/svg" className="file-upload-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-4-4V7a4 4 0 014-4h5l4 4v5a4 4 0 01-4 4H7z" />
                  </svg>
                  <p>Select a file</p>
                </div>
                <input type="file" className="file-upload-input" />
              </label>
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="numQuestions" className="host-label">
              Number of Questions
            </label>
            <select
              id="numQuestions"
              className="host-select"
            >
              <option>10</option>
              <option>20</option>
              <option>30</option>
            </select>
          </div>
          <AnimatedButton onClick={generateQuiz} className="host-button">
            Generate Quiz
          </AnimatedButton>
        </div>
        <AnimatePresence>
          {quizCode && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.5 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className="quiz-code"
            >
              Your Quiz Code: {quizCode}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Host; 