import React from 'react';

const Header = () => {
  return (
    <header className="mb-12 md:mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300 text-gray-900 dark:text-white">
        The creative crew
      </h1>
      
      <div className="lg:col-start-2 lg:row-start-1 max-w-2xl">
        <h2 className="text-xl md:text-2xl font-semibold mb-3 transition-colors duration-300 text-gray-900 dark:text-white">
          Who we are
        </h2>
        <p className="text-base md:text-lg leading-relaxed transition-colors duration-300 text-gray-600 dark:text-gray-300">
          We are team of creatively diverse. driven. innovative individuals working in various locations from the world.
        </p>
      </div>
    </header>
  );
};

export default Header;
