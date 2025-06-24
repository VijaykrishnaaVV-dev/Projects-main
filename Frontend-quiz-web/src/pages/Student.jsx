import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedButton from '../components/AnimatedButton';
import './Student.css';

const Student = () => {
  const navigate = useNavigate();

  const startQuiz = (e) => {
    e.preventDefault();
    navigate('/quiz');
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: '100vw' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '-100vw' }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="student-container"
    >
      <div className="student-card">
        <h2 className="student-title">Join a Quiz</h2>
        <form className="student-form" onSubmit={startQuiz}>
          <div className="input-group">
            <label htmlFor="quizCode">
              Quiz Code
            </label>
            <input
              id="quizCode"
              name="quizCode"
              type="text"
              required
              className="student-input"
              placeholder="Enter quiz code"
            />
          </div>
          <AnimatedButton type="submit" className="student-button">
            Start Quiz
          </AnimatedButton>
        </form>
      </div>
    </motion.div>
  );
};

export default Student; 