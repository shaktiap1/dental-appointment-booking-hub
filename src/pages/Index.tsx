
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Dental Implants",
    description: "Replace missing teeth with permanent, natural-looking solutions",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-dental-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0v8" />
      </svg>
    ),
  },
  {
    title: "Cosmetic Dentistry",
    description: "Enhance your smile with veneers, whitening, and aesthetic treatments",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-dental-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    title: "Oral Surgery",
    description: "Expert surgical procedures including wisdom teeth removal",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-dental-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
  },
  {
    title: "Root Canal Treatment",
    description: "Relieve tooth pain and save infected teeth with expert care",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-dental-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: "Aishwarya Rao",
    role: "Teacher",
    quote: "Dr. Dubey's clinic changed my life! After years of dental anxiety, I found their approach to be gentle and reassuring. My implants look and feel completely natural.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Mahesh Kumar",
    role: "Software Engineer",
    quote: "The team at Dr. Dubey's clinic is exceptional. From the reception to the dental chair, everyone is professional and caring. My wisdom teeth extraction was painless!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Priya Sharma",
    role: "Marketing Executive",
    quote: "I had severe tooth pain and got an emergency appointment the same day. Dr. Dubey was thorough in explaining my root canal procedure. Highly recommended for dental emergencies!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "12,000+", label: "Satisfied Patients" },
  { value: "4,500+", label: "Successful Implants" },
  { value: "99%", label: "Success Rate" },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dental-dark mb-2">Our Specialized Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We provide comprehensive dental care with cutting-edge technology and a patient-centered approach.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 p-3 bg-dental-light rounded-full">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-dental-dark">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link to="/services">
                <Button variant="outline" className="border-dental-primary text-dental-primary hover:bg-dental-primary/5">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-16 bg-dental-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-dental-dark mb-6">Why Choose Dr. Dubey's Dental Clinic?</h2>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-dental-primary flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-dental-dark mb-1">Expert Specialists</h3>
                      <p className="text-gray-600">Our team includes specialists in implantology, orthodontics, and maxillofacial surgery with international training.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-dental-primary flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-dental-dark mb-1">Cutting-Edge Technology</h3>
                      <p className="text-gray-600">We employ the latest dental technology including 3D scanning, digital X-rays, and AI-assisted diagnostics.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-dental-primary flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-dental-dark mb-1">Personalized Care</h3>
                      <p className="text-gray-600">We create customized treatment plans tailored to each patient's unique dental needs and preferences.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-dental-primary flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-dental-dark mb-1">Comfortable Environment</h3>
                      <p className="text-gray-600">Our modern clinic is designed for your comfort with amenities to make your dental visit pleasant and stress-free.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link to="/appointment">
                    <Button className="bg-dental-accent hover:bg-dental-accent/90 text-white">
                      Book Your Consultation Today
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=868&auto=format&fit=crop" 
                    alt="Modern Dental Clinic" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg hidden md:flex">
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-dental-primary">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dental-dark mb-2">What Our Patients Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it. Hear from our satisfied patients about their experience at our clinic.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      </div>
                      <p className="italic text-gray-600 mb-4">"{testimonial.quote}"</p>
                      <Separator className="mb-4" />
                      <h3 className="font-semibold text-dental-dark">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-dental-dark text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Smile?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Schedule your consultation today and take the first step towards optimal dental health.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/appointment">
                <Button size="lg" className="bg-dental-accent hover:bg-dental-accent/90 text-white">
                  Book Appointment
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
