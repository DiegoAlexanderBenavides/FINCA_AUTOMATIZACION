import React from 'react';

const DashboardLayout = ({ children = null }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 w-full max-w-6xl border border-gray-200">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-8 text-center leading-tight">
          Control IoT Inteligente
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;