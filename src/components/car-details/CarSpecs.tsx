import React from 'react';
import { Car as CarType } from '../../types';
import { Users, Fuel, Gauge, Cog, ArrowRight } from 'lucide-react';

interface CarSpecsProps {
  car: CarType;
}

const CarSpecs: React.FC<CarSpecsProps> = ({ car }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-4">Car Specifications</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center mb-2">
            <Users className="w-5 h-5 text-primary-500 mr-2" />
            <span className="font-medium">Seats</span>
          </div>
          <p className="text-xl font-bold">{car.seats}</p>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center mb-2">
            <Cog className="w-5 h-5 text-primary-500 mr-2" />
            <span className="font-medium">Transmission</span>
          </div>
          <p className="text-xl font-bold">{car.transmission}</p>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center mb-2">
            <Fuel className="w-5 h-5 text-primary-500 mr-2" />
            <span className="font-medium">Fuel Type</span>
          </div>
          <p className="text-xl font-bold">{car.fuel}</p>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center mb-2">
            <Gauge className="w-5 h-5 text-primary-500 mr-2" />
            <span className="font-medium">Mileage</span>
          </div>
          <p className="text-xl font-bold">{car.mileage} km/l</p>
        </div>
      </div>
      
      <h4 className="text-lg font-semibold mb-3">Key Features</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
        {car.features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <ArrowRight className="w-4 h-4 text-primary-500 mr-2" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
      
      <h4 className="text-lg font-semibold mb-3">Description</h4>
      <p className="text-gray-700 mb-6">{car.description}</p>
      
      <div className="bg-primary-50 p-4 rounded-lg">
        <h4 className="font-semibold text-primary-800 mb-2">Why Choose This Car?</h4>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-2"></span>
            <span className="text-gray-700">Well-maintained and regularly serviced</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-2"></span>
            <span className="text-gray-700">Sanitized before every trip</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-2"></span>
            <span className="text-gray-700">24/7 roadside assistance included</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-2"></span>
            <span className="text-gray-700">Unlimited kilometers on selected plans</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CarSpecs;