
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-dental-light">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-dental-dark mb-4 leading-tight">
              Your Smile Deserves <span className="text-dental-primary">Expert Care</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Welcome to Dr. Dubey's Dental Implant & Facial Surgery Centre, where we combine advanced technology with compassionate care for your perfect smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/appointment">
                <Button size="lg" className="bg-dental-accent hover:bg-dental-accent/90 text-white">
                  Book Appointment
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-dental-primary text-dental-primary hover:bg-dental-primary/5">
                  Our Services
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex items-center">
                <div className="bg-dental-primary rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-dental-dark">Expert Dentists</h3>
                  <p className="text-gray-600 text-sm">Highly qualified team</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-dental-primary rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-dental-dark">Modern Equipment</h3>
                  <p className="text-gray-600 text-sm">Advanced technology</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-md">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=870&auto=format&fit=crop" 
                  alt="Dental Care" 
                  className="w-full h-96 object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <div className="bg-dental-accent/10 rounded-full p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-dental-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dental-dark">99% Satisfied Patients</h3>
                    <p className="text-gray-600 text-sm">From over 1000+ reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};

export default HeroSection;
