import React from 'react';
import DashboardButton from './DashboardButton';

const DashboardValveControl = ({ valveId = 1, onActivate = () => {}, onDeactivate = () => {} }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 col-span-1 sm:col-span-2 lg:col-span-1">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Válvula Solenoide {valveId}</h3>
      <div className="grid grid-cols-2 gap-4">
        <DashboardButton 
          label="Activar" 
          onClick={() => onActivate(valveId)} 
          variant="success"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg>
          }
        />
        <DashboardButton 
          label="Desactivar" 
          onClick={() => onDeactivate(valveId)} 
          variant="danger"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-2.72 2.72a.75.75 0 101.06 1.06L12 13.06l2.72 2.72a.75.75 0 101.06-1.06L13.06 12l2.72-2.72a.75.75 0 00-1.06-1.06L12 10.94l-2.72-2.72z" clipRule="evenodd" />
            </svg>
          }
        />
      </div>
    </div>
  );
};

export default DashboardValveControl;