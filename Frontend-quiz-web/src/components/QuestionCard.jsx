import React from 'react';
import { motion } from 'framer-motion';
import './QuestionCard.css';

const QuestionCard = ({ question, options, selectedOption, onOptionChange }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '-100%' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="question-card"
    >
      <h3 className="question-text">{question}</h3>
      <div className="options-container">
        {options.map((option) => (
          <motion.label
            key={option}
            whileHover={{ scale: 1.02 }}
            className={`option-label ${selectedOption === option ? 'selected' : ''}`}
          >
            <input
              type="radio"
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={() => onOptionChange(option)}
              className="option-radio"
            />
            <span className="option-text">{option}</span>
          </motion.label>
        ))}
      </div>
    </motion.div>
  );
};

export default QuestionCard; 