
import React from 'react';
import DoctorDashboard from '@/components/DoctorDashboard';

const DoctorDashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-dental-dark text-white">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-dental-dark font-bold text-xl">DD</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-xl">Doctor Portal</h1>
            </div>
          </div>
          
          <nav className="flex items-center space-x-6">
            <a href="#" className="text-white hover:text-dental-primary transition-colors">Dashboard</a>
            <a href="#" className="text-white hover:text-dental-primary transition-colors">Patients</a>
            <a href="#" className="text-white hover:text-dental-primary transition-colors">Calendar</a>
            <a href="#" className="text-white hover:text-dental-primary transition-colors">Reports</a>
            <div className="flex items-center space-x-1">
              <div className="w-8 h-8 bg-dental-primary rounded-full flex items-center justify-center">
                <span className="text-white font-medium text-sm">DR</span>
              </div>
              <a href="/" className="text-sm text-white hover:text-dental-primary transition-colors">Logout</a>
            </div>
          </nav>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <h1 className="text-2xl font-bold text-dental-dark">Welcome, Dr. Dubey</h1>
              <p className="text-gray-600">Today's Appointments: April 28, 2025</p>
            </div>
            
            <div className="flex space-x-3 mt-4 sm:mt-0">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                Online
              </span>
              <span className="text-sm text-gray-500">Last updated: Just now</span>
            </div>
          </div>
        </div>
        
        <DoctorDashboard />
      </main>
    </div>
  );
};

export default DoctorDashboardPage;
