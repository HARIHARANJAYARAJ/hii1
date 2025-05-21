import React from 'react';
import { Link } from 'react-router-dom';
import { Car, ChevronRight, Users, Fuel, Gauge } from 'lucide-react';
import { motion } from 'framer-motion';
import { getFeaturedCars } from '../../data/cars';

const FeaturedCars: React.FC = () => {
  const featuredCars = getFeaturedCars();
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Featured Cars for Your Next Adventure
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Discover our most popular rental cars chosen for comfort, reliability, and value for money.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {featuredCars.map((car) => (
            <motion.div
              key={car.id}
              variants={item}
              className="card group overflow-hidden"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={car.mainImage}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="inline-block bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {car.type}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{car.name}</h3>
                <div className="flex justify-between mb-4">
                  <span className="text-2xl font-bold text-primary-500">₹{car.price}</span>
                  <span className="text-gray-500 text-sm self-end">per day</span>
                </div>
                
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="flex flex-col items-center">
                    <Users className="w-5 h-5 text-gray-600 mb-1" />
                    <span className="text-sm text-gray-600">{car.seats} Seats</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Fuel className="w-5 h-5 text-gray-600 mb-1" />
                    <span className="text-sm text-gray-600">{car.fuel}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Gauge className="w-5 h-5 text-gray-600 mb-1" />
                    <span className="text-sm text-gray-600">{car.mileage} km/l</span>
                  </div>
                </div>
                
                <Link 
                  to={`/cars/${car.id}`}
                  className="btn btn-primary w-full flex items-center justify-center"
                >
                  View Details
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Link 
            to="/cars" 
            className="btn btn-outline inline-flex items-center"
          >
            View All Cars <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;