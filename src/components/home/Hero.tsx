import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, MapPin, Calendar, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Car on road"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>

      <div className="container-custom relative z-10 flex flex-col items-center text-center pt-20 md:pt-0">
        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            Explore India On Your Term
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Book  hii from our wide selection of premium Indian cars and experience the freedom of the open road. Best prices, zero hidden charges.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/cars" className="btn btn-primary px-8 py-3 text-lg">
              Browse Cars
            </Link>
            <a href="#how-it-works" className="btn btn-outline text-white border-white hover:bg-white/10 px-8 py-3 text-lg">
              How It Works
            </a>
          </div>
        </motion.div>

        {/* Quick Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-4">
            <div className="p-4 md:border-r border-gray-200">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-500" />
                <span className="text-gray-700 font-medium">Pickup Location</span>
              </div>
              <select className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500">
                <option value="">Select a city</option>
                <option value="delhi">Delhi</option>
                <option value="mumbai">Mumbai</option>
                <option value="bangalore">Bangalore</option>
                <option value="chennai">Chennai</option>
                <option value="hyderabad">Hyderabad</option>
              </select>
            </div>
            
            <div className="p-4 md:border-r border-gray-200">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-primary-500" />
                <span className="text-gray-700 font-medium">Pickup Date</span>
              </div>
              <input 
                type="date" 
                className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            
            <div className="p-4 md:border-r border-gray-200">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-primary-500" />
                <span className="text-gray-700 font-medium">Return Date</span>
              </div>
              <input 
                type="date" 
                className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            
            <div className="p-4 flex items-center justify-center">
              <Link 
                to="/cars" 
                className="w-full py-3 text-center bg-primary-500 text-white rounded-md font-semibold hover:bg-primary-600 transition-colors flex items-center justify-center"
              >
                <Search className="w-5 h-5 mr-2" />
                <span>Search Cars</span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-white"
        >
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold mb-2">15+</p>
            <p className="text-gray-300">Cities in India</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold mb-2">100+</p>
            <p className="text-gray-300">Premium Cars</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold mb-2">5000+</p>
            <p className="text-gray-300">Happy Customers</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold mb-2">24/7</p>
            <p className="text-gray-300">Customer Support</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
