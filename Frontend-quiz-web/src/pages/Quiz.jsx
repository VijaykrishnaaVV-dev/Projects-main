import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { mockQuestions } from '../data/mockQuestions';
import QuestionCard from '../components/QuestionCard';
import AnimatedButton from '../components/AnimatedButton';
import './Quiz.css';

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(mockQuestions.length).fill(null));
  
  const handleOptionChange = (option) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = option;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < mockQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const handleSubmit = () => {
    const score = answers.reduce((acc, answer, index) => {
        return answer === mockQuestions[index].answer ? acc + 1 : acc;
    }, 0);
    navigate('/result', { state: { score, total: mockQuestions.length } });
  };

  const currentQuestion = mockQuestions[currentQuestionIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="quiz-container"
    >
      <AnimatePresence mode="wait">
        <QuestionCard
          key={currentQuestionIndex}
          question={currentQuestion.question}
          options={currentQuestion.options}
          selectedOption={answers[currentQuestionIndex]}
          onOptionChange={handleOptionChange}
        />
      </AnimatePresence>
      <div className="quiz-navigation">
        <AnimatedButton onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
          Previous
        </AnimatedButton>
        {currentQuestionIndex < mockQuestions.length - 1 ? (
          <AnimatedButton onClick={handleNext}>
            Next
          </AnimatedButton>
        ) : (
          <AnimatedButton onClick={handleSubmit} className="submit-button">
            Submit Quiz
          </AnimatedButton>
        )}
      </div>
    </motion.div>
  );
};

export default Quiz; 