import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCarById } from '../data/cars';
import { Car as CarType } from '../types';
import { motion } from 'framer-motion';
import { ChevronRight, AlertCircle } from 'lucide-react';
import CarGallery from '../components/car-details/CarGallery';
import CarSpecs from '../components/car-details/CarSpecs';
import CarRentalTerms from '../components/car-details/CarRentalTerms';
import Car3DModel from '../components/3d/Car3DModel';

const CarDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = useState<CarType | null>(null);
  const [loading, setLoading] = useState(true);
  const [showModel, setShowModel] = useState(false);
  
  useEffect(() => {
    if (id) {
      // Simulate loading time
      setTimeout(() => {
        const foundCar = getCarById(id);
        setCar(foundCar || null);
        setLoading(false);
      }, 500);
    }
  }, [id]);
  
  if (loading) {
    return (
      <div className="pt-24 pb-16 flex justify-center items-center min-h-[50vh]">
        <div className="animate-pulse text-center">
          <div className="h-8 w-64 bg-gray-300 rounded-md mb-4 mx-auto"></div>
          <div className="h-4 w-48 bg-gray-200 rounded-md mx-auto"></div>
        </div>
      </div>
    );
  }
  
  if (!car) {
    return (
      <div className="pt-24 pb-16">
        <div className="container-custom text-center py-16">
          <AlertCircle className="w-16 h-16 text-error-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Car Not Found</h1>
          <p className="text-gray-600 mb-8">
            The car you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/cars" className="btn btn-primary">
            Browse All Cars
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="mb-4">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <Link to="/" className="hover:text-primary-500">Home</Link>
            <ChevronRight className="w-4 h-4 mx-1" />
            <Link to="/cars" className="hover:text-primary-500">Cars</Link>
            <ChevronRight className="w-4 h-4 mx-1" />
            <span>{car.name}</span>
          </div>
          
          <h1 className="text-3xl font-bold mb-1">{car.name}</h1>
          <p className="text-gray-600 mb-6">{car.brand} {car.model} • {car.type}</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6">
                <CarGallery images={car.images} name={car.name} />
              </div>
              
              <button
                className="w-full py-3 text-center bg-secondary-500 text-white rounded-md font-semibold mb-8 hover:bg-secondary-600 transition-colors"
                onClick={() => setShowModel(!showModel)}
              >
                {showModel ? 'Hide 3D Model' : 'View 3D Model'}
              </button>
              
              {showModel && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-8 bg-gray-900 rounded-lg p-4"
                >
                  <h3 className="text-white text-lg font-semibold mb-2">3D Preview</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Click and drag to rotate the model. Use scroll to zoom in/out.
                  </p>
                  <Car3DModel carType={car.type} />
                </motion.div>
              )}
              
              <CarSpecs car={car} />
            </motion.div>
          </div>
          
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex justify-between items-baseline mb-4">
                  <div>
                    <span className="text-3xl font-bold text-primary-500">₹{car.price}</span>
                    <span className="text-gray-500 text-sm">/day</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                      {car.availability ? 'Available' : 'Unavailable'}
                    </span>
                  </div>
                </div>
                
                <Link
                  to={`/booking/${car.id}`}
                  className="btn btn-primary w-full mb-4"
                >
                  Book Now
                </Link>
                
                <div className="text-center text-sm text-gray-500">
                  No hidden charges, taxes included
                </div>
              </div>
              
              <CarRentalTerms />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;