
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AppointmentForm from '@/components/AppointmentForm';

const Appointment = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-dental-light py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-dental-dark mb-4">Book Your Dental Appointment</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Schedule a consultation with our expert dental team. Fill out the form below and secure your appointment with a small consultation fee.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <AppointmentForm />
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-dental-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-dental-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dental-dark mb-2">Quick Appointments</h3>
              <p className="text-gray-600">
                Our efficient booking system ensures you can get an appointment quickly, often within 24-48 hours for urgent cases.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-dental-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-dental-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dental-dark mb-2">Secure Payment</h3>
              <p className="text-gray-600">
                Our integration with Razorpay ensures your payment information is always secure and protected.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-dental-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-dental-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dental-dark mb-2">Digital Records</h3>
              <p className="text-gray-600">
                We maintain digital records of all your treatments and visits, making it easy to track your dental health history.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-dental-light py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-dental-dark mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about appointments and consultations.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dental-dark mb-2">Why is there a consultation fee?</h3>
                <p className="text-gray-600">
                  The ₹299 consultation fee helps us ensure that appointments are attended and reduces no-shows. This fee is adjusted against your treatment cost if you proceed with any dental procedure.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dental-dark mb-2">What should I bring to my first appointment?</h3>
                <p className="text-gray-600">
                  Please bring any previous dental records, X-rays, or reports if available. Also, carry a list of medications you're currently taking and details of any medical conditions.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dental-dark mb-2">How long does a typical appointment last?</h3>
                <p className="text-gray-600">
                  A standard consultation lasts about 30-45 minutes, allowing sufficient time for examination and discussion of treatment options. Procedure durations vary based on complexity.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dental-dark mb-2">Can I reschedule my appointment?</h3>
                <p className="text-gray-600">
                  Yes, you can reschedule your appointment by calling our clinic at least 24 hours in advance. The consultation fee remains valid for rescheduled appointments within 30 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Appointment;
