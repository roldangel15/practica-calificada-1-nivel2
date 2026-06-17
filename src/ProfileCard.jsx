import React from 'react';

const ProfileCard = ({ name, role, imageUrl }) => {
  return (
    // Contenedor Principal con fondo negro
    <div className="w-full max-w-md mx-auto bg-white dark:bg-black overflow-hidden font-sans">
      
      {/* Sección Superior: Imagen + Texto Vertical */}
      <div className="flex">
        {/* Área de la Imagen (Ocupa el espacio restante) */}
        <div className="flex-grow">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-auto object-cover block"
          />
        </div>
        
        {/* Barra Lateral Derecha (Fondo Negro) */}
        <div className="bg-white dark:bg-black flex items-start pt-3 px-2">
          <span 
            className="text-black dark:text-white text-[10px] font-bold uppercase tracking-[0.2em] whitespace-nowrap"
            style={{ 
              writingMode: 'vertical-rl' 
            }}
          >
            {role}
          </span>
        </div>
      </div>

      {/* Sección Inferior: Nombre alineado perfectamente a la izquierda */}
      <div className="bg-white dark:bg-black pl-0 pr-4 py-1">
        <h2 className="text-left text-black dark:text-white text-[15px] font-bold tracking-wide">
          {name}
        </h2>
      </div>
    </div>
  );
};

export default ProfileCard;