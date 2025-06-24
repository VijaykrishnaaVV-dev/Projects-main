import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Login from './pages/Login';
import RoleSelection from './pages/RoleSelection';
import Host from './pages/Host';
import Student from './pages/Student';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import ThemeToggle from './components/ThemeToggle';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Login />} />
        <Route path="/role-selection" element={<RoleSelection />} />
        <Route path="/host" element={<Host />} />
        <Route path="/student" element={<Student />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
      <ThemeToggle />
    </Router>
  );
}

export default App;