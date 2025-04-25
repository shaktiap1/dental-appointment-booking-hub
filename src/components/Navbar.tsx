
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-dental-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">DD</span>
          </div>
          <div>
            <h1 className="text-dental-dark font-bold text-xl leading-tight">Dr. Dubey's</h1>
            <p className="text-xs text-dental-secondary leading-tight">Dental Implant & Facial Surgery</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              className="text-dental-dark hover:text-dental-primary transition-colors font-medium"
            >
              {item.name}
            </Link>
          ))}
          <Link to="/appointment">
            <Button className="bg-dental-accent hover:bg-dental-accent/90 text-white">
              Book Appointment
            </Button>
          </Link>
          <Link to="/doctor-login">
            <Button variant="outline" className="border-dental-primary text-dental-primary hover:bg-dental-primary/5">
              Doctor Login
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                {isMenuOpen ? <X /> : <Menu />}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link 
                    key={item.name}
                    to={item.path}
                    className="text-dental-dark hover:text-dental-primary transition-colors font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link 
                  to="/appointment" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button className="bg-dental-accent hover:bg-dental-accent/90 text-white w-full">
                    Book Appointment
                  </Button>
                </Link>
                <Link 
                  to="/doctor-login" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button variant="outline" className="border-dental-primary text-dental-primary hover:bg-dental-primary/5 w-full mt-2">
                    Doctor Login
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
