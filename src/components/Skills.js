import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

// Skill component with animated progress bar
const SkillBar = ({ name, percentage, color }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-lg font-medium dark:text-white">{name}</h3>
        <span className="text-sm font-medium dark:text-gray-300">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <motion.div 
          className={`h-2.5 rounded-full ${color}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

// Skill card for technologies/tools
const SkillCard = ({ name, icon, description }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-center mb-4">
        <div className="mr-4 text-indigo-600 dark:text-indigo-400">
          {icon}
        </div>
        <h3 className="text-xl font-bold dark:text-white">{name}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

const Skills = () => {
  // Icons for skill cards
  const frontendIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );

  const backendIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  );

  const designIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-800 dark:text-white">My Skills</h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <AnimatedSection delay={0.2} direction="left">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Technical Skills</h3>
              <SkillBar name="JavaScript" percentage={90} color="bg-yellow-400" />
              <SkillBar name="React" percentage={85} color="bg-blue-500" />
              <SkillBar name="Node.js" percentage={75} color="bg-green-500" />
              <SkillBar name="HTML/CSS" percentage={95} color="bg-orange-500" />
              <SkillBar name="Tailwind CSS" percentage={80} color="bg-teal-500" />
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4} direction="right">
            <div className="grid grid-cols-1 gap-6">
              <SkillCard 
                name="Frontend Development" 
                icon={frontendIcon}
                description="Building responsive and interactive user interfaces with modern frameworks and libraries."
              />
              <SkillCard 
                name="Backend Development" 
                icon={backendIcon}
                description="Creating robust server-side applications and RESTful APIs."
              />
              <SkillCard 
                name="UI/UX Design" 
                icon={designIcon}
                description="Designing intuitive and visually appealing user experiences."
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Skills;