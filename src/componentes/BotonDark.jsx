import React from 'react';

const BotonDark = ({ isDarkMode, botonDark }) => {
  return (
    <button
      onClick={botonDark}
      className={`p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 
        focus:ring-offset-2 text-slate-700 dark:text-yellow-400 hover:bg-gray-100 dark:hover:bg-slate-800 focus:ring-slate-700 dark:focus:ring-yellow-400 `}
      
        
    >
      {isDarkMode ? (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-8 w-8" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <circle cx="12" cy="12" r="5" />
          <path 
            strokeLinecap="round" 
            d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" 
          />
        </svg>
      ) : (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-8 w-8" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
          />
        </svg>
      )}
    </button>
  );
};

export default BotonDark;