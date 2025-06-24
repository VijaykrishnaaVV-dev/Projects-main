import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedButton from '../components/AnimatedButton';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/role-selection');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="login-container"
    >
      <div className="login-card">
        <h2 className="login-title">Welcome Back!</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              className="login-input"
              placeholder="Enter your username"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="login-input"
              placeholder="Enter your password"
            />
          </div>
          <AnimatedButton type="submit" className="login-button">
            Login
          </AnimatedButton>
        </form>
      </div>
    </motion.div>
  );
};

export default Login; 