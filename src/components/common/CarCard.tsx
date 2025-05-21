import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Fuel, Gauge, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Car } from '../../types';

interface CarCardProps {
  car: Car;
  index?: number;
}

const CarCard: React.FC<CarCardProps> = ({ car, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="card group overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
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
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold">{car.name}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-accent-500 fill-accent-500" />
            <span className="ml-1 text-sm font-medium">{car.rating}</span>
          </div>
        </div>
        
        <div className="flex justify-between mb-4">
          <span className="text-xl font-bold text-primary-500">₹{car.price}</span>
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
        
        <div className="grid grid-cols-2 gap-3">
          <Link 
            to={`/cars/${car.id}`}
            className="btn btn-outline"
          >
            Details
          </Link>
          <Link 
            to={`/booking/${car.id}`}
            className="btn btn-primary"
          >
            Book Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard;