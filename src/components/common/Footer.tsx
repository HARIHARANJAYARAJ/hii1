import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Car className="w-8 h-8 text-primary-500" />
              <span className="ml-2 text-2xl font-bold">
                Car<span className="text-primary-500">Seva</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              India's premier car rental service offering a wide range of vehicles for your every need, from economy to luxury.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cars" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Cars
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Locations */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Popular Locations</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Delhi NCR</li>
              <li className="text-gray-400">Mumbai</li>
              <li className="text-gray-400">Bangalore</li>
              <li className="text-gray-400">Chennai</li>
              <li className="text-gray-400">Hyderabad</li>
              <li className="text-gray-400">Kolkata</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-500 mt-1 mr-3" />
                <p className="text-gray-400">
                  123 MG Road, Bangalore<br />Karnataka, India - 560001
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary-500 mr-3" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-primary-500 transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary-500 mr-3" />
                <a href="mailto:info@carseva.in" className="text-gray-400 hover:text-primary-500 transition-colors">
                  info@carseva.in
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} CarSeva. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;