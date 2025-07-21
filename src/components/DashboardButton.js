import React from 'react';

const DashboardButton = ({ label = 'Botón', onClick = () => {}, variant = 'primary', icon = null }) => {
  const baseClasses = "w-full py-4 rounded-2xl text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl active:scale-98 focus:outline-none focus:ring-4 focus:ring-opacity-75 flex items-center justify-center space-x-2";
  
  const variantClasses = {
    primary: "bg-gradient-to-br from-gray-800 to-black text-white focus:ring-black",
    danger: "bg-gradient-to-br from-red-600 to-red-800 text-white focus:ring-red-500",
    secondary: "bg-gradient-to-br from-blue-600 to-blue-800 text-white focus:ring-blue-500",
    success: "bg-gradient-to-br from-green-600 to-green-800 text-white focus:ring-green-500",
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseClasses} ${variantClasses[variant] || variantClasses.primary}`}
    >
      {icon && <span className="text-2xl">{icon}</span>}
      <span>{label}</span>
    </button>
  );
};

export default DashboardButton;