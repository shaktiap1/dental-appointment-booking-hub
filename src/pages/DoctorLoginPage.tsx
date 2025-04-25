
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DoctorLogin from '@/components/DoctorLogin';

const DoctorLoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-dental-light py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-dental-dark">Doctor Portal</h1>
              <p className="text-gray-600">Secure access for clinic staff only</p>
            </div>
            
            <DoctorLogin />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DoctorLoginPage;
