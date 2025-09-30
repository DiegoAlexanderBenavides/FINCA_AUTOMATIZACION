import React from "react";

const DashboardSliderPuerta = ({ label, value, onChange }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-xl flex flex-col items-center">
      <label className="text-gray-700 font-semibold mb-2">{label}</label>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={onChange}
        className="w-full accent-blue-500"
      />
      <span className="mt-2 text-gray-600">
        {value}% → {Math.round(value * 1.8)}°
      </span>
    </div>
  );
};

export default DashboardSliderPuerta;
