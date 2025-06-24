import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedButton from '../components/AnimatedButton';
import './Result.css';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || { score: 0, total: 0 };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="result-container"
    >
      <div className="result-card">
        <h2 className="result-title">Quiz Completed!</h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="result-subtitle"
        >
          Your final score is:
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            delay: 0.5,
          }}
          className="result-score"
        >
          {score} / {total}
        </motion.div>
        <div className="result-actions">
          <AnimatedButton onClick={() => navigate('/quiz')}>
            Retake Quiz
          </AnimatedButton>
          <AnimatedButton onClick={() => navigate('/')} className="home-button">
            Return Home
          </AnimatedButton>
        </div>
      </div>
    </motion.div>
  );
};

export default Result; 