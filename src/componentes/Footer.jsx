import React from 'react';

function Footer () {
  return (
    <footer className={`mt-16 text-center transition-colors duration-300 text-gray-500 dark:text-gray-400`}>
      <p className="text-sm md:text-base">
        created by{' '}
        <span className="font-semibold">joregesosa</span>
        {' '}-{' '}
        <span className="font-semibold">devChallenges.io</span>
      </p>
    </footer>
  );
};

export default Footer;