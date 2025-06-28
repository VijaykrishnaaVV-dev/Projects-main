import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThreeScene from './components/ThreeScene';
import AnimatedSection from './components/AnimatedSection';
import ThemeToggle from './components/ThemeToggle';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import ParticleBackground from './components/ParticleBackground';

const LoadingScreen = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.5 } }}
    className="fixed inset-0 flex items-center justify-center bg-gray-900 text-white text-4xl font-bold z-50"
  >
    Loading...
  </motion.div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  return (
    <motion.nav 
      className={`p-4 text-white sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-800/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.a 
          href="/" 
          className="text-2xl font-bold hover:text-primary-400 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          MyPortfolio
        </motion.a>
        <div className="space-x-6">
          <motion.a 
            href="#about" 
            className="hover:text-primary-400 transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            About
          </motion.a>
          <motion.a 
            href="#skills" 
            className="hover:text-primary-400 transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            Skills
          </motion.a>
          <motion.a 
            href="#projects" 
            className="hover:text-primary-400 transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            Projects
          </motion.a>
          <motion.a 
            href="#contact" 
            className="hover:text-primary-400 transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            Contact
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
    
    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark');
          setIsDarkMode(isDark);
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="hero" className="relative bg-gray-100 dark:bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center text-center p-6 overflow-hidden">
      <ParticleBackground isDarkMode={isDarkMode} />
      
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center z-10 p-4">
        <div className="order-2 md:order-1">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Vijay Krishnaa 
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Creative Web Developer & DSA Enthusiast
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a 
              href="#projects" 
              className="bg-white text-indigo-600 font-bold py-3 px-6 rounded-full hover:bg-gray-200 transition-colors text-lg shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px 2px rgba(79, 70, 229, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            
            <motion.a 
              href="#contact" 
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-full hover:bg-white hover:text-indigo-600 transition-colors text-lg shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div 
          className="order-1 md:order-2 w-full max-w-md mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <ThreeScene />
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, repeat: Infinity, repeatType: 'reverse' }}
      >
        <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-20 bg-white dark:bg-gray-800 px-4">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">About Me</h2>
      </AnimatedSection>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <AnimatedSection direction="left" delay={0.2}>
          <div className="relative">
            <div className="w-full h-80 md:h-96 bg-gray-300 dark:bg-gray-700 rounded-lg overflow-hidden">
              <img 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-indigo-500 rounded-lg -z-10"></div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection direction="right" delay={0.4}>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Creative Web Developer & DSA Enthusiast</h3>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Hello! I'm Vijay Krishnaa, a passionate and results-driven web developer with a knack for creating elegant and user-friendly digital experiences. I specialize in front-end technologies and love bringing ideas to life in the browser.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              With a strong foundation in modern web technologies and a keen eye for design, I strive to create immersive and responsive web applications that not only look great but also provide exceptional user experiences.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a 
                href="#contact" 
                className="inline-block bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              
              <motion.a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

const ProjectCard = ({ title, description, imageUrl, projectUrl, techStack }) => (
  <motion.div
    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
    whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
  >
    {imageUrl && (
      <div className="relative overflow-hidden h-56">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 text-white">
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
        </div>
      </div>
    )}
    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{description}</p>
      {techStack && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map(tech => (
              <span key={tech} className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded-full text-xs font-medium">{tech}</span>
            ))}
          </div>
        </div>
      )}
      {projectUrl && (
        <motion.a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Project
        </motion.a>
      )}
    </div>
  </motion.div>
);

const Projects = () => (
  <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <h2 className="text-4xl font-bold mb-16 text-center text-gray-800 dark:text-white">My Projects</h2>
      </AnimatedSection>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <AnimatedSection delay={0.2}>
          <ProjectCard 
            title="Project Alpha"
            description="A stunning e-commerce platform with a focus on user experience and modern design principles. Built with React and Node.js."
            imageUrl="https://via.placeholder.com/400x300/ADD8E6/000000?text=Project+Alpha"
            projectUrl="#project-alpha"
            techStack={['React', 'Node.js', 'Express', 'MongoDB', 'DSA']}
          />
        </AnimatedSection>
        
        <AnimatedSection delay={0.4}>
          <ProjectCard 
            title="Beta Dashboard"
            description="An analytical dashboard for visualizing complex data sets, providing actionable insights for business intelligence."
            imageUrl="https://via.placeholder.com/400x300/90EE90/000000?text=Beta+Dashboard"
            projectUrl="#project-beta"
            techStack={['Vue.js', 'D3.js', 'Firebase', 'SCSS']}
          />
        </AnimatedSection>
        
        <AnimatedSection delay={0.6}>
          <ProjectCard 
            title="Gamma Portfolio"
            description="A personal portfolio website template designed to showcase skills and projects in a clean and professional manner."
            imageUrl="https://via.placeholder.com/400x300/FFB6C1/000000?text=Gamma+Portfolio"
            projectUrl="#project-gamma"
            techStack={['HTML5', 'CSS3', 'JavaScript', 'GSAP']}
          />
        </AnimatedSection>
      </div>
      
      <AnimatedSection delay={0.8}>
        <div className="text-center mt-16">
          <motion.a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View More on GitHub
          </motion.a>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20 bg-gradient-to-br from-gray-700 to-gray-900 dark:from-gray-900 dark:to-black text-white">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
      </AnimatedSection>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <AnimatedSection direction="left" delay={0.2}>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Let's Talk</h3>
            <p className="text-lg">I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to reach out!</p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <a href="mailto:vijaykrishnaa.v.v@gmail.com" className="text-indigo-300 hover:text-indigo-200 transition-colors">vijaykrishnaa.v.v@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Location</h4>
                  <p>Salem, India</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Social Media</h4>
                  <div className="flex space-x-4 mt-2">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-300 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-300 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-300 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection direction="right" delay={0.4}>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Send Me a Message</h3>
            <ContactForm />
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-800 dark:bg-gray-900 text-white text-center p-10">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-bold mb-2">MyPortfolio</h3>
          <p className="text-gray-400">Creative Web Developer DSA Enthusiast</p>
        </div>
        
        <div className="flex space-x-6">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <span className="sr-only">GitHub</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <span className="sr-only">LinkedIn</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <span className="sr-only">Twitter</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
        </div>
      </div>
      
      <div className="border-t border-gray-700 pt-8">
        <p>&copy; {new Date().getFullYear()} Vijaykrishnaa. All rights reserved.</p>
        <p className="mt-2 text-gray-400">Designed with <span role="img" aria-label="heart">❤️</span> using React, Tailwind CSS & Framer Motion</p>
      </div>
    </div>
  </footer>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate 2 seconds of loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading ? (
        <LoadingScreen key="loading" />
      ) : (
        <motion.div
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }} // Delay fade-in after loading screen fades out
          className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
        >
          <ThemeToggle />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <ContactForm />
          </main>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
