import React from 'react';

const SocialLink = ({ href, icon: Icon }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors duration-300">
      <Icon className="w-6 h-6" />
    </a>
  );
};

export default SocialLink;