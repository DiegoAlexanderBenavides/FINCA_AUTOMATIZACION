import React from 'react';
import DashboardDataCard from './DashboardDataCard';

const DashboardPanel = ({ data = {} }) => {
  return (
    <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-md border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Datos en Tiempo Real</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <DashboardDataCard 
          title="Temperatura" 
          value={data.temperature} 
          unit="°C" 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
              <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 11.823 2.626.75.75 0 00.414.414c.667.22 1.384.356 2.132.356 1.41 0 2.75-.314 3.983-.89a.75.75 0 00.414-.416 3.75 3.75 0 11.823-2.626.75.75 0 00.442-.974 5.25 5.25 0 00-10.094 0 .75.75 0 00.442.974zM18.75 9a.75.75 0 00-.75.75v.75a.75.75 0 001.5 0V9.75A.75.75 0 0018.75 9zM12 18a.75.75 0 00-.75.75v.75a.75.75 0 001.5 0V18.75A.75.75 0 0012 18zM5.25 9a.75.75 0 00-.75.75v.75a.75.75 0 001.5 0V9.75A.75.75 0 005.25 9zM12 5.25a.75.75 0 00-.75.75v.75a.75.75 0 001.5 0V6A.75.75 0 0012 5.25z" clipRule="evenodd" />
              <path d="M12 15a.75.75 0 01.75.75V17.25a.75.75 0 01-1.5 0v-1.5A.75.75 0 0112 15z" />
            </svg>
          } 
        />
        <DashboardDataCard 
          title="Humedad" 
          value={data.humidity} 
          unit="%" 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0V6zM12 16.5a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75z" clipRule="evenodd" />
            </svg>
          } 
        />
        <DashboardDataCard 
          title="Sensor de Flujo" 
          value={data.flowSensorStatus ? 'Activo' : 'Inactivo'} 
          unit="" 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
              <path d="M12 2.25a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5H8.25A.75.75 0 017.5 12zM18.75 12a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM12 18a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75zM12 6a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0V6.75A.75.75 0 0112 6zM12 15a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75zM12 9a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0112 9zM15.75 2.25a.75.75 0 00-.75.75v.75a.75.75 0 001.5 0V3a.75.75 0 00-.75-.75zM15.75 18a.75.75 0 00-.75.75v.75a.75.75 0 001.5 0v-.75a.75.75 0 00-.75-.75zM8.25 2.25a.75.75 0 00-.75.75v.75a.75.75 0 001.5 0V3a.75.75 0 00-.75-.75zM8.25 18a.75.75 0 00-.75.75v.75a.75.75 0 001.5 0v-.75a.75.75 0 00-.75-.75zM18.75 5.25a.75.75 0 00-.75.75v.75a.75.75 0 001.5 0V6a.75.75 0 00-.75-.75zM18.75 15a.75.75 0 00-.75.75v.75a.75.75 0 001.5 0v-.75a.75.75 0 00-.75-.75zM5.25 5.25a.75.75 0 00-.75.75v.75a.75.75 0 001.5 0V6a.75.75 0 00-.75-.75zM5.25 15a.75.75 0 00-.75.75v.75a.75.75 0 001.5 0v-.75a.75.75 0 00-.75-.75z" />
            </svg>
          } 
        />
        <DashboardDataCard 
          title="Nivel de Agua" 
          value={data.waterLevel} 
          unit="%" 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
              <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0V6zM12 16.5a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75z" />
            </svg>
          } 
        />
      </div>
    </div>
  );
};

export default DashboardPanel;