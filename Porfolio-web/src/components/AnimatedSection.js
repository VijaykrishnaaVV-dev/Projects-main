import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// This component wraps sections with animation effects that trigger when scrolled into view
const AnimatedSection = ({ children, className, delay = 0, direction = 'up' }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.25, // Trigger when 25% of the element is visible
    triggerOnce: true, // Only trigger once
  });

  // Define animation variants based on direction
  const getVariants = () => {
    switch (direction) {
      case 'up':
        return {
          hidden: { y: 100, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        };
      case 'down':
        return {
          hidden: { y: -100, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        };
      case 'left':
        return {
          hidden: { x: 100, opacity: 0 },
          visible: { x: 0, opacity: 1 }
        };
      case 'right':
        return {
          hidden: { x: -100, opacity: 0 },
          visible: { x: 0, opacity: 1 }
        };
      case 'scale':
        return {
          hidden: { scale: 0.8, opacity: 0 },
          visible: { scale: 1, opacity: 1 }
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getVariants()}
      transition={{ 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1.0], // Cubic bezier for smooth easing
        delay: delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;