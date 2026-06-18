
import React, { useState, useEffect } from 'react';
import Header from './componentes/Header';
import ThemeToggle from './componentes/ThemeToggle';
import ProfileCard from './componentes/ProfileCard'; 
import Footer from './componentes/Footer';
import teamData from './data/team.json'; 

const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);


  return (

  <div className={`min-h-screen transition-colors duration-300 bg-white dark:bg-black`}>
    <div className="container mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-12 max-w-7xl">
        
        <div className="flex justify-end mb-8">
          <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        </div>

        <Header/>

      <div className="min-h-screen bg-white dark:bg-black text-white p-4 md:p-12 pb-24">
            {/* Contenedor Grid Único: 2 columnas en móvil, 3 columnas desde pantallas medianas (md) */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          
              {teamData.map((miembro, index) => {
                // para celular movil
                const esCol2Movil = index % 2 === 1;

                // desde pantallas medianas a grandes
                const esCol2Desktop = index % 3 === 1;

                return (
                  <div
                    key={miembro.id || index}
                    className={`transition-transform duration-300 ease-in-out
                      ${esCol2Movil ? 'translate-y-[calc(100%/9)]' : 'translate-y-0'}
                      ${esCol2Desktop ? 'md:translate-y-[calc(100%/9)]' : 'md:translate-y-0'}
                    `}
                  >
                    <ProfileCard 
                      name={miembro.nombre} 
                      role={miembro.cargo} 
                      imageUrl={miembro.foto} 
                    />
                  </div>
                );
              })}

          </div> {/* fin del grid */}
      </div>
      <Footer/>        

    </div>
  </div>
  );
};

export default App;