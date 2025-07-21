import React from 'react';

const DashboardDataCard = ({ title = 'Dato', value = 'N/A', unit = '', icon = null }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex items-center space-x-4">
      <div className="text-4xl text-blue-500">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-500">{title}</h3>
        <p className="text-3xl font-bold text-gray-900">
          {value}
          {unit && <span className="text-xl font-semibold text-gray-600 ml-1">{unit}</span>}
        </p>
      </div>
    </div>
  );
};

export default DashboardDataCard;