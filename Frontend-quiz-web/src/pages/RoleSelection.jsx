import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedButton from '../components/AnimatedButton';
import './RoleSelection.css';

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, x: '100vw' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '-100vw' }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="role-selection-container"
    >
      <h2 className="role-selection-title">Choose Your Role</h2>
      <div className="role-selection-buttons">
        <AnimatedButton onClick={() => navigate('/host')}>
          I am a Host
        </AnimatedButton>
        <AnimatedButton onClick={() => navigate('/student')}>
          I am a Student
        </AnimatedButton>
      </div>
    </motion.div>
  );
};

export default RoleSelection; 