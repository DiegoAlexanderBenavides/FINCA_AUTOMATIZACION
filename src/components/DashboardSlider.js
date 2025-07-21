import React from 'react';

const DashboardSlider = ({ label = 'Control', value = 0, onChange = () => {}, min = 0, max = 100 }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 col-span-1 sm:col-span-2 lg:col-span-1">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{label}</h3>
      <div className="flex items-center space-x-4">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={onChange}
          className="w-full h-3 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600 transition-colors duration-200"
        />
        <span className="text-2xl font-bold text-blue-700 w-16 text-right">{value}</span>
      </div>
    </div>
  );
};

export default DashboardSlider;